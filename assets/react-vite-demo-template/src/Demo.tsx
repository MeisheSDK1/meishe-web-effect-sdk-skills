import { useEffect, useRef, useState } from 'react'
import { WASMLoader } from 'meishewasmloader'
import './Demo.css'

const SDK_BASE_URL = 'https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/'

const MODEL_URLS = {
  faceModelUrl: 'https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model',
  eyecontourModelUrl: 'https://alieasset.meishesdk.com/model/eyecontour/ms_eyecontour_v2_0_0_next.model',
  makeupDataUrl: 'https://alieasset.meishesdk.com/model/makeup2_240_v2.1.2.dat',
  faceCommonDataUrl: 'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',
  advancedBeautyDataUrl: 'https://alieasset.meishesdk.com/model/advancedbeauty_v1.0.0.dat'
}

const BEAUTY_CONTROLS = [
  { id: 'smooth', label: 'Smooth skin', key: 'Advanced Beauty Intensity', min: 0, max: 1, defaultValue: 0.65 },
  { id: 'whitening', label: 'Whitening', key: 'Beauty Whitening', min: 0, max: 1, defaultValue: 0.45 },
  { id: 'rosy', label: 'Rosy', key: 'Beauty Reddening', min: 0, max: 1, defaultValue: 0.25 },
  { id: 'slimFace', label: 'Slim face', key: 'Face Mesh Face Size Degree', min: 0, max: 1, defaultValue: 0.35 },
  { id: 'narrowFace', label: 'Narrow face', key: 'Face Mesh Face Width Degree', min: 0, max: 1, defaultValue: 0.25 },
  { id: 'smallFace', label: 'Small face', key: 'Face Mesh Face Length Degree', min: 0, max: 1, defaultValue: 0.2 },
  { id: 'bigEyes', label: 'Big eyes', key: 'Face Mesh Eye Size Degree', min: 0, max: 1, defaultValue: 0.4 },
  { id: 'eyeCorner', label: 'Eye corner', key: 'Face Mesh Eye Corner Stretch Degree', min: 0, max: 1, defaultValue: 0 },
  { id: 'forehead', label: 'Forehead', key: 'Face Mesh Forehead Height Degree', min: 0, max: 1, defaultValue: 0 },
  { id: 'chin', label: 'Chin length', key: 'Face Mesh Chin Length Degree', min: 0, max: 1, defaultValue: 0 },
  { id: 'noseBridge', label: 'Nose bridge width', key: 'Face Mesh Nose Bridge Width Degree', min: -1, max: 1, defaultValue: 0 },
  { id: 'mouth', label: 'Mouth size', key: 'Face Mesh Mouth Size Degree', min: 0, max: 1, defaultValue: 0 },
  { id: 'mouthCorner', label: 'Mouth corner lift', key: 'Face Mesh Mouth Corner Lift Degree', min: -1, max: 1, defaultValue: 0 }
] as const

type BeautyControl = (typeof BEAUTY_CONTROLS)[number]
type BeautyControlId = BeautyControl['id']
type BeautySettings = Record<BeautyControlId, number>

const DEFAULT_BEAUTY_SETTINGS = BEAUTY_CONTROLS.reduce((settings, control) => {
  settings[control.id] = control.defaultValue
  return settings
}, {} as BeautySettings)

function createBeautyEffectList(settings: BeautySettings) {
  return BEAUTY_CONTROLS.map((control) => ({
    key: control.key,
    intensity: settings[control.id]
  }))
}

function isEffectSdkReady() {
  return (
    typeof Module !== 'undefined' &&
    Module.Meishe !== undefined &&
    Module.Meishe.effectContext !== undefined
  )
}

