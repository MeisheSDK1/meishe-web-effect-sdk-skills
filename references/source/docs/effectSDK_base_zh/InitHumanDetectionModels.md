\page InitHumanDetectionModels.md 初始化模型文件

下载并初始化人脸模型

    import axios from 'axios';
        
    const faceModelUrl = "https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model";
    const response = await axios.get(faceModelUrl, { responseType: 'arraybuffer' });
    const faceModel = '/' + faceModelUrl.split('/').pop();
    await FS.writeFile(faceModel, new Uint8Array(response.data));
    nveGetEffectContextInstance().initHumanDetection(
        faceModel, 
        "", 
        NveHumanDetectionFeatureEnum.FaceLandmark | NveHumanDetectionFeatureEnum.FaceAction 
        | NveHumanDetectionFeatureEnum.SemiImageMode | NveHumanDetectionFeatureEnum.MultiThread
    );

\note FS是wasm的文件系统，所有sdk需要的文件路径都需要在FS的系统内。FS.mkdir()创建目录；FS.writeFile()写入文件；更多方法请[参考](https://emscripten.org/genindex.html)。

\note 如果只处理图片，则将[NveHumanDetectionFeatureEnum.SemiImageMode](\ref NveHumanDetectionFeatureEnum)替换成[NveHumanDetectionFeatureEnum.ImageMode](\ref NveHumanDetectionFeatureEnum)即可。
	
下载并初始化眼球模型

    import axios from 'axios';
        
    const eyeballModelUrl = "https://alieasset.meishesdk.com/model/eyecontour/ms_eyecontour_v2_0_0_next.model";
    const response = await axios.get(eyeballModelUrl, { responseType: 'arraybuffer' });
    const eyeballModel = '/' + eyeballModelUrl.split('/').pop();
    await FS.writeFile(eyeballModel, new Uint8Array(response.data));
    nveGetEffectContextInstance().initHumanDetectionExt(
        eyeballModel, 
        "", 
        NveHumanDetectionFeatureEnum.EyeballLandmark | NveHumanDetectionFeatureEnum.SemiImageMode 
        | NveHumanDetectionFeatureEnum.MultiThread
    );

\note 如果只处理图片，则将[NveHumanDetectionFeatureEnum.SemiImageMode](\ref NveHumanDetectionFeatureEnum)替换成[NveHumanDetectionFeatureEnum.ImageMode](\ref NveHumanDetectionFeatureEnum)即可。
	
\note [initHumanDetectionExt](\ref NveEffectContext.initHumanDetectionExt())仅用于[initHumanDetection](\ref NveEffectContext.initHumanDetection())初始化之后才会生效，如果只初始化一个模型，则需要优先使用initHumanDetection，如果初始化多个模型，人脸模型要优先初始化。
	
下载并初始化人体分割模型

    import axios from 'axios';
        
    const segmentationModelUrl = "https://alieasset.meishesdk.com/model/humanseg/ms_humansegment_medium_v2_0_0_next.model";
    const response = await axios.get(segmentationModelUrl, { responseType: 'arraybuffer' });
    const segmentationModel = '/' + segmentationModelUrl.split('/').pop();
    await FS.writeFile(segmentationModel, new Uint8Array(response.data));
    nveGetEffectContextInstance().initHumanDetectionExt(
        segmentationModel,
        "", 
		NveHumanDetectionFeatureEnum.SegmentationBackground | NveHumanDetectionFeatureEnum.SemiImageMode 
        | NveHumanDetectionFeatureEnum.MultiThread
    );
\note 如果只处理图片，则将[NveHumanDetectionFeatureEnum.SemiImageMode](\ref NveHumanDetectionFeatureEnum)替换成[NveHumanDetectionFeatureEnum.ImageMode](\ref NveHumanDetectionFeatureEnum)即可。

\note [initHumanDetectionExt](\ref NveEffectContext.initHumanDetectionExt())仅用于[initHumanDetection](\ref NveEffectContext.initHumanDetection())初始化之后才会生效，如果只初始化一个模型，则需要优先使用initHumanDetection，如果初始化多个模型，人脸模型要优先初始化。

下载并初始化表情道具模型

    import axios from 'axios';
        
    const avatarModelUrl = "https://alieasset.meishesdk.com/model/avatar/ms_avatar_v2_0_0_next.model";
    const response = await axios.get(avatarModelUrl, { responseType: 'arraybuffer' });
    const avatarModel = '/' + avatarModelUrl.split('/').pop();
    await FS.writeFile(avatarModel, new Uint8Array(response.data));
    nveGetEffectContextInstance().initHumanDetectionExt(
        avatarModel,
        "", 
		NveHumanDetectionFeatureEnum.AvatarExpression | NveHumanDetectionFeatureEnum.SemiImageMode 
        | NveHumanDetectionFeatureEnum.MultiThread
    );
\note 如果只处理图片，则将[NveHumanDetectionFeatureEnum.SemiImageMode](\ref NveHumanDetectionFeatureEnum)替换成[NveHumanDetectionFeatureEnum.ImageMode](\ref NveHumanDetectionFeatureEnum)即可。

\note [initHumanDetectionExt](\ref NveEffectContext.initHumanDetectionExt())仅用于[initHumanDetection](\ref NveEffectContext.initHumanDetection())初始化之后才会生效，如果只初始化一个模型，则需要优先使用initHumanDetection，如果初始化多个模型，人脸模型要优先初始化。