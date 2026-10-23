\page Caption.md Caption

* 1 [Import SDK] (\ref Caption_Step_1)
* 2 [Verify License] (\ref Caption_Step_2)
* 3 [Init ARScene Renderer] (\ref Caption_Step_3)
* 4 [Startup Camera] (\ref Caption_Step_4)
* 5 [Add Caption] (\ref Caption_Step_5)
* 6 [Get Output Stream] (\ref Caption_Step_6)

\subsection Caption_Step_1 1 Import SDK
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
		  
\subsection Caption_Step_2 2 Verify License
Meishe web EffectSDK support non-license mode on localhost, so you can preview all effects on localhost quickly.
Otherwise, you need to contact business people to get license files, then verify license as following:
Use [verifySdkLicenseFileUrl()](\ref NveEffectContext.verifySdkLicenseFileUrl()) to verify sdk license in loadingFinished callback of WASMLoader:

	if(nveGetEffectContextInstance().verifySdkLicenseFileUrl('/static/effectsdk.lic')) {
		// Success
	} else {
		// Fail
	}

All SDK effects cannot be used if authentication failed.

\subsection Caption_Step_3 3 Init ARScene Renderer

    const arSceneRenderer = new NveARSceneRenderer();
    await arSceneRenderer.init({
        faceModelUrl:"https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model",
    faceCommonDataUrl:'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',
    });

\note Beauty effect added by default after initialization.

\subsection Caption_Step_4 4 Startup Camera

    await arSceneRenderer.startupCamera({
    	audio: false,
    	video: {width: 1280, height: 720, frameRate: {ideal: 30, max: 60}}
    });

\subsection Caption_Step_5 5 Add Caption
	
	// Create general caption without any style
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
	        text: "caption",
	        inPoint: 0,
	        duration: 5000000,
	    }
	);
	
	// Create general caption with a caption style
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
	        text: "caption",
	        inPoint: 0,
	        duration: 5000000,
			url: "https://qasset.meishesdk.com/material/pu/caption/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3.1.captionstyle",
	        licUrl: "",
		}
	);
	
	// Create general caption with a caption style and a renderer style
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
	        text: "caption",
	        inPoint: 0,
	        duration: 5000000,
			url: "https://qasset.meishesdk.com/material/pu/caption/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3.1.captionstyle",
	        licUrl: "",
			captionRendererUrl: "https://qasset.meishesdk.com/material/pu/caption/262BC53C-CB55-45D4-96BD-2BD79D3C5F11/262BC53C-CB55-45D4-96BD-2BD79D3C5F11.1.captionrenderer",
			captionRendererLicUrl: "",
	    }
	);
	
	// Create general caption with accurate position
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
	        text: "caption",
	        inPoint: 0,
	        duration: 5000000,
			positionX: -0.6,
	        positionY: 0.9,
	    }
	);
	
	// Create general caption with direction position
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
	        text: "caption",
	        inPoint: 0,
	        duration: 5000000,
			position: "top-right",
	    }
	);
	
	// Create general caption with font file url
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
	        text: "caption",
	        inPoint: 0,
	        duration: 5000000,
			fontFileUrl: "https://alieasset.meishesdk.com/release/material/font/164C237B-16CB-49D5-A205-1976B16046B8/164C237B-16CB-49D5-A205-1976B16046B8.ttf",
	    }
	);
	
	// Create modular caption without any style
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
			modular: true,
	        text: "modularCaption",
	        inPoint: 0,
	        duration: 5000000,
	    }
	);
	
	// Create modular caption with a renderer style
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
			modular: true,
	        text: "modularCaption",
	        inPoint: 0,
	        duration: 5000000,
			captionRendererUrl: "https://qasset.meishesdk.com/material/pu/caption/262BC53C-CB55-45D4-96BD-2BD79D3C5F11/262BC53C-CB55-45D4-96BD-2BD79D3C5F11.1.captionrenderer",
			captionRendererLicUrl: "",
	    }
	);
	
	// Create modular caption with a context style
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
			modular: true,
	        text: "modularCaption",
	        inPoint: 0,
	        duration: 5000000,
			captionContextUrl: "https://qasset.meishesdk.com/material/pu/caption/BFC751C8-D9B2-440A-A3DF-8D02841745C1/BFC751C8-D9B2-440A-A3DF-8D02841745C1.1.captioncontext",
			captionContextLicUrl: "",
	    }
	);
	
	// Create modular caption with an animation style
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
			modular: true,
	        text: "modularCaption",
	        inPoint: 0,
	        duration: 5000000,
			captionAnimationUrl: "https://qasset.meishesdk.com/material/pu/caption/C34F307B-5576-4525-B309-4166D2628093/C34F307B-5576-4525-B309-4166D2628093.1.captionanimation",
			captionAnimationLicUrl: "",
			animationPeriod: 2500,
	    }
	);
	
	// Modify caption other attributes by caption instance functions
	caption.scaleCaption2(0.8);
	caption.setUnderline(true);
	
	// Append the caption instance to arscene renderer external effect list
	arSceneRenderer.appendExternalEffectInstance(caption);