export default function Demo() {
  const [loading, setLoading] = useState(true)
  const [sdkReady, setSdkReady] = useState(false)
  const [cameraStarted, setCameraStarted] = useState(false)
  const [beautyEnabled, setBeautyEnabled] = useState(true)
  const [beautySettings, setBeautySettings] = useState<BeautySettings>(DEFAULT_BEAUTY_SETTINGS)
  const [status, setStatus] = useState('Loading EffectSDK...')

  const videoRef = useRef<HTMLVideoElement>(null)
  const rendererRef = useRef<NveARSceneRenderer | null>(null)
  const outputStreamRef = useRef<MediaStream | null>(null)

  useEffect(() => {
    void initEffectSdk()

    return () => {
      stopOutputStream(false)
      rendererRef.current?.release()
      rendererRef.current = null
    }
  }, [])

  useEffect(() => {
    void applyBeautySettings(beautySettings, beautyEnabled)
  }, [beautySettings, beautyEnabled])

  function loadWasm() {
    return new Promise<void>((resolve, reject) => {
      if (isEffectSdkReady()) {
        resolve()
        return
      }

      const loader = WASMLoader({
        showLoader: () => {
          setStatus('Loading WASM runtime...')
        },
        showError: (errorText: string) => {
          reject(new Error(errorText || 'Failed to load EffectSDK WASM runtime.'))
        },
        loadingFinished: () => {
          const poll = () => {
            if (isEffectSdkReady()) {
              resolve()
            } else {
              setTimeout(poll, 400)
            }
          }
          poll()
        }
      })

      loader.loadEmscriptenModule(SDK_BASE_URL, { effectSdk: true })
    })
  }

  async function initEffectSdk() {
    try {
      setLoading(true)
      setStatus('Loading EffectSDK...')
      await loadWasm()

      const renderer = new NveARSceneRenderer()
      rendererRef.current = renderer

      setStatus('Initializing face models...')
      await renderer.init({
        ...MODEL_URLS,
        beautyIntensity: 1,
        detectionMode: 32768 | 32,
        mirror: true,
        ratio: new NveRational(16, 9)
      })

      await applyBeautySettings(beautySettings, beautyEnabled)
      setSdkReady(true)
      setStatus('Ready. Start camera to preview beauty effects.')
    } catch (error) {
      console.error(error)
      setStatus(error instanceof Error ? error.message : 'Failed to initialize EffectSDK.')
    } finally {
      setLoading(false)
    }
  }

  async function startCamera() {
    const renderer = rendererRef.current
    const video = videoRef.current
    if (!renderer || !video) return

    setStatus('Requesting camera permission...')
    stopOutputStream()

    await renderer.startupCamera({
      audio: false,
      video: {
        width: 1280,
        height: 720,
        frameRate: { ideal: 30, max: 60 }
      }
    })

    const outputStream = renderer.getOutputStream()
    outputStreamRef.current = outputStream
    video.srcObject = outputStream
    video.muted = true
    video.playsInline = true
    await video.play()

    setCameraStarted(true)
    setStatus('Camera is running. Adjust sliders to update effects in real time.')
    await applyBeautySettings(beautySettings, beautyEnabled)
  }

  function stopOutputStream(updateState = true) {
    outputStreamRef.current?.getTracks().forEach((track) => track.stop())
    outputStreamRef.current = null

    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.srcObject = null
    }

    if (updateState) {
      setCameraStarted(false)
    }
  }

  async function applyBeautySettings(settings: BeautySettings, enabled: boolean) {
    const renderer = rendererRef.current
    if (!renderer) return

    renderer.enableBeauty(enabled)

    if (!enabled) {
      await renderer.setEffectList([])
      return
    }

    await renderer.setEffectList(createBeautyEffectList(settings))
  }

  function updateBeautyValue(id: BeautyControlId, value: number) {
    setBeautySettings((current) => ({
      ...current,
      [id]: value
    }))
  }

  function resetBeauty() {
    setBeautySettings(DEFAULT_BEAUTY_SETTINGS)
    setBeautyEnabled(true)
  }

  return (
    <main className="effectSDK_container">
      <section className="previewPanel">
        <div className="videoShell">
          <video id="video" ref={videoRef} />
          {!cameraStarted && <div className="emptyPreview">Camera preview</div>}
        </div>

        <div className="actionBar">
          <button className="primaryButton" type="button" disabled={!sdkReady} onClick={startCamera}>
            {cameraStarted ? 'Restart camera' : 'Start camera'}
          </button>
          <button type="button" disabled={!cameraStarted} onClick={() => stopOutputStream()}>
            Stop camera
          </button>
          <button type="button" onClick={resetBeauty}>
            Reset beauty
          </button>
        </div>

        <p className="statusText">{status}</p>
        <p className="hintText">
          Localhost preview can skip SDK license verification. The output may include a watermark.
        </p>
      </section>

      <aside className="controlPanel">
        <div className="panelHeader">
          <div>
            <h1>Camera beauty demo</h1>
            <p>Real-time skin beauty and face shaping controls.</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={beautyEnabled}
              onChange={(event) => setBeautyEnabled(event.target.checked)}
            />
            <span>Beauty</span>
          </label>
        </div>

        <div className="controlList" aria-disabled={!beautyEnabled}>
          {BEAUTY_CONTROLS.map((control) => (
            <label className="sliderRow" key={control.id}>
              <span className="sliderLabel">{control.label}</span>
              <input
                type="range"
                min={control.min}
                max={control.max}
                step="0.01"
                value={beautySettings[control.id]}
                disabled={!beautyEnabled}
                onChange={(event) => updateBeautyValue(control.id, Number(event.target.value))}
              />
              <span className="sliderValue">{Math.round(beautySettings[control.id] * 100)}</span>
            </label>
          ))}
        </div>
      </aside>

      {loading && (
        <div className="wrap">
          <div className="loading-container" aria-label="Loading">
            <div className="loading-first" />
            <div className="loading-ball" />
            <div className="loading-ball" />
            <div className="loading-ball" />
            <div className="loading-ball" />
            <div className="loading-ball" />
            <div className="loading-ball" />
            <div className="loading-ball" />
          </div>
        </div>
      )}
    </main>
  )
}
