\page ImportSDK.md 导入库文件

引入美摄SDK接口文件NvEffectSdk.js

	<script src="https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/NvEffectSdk.js"></script>

安装meishewasmloader [参考](https://www.npmjs.com/package/meishewasmloader)

	npm i meishewasmloader --save

使用WASMLoader加载wasm相关文件
	
	import { WASMLoader }  from 'meishewasmloader';
	function loader(){
		return new Promise(async (resolve,reject)=>{        
			const wasmLoader = WASMLoader({
				// 加载进度回调		
				showLoader: function (state) {},
				// 失败回调
				showError(errorText: string) {
					reject()
				},
				// 成功回调
				loadingFinished() {
					function poll(){
						if(Module !== undefined && Module.Meishe !== undefined && Module.Meishe.effectContext !== undefined){
							//加载成功
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
			wasmLoader.loadEmscriptenModule("https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/", { effectSdk:true }); // 开始调用函数加载
		})
	}

\note https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/ 地址为美摄提供的测试公用地址，如果客户产品准备发布上线，需要联系商务获取sdk相关文件，私有化部署到客户的环境中，替换此地址再使用；
<br>私有化部署wasm相关文件时，要对wasm文件配置brotli或者gzip进行压缩，有助于提升加载速度；
<br>步骤1和2中的地址需要保持一致，否则会导致不可预期的结果；