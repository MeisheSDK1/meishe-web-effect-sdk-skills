\page AnimatedSticker.md AnimatedSticker

* 1 [Import SDK] (\ref AnimatedSticker_Step_1)
* 2 [Verify License] (\ref AnimatedSticker_Step_2)
* 3 [Init ARScene Renderer] (\ref AnimatedSticker_Step_3)
* 4 [Startup Camera] (\ref AnimatedSticker_Step_4)
* 5 [Add Animated Sticker] (\ref AnimatedSticker_Step_5)
* 6 [Get Output Stream] (\ref AnimatedSticker_Step_6)

\subsection AnimatedSticker_Step_1 1 Import SDK
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
		  
\subsection AnimatedSticker_Step_2 2 Verify License
Meishe web EffectSDK support non-license mode on localhost, so you can preview all effects on localhost quickly.
Otherwise, you need to contact business people to get license files, then verify license as following:
Use [verifySdkLicenseFileUrl()](\ref NveEffectContext.verifySdkLicenseFileUrl()) to verify sdk license in loadingFinished callback of WASMLoader:

	if(nveGetEffectContextInstance().verifySdkLicenseFileUrl('/static/effectsdk.lic')) {
		// Success
	} else {
		// Fail
	}

All SDK effects cannot be used if authentication failed.

\subsection AnimatedSticker_Step_3 3 Init ARScene Renderer

    const arSceneRenderer = new NveARSceneRenderer();
    await arSceneRenderer.init({
        faceModelUrl:"https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model",
    	faceCommonDataUrl:'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',
    });

\note Beauty effect added by default after initialization.

\subsection AnimatedSticker_Step_4 4 Startup Camera

    await arSceneRenderer.startupCamera({
    	audio: false,
    	video: {width: 1280, height: 720, frameRate: {ideal: 30, max: 60}}
    });

\subsection AnimatedSticker_Step_5 5 Add Animated Sticker
	
	// Create animated sticker without animation
	const sticker = await arSceneRenderer.createExternalEffectInstance(
	    {
			inPoint: 0,
	        duration: 5000000,
			url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
	        licUrl: "",
	    }
	);
	
	// Create animated sticker with animation
	const sticker = await arSceneRenderer.createExternalEffectInstance(
	    {
			inPoint: 0,
	        duration: 5000000,
			url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
	        licUrl: "",
			animatedStickerAnimationUrl: "https://qasset.meishesdk.com/material/pu/animatedsticker/58A339F9-8B2F-479F-8A1D-35E4456CFA9B/58A339F9-8B2F-479F-8A1D-35E4456CFA9B.1.animatedstickeranimation",
			animatedStickerAnimationLicUrl: "",
			animationPeriod: 5000,
	    }
	);
	
	// Create animated sticker with accurate position
	const sticker = await arSceneRenderer.createExternalEffectInstance(
	    {
	        inPoint: 0,
	        duration: 5000000,
			url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
	        licUrl: "",
			positionX: -0.6,
	        positionY: 0.9,
	    }
	);
	
	// Create animated sticker with direction position
	const sticker = await arSceneRenderer.createExternalEffectInstance(
	    {
	        inPoint: 0,
	        duration: 5000000,
			url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
	        licUrl: "",
			position: "top-right",
	    }
	);
	
	// Modify animated sticker other attributes by animated sticker instance functions
	sticker.scaleAnimatedSticker2(0.5);
	
	// Append the animated sticker instance to arscene renderer external effect list
	arSceneRenderer.appendExternalEffectInstance(sticker);

[NveARSceneRenderer.createExternalEffectInstance()](\ref NveARSceneRenderer.createExternalEffectInstance()) function animated sticker parameters details:
| **Parameter**                     | **Type** | **Required** | **Default** | **Explain**                                                                                                        |
| --------------------------------- | -------- | ------------ | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| inPoint        		            | Number   | Yes          |             | Animated sticker in point, in microseconds.                                                                        |
| duration  			            | Number   | Yes          |             | Animated sticker duration, in microseconds. Number.MAX_SAFE_INTEGER value means always display.                    |
| url         			            | String   | No           |             | Animated sticker package url.                                                                                      |
| licUrl                            | String   | No           |             | Animated sticker package license url.                                                                              |
| animatedStickerAnimationUrl       | String   | No           |             | Animation style package url.                                                                                       |
| animatedStickerAnimationLicUrl    | String   | No           |             | Animation style package license url.                                                                               |
| animationPeriod         	        | Number   | No           |             | Animation period, in millisecond.                                                                                  |
| animatedStickerInAnimationUrl     | String   | No           |             | In-animation style package url.                                                                                    |
| animatedStickerInAnimationLicUrl  | String   | No           |             | In-animation style package license url.                                                                            |
| inAnimationDuration               | Number   | No           |             | In-animation duration, in millisecond.                                                                             |
| animatedStickerOutAnimationUrl    | String   | No           |             | Out-animation style package url.                                                                                   |
| animatedStickerOutAnimationLicUrl | String   | No           |             | Out-animation style package license url.                                                                           |
| outAnimationDuration              | Number   | No           |             | Out-animation duration, in millisecond.                                                                            |
| positionX                         | Number   | No           |             | Horizontal position, normalized value, range is [-1, 1], 0 is center, and right is positive direction.             |
| positionY                         | Number   | No           |             | Vertical position, normalized value, range is [-1, 1], 0 is center, and up is positive direction.                  |
| position                          | String   | No           |             | Direction position, including top-left, top, top-right, left, center, right, bottom-left, bottom and bottom-right. |

\note For animated sticker parameters, NveARSceneRenderer.createExternalEffectInstance() return a [NveAnimatedSticker](\ref NveAnimatedSticker) object. To modify animated sticker other attributes, see the functions of this class.
\note The animated sticker instance, NveARSceneRenderer.createExternalEffectInstance() created, if not used again, need to be released to call [release()](\ref NveEffectInstance.release()) function by yourself, then removed from NveARSceneRenderer external effect list. Because the animated sticker instance maybe held and used by outside, so NveARSceneRenderer.release() will not release it.

\subsection AnimatedSticker_Step_6 6 Get Output Stream

    const outputStream = arSceneRenderer.getOutputStream();
