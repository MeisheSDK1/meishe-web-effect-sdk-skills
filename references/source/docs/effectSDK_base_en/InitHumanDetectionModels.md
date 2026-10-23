\page InitHumanDetectionModels.md Init Human Detection Models

Download & Init Human Face Model

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

\note FS is the file system of Meishe wasm SDK. All file paths required by SDK must be FS path.
FS.mkdir() creates a directory; FS.writeFile() writes a file; for more methods, please refer to [Reference](https://emscripten.org/genindex.html)

\note If only render single image data, replace [NveHumanDetectionFeatureEnum.SemiImageMode](\ref NveHumanDetectionFeatureEnum) with [NveHumanDetectionFeatureEnum.ImageMode](\ref NveHumanDetectionFeatureEnum).
	
Download & Init Human Eyeball Model

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

\note If only render single image data, replace [NveHumanDetectionFeatureEnum.SemiImageMode](\ref NveHumanDetectionFeatureEnum) with [NveHumanDetectionFeatureEnum.ImageMode](\ref NveHumanDetectionFeatureEnum).
	
\note [initHumanDetectionExt](\ref NveEffectContext.initHumanDetectionExt()) can only be used after [initHumanDetection](\ref NveEffectContext.initHumanDetection()).
If only one model, initHumanDetection is enough. For more than one model, please use initHumanDetection to initialize the face model first, then use initHumanDetectionExt to initialize others.
	
Download & Init Human Segmentation Model

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
\note If only render single image data, replace [NveHumanDetectionFeatureEnum.SemiImageMode](\ref NveHumanDetectionFeatureEnum) with [NveHumanDetectionFeatureEnum.ImageMode](\ref NveHumanDetectionFeatureEnum).

\note [initHumanDetectionExt](\ref NveEffectContext.initHumanDetectionExt()) can only be used after [initHumanDetection](\ref NveEffectContext.initHumanDetection()).
If only one model, initHumanDetection is enough. For more than one model, please use initHumanDetection to initialize the face model first, then use initHumanDetectionExt to initialize others.

Download & Init Avatar Model

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
\note If only render single image data, replace [NveHumanDetectionFeatureEnum.SemiImageMode](\ref NveHumanDetectionFeatureEnum) with [NveHumanDetectionFeatureEnum.ImageMode](\ref NveHumanDetectionFeatureEnum).

\note [initHumanDetectionExt](\ref NveEffectContext.initHumanDetectionExt()) can only be used after [initHumanDetection](\ref NveEffectContext.initHumanDetection()).
If only one model, initHumanDetection is enough. For more than one model, please use initHumanDetection to initialize the face model first, then use initHumanDetectionExt to initialize others.