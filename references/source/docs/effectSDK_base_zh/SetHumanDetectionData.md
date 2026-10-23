\page SetHumanDetectionData.md 设置数据包资源

下载并设置数据包资源

    import axios from 'axios';
        
    const faceDataUrl = "https://alieasset.meishesdk.com/model/makeup2_240_v2.1.2.dat";
    const response = await axios.get(faceDataUrl, { responseType: 'arraybuffer' });
    const faceData = '/' + faceDataUrl.split('/').pop();
    await FS.writeFile(faceData, new Uint8Array(response.data));
    nveGetEffectContextInstance().setupHumanDetectionData(NveHumanDetectionDataTypeEnum.Makeup2, faceData);
