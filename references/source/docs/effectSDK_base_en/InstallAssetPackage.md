\page InstallAssetPackage.md Install Asset Package

Download and install asset package，e.g. makeup package,

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
            // Success
        } else {
            // Fail
        }
	};
    assetPackageManager.installAssetPackage(packageFile, packageLicenseFile, packageType);

\note [onFinishAssetPackageInstallation()](\ref NveEffectContext.onFinishAssetPackageInstallation()) is the callback of installAssetPackage;
- packageType parameter type is [NveAssetPackageTypeEnum](\ref NveAssetPackageTypeEnum), defferent package type is defferent;
- packageFile parameter need original file name, which could not be modified；
- packageLicenseFile parameter can be null-string if not verify sdk license, otherwise, must be it's own license。

\note After success of installation, can use [uninstallAssetPackage()](\ref NveAssetPackageManager.uninstallAssetPackage()) to uninstall it which donnot needed。