\page VideoFx.md VideoFx

* 1 [Import SDK] (\ref VideoFx_Step_1)
* 2 [Verify License] (\ref VideoFx_Step_2)
* 3 [Init ARScene Renderer] (\ref VideoFx_Step_3)
* 4 [Startup Camera] (\ref VideoFx_Step_4)
* 5 [Set VideoFx] (\ref VideoFx_Step_5)
* 6 [Get Output Stream] (\ref VideoFx_Step_6)

\subsection VideoFx_Step_1 1 Import SDK
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
		  
\subsection VideoFx_Step_2 2 Verify License
Meishe web EffectSDK support non-license mode on localhost, so you can preview all effects on localhost quickly.
Otherwise, you need to contact business people to get license files, then verify license as following:
Use [verifySdkLicenseFileUrl()](\ref NveEffectContext.verifySdkLicenseFileUrl()) to verify sdk license in loadingFinished callback of WASMLoader:

	if(nveGetEffectContextInstance().verifySdkLicenseFileUrl('/static/effectsdk.lic')) {
		// Success
	} else {
		// Fail
	}

All SDK effects cannot be used if authentication failed.

\subsection VideoFx_Step_3 3 Init ARScene Renderer

    const arSceneRenderer = new NveARSceneRenderer();
    await arSceneRenderer.init({
        faceModelUrl:"https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model",
    	faceCommonDataUrl:'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',
    	advancedBeautyDataUrl:'https://alieasset.meishesdk.com/model/advancedbeauty_v1.0.0.dat',
    });

\note Beauty effect added by default after initialization.

\subsection VideoFx_Step_4 4 Startup Camera

    await arSceneRenderer.startupCamera({
    	audio: false,
    	video: {width: 1280, height: 720, frameRate: {ideal: 30, max: 60}}
    });

\subsection VideoFx_Step_5 5 Set VideoFx
	
	// Package
	await arSceneRenderer.setEffectList([
	    {
	        url:"https://qasset.meishesdk.com/material/pu/videofx/C7C43F54-3A0E-44F2-8278-BBE9154C60B3/C7C43F54-3A0E-44F2-8278-BBE9154C60B3.7.videofx",
	        licUrl:"",
			intensity:1,
	    },
	]);
	
	// Builtin
	await arSceneRenderer.setEffectList([
	    {
	        builtinEffectName:"Pinky",
			intensity:1,
	    },
	]);

\subsection VideoFx_Step_6 6 Get Output Stream

    const outputStream = arSceneRenderer.getOutputStream();
