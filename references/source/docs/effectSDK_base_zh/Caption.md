\page Caption.md 字幕

* 1 [导入库文件] (\ref Caption_Step_1)
* 2 [授权验证] (\ref Caption_Step_2)
* 3 [初始化ARScene快捷渲染器] (\ref Caption_Step_3)
* 4 [启动摄像头] (\ref Caption_Step_4)
* 5 [添加字幕] (\ref Caption_Step_5)
* 6 [获取输出流] (\ref Caption_Step_6)

\subsection Caption_Step_1 1 导入库文件
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
		  
\subsection Caption_Step_2 2 授权验证
美摄web端Effectsdk为了便于客户接入测试，针对localhost启动的方式，不需要进行授权验证就可以使用所有效果，
客户使用非localhost环境部署时，需要联系商务获取sdk授权文件，再按照如下方式进行授权验证即可。
wasm文件加载成功的回调函数loadingFinished中调用[verifySdkLicenseFileUrl()](\ref NveEffectContext.verifySdkLicenseFileUrl())进行授权验证:

	if(nveGetEffectContextInstance().verifySdkLicenseFileUrl('/static/effectsdk.lic')) {
		// 授权成功
	} else {
		// 授权失败
	}

授权验证失败则无法使用sdk的所有效果。

\subsection Caption_Step_3 3 初始化ARScene快捷渲染器

    const arSceneRenderer = new NveARSceneRenderer();
    await arSceneRenderer.init({
        faceModelUrl:"https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model",
        faceCommonDataUrl:'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',
    });

\note 初始化完成后默认会带有美颜。

\subsection Caption_Step_4 4 启动摄像头

    await arSceneRenderer.startupCamera({
    	audio: false,
    	video: {width: 1280, height: 720, frameRate: {ideal: 30, max: 60}}
    });

\subsection Caption_Step_5 5 添加字幕
	
	// 创建不带字幕样式的普通字幕
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
	        text: "caption",
	        inPoint: 0,
	        duration: 5000000,
	    }
	);
	
	// 创建带字幕样式的普通字幕
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
	        text: "caption",
	        inPoint: 0,
	        duration: 5000000,
			url: "https://qasset.meishesdk.com/material/pu/caption/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3.1.captionstyle",
	        licUrl: "",
		}
	);
	
	// 创建带字幕样式和花字效果的普通字幕
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
	
	// 创建带位置信息的普通字幕
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
	        text: "caption",
	        inPoint: 0,
	        duration: 5000000,
			positionX: -0.6,
	        positionY: 0.9,
	    }
	);
	
	// 创建带方位位置信息的普通字幕
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
	        text: "caption",
	        inPoint: 0,
	        duration: 5000000,
			position: "top-right",
	    }
	);
	
	// 创建带字体的普通字幕
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
	        text: "caption",
	        inPoint: 0,
	        duration: 5000000,
			fontFileUrl: "https://alieasset.meishesdk.com/release/material/font/164C237B-16CB-49D5-A205-1976B16046B8/164C237B-16CB-49D5-A205-1976B16046B8.ttf",
	    }
	);
	
	// 创建不带样式的模块字幕
	const caption = await arSceneRenderer.createExternalEffectInstance(
	    {
			modular: true,
	        text: "modularCaption",
	        inPoint: 0,
	        duration: 5000000,
	    }
	);
	
	// 创建带花字效果的模块字幕
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
	
	// 创建带气泡效果的模块字幕
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
	
	// 创建带动画效果的模块字幕
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
	
	// 使用字幕实例的接口修改字幕其他属性
	caption.scaleCaption2(0.8);
	caption.setUnderline(true);
	
	// 添加字幕实例
	arSceneRenderer.appendExternalEffectInstance(caption);

[NveARSceneRenderer.createExternalEffectInstance()](\ref NveARSceneRenderer.createExternalEffectInstance())接口的字幕配置参数详细说明：
| **参数**                  | **类型** | **必填** | **默认值** | **说明**                                                                                                          |
| ------------------------- | -------- | -------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| modular          		    | Boolean  | 否       | false       | 是否为模块字幕，模块字幕类型才可以添加气泡和动画等效果。                                                          |
| text                      | String   | 是       |             | 字幕文字。                                                                                                        |
| inPoint        		    | Number   | 是       |             | 字幕起始时间，单位微秒。                                                                                          |
| duration  			    | Number   | 是       |             | 字幕持续时间，单位微秒，设置为Number.MAX_SAFE_INTEGER表示持续显示。                                               |
| url         			    | String   | 否       |             | 普通字幕样式包地址。                                                                                              |
| licUrl                    | String   | 否       |             | 普通字幕样式包对应的授权文件地址。                                                                                |
| fontFileUrl               | String   | 否       |             | 字体文件地址，如果不设置，非英文文字会因为找不到对应的字体显示错误。                                              |
| captionRendererUrl        | String   | 否       |             | 花字效果样式包地址。                                                                                              |
| captionRendererLicUrl     | String   | 否       |             | 花字效果样式包对应的授权文件地址。                                                                                |
| captionContextUrl         | String   | 否       |             | 气泡效果样式包地址。                                                                                              |
| captionContextLicUrl      | String   | 否       |             | 气泡效果样式包对应的授权文件地址。                                                                                |
| captionAnimationUrl       | String   | 否       |             | 动画效果样式包地址。                                                                                              |
| captionAnimationLicUrl    | String   | 否       |             | 动画效果样式包对应的授权文件地址。                                                                                |
| animationPeriod         	| Number   | 否       |             | 动画效果周期，单位毫秒。                                                                                          |
| captionInAnimationUrl     | String   | 否       |             | 入动画效果样式包对应的授权文件地址。                                                                              |
| captionInAnimationLicUrl  | String   | 否       |             | 入动画效果样式包地址。                                                                                            |
| inAnimationDuration       | Number   | 否       |             | 入动画效果持续时间，单位毫秒。                                                                                    |
| captionOutAnimationUrl    | String   | 否       |             | 出动画效果样式包地址。                                                                                            |
| captionOutAnimationLicUrl | String   | 否       |             | 出动画效果样式包对应的授权文件地址。                                                                              |
| outAnimationDuration      | Number   | 否       |             | 出动画效果持续时间，单位毫秒。                                                                                    |
| positionX                 | Number   | 否       |             | 水平位置，归一化值，取值范围[-1，1]，中心是0，向右为正方向。                                                      |
| positionY                 | Number   | 否       |             | 垂直位置，归一化值，取值范围[-1，1]，中心是0，向上为正方向。                                                      |
| position                  | String   | 否       |             | 方位信息，可设置的值包括top-left、top、top-right、left、center、right、bottom-left、bottom和bottom-right九个方位。|

\note 基于字幕配置的参数，NveARSceneRenderer.createExternalEffectInstance()返回的字幕实例为[NveCaption](\ref NveCaption)，修改字幕其他属性请参考此类型的接口。
\note NveARSceneRenderer.createExternalEffectInstance()创建的实例，由于外部可能还会持有使用它，因此NveARSceneRenderer.release()释放资源的时候并不会释它，不使用的时候需要外部调用该实例的[release()](\ref NveEffectInstance.release())接口释放，同时将它从NveARSceneRenderer的外部实例列表中移除。

\subsection Caption_Step_6 6 获取输出流

    const outputStream = arSceneRenderer.getOutputStream();
