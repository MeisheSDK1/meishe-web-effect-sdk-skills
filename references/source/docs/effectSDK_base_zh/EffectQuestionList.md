\page EffectQuestionList.md 疑难问题集锦

-# [单帧图像道具无效果] (\ref EffectQuestionList_1)
-# [添加特效无效果] (\ref EffectQuestionList_2)
-# [安装特效包失败] (\ref EffectQuestionList_3)

-----------------------------------------------------------------------------------------------------------------------------
\section 疑难详细解释

\subsection EffectQuestionList_1 1. 单帧图像道具无效果
多数道具都要求有连续的图像输入，所以对于单帧图像的情况，就需要设置非实时模式并且非视频图像模式，保证首帧图像能够渲染出道具效果。
<br>快速接入模式下：
	
    const arSceneRenderer = new NveARSceneRenderer();
    await arSceneRenderer.init({
        ...,
		detectionMode:NveHumanDetectionFeatureEnum.SemiImageMode | NveHumanDetectionFeatureEnum.MultiThread,
		workingInRealtimeMode:false,
    });
	
基础接入模式下：
	
    const effectInstance = nveGetEffectContextInstance().createVideoEffect('AR Scene', new NveRational(16, 9), false);
	
还有一些道具是需要动作或表情触发的，单帧图像无法触发效果，所以在选择道具的时候请注意区分。

\subsection EffectQuestionList_2 2. 添加特效无效果
首先请检查添加的特效画幅比参数与图像画幅比是否匹配。
<br>快速接入模式下：
	
    const arSceneRenderer = new NveARSceneRenderer();
    await arSceneRenderer.init({
        ...,
		ratio: new NveRational(16, 9),
    });
	
基础接入模式下：
	
    const effectInstance = nveGetEffectContextInstance().createVideoEffect('AR Scene', new NveRational(16, 9), true);
		
如果添加的特效是特效包的形式，那么请检查特效包是否安装成功，参考[安装特效包失败] (\ref EffectQuestionList_3)问题。

如果是人脸相关的特效，例如美颜美型美妆效果，那么请检查人脸相关模型初始化是否成功，美妆数据包是否设置成功。
<br>如果是人像分割相关效果，那么请检查人像分割模型初始化是否成功。
<br>如果是表情道具效果，那么请检查表情道具模型初始化是否成功。

快速接入模式下：
<br>参考[美颜美型美妆初始化ARScene快捷渲染器] (\ref BeautyShapeMakeup_Step_3)
<br>参考[人像分割虚拟背景初始化ARScene快捷渲染器] (\ref SegmentationBackground_Step_3)
<br>参考[表情道具初始化ARScene快捷渲染器] (\ref AvatarARScene_Step_3)
	
基础接入模式下：
<br>参考[初始化模型文件] (\ref InitHumanDetectionModels.md)
<br>参考[设置数据包资源] (\ref SetHumanDetectionData.md)

\subsection EffectQuestionList_3 3. 安装特效包失败
如果是非localhost环境下，首先检查是否正确使用了素材包的授权文件，同时跟商务确认SDK的授权是否已经开通了相应的功能。
<br>其次，素材包的文件名称和授权的文件名称请不要重命名，否则会导致安装失败。
<br>再次，[installAssetPackage()](\ref NveAssetPackageManager.installAssetPackage())接口传入的素材包类型参数是否匹配。
<br>最后，检查是否使用了正确的素材包和授权文件路径。
<br>快速接入模式下：

	await arSceneRenderer.setEffectList([
        {
            url:"https://qasset.meishesdk.com/material/pu/makeup/FDFB2239-44D1-491D-85A1-7A537860118E/FDFB2239-44D1-491D-85A1-7A537860118E.1.makeup",
            licUrl: "",
        },
    ]);

localhost环境下，保证url有效，非localhost环境下，保证url和licUrl同时有效。

基础接入模式下：
<br>参考[安装特效包资源] (\ref InstallAssetPackage.md)
