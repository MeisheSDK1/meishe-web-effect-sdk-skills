\page ProjectSettings.md Browser Environment & Project Settings

Browser environment: Chrome, FireFox, Edge, Safari, etc.
Meishe SDK uses [SharedArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) feature, 
so you need to add the following headers to achieve cross-origin isolation of development environment,
   
    Cross-Origin-Opener-Policy: same-origin
    Cross-Origin-Embedder-Policy: require-corp

Project settings：

    // vite.config.js
    export default defineConfig({
        plugins: [
            ...,
            {
                name: "configure-response-headers",
                configureServer: (server) => {
					server.middlewares.use((_req, res, next) => {
					res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
					res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
					next();
					});
                },
            },
        ],
        ...
    })

For deployment environment，[Secure Contexts](https://developer.mozilla.org/zh-CN/docs/Web/Security/Secure_Contexts) must also be used to support SharedArrayBuffer.