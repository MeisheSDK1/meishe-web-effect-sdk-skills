\page ImportSDK.md Import SDK

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