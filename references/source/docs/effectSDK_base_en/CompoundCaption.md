\page CompoundCaption.md CompoundCaption

* 1 [Import SDK] (\ref CompoundCaption_Step_1)
* 2 [Verify License] (\ref CompoundCaption_Step_2)
* 3 [Init ARScene Renderer] (\ref CompoundCaption_Step_3)
* 4 [Startup Camera] (\ref CompoundCaption_Step_4)
* 5 [Add Compound Caption] (\ref CompoundCaption_Step_5)
* 6 [Get Output Stream] (\ref CompoundCaption_Step_6)

\subsection CompoundCaption_Step_1 1 Import SDK
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
		  
\subsection CompoundCaption_Step_2 2 Verify License
Meishe web EffectSDK support non-license mode on localhost, so you can preview all effects on localhost quickly.
Otherwise, you need to contact business people to get license files, then verify license as following:
Use [verifySdkLicenseFileUrl()](\ref NveEffectContext.verifySdkLicenseFileUrl()) to verify sdk license in loadingFinished callback of WASMLoader:

	if(nveGetEffectContextInstance().verifySdkLicenseFileUrl('/static/effectsdk.lic')) {
		// Success
	} else {
		// Fail
	}

All SDK effects cannot be used if authentication failed.

\subsection CompoundCaption_Step_3 3 Init ARScene Renderer

    const arSceneRenderer = new NveARSceneRenderer();
    await arSceneRenderer.init({
        faceModelUrl:"https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model",
    	faceCommonDataUrl:'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',
    });

\note Beauty effect added by default after initialization.

\subsection CompoundCaption_Step_4 4 Startup Camera

    await arSceneRenderer.startupCamera({
    	audio: false,
    	video: {width: 1280, height: 720, frameRate: {ideal: 30, max: 60}}
    });

\subsection CompoundCaption_Step_5 5 Add Compound Caption
	
	const compoundCaption = await arSceneRenderer.createExternalEffectInstance(
	    {
			inPoint: 0,
	        duration: 5000000,
			url: "https://qasset.meishesdk.com/material/pu/compoundcaption/D037A06A-FFD8-4863-A291-A2BC105F0BBC/D037A06A-FFD8-4863-A291-A2BC105F0BBC.1.compoundcaption",
	        licUrl: "",
	    }
	);
	
	// Create compound caption with accurate position
	const compoundCaption = await arSceneRenderer.createExternalEffectInstance(
	    {
			inPoint: 0,
	        duration: 5000000,
			url: "https://qasset.meishesdk.com/material/pu/compoundcaption/D037A06A-FFD8-4863-A291-A2BC105F0BBC/D037A06A-FFD8-4863-A291-A2BC105F0BBC.1.compoundcaption",
	        licUrl: "",
			positionX: -0.6,
	        positionY: 0.9,
	    }
	);
	
	// Create compound caption with direction position
	const compoundCaption = await arSceneRenderer.createExternalEffectInstance(
	    {
			inPoint: 0,
	        duration: 5000000,
			url: "https://qasset.meishesdk.com/material/pu/compoundcaption/D037A06A-FFD8-4863-A291-A2BC105F0BBC/D037A06A-FFD8-4863-A291-A2BC105F0BBC.1.compoundcaption",
	        licUrl: "",
			position: "top-right",
	    }
	);
	
	// Modify compound caption other attributes by compound caption instance functions
	compoundCaption.scaleCaption2(0.8);
	compoundCaption.setText(0, "caption0");
	
	// Append the compound caption instance to arscene renderer external effect list
	arSceneRenderer.appendExternalEffectInstance(compoundCaption);

[NveARSceneRenderer.createExternalEffectInstance()](\ref NveARSceneRenderer.createExternalEffectInstance()) function animated sticker parameters details:
| **Parameter** | **Type** | **Required** | **Default** | **Explain**                                                                                                        |
| ------------- | -------- | ------------ | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| inPoint       | Number   | Yes          |             | Compound caption in point, in microseconds.                                                                        |
| duration  	| Number   | Yes          |             | Compound caption duration, in microseconds. Number.MAX_SAFE_INTEGER value means always display.                    |
| url         	| String   | No           |             | Compound caption package url.                                                                                      |
| licUrl        | String   | No           |             | Compound caption package license url.                                                                              |
| positionX     | Number   | No           |             | Horizontal position, normalized value, range is [-1, 1], 0 is center, and right is positive direction.             |
| positionY     | Number   | No           |             | Vertical position, normalized value, range is [-1, 1], 0 is center, and up is positive direction.                  |
| position      | String   | No           |             | Direction position, including top-left, top, top-right, left, center, right, bottom-left, bottom and bottom-right. |

\note For compound caption parameters, NveARSceneRenderer.createExternalEffectInstance() return a [NveCompoundCaption](\ref NveCompoundCaption) object. To modify compound caption other attributes, see the functions of this class.
\note The compound caption instance, NveARSceneRenderer.createExternalEffectInstance() created, if not used again, need to be released to call [release()](\ref NveEffectInstance.release()) function by yourself, then removed from NveARSceneRenderer external effect list. Because the compound caption instance maybe held and used by outside, so NveARSceneRenderer.release() will not release it.

\subsection CompoundCaption_Step_6 6 Get Output Stream

    const outputStream = arSceneRenderer.getOutputStream();
