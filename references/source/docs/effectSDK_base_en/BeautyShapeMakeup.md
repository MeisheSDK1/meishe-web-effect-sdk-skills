\page BeautyShapeMakeup.md Beauty & Shape & Makeup

* 1 [Import SDK] (\ref BeautyShapeMakeup_Step_1)
* 2 [Verify License] (\ref BeautyShapeMakeup_Step_2)
* 3 [Init ARScene Renderer] (\ref BeautyShapeMakeup_Step_3)
* 4 [Startup Camera] (\ref BeautyShapeMakeup_Step_4)
* 5 [Set Beauty & Shape & Makeup] (\ref BeautyShapeMakeup_Step_5)
* 6 [Get Output Stream] (\ref BeautyShapeMakeup_Step_6)

\subsection BeautyShapeMakeup_Step_1 1 Import SDK
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
		  
\subsection BeautyShapeMakeup_Step_2 2 Verify License
Meishe web EffectSDK support non-license mode on localhost, so you can preview all effects on localhost quickly.
Otherwise, you need to contact business people to get license files, then verify license as following:
Use [verifySdkLicenseFileUrl()](\ref NveEffectContext.verifySdkLicenseFileUrl()) to verify sdk license in loadingFinished callback of WASMLoader:

	if(nveGetEffectContextInstance().verifySdkLicenseFileUrl('/static/effectsdk.lic')) {
		// Success
	} else {
		// Fail
	}

All SDK effects cannot be used if authentication failed.

\subsection BeautyShapeMakeup_Step_3 3 Init ARScene Renderer

    const arSceneRenderer = new NveARSceneRenderer();
    await arSceneRenderer.init({
        faceModelUrl:"https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model",
    	eyecontourModelUrl:"https://alieasset.meishesdk.com/model/eyecontour/ms_eyecontour_v2_0_0_next.model",
    	makeupDataUrl:"https://alieasset.meishesdk.com/model/makeup2_240_v2.1.2.dat",
    	beautyIntensity: 1, 	//beauty intensity
    	beautyLutUrl: "",		//beauty lut file url
    	beautyLutIntensity: 1,	//beauty lut file intensity
    	faceCommonDataUrl:'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',
    });

\note Beauty effect added by default after initialization.

\subsection BeautyShapeMakeup_Step_4 4 Startup Camera

    await arSceneRenderer.startupCamera({
    	audio: false,
    	video: {width: 1280, height: 720, frameRate: {ideal: 30, max: 60}}
    });

\subsection BeautyShapeMakeup_Step_5 5 Set Beauty & Shape & Makeup

    await arSceneRenderer.setEffectList([
    	//Makeup
        {
            url:"https://qasset.meishesdk.com/material/pu/makeup/FDFB2239-44D1-491D-85A1-7A537860118E/FDFB2239-44D1-491D-85A1-7A537860118E.1.makeup",
            licUrl: "",
    		intensity:1,
        },
    	//Shape
        {
            url:"https://qasset.meishesdk.com/material/pu/makeup/63BD3F32-D01B-4755-92D5-0DE361E4045A/63BD3F32-D01B-4755-92D5-0DE361E4045A.3.facemesh",
            licUrl: "",
    		intensity:1,
        },
    ]);

\subsection BeautyShapeMakeup_Step_6 6 Get Output Stream

    const outputStream = arSceneRenderer.getOutputStream();
