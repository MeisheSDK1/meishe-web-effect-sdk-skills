\page SegmentationBackground.md Segmentation & Background

* 1 [Import SDK] (\ref SegmentationBackground_Step_1)
* 2 [Verify License] (\ref SegmentationBackground_Step_2)
* 3 [Init ARScene Renderer] (\ref SegmentationBackground_Step_3)
* 4 [Startup Camera] (\ref SegmentationBackground_Step_4)
* 5 [Set Segmentation & Background] (\ref SegmentationBackground_Step_5)
* 6 [Get Output Stream] (\ref SegmentationBackground_Step_6)

\subsection SegmentationBackground_Step_1 1 Import SDK
Import NvEffectSdk.js

	<script src="https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/NvEffectSdk.js"></script>

Install meishewasmloader [Reference](https://www.npmjs.com/package/meishewasmloader)

	npm i meishewasmloader --save

Use WASMLoader to load wasm files
	
	import { WASMLoader }  from 'meishewasmloader';
	function loader(){
		return new Promise(async (resolve,reject)=>{        
			const wasmLoader = WASMLoader({	
				showLoader: function (state) {},
				showError(errorText: string) {
					reject()
				},
				loadingFinished() {
					function poll(){
						if(Module !== undefined && Module.Meishe !== undefined && Module.Meishe.effectContext !== undefined){
							resolve()
						}else{
							setTimeout(()=>{
								poll()
							},500)
						}
					}
					poll()
				},
			});
			wasmLoader.loadEmscriptenModule("https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/", { effectSdk:true });
		})
	}

\note https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/ is the test address provided by Meishe. You need to contact business people to get SDK related files, and replace this address with your address when deploying product;
<br>For improving loading speed, we recommend that compress wasm-related files by brotli or gzip configuration of cdn or nginx;
<br>The addresses in steps 1 and 2 need to be consistent, otherwise unpredictable results will occur;
		  
\subsection SegmentationBackground_Step_2 2 Verify License
Meishe web EffectSDK support non-license mode on localhost, so you can preview all effects on localhost quickly.
Otherwise, you need to contact business people to get license files, then verify license as following:
Use [verifySdkLicenseFileUrl()](\ref NveEffectContext.verifySdkLicenseFileUrl()) to verify sdk license in loadingFinished callback of WASMLoader:

	if(nveGetEffectContextInstance().verifySdkLicenseFileUrl('/static/effectsdk.lic')) {
		// Success
	} else {
		// Fail
	}

All SDK effects cannot be used if authentication failed.

\subsection SegmentationBackground_Step_3 3 Init ARScene Renderer

    const arSceneRenderer = new NveARSceneRenderer();
    await arSceneRenderer.init({
        faceModelUrl:"https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model",
    	faceCommonDataUrl:'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',
    	segmentationModelUrl:"https://alieasset.meishesdk.com/model/humanseg/ms_humansegment_medium_v2_0_0_next.model",
    });

\note Beauty effect added by default after initialization.

\subsection SegmentationBackground_Step_4 4 Startup Camera

    await arSceneRenderer.startupCamera({
    	audio: false,
    	video: {width: 1280, height: 720, frameRate: {ideal: 30, max: 60}}
    });

\subsection SegmentationBackground_Step_5 5 Set Segmentation & Background

	//Image background
	await arSceneRenderer.setEffectList([
	    {
	        segmentationBackgroundUrl:"https://alieasset.meishesdk.com/material/bgimage/323d8f09-fbdb-4f28-a3ca-19615d3e6d5f.jpg",
	    },
	]);
	
	//Blur background
	await arSceneRenderer.setEffectList([
	    {
	        url:"https://qasset.meishesdk.com/material/pu/videofx/F31CBEBD-9F86-4AC6-87AB-1A289A62E3AE/F31CBEBD-9F86-4AC6-87AB-1A289A62E3AE.1.videofx",
	        licUrl: "",
	    },
	]);

\subsection SegmentationBackground_Step_6 6 Get Output Stream

    const outputStream = arSceneRenderer.getOutputStream();
