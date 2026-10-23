\page InputImageData.md Input Image Data

* 1 [Import SDK] (\ref InputImageData_Step_1)
* 2 [Verify License] (\ref InputImageData_Step_2)
* 3 [Init ARScene Renderer] (\ref InputImageData_Step_3)
* 4 [Render Input Image Data] (\ref InputImageData_Step_4)

\subsection InputImageData_Step_1 1 Import SDK
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
		  
\subsection InputImageData_Step_2 2 Verify License
Meishe web EffectSDK support non-license mode on localhost, so you can preview all effects on localhost quickly.
Otherwise, you need to contact business people to get license files, then verify license as following:
Use [verifySdkLicenseFileUrl()](\ref NveEffectContext.verifySdkLicenseFileUrl()) to verify sdk license in loadingFinished callback of WASMLoader:

	if(nveGetEffectContextInstance().verifySdkLicenseFileUrl('/static/effectsdk.lic')) {
		// Success
	} else {
		// Fail
	}

All SDK effects cannot be used if authentication failed.

\subsection InputImageData_Step_3 3 Init ARScene Renderer

    const arSceneRenderer = new NveARSceneRenderer();
    await arSceneRenderer.init({
        faceModelUrl:"https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model",
    	detectionMode:NveHumanDetectionFeatureEnum.SemiImageMode | NveHumanDetectionFeatureEnum.MultiThread,
    	workingInRealtimeMode:false,
    	faceCommonDataUrl:'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',
    	advancedBeautyDataUrl:'https://alieasset.meishesdk.com/model/advancedbeauty_v1.0.0.dat',
    });

\note Beauty effect added by default after initialization.

\subsection InputImageData_Step_4 4 Render Input Image Data

    const image = document.createElement("img");
    image.onload = async () => {
    	const canvas = document.createElement('canvas');
    	canvas.width = image.width;
    	canvas.height = image.height;
    	canvas.style.visibility = 'hidden';
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const renderEffectsResult = await arSceneRenderer.render(imageData, Math.floor(performance.now()));
    	
    	// Display render result
    	const width = 960;
        const height = 540;
        const preview = document.createElement('canvas');
        preview.width = width;
        preview.height = height;
        document.body.appendChild(preview);
        preview.getContext("2d").drawImage(renderEffectsResult.imageBitmap, 0, 0, preview.width, preview.height);
    }
    image.src = "/static/test.png";
