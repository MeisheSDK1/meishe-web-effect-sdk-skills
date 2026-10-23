\page VerifyLicense.md 授权验证

美摄web端Effectsdk为了便于客户接入测试，针对localhost启动的方式，不需要进行授权验证就可以使用所有效果，
客户使用非localhost环境部署时，需要联系商务获取sdk授权文件，再按照如下方式进行授权验证即可。
wasm文件加载成功的回调函数loadingFinished中调用[verifySdkLicenseFileUrl()](\ref NveEffectContext.verifySdkLicenseFileUrl())进行授权验证:

	if(nveGetEffectContextInstance().verifySdkLicenseFileUrl('/static/effectsdk.lic')) {
		// 授权成功
	} else {
		// 授权失败
	}

授权验证失败则无法使用sdk的所有效果。

