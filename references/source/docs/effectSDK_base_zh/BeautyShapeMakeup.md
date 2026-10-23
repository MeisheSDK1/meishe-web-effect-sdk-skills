\page BeautyShapeMakeup.md 美颜美型美妆

* 1 [导入库文件] (\ref BeautyShapeMakeup_Step_1)
* 2 [授权验证] (\ref BeautyShapeMakeup_Step_2)
* 3 [初始化ARScene快捷渲染器] (\ref BeautyShapeMakeup_Step_3)
* 4 [启动摄像头] (\ref BeautyShapeMakeup_Step_4)
* 5 [设置美颜美型美妆] (\ref BeautyShapeMakeup_Step_5)
* 6 [获取输出流] (\ref BeautyShapeMakeup_Step_6)

\subsection BeautyShapeMakeup_Step_1 1 导入库文件
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
		  
\subsection BeautyShapeMakeup_Step_2 2 授权验证
美摄web端Effectsdk为了便于客户接入测试，针对localhost启动的方式，不需要进行授权验证就可以使用所有效果，
客户使用非localhost环境部署时，需要联系商务获取sdk授权文件，再按照如下方式进行授权验证即可。
wasm文件加载成功的回调函数loadingFinished中调用[verifySdkLicenseFileUrl()](\ref NveEffectContext.verifySdkLicenseFileUrl())进行授权验证:

	if(nveGetEffectContextInstance().verifySdkLicenseFileUrl('/static/effectsdk.lic')) {
		// 授权成功
	} else {
		// 授权失败
	}

授权验证失败则无法使用sdk的所有效果。

\subsection BeautyShapeMakeup_Step_3 3 初始化ARScene快捷渲染器

    const arSceneRenderer = new NveARSceneRenderer();
    await arSceneRenderer.init({
        faceModelUrl:"https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model",
    	eyecontourModelUrl:"https://alieasset.meishesdk.com/model/eyecontour/ms_eyecontour_v2_0_0_next.model",
    	makeupDataUrl:"https://alieasset.meishesdk.com/model/makeup2_240_v2.1.2.dat",
    	beautyIntensity: 1, 	//美颜强度
    	beautyLutUrl: "",		//美颜lut文件地址
    	beautyLutIntensity: 1,	//美颜lut强度
    	faceCommonDataUrl:'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',
    });

\note 初始化完成后默认会带有美颜。

\subsection BeautyShapeMakeup_Step_4 4 启动摄像头

    await arSceneRenderer.startupCamera({
    	audio: false,
    	video: {width: 1280, height: 720, frameRate: {ideal: 30, max: 60}}
    });

\subsection BeautyShapeMakeup_Step_5 5 设置美颜美型美妆

    await arSceneRenderer.setEffectList([
    	//美妆
        {
            url:"https://qasset.meishesdk.com/material/pu/makeup/FDFB2239-44D1-491D-85A1-7A537860118E/FDFB2239-44D1-491D-85A1-7A537860118E.1.makeup",
            licUrl: "",
    		intensity:1,
        },
    	//美型
        {
            url:"https://qasset.meishesdk.com/material/pu/makeup/63BD3F32-D01B-4755-92D5-0DE361E4045A/63BD3F32-D01B-4755-92D5-0DE361E4045A.3.facemesh",
            licUrl: "",
    		intensity:1,
        },
    ]);

\subsection BeautyShapeMakeup_Step_6 6 获取输出流

    const outputStream = arSceneRenderer.getOutputStream();
