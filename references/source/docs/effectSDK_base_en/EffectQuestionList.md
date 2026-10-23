\page EffectQuestionList.md Collection of difficult questions

-# [Single Image Data Avatar Ineffective] (\ref EffectQuestionList_1)
-# [Effects Ineffective] (\ref EffectQuestionList_2)
-# [Install Asset Package Failed] (\ref EffectQuestionList_3)

-----------------------------------------------------------------------------------------------------------------------------
\section Detailed explanation of problems

\subsection EffectQuestionList_1 1. Single Image Data Avatar Ineffective
Most avatar need continuous input image datas, so you need set non-realtime rendering mode to make sure avatar effective if there is only one input image data.
<br>Quick Access:
	
    const arSceneRenderer = new NveARSceneRenderer();
    await arSceneRenderer.init({
        ...,
		detectionMode:NveHumanDetectionFeatureEnum.SemiImageMode | NveHumanDetectionFeatureEnum.MultiThread,
		workingInRealtimeMode:false,
    });
	
Basic Access:
	
    const effectInstance = nveGetEffectContextInstance().createVideoEffect('AR Scene', new NveRational(16, 9), false);
	
Also, there are many avatar need trigger by actions or expressions, so please pay attention to distinguishing them.

\subsection EffectQuestionList_2 2. Effects Ineffective
Firstly, make sure the ratio of effect created fit the image aspect ratio.
<br>Quick Access:
	
    const arSceneRenderer = new NveARSceneRenderer();
    await arSceneRenderer.init({
        ...,
		ratio: new NveRational(16, 9),
    });
	
Basic Access:
	
    const effectInstance = nveGetEffectContextInstance().createVideoEffect('AR Scene', new NveRational(16, 9), true);
		
For package effect, make sure the asset package installation is successful. Reference [Install Asset Package Failed] (\ref EffectQuestionList_3).

For some effects related to human detection, such as beauty, shape or makeup, please ensure the detection model and makeup data initialization are successful.
<br>For some effects related to human segmentation, please ensure segmentation model initialization is successful.
<br>For some effects related to avatar, please ensure avatar model initialization is successful.

Quick Access:
<br>Reference [Beauty & Shape & Makeup Init ARScene Renderer] (\ref BeautyShapeMakeup_Step_3)
<br>Reference [Segmentation & Background Init ARScene Renderer] (\ref SegmentationBackground_Step_3)
<br>Reference [Avatar Init ARScene Renderer] (\ref AvatarARScene_Step_3)
	
Basic Access:
<br>Reference [Init Human Detection Models] (\ref InitHumanDetectionModels.md)
<br>Reference [Set Human Detection Data] (\ref SetHumanDetectionData.md)

\subsection EffectQuestionList_3 3. Install Asset Package Failed
In non-localhost environment, ensure the package license used correctly, and confirm the SDK license has enabled these features with our business.
<br>Secondly, the package file name and package license file name don't support rename, otherwise, the installation will fail.
<br>Thirdly, ensure the type parameter in [installAssetPackage()](\ref NveAssetPackageManager.installAssetPackage())function is right.
<br>Finally, ensure the package path and the license path is right.
<br>Quick Access:

	await arSceneRenderer.setEffectList([
        {
            url:"https://qasset.meishesdk.com/material/pu/makeup/FDFB2239-44D1-491D-85A1-7A537860118E/FDFB2239-44D1-491D-85A1-7A537860118E.1.makeup",
            licUrl: "",
        },
    ]);

In localhost environment, ensure the url is right. In non-localhost environment, ensure the url and the licUrl are right.

Basic Access:
<br>Reference [Install Asset Package] (\ref InstallAssetPackage.md)
