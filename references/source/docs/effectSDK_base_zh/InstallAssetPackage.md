\page InstallAssetPackage.md 安装特效包资源

下载并安装特效包资源，以美妆特效包为例

    import axios from 'axios';
        
    const packageUrl = "https://qasset.meishesdk.com/material/pu/makeup/FDFB2239-44D1-491D-85A1-7A537860118E/FDFB2239-44D1-491D-85A1-7A537860118E.1.makeup";
    const response = await axios.get(packageUrl, { responseType: 'arraybuffer' });
    const packageFile = '/' + packageUrl.split('/').pop();
    await FS.writeFile(packageFile, new Uint8Array(response.data));
    let packageLicenseFile = '';
    let packageType = NveAssetPackageTypeEnum.Makeup;
    const assetPackageManager = nveGetEffectContextInstance().getAssetPackageManager();
    assetPackageManager.onFinishAssetPackageInstallation = (assetPackageId, assetPackageFilePath, assetPackageType, error) => {
		if (error === NveAssetPackageErrorEnum.NoError){
            // 成功
        } else {
            // 失败
        }
	};
    assetPackageManager.installAssetPackage(packageFile, packageLicenseFile, packageType);

\note [onFinishAssetPackageInstallation()](\ref NveEffectContext.onFinishAssetPackageInstallation())是特效包安装的回调函数；
- packageType类型是[NveAssetPackageTypeEnum](\ref NveAssetPackageTypeEnum)，不同的特效包资源对应不同的类型；
- packageFile要保持和原始资源包同名，不可以随意修改名称，否则安装会失败；
- packageLicenseFile在sdk没有校验授权时，可以设置为空字符串，如果sdk已经校验授权文件，就需要使用每一个特效包对应的授权文件，此授权文件是每一个特效包独有的，并不是sdk的授权文件。

\note 特效包安装成功后，如果需要卸载，可以调用[uninstallAssetPackage()](\ref NveAssetPackageManager.uninstallAssetPackage())接口。