\page Others.md 其他

* 1 [初始化ARScene快捷渲染器] (\ref Others_1)
* 2 [释放ARScene快捷渲染器] (\ref Others_2)
* 3 [IndexedDB缓存机制] (\ref Others_3)
* 4 [设置特效参数] (\ref Others_4)
* 5 [关闭美颜] (\ref Others_5)

\subsection Others_1 1 初始化ARScene快捷渲染器
[NveARSceneRenderer.init()](\ref NveARSceneRenderer.init())接口的配置参数详细说明：
| **参数**              | **类型**                     | **必填**   | **最大值**  | **最小值** | **默认值**             | **说明**                                                                                                                            |
| --------------------- | ---------------------------- | ----------- | ----------- | ---------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| faceModelUrl          | String                       | 是          |             |            |                        | 人脸模型地址，不配置会引起一系列效果不正确。                                                                                        |
| eyecontourModelUrl    | String                       | 否          |             |            |                        | 眼球模型地址，有眼球妆容的情况会用到，例如美瞳，不配置会引起相应效果不正确。                                                        |
| avatarModelUrl        | String                       | 否          |             |            |                        | 表情模型地址，有表情道具的情况会用到，不配置会引起相应效果不正确。                                                                  |
| segmentationModelUrl  | String                       | 否          |             |            |                        | 分割模型地址，有人像分割的情况会用到，不配置会引起相应效果不正确。                                                                  |
| makeupDataUrl         | String                       | 否          |             |            |                        | 美妆数据包地址，有妆容的情况会用到，不配置会引起相应效果不正确。                                                                    |
| ratio                 | NveRational                  | 否          |             |            | NveRational(16,9)      | 特效的画幅比，如需使用其他画幅比例，例如9:16，设置为new NveRational(9,16)即可。                                                     |
| detectionMode         | NveHumanDetectionFeatureEnum | 否          |             |            | VideoMode, MultiThread | 人脸检测模式，内部默认是效率最高的模式，但首帧图像可能会没有效果，所以对于单帧图像渲染的情况，建议设置为半图像模式并且是多线程模式。|
| beautyIntensity       | Number                       | 否          | 1.0         | 0.0        | 1.0                    | 美颜强度。															                         							  		   |
| beautyLutUrl          | String                       | 否          |             |            |                        | 美颜lut文件地址，外部设置一个美颜lut文件，实现用户自定义的美颜效果。					                                               |
| beautyLutIntensity    | Number                       | 否          | 1.0         | 0.0        | 1.0                    | 美颜lut强度，调整用户自定义的lut美颜强度。                                                                                   	   |
| outputStreamFps       | Number                       | 否          | 15          | 30         | 30                     | 输出媒体流的帧速率，建议不要设置过高。                                                                      						   |
| cacheOnIndexedDB      | Boolean                      | 否          |             |            | true                   | 是否缓存资源包等数据到IndexedDB，缓存数据可以提升初始化和渲染速度。                                                                 |
| workingInRealtimeMode | Boolean                      | 否          |             |            | true                   | 是否使用实时模式渲染，除非单帧图像渲染的情况，否则不要设置为false，会造成渲染实时性降低。                                           |
| jszip                 | Object                       | 否          |             |            |                        | jszip对象，使用整妆包的情况用于解压整妆包，不配置会解压失败引起相应效果不正确。                                                     |
| printTimeCostAndFps   | Boolean                      | 否          |             |            | false                  | 是否控制台打印每帧图像渲染耗时和实时帧率，用于观察渲染效率。                                                                        |
| mirror                | Boolean                      | 否          |             |            | false                  | 是否对图像做镜像效果，多用于摄像头作为输入图像的场景。                                                                              |
		  
\subsection Others_2 2 释放ARScene快捷渲染器
ARScene快捷渲染器不再使用时，需要调用[NveARSceneRenderer.release()](\ref NveARSceneRenderer.release())接口释放相应的资源。

\subsection Others_3 3 IndexedDB缓存机制
IndexedDB是web端大数据存储的一种媒介，在浏览器Application->Storage里面可以查看。
<br>由于ARScene内建特效的快捷渲染类初始化配置的多数是网络地址，每次初始化或者渲染时就会产生相应的资源下载，为了提高效率，避免每次都会下载资源，
默认会将这些资源下载之后缓存在IndexedDB中，再使用时，优先从IndexedDB中读取相应的资源数据。
<br>ARScene内建特效的快捷渲染类创建的IndexedDB数据库名称为nveffectcache，下面有两个表格，分别为asset和lic，asset存储资源数据，lic存储资源授权数据。
<br>如果缓存数据积累较多，需要清理相应的数据，一种方式是从浏览器中手动操作清除，另一种方式是使用[NveARSceneRenderer.clearCacheOnIndexedDB()](\ref NveARSceneRenderer.clearCacheOnIndexedDB())接口清除。

\subsection Others_4 4 设置特效参数
[NveARSceneRenderer.setEffectList()](\ref NveARSceneRenderer.setEffectList())接口会清除上一次设置的参数，然后设置新的参数，渲染效果会根据参数顺序应用。
<br>[NveARSceneRenderer.appendEffectList()](\ref NveARSceneRenderer.appendEffectList())接口会保持上一次设置的参数，追加设置新的参数，渲染效果会根据参数顺序应用。

\subsection Others_5 5 关闭美颜
[NveARSceneRenderer.enableBeauty()](\ref NveARSceneRenderer.enableBeauty())接口可以关闭和开启美颜，ARScene快捷渲染器默认是开启美颜效果的。