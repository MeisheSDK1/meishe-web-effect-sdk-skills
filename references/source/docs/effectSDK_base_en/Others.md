\page Others.md Others

* 1 [Init ARScene Renderer] (\ref Others_1)
* 2 [Release ARScene Renderer] (\ref Others_2)
* 3 [IndexedDB Cache] (\ref Others_3)
* 4 [Set Effect List] (\ref Others_4)
* 5 [Turn Off Beauty] (\ref Others_5)

\subsection Others_1 1 Init ARScene Renderer
[NveARSceneRenderer.init()](\ref NveARSceneRenderer.init()) function parameters details:
| **Parameter**         | **Type**                     | **Required** | **Max** | **Min** | **Default**            | **Explain**                                                                                                                                                                                                               |
| --------------------- | ---------------------------- | ------------ | ------- | ------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| faceModelUrl          | String                       | Yes          |         |         |                        | Face model url, effects will be ineffective if not set.                                                                                                                                                                   |
| eyecontourModelUrl    | String                       | No           |         |         |                        | Eyeball model url, eyeball makeup effects will not be correct if not set.                                                                                                                                                 |
| avatarModelUrl        | String                       | No           |         |         |                        | Avatar model url, avatar effects will not be correct if not set.                                                         																						           |
| segmentationModelUrl  | String                       | No           |         |         |                        | Segmentation model url, segmentation effects will not be correct if not set.                                                 																				               |
| makeupDataUrl         | String                       | No           |         |         |                        | Makeup data url, makeup effects will not be correct if not set.                                                           																							       |
| ratio                 | NveRational                  | No           |         |         | NveRational(16,9)      | The ratio of the effects. If need other ratios, such as 9:16, new NveRational(9,16) is ok.                                  																						       |
| detectionMode         | NveHumanDetectionFeatureEnum | No           |         |         | VideoMode, MultiThread | The detection mode of the effects, default value is the most efficient mode, but effects on the first image maybe ineffective. So if you render single image data only, semi-image and multi-thread mode are recommended. |
| beautyIntensity       | Number                       | No           | 1.0     | 0.0     | 1.0                    | Beauty intensity 															                         							  												          					               |
| beautyLutUrl          | String                       | No           |         |         |                        | Beauty lut url, the custom beauty effect						                                                                  												        					               |
| beautyLutIntensity    | Number                       | No           | 1.0     | 0.0     | 1.0                    | The custom beauty effect intensity                                                                                               												          					               |
| outputStreamFps       | Number                       | No           | 15      | 30      | 30                     | The fps of output stream, too big value is not recommended                                                                       												          					               |
| cacheOnIndexedDB      | Boolean                      | No           |         |         | true                   | Cache all the packages and datas on IndexedDB in browser. Caches will improve initialization and rendering speed.                												          					               |
| workingInRealtimeMode | Boolean                      | No           |         |         | true                   | Effects are working in realtime mode. Don't set false except single image data rendering only, otherwise, rendering maybe non-realtime.                                												   |
| jszip                 | Object                       | No           |         |         |                        | A jszip object, used for decompressing compound makeups zip file, compound makeups zip file will not be decompressed if not set. 																						   |
| printTimeCostAndFps   | Boolean                      | No           |         |         | false                  | Print the time cost of each image data and real fps to the browser console.                                                      																						   |
| mirror                | Boolean                      | No           |         |         | false                  | Mirror the image, generally used for camera input.                                                                                                                                                                        |
		  
\subsection Others_2 2 Release ARScene Renderer
ARScene renderer need be release by calling [NveARSceneRenderer.release()](\ref NveARSceneRenderer.release()) if not used again.

\subsection Others_3 3 IndexedDB Cache
IndexedDB is a storage for storing big data on the web, you can find it in Application->Storage tab.
<br>Most parameters of ARScene renderer are url, need to be downloaded. IndexedDB cache store these datas to avoid download again to improve speed,
ARScene renderer will find and use them from IndexedDB cache, if existed, firstly.
<br>IndexedDB cache database name of ARScene renderer is nveffectcache. There are tow tables, asset and lic, lic stores licenses, asset stores others.
<br>If IndexedDB cache is too large, and ensure many datas are not used again, you can clear them from browser, and another way is using [NveARSceneRenderer.clearCacheOnIndexedDB()](\ref NveARSceneRenderer.clearCacheOnIndexedDB()) to clear all.

\subsection Others_4 4 Set Effect List
[NveARSceneRenderer.setEffectList()](\ref NveARSceneRenderer.setEffectList()) function will override the last effect list. The order of effect list determines the order of rendering.
<br>[NveARSceneRenderer.appendEffectList()](\ref NveARSceneRenderer.appendEffectList()) function will append new list to the last effect list. The order of effect list determines the order of rendering.

\subsection Others_5 5 Turn Off Beauty
[NveARSceneRenderer.enableBeauty()](\ref NveARSceneRenderer.enableBeauty()) function can turn on/off beauty, beauty effect is enabled by default in ARScene Renderer.
