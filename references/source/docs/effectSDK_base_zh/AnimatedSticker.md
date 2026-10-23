\page AnimatedSticker.md 动画贴纸

* 1 [导入库文件] (\ref AnimatedSticker_Step_1)
* 2 [授权验证] (\ref AnimatedSticker_Step_2)
* 3 [初始化ARScene快捷渲染器] (\ref AnimatedSticker_Step_3)
* 4 [启动摄像头] (\ref AnimatedSticker_Step_4)
* 5 [添加动画贴纸] (\ref AnimatedSticker_Step_5)
* 6 [获取输出流] (\ref AnimatedSticker_Step_6)

\subsection AnimatedSticker_Step_1 1 导入库文件
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
		  
\subsection AnimatedSticker_Step_2 2 授权验证
美摄web端Effectsdk为了便于客户接入测试，针对localhost启动的方式，不需要进行授权验证就可以使用所有效果，
客户使用非localhost环境部署时，需要联系商务获取sdk授权文件，再按照如下方式进行授权验证即可。
wasm文件加载成功的回调函数loadingFinished中调用[verifySdkLicenseFileUrl()](\ref NveEffectContext.verifySdkLicenseFileUrl())进行授权验证:

	if(nveGetEffectContextInstance().verifySdkLicenseFileUrl('/static/effectsdk.lic')) {
		// 授权成功
	} else {
		// 授权失败
	}

授权验证失败则无法使用sdk的所有效果。

\subsection AnimatedSticker_Step_3 3 初始化ARScene快捷渲染器

    const arSceneRenderer = new NveARSceneRenderer();
    await arSceneRenderer.init({
        faceModelUrl:"https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model",
    	faceCommonDataUrl:'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',
    });

\note 初始化完成后默认会带有美颜。

\subsection AnimatedSticker_Step_4 4 启动摄像头

    await arSceneRenderer.startupCamera({
    	audio: false,
    	video: {width: 1280, height: 720, frameRate: {ideal: 30, max: 60}}
    });

\subsection AnimatedSticker_Step_5 5 添加动画贴纸
	
	// 创建不带动画效果的贴纸
	const sticker = await arSceneRenderer.createExternalEffectInstance(
	    {
			inPoint: 0,
	        duration: 5000000,
			url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
	        licUrl: "",
	    }
	);
	
	// 创建带动画效果的贴纸
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
	
	// 创建带位置信息的贴纸
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
	
	// 创建带方位位置信息的贴纸
	const sticker = await arSceneRenderer.createExternalEffectInstance(
	    {
	        inPoint: 0,
	        duration: 5000000,
			url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
	        licUrl: "",
			position: "top-right",
	    }
	);
	
	// 使用动画贴纸实例的接口修改其他属性
	sticker.scaleAnimatedSticker2(0.5);
	
	// 添加动画贴纸实例
	arSceneRenderer.appendExternalEffectInstance(sticker);

[NveARSceneRenderer.createExternalEffectInstance()](\ref NveARSceneRenderer.createExternalEffectInstance())接口的动画贴纸配置参数详细说明：
| **参数**                          | **类型** | **必填** | **默认值** | **说明**                                                                                                          |
| --------------------------------- | -------- | -------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| inPoint        		            | Number   | 是       |             | 动画贴纸起始时间，单位微秒。                                                                                      |
| duration  			            | Number   | 是       |             | 动画贴纸持续时间，单位微秒，设置为Number.MAX_SAFE_INTEGER表示持续显示。                                           |
| url         			            | String   | 否       |             | 动画贴纸包地址。                                                                                                  |
| licUrl                            | String   | 否       |             | 动画贴纸包对应的授权文件地址。                                                                                    |
| animatedStickerAnimationUrl       | String   | 否       |             | 动画效果样式包地址。                                                                                              |
| animatedStickerAnimationLicUrl    | String   | 否       |             | 动画效果样式包对应的授权文件地址。                                                                                |
| animationPeriod         	        | Number   | 否       |             | 动画效果周期，单位毫秒。                                                                                          |
| animatedStickerInAnimationUrl     | String   | 否       |             | 入动画效果样式包地址。                                                                                            |
| animatedStickerInAnimationLicUrl  | String   | 否       |             | 入动画效果样式包对应的授权文件地址。                                                                              |
| inAnimationDuration               | Number   | 否       |             | 入动画效果持续时间，单位毫秒。                                                                                    |
| animatedStickerOutAnimationUrl    | String   | 否       |             | 出动画效果样式包地址。                                                                                            |
| animatedStickerOutAnimationLicUrl | String   | 否       |             | 出动画效果样式包对应的授权文件地址。                                                                              |
| outAnimationDuration              | Number   | 否       |             | 出动画效果持续时间，单位毫秒。                                                                                    |
| positionX                         | Number   | 否       |             | 水平位置，归一化值，取值范围[-1，1]，中心是0，向右为正方向。                                                      |
| positionY                         | Number   | 否       |             | 垂直位置，归一化值，取值范围[-1，1]，中心是0，向上为正方向。                                                      |
| position                          | String   | 否       |             | 方位信息，可设置的值包括top-left、top、top-right、left、center、right、bottom-left、bottom和bottom-right九个方位。|

\note 基于动画贴纸配置的参数，NveARSceneRenderer.createExternalEffectInstance()返回的动画贴纸实例为[NveAnimatedSticker](\ref NveAnimatedSticker)，修改动画贴纸其他属性请参考此类型的接口。
\note NveARSceneRenderer.createExternalEffectInstance()创建的实例，由于外部可能还会持有使用它，因此NveARSceneRenderer.release()释放资源的时候并不会释它，不使用的时候需要外部调用该实例的[release()](\ref NveEffectInstance.release())接口释放，同时将它从NveARSceneRenderer的外部实例列表中移除。

\subsection AnimatedSticker_Step_6 6 获取输出流

    const outputStream = arSceneRenderer.getOutputStream();
