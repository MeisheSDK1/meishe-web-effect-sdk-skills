\page EffectSDKSamples.md 样例
   
	import axios from 'axios';
        
    async installAsset(packageUrl, packageLicenseUrl) {
        let response = await axios.get(packageUrl, { responseType: 'arraybuffer' });
        const packageFile = '/' + packageUrl.split('/').pop();
        const assetUuid = packageUrl.split('/').pop().split('.')[0];
        const suffix = packageFile.split('.').pop();
        await FS.writeFile(packageFile, new Uint8Array(response.data));
        
        let packageLicenseFile = '';
        if (packageLicenseUrl) {
            response = await axios.get(packageLicenseUrl, { responseType: 'arraybuffer' });
            packageLicenseFile = '/' + packageLicenseUrl.split('/').pop();
            await FS.writeFile(packageLicenseFile, new Uint8Array(response.data));
        }
        
        let assetType
        if (suffix === 'videofx') {
            assetType = NveAssetPackageTypeEnum.VideoFx;
        } else if (suffix === 'captionstyle') {
            assetType = NveAssetPackageTypeEnum.CaptionStyle;
        } else if (suffix === 'animatedsticker') {
            assetType = NveAssetPackageTypeEnum.AnimatedSticker;
        } else if (suffix === 'videotransition') {
            assetType = NveAssetPackageTypeEnum.VideoTransition;
        } else if (suffix === 'makeup') {
            assetType = NveAssetPackageTypeEnum.Makeup;
        } else if (suffix === 'facemesh') {
            assetType = NveAssetPackageTypeEnum.FaceMesh;
        }
        return new Promise((resolve, reject) => {
            if (!assetType) {
                reject(assetUuid);
                return;
            }
            
            const assetPackageManager = nveGetEffectContextInstance().getAssetPackageManager();
            // 检查包状态，如果已经安装，则不需要再次安装
            const status = assetPackageManager.getAssetPackageStatus(assetUuid, assetType);
            if (status !== NveAssetPackageStatusEnum.NotInstalled) {
                resolve(assetUuid);
                return;
            }
            
            assetPackageManager.onFinishAssetPackageInstallation = (assetPackageId, assetPackageFilePath, assetPackageType, error) => {
                FS.unlink(assetPackageFilePath, 0);
                if (error === 0 && assetPackageId === assetUuid) {
                    resolve(assetUuid);
                } else {
                    reject(assetUuid);
                }
            }
            assetPackageManager.installAssetPackage(packageFile, packageLicenseFile, assetType);
        })
    }
    
    const ratio = new NveRational(16, 9);
    const effectInstance = nveGetEffectContextInstance().createVideoEffect('AR Scene', ratio, true);
    // 美颜
    effectInstance.setIntVal("Advanced Beauty Type", 0);
    effectInstance.setBooleanVal("Beauty Effect", true);
    effectInstance.setBooleanVal("Advanced Beauty Enable", true);
    effectInstance.setFloatVal("Advanced Beauty Intensity", 1);
    // 美白
    const lutUrl = '/static/test.mslut';
    const response = await axios.get(lutUrl, { responseType: 'arraybuffer' });
    const lutFile = '/' + lutUrl.split('/').pop();
    await FS.writeFile(lutFile, new Uint8Array(response.data));
    effectInstance.setBooleanVal("Whitening Lut Enabled", true);
    effectInstance.setStringVal("Whitening Lut File", lutFile);
    // 美型
    effectInstance.setBooleanVal("Face Mesh Internal Enabled", true);
    const faceMeshUrl = 'https://qasset.meishesdk.com/material/pu/makeup/63BD3F32-D01B-4755-92D5-0DE361E4045A/63BD3F32-D01B-4755-92D5-0DE361E4045A.3.facemesh';
    const faceMeshUuid = await this.installAsset(faceMeshUrl);
    effectInstance.setStringVal("Face Mesh Face Size Custom Package Id", faceMeshUuid);
    // 美妆
    const makeupUrl = 'https://qasset.meishesdk.com/material/pu/makeup/FDFB2239-44D1-491D-85A1-7A537860118E/FDFB2239-44D1-491D-85A1-7A537860118E.1.makeup';
    const makeupUuid = await this.installAsset(makeupUrl);
    effectInstance.setStringVal("Makeup Lip Package Id", makeupUuid);


\note 更多特效参数请[参考](https://www.meishesdk.com/web/doc_ch/html/_fx_name_list_8md.html)