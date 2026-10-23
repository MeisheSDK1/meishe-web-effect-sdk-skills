# 美摄智能美颜特效——声网

------

本文介绍如何在你的 Web 项目中集成和使用 `美摄智能美颜特效`插件。



## 前提条件

开始前请确保满足如下要求：

- Windows 或 macOS 计算机，需满足以下要求：
  - PC端浏览器版本：不支持ipad、pad设备；
  - Chrome,Opera,360浏览器：内核为Chrome，版本75含以上支持；
  - Firefox浏览器：内核版本大于58含以上的支持（特殊情况：版本为72的不支持）；
  - Safari浏览器：最低15.4，17.0以上性能最好，建议升至最新版
  - 具备物理音视频采集设备。
  - 可连接到互联网。如果你的网络环境部署了防火墙，请参考[应对防火墙限制](https://doc.shengwang.cn/doc/rtc/javascript/basic-features/firewall)以正常使用声网服务。
- 安装 [Node.js 及 npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)。

[^资源链接]: sdk的CDN地址，以及文档中所有素材地址均为美摄提供的测试公用地址，如果客户产品准备发布上线，需要联系商务获取sdk相关文件，私有化部署到客户的环境中，替换此地址再使用； 私有化部署wasm相关文件时，要对wasm文件配置brotli或者gzip进行压缩，有助于提升加载速度；



## 集成和调用

### 1. 集成SDK和插件

开始前，你需要在项目中分别集成声网视频 SDK 和 美摄智能美颜特效 插件。

#### 1.1  集成声网视频 SDK

美摄智能美颜特效插件需要与声网 Web SDK 4.x（v4.10.0 或以上）搭配使用。参考以下文档集成 Web SDK 并实现基础的视频通话：

[实现视频通话](https://doc.shengwang.cn/doc/rtc/javascript/get-started/quick-start)

#### 1.2 集成插件

参考以下步骤集成插件：

通过 `npm` 将 `美摄智能美颜特效` 插件等所需插件集成到你的项目中。

1. 运行以下命令安装插件：

   ```typescript
   npm i agora-meishe-effect-sdk jszip agora-rtc-sdk-ng
   ```

   

#### 1.3 集成脚本

在index.html的header中引入EffectSDK脚本：

   ```typescript
   <script src="https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/NvEffectSdk.js"></script>
   ```

### 2. 配置美摄智能美颜特效插件环境

美摄智能美颜特效插件需要配置响应头，使[SharedArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)可用。

#### 2.1 vite环境

vite.config.ts中配置plugins增加以下配置：

```typescript
...
  server: {
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  }
...
```

#### 2.2 webpack环境

webpack.config.ts中配置plugins增加以下配置：

```typescript
devServer：{
	headers: {
      'Cross-Origin-Opener-Policy':'same-origin',
      'Cross-Origin-Embedder-Policy':'require-corp',
    },
    ...
}
```

添加以上配置的目的是使请求头增加以上设置，以通知浏览器开启[SharedArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)。 

以上语法受`webpack`和`vite`版本影响，具体API可以按照各自版本自行配置。

### 3. 注册插件

参考以下步骤注册插件：

1. 在你的 文件中加入以下代码导入插件模块：

   ```typescript
   import { EffectSDKExtension, EffectSDKProcessor } from 'agora-meishe-effect-sdk'
   import AgoraRTC from "agora-rtc-sdk-ng";
   import jszip from "jszip";
   ```

2. 创建 `effectSDKExtension` 实例。

   ```typescript
    const effectSDKExtension = new EffectSDKExtension()
   ```

3. 调用 `AgoraRTC.registerExtensions` 并传入创建的 `effectSDKExtension` 实例。

   ```typescript
   AgoraRTC.registerExtensions([effectSDKExtension])
   ```

   

### 4. 初始化美摄智能美颜特效插件

初始化 美摄智能美颜特效插件 的目的是加载sdk和一系列模型包、数据包。以实现识别/加载美颜、美妆、人脸、头像、人像、贴纸、字幕、背景分割、特效道具等功能。

具体配置如下：

```typescript
const effectSDKProcessor = effectSDKExtension.createProcessor()
// arSceneRenderer为EffectSDK实例，需要保存
const arSceneRenderer = await effectSDKProcessor.init({
  faceModelUrl: 'https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model',//人脸模型包
  eyecontourModelUrl: 'https://alieasset.meishesdk.com/model/eyecontour/ms_eyecontour_v2_0_0_next.model',//人眼模型包
  avatarModelUrl: 'https://alieasset.meishesdk.com/model/avatar/ms_avatar_v2_0_0_next.model',//头像模型包
  segmentationModelUrl: 'https://alieasset.meishesdk.com/model/humanseg/ms_humansegment_medium_v2_0_0_next.model',//分割模型包
  makeupDataUrl: 'https://alieasset.meishesdk.com/model/makeup2_240_v2.1.2.dat',//美妆数据包
  fakefaceDataUrl: 'https://alieasset.meishesdk.com/model/fakeface_v1.0.1.dat',//人脸道具数据包
  faceCommonDataUrl: 'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',//人脸数据包
  advancedBeautyDataUrl: 'https://alieasset.meishesdk.com/model/advancedbeauty_v1.0.0.dat',//高级美妆数据包
  detectionMode: 32768 | 32,//sdkFlag，固定配置
  ratio: '16:9',//播放容器宽高比
  sdkCDNUrl: 'https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/',//EffectSDK的CDN链接
  licFileUrl: '',//授权文件地址
  mirror: true,//是否开启画面镜像，false不开启
  jszip
})
```

初始化 美摄智能美颜特效插件 后返回的 `arSceneRenderer` 的类型为 [NveARSceneRenderer](https://www.meishesdk.com/web/doc_ch/html/class_nve_a_r_scene_renderer.html) ，各种属性方法可以从类型文档查找。

### 5. 开启美摄智能美颜插件特效

参考以下步骤开启特效：

1. 调用 美摄智能美颜特效插件的 `EffectSDKExtension.createProcessor` 创建美颜插件的处理器 `processor` 实例:

   ```typescript
   // 创建美颜插件的处理器
   const effectSDKProcessor = EffectSDKExtension.createProcessor();
   ```

2. 创建videoTrack

   ```typescript
   // 创建并获取视频轨道
   const videoTrack = await AgoraRTC.createCameraVideoTrack();
   ```

3. 调用 RTC SDK 的 `videoTrack.pipe` 方法并指定 `videoTrack.processorDestination` 属性，将插件注入到 SDK 的摄像头数据流处理管道：

   ```typescript
   // 设置视频的处理管道
   videoTrack.pipe(effectSDKProcessor).pipe(videoTrack.processorDestination);
   ```

4. 调用 美摄智能美颜特效插件的 `enableBeauty` 方法启用基础美颜功能：

   ```typescript
   // 开启基础美颜功能
   arSceneRenderer.enableBeauty(true);
   ```

5. 播放

   video-container是video的id，宽高可以自定义

   ```typescript
   // <video id="video-container" style="width: 720px; height: 540px;" />
   videoTrack.play(document.getElementById('video-container') as HTMLVideoElement,{ fit: "contain",mirror:false });
   ```

6. 添加特效

   1. 添加美颜、美妆、美型、AR道具、滤镜等

      ```typescript
      const effectList = [
        {
          key: "Advanced Beauty Intensity", //磨皮
          intensity: 1,
        },
        {
          key: "Beauty Whitening", //美白
          intensity: 1,
        },
        {
          url: "https://qasset.meishesdk.com/material/pu/makeup/FDFB2239-44D1-491D-85A1-7A537860118E/FDFB2239-44D1-491D-85A1-7A537860118E.1.makeup", //美妆包地址
          licUrl: "", //鉴权文件地址
          intensity: 1, //强度
        },
        {
          url: "https://assets.meishesdk.com/material/videofx/8FBC81A0-F0A4-48BE-83CF-2D85CADB952A.2.videofx", //滤镜包地址
          licUrl: "", //鉴权文件地址
          intensity: 1, //强度
        }
      ];
      arSceneRenderer.setEffectList(effectList)
      ```

   2. 添加字幕、贴纸

      ```typescript
      const caption = await arSceneRenderer.createExternalEffectInstance(
          {
              text: "caption",
              inPoint: 0,
              duration: 500000000,
          }
      );
      
      const sticker = await arSceneRenderer.createExternalEffectInstance(
          {
              inPoint: 0,
              duration: 500000000,
              url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
              licUrl: "",
          }
      );
      arSceneRenderer.setExternalEffectInstanceList([sticker,caption]);
      ```

      


## 示例代码

下面列出了一段实现插件功能的代码以供参考。

1. vite.config.ts配置

   ```typescript
   export default defineConfig({
     plugins: [react()],
     server: {
       headers: {
         "Cross-Origin-Embedder-Policy": "require-corp",
         "Cross-Origin-Opener-Policy": "same-origin",
       },
     },
   })
   ```
   
   
   
2. 功能代码

   ```typescript
   import AgoraRTC from "agora-rtc-sdk-ng";
   import {
     EffectSDKExtension,
     EffectSDKProcessor,
   } from "agora-meishe-effect-sdk";
   import jszip from "jszip";
   
   const effectSDKExtension = new EffectSDKExtension();
   AgoraRTC.registerExtensions([effectSDKExtension]);
   const effectSDKProcessor = effectSDKExtension.createProcessor();
   // arSceneRenderer为EffectSDK实例，需要保存
   const arSceneRenderer = await effectSDKProcessor.init({
     faceModelUrl: 'https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model',//人脸模型包
     eyecontourModelUrl: 'https://alieasset.meishesdk.com/model/eyecontour/ms_eyecontour_v2_0_0_next.model',//人眼模型包
     avatarModelUrl: 'https://alieasset.meishesdk.com/model/avatar/ms_avatar_v2_0_0_next.model',//头像模型包
     segmentationModelUrl: 'https://alieasset.meishesdk.com/model/humanseg/ms_humansegment_medium_v2_0_0_next.model',//分割模型包
     makeupDataUrl: 'https://alieasset.meishesdk.com/model/makeup2_240_v2.1.2.dat',//美妆数据包
     fakefaceDataUrl: 'https://alieasset.meishesdk.com/model/fakeface_v1.0.1.dat',//人脸道具数据包
     faceCommonDataUrl: 'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',//人脸数据包
     advancedBeautyDataUrl: 'https://alieasset.meishesdk.com/model/advancedbeauty_v1.0.0.dat',//高级美妆数据包
     detectionMode: 32768 | 32,//sdkFlag，固定配置
     ratio: '16:9',//播放容器宽高比
     sdkCDNUrl: 'https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/',//EffectSDK的CDN链接
     licFileUrl: '',//授权文件地址
     mirror: true,//是否开启画面镜像，false不开启
     jszip
   })
   // 使用声网 SDK 创建视频
   const videoTrack = await AgoraRTC.createCameraVideoTrack();
   // 设置视频的处理管道
   videoTrack.pipe(effectSDKProcessor).pipe(videoTrack.processorDestination);
   
   // 开启基础美颜功能
   arSceneRenderer.enableBeauty(true);
   
   // 设置美颜
   const effectList = [
     {
       key: "Advanced Beauty Intensity", //磨皮
       intensity: 1,
     },
     {
       key: "Beauty Whitening", //美白
       intensity: 1,
     },
   ];
   
   // 添加美妆
   effectList.push(
     {
       url: "https://qasset.meishesdk.com/material/pu/makeup/FDFB2239-44D1-491D-85A1-7A537860118E/FDFB2239-44D1-491D-85A1-7A537860118E.1.makeup", //美妆包地址
       licUrl: "", //鉴权文件地址
       intensity: 1, //强度
     }
   )
   
   // 添加滤镜
   effectList.push(
     {
       url: "https://assets.meishesdk.com/material/videofx/8FBC81A0-F0A4-48BE-83CF-2D85CADB952A.2.videofx", //滤镜包地址
       licUrl: "", //鉴权文件地址
       intensity: 1, //强度
     }
   )
   
   arSceneRenderer.setEffectList(effectList);
   // <video id="video-container" style="width: 720px; height: 540px;" /> 宽高可以自定义
   videoTrack.play(document.getElementById('video-container') as HTMLVideoElement,{ fit: "contain",mirror:false });
   ```
   
   

## API参考

### 美摄智能美颜特效 API

#### EffectSDKExtension

```typescript
new EffectSDKExtension()
```

创建插件扩展器实例，该方法为 美摄智能美颜插件 导出方法。

#### createProcessor

```typescript
createProcessor();
```

创建一个插件处理器，返回 `EffectSDKProcessor` 实例。该方法位于 `EffectSDKExtension` 类下。

#### init

```typescript
effectSDKProcessor.init()
```

初始化插件，并返回插件实例，插件实例类为 [NveARSceneRenderer](https://www.meishesdk.com/web/doc_ch/html/class_nve_a_r_scene_renderer.html)。init方法位于 `EffectSDKProcessor` 类下。 

#### enableBeauty

```typescript
enableBeauty()
```

开启/关闭美颜效果，仅控制内建美颜特效。该方法位于 `NveARSceneRenderer` 插件实例下。

#### setEffectList

```typescript
setEffectList()
```

设置特效列表。可以设置美颜、美妆、美型、滤镜、道具、背景。该方法位于 `NveARSceneRenderer` 插件实例下。

#### getEffectList

```typescript
getEffectList()
```

获取已经设置的所有特效列表，包含添加的美颜、滤镜、道具等。该方法位于 `NveARSceneRenderer` 插件实例下。

#### createExternalEffectInstance

```typescript
createExternalEffectInstance()
```

创建扩展特效实例，用于创建字幕、贴纸实例。该方法位于 `NveARSceneRenderer` 插件实例下。

#### appendExternalEffectInstance

```typescript
appendExternalEffectInstance()
```

添加扩展特效实例到插件实例中。该方法位于 `NveARSceneRenderer` 插件实例下。

#### setExternalEffectInstanceList

```typescript
setExternalEffectInstanceList()
```

获取所有已添加的扩展特效列表。该方法位于 `NveARSceneRenderer` 插件实例下。

### 特效设置

#### 美颜

1. 内建特效

   内建特效无需特效包，属于 美摄智能美颜特效插件 内置的能力，但是需要了解key名。具体内容可以到 [美摄SDK Web文档](https://www.meishesdk.com/web/doc_ch/html/_fx_name_list_8md.html) 中查看，大致内容如下：

   ```typescript
   // key为内建特效关键字，用以区分特效功能
   // intensity为特效强度，取值范围一般处于[-1,1]、[0,1]之间
   // sdk内置百种内建特效，范围和key值可自行查找
   const beautyArray = [
   	{
   		key:'Advanced Beauty Intensity',//磨皮
   		intensity:1
   	},
       {
   		key:'Beauty Whitening',//美白
   		intensity:1
   	},
       {
   		key:'Beauty Reddening',//红润
   		intensity:1
   	},
       {
   		key:'Face Mesh Face Width Degree',//窄脸
   		intensity:1
   	},
       {
   		key:'Face Mesh Face Length Degree',//小脸
   		intensity:1
   	},
       {
   		key:'Face Mesh Face Size Degree',//瘦脸
   		intensity:1
   	},
       {
   		key:'Face Mesh Forehead Height Degree',//额头
   		intensity:1
   	},
       ...
   ]
   
   arSceneRenderer.setEffectList(beautyArray)
   
   ```

   

2. 美颜模版

   有别于内建特效，美颜模板需要传入模版包，而不是key值。代码如下：

   ```typescript
   const templateArray = [
       {
           url:"https://qasset.meishesdk.com/material/pu/makeup/A6F99920-966B-4B09-ADC7-A2E44BF0B894/A6F99920-966B-4B09-ADC7-A2E44BF0B894.1.zip",//模板包地址
           licUrl: "",//鉴权文件地址
           intensity:1,//强度
       }
   ]
   arSceneRenderer.setEffectList(templateArray)
   ```



#### 美妆

1. 普通包

   普通美妆包有口红、眼影、眉毛、睫毛、眼线、腮红、提亮、阴影、美瞳、妆容等一系列分类。配置方法与美颜模板相同，代码如下：

   ```typescript
   const makeupArray = [
       {
           url:"https://qasset.meishesdk.com/material/pu/makeup/08163375-19E9-48DD-857D-05B3444C0BB9/08163375-19E9-48DD-857D-05B3444C0BB9.1.makeup",//美妆包地址
           licUrl: "",//鉴权文件地址
           intensity:1,//强度
       }
   ]
   
   arSceneRenderer.setEffectList(makeupArray)
   ```

   

2. 整装包

   整装包是对一系列普通包的整合，美颜模版就属于整装包。配置方法如下：

   ```typescript
   arSceneRenderer.setEffectList([
       {
           url:"https://qasset.meishesdk.com/material/pu/makeup/A6F99920-966B-4B09-ADC7-A2E44BF0B894/A6F99920-966B-4B09-ADC7-A2E44BF0B894.1.zip",
       },
   ])
   ```



#### 滤镜

滤镜的配置方法与美妆包相同，代码如下：

```typescript
const filterArray = [
    {
        url:"https://qasset.meishesdk.com/material/pu/videofx/0D4B5D89-D665-4723-9EB6-734E47A323A0/0D4B5D89-D665-4723-9EB6-734E47A323A0.2.videofx",//滤镜包地址
        licUrl: "",//鉴权文件地址
        intensity:1,//强度
    }
]
arSceneRenderer.setEffectList(filterArray)
```



#### 虚拟背景

1. 背景模糊

   需要指定背景模糊特效包，配置方法如下：

   ```typescript
   arSceneRenderer.setEffectList([
       {
           url:"https://qasset.meishesdk.com/material/pu/videofx/F31CBEBD-9F86-4AC6-87AB-1A289A62E3AE/F31CBEBD-9F86-4AC6-87AB-1A289A62E3AE.1.videofx",//特效包地址
           licUrl:''//鉴权文件地址
       }
   ])
   ```

   

2. 背景替换

   背景替换配置如下：

   ```typescript
   arSceneRenderer.setEffectList([
       {segmentationBackgroundUrl:"https://alieasset.meishesdk.com/material/bgimage/f513a297-4b3a-4b65-ac19-4aeaae5c8360.jpg"}//替换图片地址
   ])
   ```

   

#### AR道具

配置方法与滤镜相同，代码如下：

```typescript
arSceneRenderer.setEffectList([
    { 
    	url: "https://qasset.meishesdk.com/material/pu/arscene/B251CEC7-B285-48F9-AC7B-7C576F420971/B251CEC7-B285-48F9-AC7B-7C576F420971.4.arscene",//道具包地址
    	licUrl: '' //鉴权文件地址
    }
])
```



#### 字幕

##### 1 普通字幕

普通字幕分类有花字、动态底图、逐字字幕、气泡字幕等。配置方法与美颜美妆等并不相同。

`createExternalEffectInstance` 方法参数信息表：

| **参数**                  | **类型** | **必填** | **默认值** | **说明**                                                     |
| ------------------------- | -------- | -------- | ---------- | :----------------------------------------------------------- |
| modular                   | Boolean  | 否       | false      | 是否为模块字幕，模块字幕类型才可以添加气泡和动画等效果。     |
| text                      | String   | 是       |            | 字幕文字。                                                   |
| inPoint                   | Number   | 是       |            | 字幕起始时间，单位微秒。                                     |
| duration                  | Number   | 是       |            | 字幕持续时间，单位微秒，设置为Number.MAX_SAFE_INTEGER表示持续显示。 |
| url                       | String   | 否       |            | 普通字幕样式包地址。                                         |
| licUrl                    | String   | 否       |            | 普通字幕样式包对应的授权文件地址。                           |
| fontFileUrl               | String   | 否       |            | 字体文件地址，如果不设置，非英文文字会因为找不到对应的字体显示错误。 |
| captionRendererUrl        | String   | 否       |            | 花字效果样式包地址。                                         |
| captionRendererLicUrl     | String   | 否       |            | 花字效果样式包对应的授权文件地址。                           |
| captionContextUrl         | String   | 否       |            | 气泡效果样式包地址。                                         |
| captionContextLicUrl      | String   | 否       |            | 气泡效果样式包对应的授权文件地址。                           |
| captionAnimationUrl       | String   | 否       |            | 动画效果样式包地址。                                         |
| captionAnimationLicUrl    | String   | 否       |            | 动画效果样式包对应的授权文件地址。                           |
| animationPeriod           | Number   | 否       |            | 动画效果周期，单位毫秒。                                     |
| captionInAnimationUrl     | String   | 否       |            | 入动画效果样式包对应的授权文件地址。                         |
| captionInAnimationLicUrl  | String   | 否       |            | 入动画效果样式包地址。                                       |
| inAnimationDuration       | Number   | 否       |            | 入动画效果持续时间，单位毫秒。                               |
| captionOutAnimationUrl    | String   | 否       |            | 出动画效果样式包地址。                                       |
| captionOutAnimationLicUrl | String   | 否       |            | 出动画效果样式包对应的授权文件地址。                         |
| outAnimationDuration      | Number   | 否       |            | 出动画效果持续时间，单位毫秒。                               |
| positionX                 | Number   | 否       |            | 水平位置，归一化值，取值范围[-1，1]，中心是0，向右为正方向。 |
| positionY                 | Number   | 否       |            | 垂直位置，归一化值，取值范围[-1，1]，中心是0，向上为正方向。 |
| position                  | String   | 否       |            | 方位信息，可设置的值包括top-left、top、top-right、left、center、right、bottom-left、bottom和bottom-right九个方位。 |

1. 增加

   字幕创建方法为 `createExternalEffectInstance` ，字幕添加方法为 `appendExternalEffectInstance` 。

   以下示例中，各类不同字幕效果使用统一的API创建，仅有参数不同。具体参数参考上方参数表

   ```typescript
   // 创建不带字幕样式的普通字幕
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 500000000,
       }
   );
   
   // 创建带字幕样式的普通字幕
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 500000000,
           url: "https://qasset.meishesdk.com/material/pu/caption/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3.1.captionstyle",
           licUrl: "",
       }
   );
   
   // 创建带字幕样式和花字效果的普通字幕
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 500000000,
           url: "https://qasset.meishesdk.com/material/pu/caption/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3.1.captionstyle",
           licUrl: "",
           captionRendererUrl: "https://qasset.meishesdk.com/material/pu/caption/262BC53C-CB55-45D4-96BD-2BD79D3C5F11/262BC53C-CB55-45D4-96BD-2BD79D3C5F11.1.captionrenderer",
           captionRendererLicUrl: "",
       }
   );
   
   // 创建带位置信息的普通字幕
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 500000000,
           positionX: -0.6,
           positionY: 0.9,
       }
   );
   
   // 创建带方位位置信息的普通字幕
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 500000000,
           position: "top-right",
       }
   );
   
   // 创建带字体的普通字幕
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 500000000,
           fontFileUrl: "https://alieasset.meishesdk.com/release/material/font/164C237B-16CB-49D5-A205-1976B16046B8/164C237B-16CB-49D5-A205-1976B16046B8.ttf",
       }
   );
   
   // 创建不带样式的模块字幕
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           modular: true,
           text: "modularCaption",
           inPoint: 0,
           duration: 500000000,
       }
   );
   
   // 创建带花字效果的模块字幕
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           modular: true,
           text: "modularCaption",
           inPoint: 0,
           duration: 500000000,
           captionRendererUrl: "https://qasset.meishesdk.com/material/pu/caption/262BC53C-CB55-45D4-96BD-2BD79D3C5F11/262BC53C-CB55-45D4-96BD-2BD79D3C5F11.1.captionrenderer",
           captionRendererLicUrl: "",
       }
   );
   
   // 创建带气泡效果的模块字幕
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           modular: true,
           text: "modularCaption",
           inPoint: 0,
           duration: 500000000,
           captionContextUrl: "https://qasset.meishesdk.com/material/pu/caption/BFC751C8-D9B2-440A-A3DF-8D02841745C1/BFC751C8-D9B2-440A-A3DF-8D02841745C1.1.captioncontext",
           captionContextLicUrl: "",
       }
   );
   
   // 创建带动画效果的模块字幕
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           modular: true,
           text: "modularCaption",
           inPoint: 0,
           duration: 500000000,
           captionAnimationUrl: "https://qasset.meishesdk.com/material/pu/caption/C34F307B-5576-4525-B309-4166D2628093/C34F307B-5576-4525-B309-4166D2628093.1.captionanimation",
           captionAnimationLicUrl: "",
           animationPeriod: 2500,
       }
   );
   
   // 使用字幕实例的接口修改字幕其他属性
   caption.scaleCaption2(0.8);
   caption.setUnderline(true);
   
   // 添加字幕实例
   arSceneRenderer.appendExternalEffectInstance(caption);
   ```

   普通字幕实例类型为 [NveCaption](https://www.meishesdk.com/web/doc_ch/html/class_nve_caption.html) ，各类属性方法配置，可以参考链接文档。

2. 获取

   获取当前设置的所有扩展特效列表，使用`getExternalEffectInstanceList` 方法。代码如下：

   ```typescript
   // 获取所有扩展特效列表，注意扩展特效中不仅仅只有字幕，可能存在其他特效，需要过滤
   // 也可以自行维护已经设置的字幕实例列表
   let instanceList = arSceneRenderer.getExternalEffectInstanceList();
   let captionInstanceList = instanceList.filter(instance=>instance instanceof NveCaption)
   ```

   

3. 删除

   通过 `getExternalEffectInstanceList` 获取列表，查找与当前字幕实例id相同的子项并删除。再通过 `setExternalEffectInstanceList` 重新设置列表。代码如下：

   ```typescript
   let deleteInstanceId = 'xxxx'// 需要删除的字幕实例的id
   let instanceList = arSceneRenderer.getExternalEffectInstanceList()// 删除时获取扩展特效列表无需过滤
   let index = instanceList.findIndex(instance=>instance.id!==deleteInstanceId)// 获取删除子项下标
   if(index!==-1){
       instanceList[index].release()// 释放资源
       instanceList.splice(index,1)
       arSceneRenderer.setExternalEffectInstanceList(instanceList);// 重新设置扩展特效列表
   }
   
   ```



##### 2 组合字幕

`createExternalEffectInstance` 参数参考普通字幕所列参数表格。

代码如下：

```typescript
const compoundCaption = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 500000000,
        url: "https://qasset.meishesdk.com/material/pu/compoundcaption/D037A06A-FFD8-4863-A291-A2BC105F0BBC/D037A06A-FFD8-4863-A291-A2BC105F0BBC.1.compoundcaption",
        licUrl: "",
    }
);

// 创建带位置信息的复合字幕
const compoundCaption = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 500000000,
        url: "https://qasset.meishesdk.com/material/pu/compoundcaption/D037A06A-FFD8-4863-A291-A2BC105F0BBC/D037A06A-FFD8-4863-A291-A2BC105F0BBC.1.compoundcaption",
        licUrl: "",
        positionX: -0.6,
        positionY: 0.9,
    }
);

// 创建带方位位置信息的复合字幕
const compoundCaption = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 500000000,
        url: "https://qasset.meishesdk.com/material/pu/compoundcaption/D037A06A-FFD8-4863-A291-A2BC105F0BBC/D037A06A-FFD8-4863-A291-A2BC105F0BBC.1.compoundcaption",
        licUrl: "",
        position: "top-right",
    }
);

// 使用复合字幕实例的接口修改其他属性
compoundCaption.scaleCaption2(0.8);
compoundCaption.setText(0, "caption0");

// 添加复合字幕实例
arSceneRenderer.appendExternalEffectInstance(compoundCaption);
```

组合字幕的实例类型为 [NveCompoundCaption](https://www.meishesdk.com/web/doc_ch/html/class_nve_compound_caption.html) ，可以参考普通字幕的思路进行配置。

#### 动画贴纸

贴纸与字幕创建方法类似，但是参数有些不同，参数表如下：

| **参数**                          | **类型** | **必填** | **默认值** | **说明**                                                     |
| --------------------------------- | -------- | -------- | ---------- | ------------------------------------------------------------ |
| inPoint                           | Number   | 是       |            | 动画贴纸起始时间，单位微秒。                                 |
| duration                          | Number   | 是       |            | 动画贴纸持续时间，单位微秒，设置为Number.MAX_SAFE_INTEGER表示持续显示。 |
| url                               | String   | 否       |            | 动画贴纸包地址。                                             |
| licUrl                            | String   | 否       |            | 动画贴纸包对应的授权文件地址。                               |
| animatedStickerAnimationUrl       | String   | 否       |            | 动画效果样式包地址。                                         |
| animatedStickerAnimationLicUrl    | String   | 否       |            | 动画效果样式包对应的授权文件地址。                           |
| animationPeriod                   | Number   | 否       |            | 动画效果周期，单位毫秒。                                     |
| animatedStickerInAnimationUrl     | String   | 否       |            | 入动画效果样式包地址。                                       |
| animatedStickerInAnimationLicUrl  | String   | 否       |            | 入动画效果样式包对应的授权文件地址。                         |
| inAnimationDuration               | Number   | 否       |            | 入动画效果持续时间，单位毫秒。                               |
| animatedStickerOutAnimationUrl    | String   | 否       |            | 出动画效果样式包地址。                                       |
| animatedStickerOutAnimationLicUrl | String   | 否       |            | 出动画效果样式包对应的授权文件地址。                         |
| outAnimationDuration              | Number   | 否       |            | 出动画效果持续时间，单位毫秒。                               |
| positionX                         | Number   | 否       |            | 水平位置，归一化值，取值范围[-1，1]，中心是0，向右为正方向。 |
| positionY                         | Number   | 否       |            | 垂直位置，归一化值，取值范围[-1，1]，中心是0，向上为正方向。 |
| position                          | String   | 否       |            | 方位信息，可设置的值包括top-left、top、top-right、left、center、right、bottom-left、bottom和bottom-right九个方位。 |

代码如下：

```typescript
// 创建不带动画效果的贴纸
const sticker = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 500000000,
        url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
        licUrl: "",
    }
);

// 创建带动画效果的贴纸
const sticker = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 500000000,
        url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
        licUrl: "",
        animatedStickerAnimationUrl: "https://qasset.meishesdk.com/material/pu/animatedsticker/58A339F9-8B2F-479F-8A1D-35E4456CFA9B/58A339F9-8B2F-479F-8A1D-35E4456CFA9B.1.animatedstickeranimation",
        animatedStickerAnimationLicUrl: "",
        animationPeriod: 5000,
    }
);

// 创建带位置信息的贴纸
const sticker = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 500000000,
        url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
        licUrl: "",
        positionX: -0.6,
        positionY: 0.9,
    }
);

// 创建带方位位置信息的贴纸
const sticker = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 500000000,
        url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
        licUrl: "",
        position: "top-right",
    }
);

// 使用动画贴纸实例的接口修改其他属性
sticker.scaleAnimatedSticker2(0.5);

// 添加动画贴纸实例
arSceneRenderer.appendExternalEffectInstance(sticker);
```

贴纸的实例类型为 [NveAnimatedSticker](https://www.meishesdk.com/web/doc_ch/html/class_nve_animated_sticker.html) ，可以参考字幕的思路进行操作配置。

### RTC API

声网 Web SDK 的插件相关方法：

- [`AgoraRTC.registerExtensions`](https://doc.shengwang.cn/api-ref/rtc/javascript/interfaces/iagorartc#registerExtensions)
- [`ICameraVideoTrack.pipe`](https://doc.shengwang.cn/api-ref/rtc/javascript/interfaces/icameravideotrack#pipe)
