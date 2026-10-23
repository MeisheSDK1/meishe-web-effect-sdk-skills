\page ProjectSettings.md 运行环境及项目配置

运行环境：Chrome、FireFox、Edge、Safari等主流的浏览器。
美摄sdk使用了[SharedArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)技术, 对于网站的开发环境和部署环境，需要添加下面两个标头，以实现网站的跨源隔离
   
    Cross-Origin-Opener-Policy: same-origin
    Cross-Origin-Embedder-Policy: require-corp

开发环境配置：

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

正式部署环境，还必须使用[安全的上下文](https://developer.mozilla.org/zh-CN/docs/Web/Security/Secure_Contexts)以支持SharedArrayBuffer技术