[NveARSceneRenderer.createExternalEffectInstance()](\ref NveARSceneRenderer.createExternalEffectInstance()) function caption parameters details:
| **Parameter**             | **Type** | **Required** | **Default** | **Explain**                                                                                                        |
| ------------------------- | -------- | ------------ | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| modular          		    | Boolean  | No           | false       | Is modular type or not, only modular caption can use context style and animation styles.                           |
| text                      | String   | Yes          |             | Caption text.                                                                                                      |
| inPoint        		    | Number   | Yes          |             | Caption in point, in microseconds.                                                                                 |
| duration  			    | Number   | Yes          |             | Caption duration, in microseconds. Number.MAX_SAFE_INTEGER value means always display.                             |
| url         			    | String   | No           |             | Caption general style package url.                                                                                 |
| licUrl                    | String   | No           |             | Caption general style package license url.                                                                         |
| fontFileUrl               | String   | No           |             | Caption font file url. Maybe only English texts display correctly if not set.                                      |
| captionRendererUrl        | String   | No           |             | Caption renderer style package url.                                                                                |
| captionRendererLicUrl     | String   | No           |             | Caption renderer style package license url.                                                                        |
| captionContextUrl         | String   | No           |             | Caption context style package url.                                                                                 |
| captionContextLicUrl      | String   | No           |             | Caption context style package license url.                                                                         |
| captionAnimationUrl       | String   | No           |             | Caption animation style package url.                                                                               |
| captionAnimationLicUrl    | String   | No           |             | Caption animation style package license url.                                                                       |
| animationPeriod         	| Number   | No           |             | Animation period, in millisecond.                                                                                  |
| captionInAnimationUrl     | String   | No           |             | Caption in-animation style package url.                                                                            |
| captionInAnimationLicUrl  | String   | No           |             | Caption in-animation style package license url.                                                                    |
| inAnimationDuration       | Number   | No           |             | In-animation duration, in millisecond.                                                                             |
| captionOutAnimationUrl    | String   | No           |             | Caption out-animation style package url.                                                                           |
| captionOutAnimationLicUrl | String   | No           |             | Caption out-animation style package url.                                                                           |
| outAnimationDuration      | Number   | No           |             | Out-animation duration, in millisecond.                                                                            |
| positionX                 | Number   | No           |             | Horizontal position, normalized value, range is [-1, 1], 0 is center, and right is positive direction.             |
| positionY                 | Number   | No           |             | Vertical position, normalized value, range is [-1, 1], 0 is center, and up is positive direction.                  |
| position                  | String   | No           |             | Direction position, including top-left, top, top-right, left, center, right, bottom-left, bottom and bottom-right. |

\note For caption parameters, NveARSceneRenderer.createExternalEffectInstance() return a [NveCaption](\ref NveCaption) object. To modify caption other attributes, see the functions of this class.
\note The caption instance, NveARSceneRenderer.createExternalEffectInstance() created, if not used again, need to be released to call [release()](\ref NveEffectInstance.release()) function by yourself, then removed from NveARSceneRenderer external effect list. Because the caption instance maybe held and used by outside, so NveARSceneRenderer.release() will not release it.

\subsection Caption_Step_6 6 Get Output Stream

    const outputStream = arSceneRenderer.getOutputStream();
