\page AvatarARScene.md Avatar

* 1 [Import SDK] (\ref AvatarARScene_Step_1)
* 2 [Verify License] (\ref AvatarARScene_Step_2)
* 3 [Init ARScene Renderer] (\ref AvatarARScene_Step_3)
* 4 [Startup Camera] (\ref AvatarARScene_Step_4)
* 5 [Set Avatar] (\ref AvatarARScene_Step_5)
* 6 [Get Output Stream] (\ref AvatarARScene_Step_6)

\subsection AvatarARScene_Step_1 1 Import SDK
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
		  
\subsection AvatarARScene_Step_2 2 Verify License
Meishe web EffectSDK support non-license mode on localhost, so you can preview all effects on localhost quickly.
Otherwise, you need to contact business people to get license files, then verify license as following:
Use [verifySdkLicenseFileUrl()](\ref NveEffectContext.verifySdkLicenseFileUrl()) to verify sdk license in loadingFinished callback of WASMLoader:

	if(nveGetEffectContextInstance().verifySdkLicenseFileUrl('/static/effectsdk.lic')) {
		// Success
	} else {
		// Fail
	}

All SDK effects cannot be used if authentication failed.

\subsection AvatarARScene_Step_3 3 Init ARScene Renderer

    const arSceneRenderer = new NveARSceneRenderer();
    await arSceneRenderer.init({
        faceModelUrl:"https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model",
    	avatarModelUrl:"https://alieasset.meishesdk.com/model/avatar/ms_avatar_v2_0_0_next.model",
    	advancedBeautyDataUrl:'https://alieasset.meishesdk.com/model/advancedbeauty_v1.0.0.dat',
    });

\note Beauty effect added by default after initialization.

\subsection AvatarARScene_Step_4 4 Startup Camera

    await arSceneRenderer.startupCamera({
    	audio: false,
    	video: {width: 1280, height: 720, frameRate: {ideal: 30, max: 60}}
    });

\subsection AvatarARScene_Step_5 5 Set Avatar

    await arSceneRenderer.setEffectList([
        {
            url:"https://qasset.meishesdk.com/material/pu/arscene/CF2A5851-DFD9-432F-B1F5-5E69BC3CED8C/CF2A5851-DFD9-432F-B1F5-5E69BC3CED8C.1.arscene",
        },
    ]);

\subsection AvatarARScene_Step_6 6 Get Output Stream

    const outputStream = arSceneRenderer.getOutputStream();
