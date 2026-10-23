/**
 * @if ENGLISH
 * @brief Doc of Effect SDK WEB APPLICATION
 * @version 3.16.0
 * @copyright Meishe Co., Ltd.
 * @else
 * @brief Effect SDK WEB应用文档
 * @version 3.16.0
 * @copyright 北京美摄网络科技有限公司
 * @endif
 */

/** @file */

var Module = typeof Module !== "undefined" ? Module : {};
var FS = typeof FS !== "undefined" ? FS : {};

/**
 * @if ENGLISH
 * @brief Get instance of effect context
 * @return {NveEffectContext} Instance of effect context
 * @else
 * @brief 获取特效上下文实例
 * @return {NveEffectContext} 特效上下文实例
 * @endif
 */
function nveGetEffectContextInstance() {
  return Module.Meishe.effectContext;
}

/**
 * @if ENGLISH
 * @brief vector contains object type values
 * @else
 * @brief 对象类型数组
 * @endif
 */
// std::vector<emscripten::val>
class NveVectorVal {
  /**
   * @constructor
   */
  constructor() {
    return new Module.VectorVal();
  }
}

/**
 * @if ENGLISH
 * @brief volume
 * @else
 * @brief 音量类，设置音量的左右声道
 * @endif
 */
class NveVolume {
  /**
   * @constructor
   * @if ENGLISH
   * @param {Number} leftVolume Left volume channel
   * @param {Number} rightVolume Right volume channel
   * @else
   * @param {} leftVolume 左边音量
   * @param {} rightVolume 右边音量
   * @endif
   */
  constructor(leftVolume, rightVolume) {
    this.leftVolume = leftVolume;
    this.rightVolume = rightVolume;
  }
}

/**
 *  @if ENGLISH
 *  @brief  Motion parameter information
 *  @else
 *  @brief 运动参数
 *  @endif
 */
class NveMotionParameters {
  /**
   * @constructor
   */
  constructor() {
    this.anchorX = 0;
    this.anchorY = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.rotationZ = 0;
    this.transX = 0;
    this.transY = 0;
  }
}

/**
 * @if ENGLISH
 * @brief layout attributes class
 * @else
 * @brief 字幕layout属性类
 * @endif
 */
class NveCaptionSpan {
  /**
   * @constructor
   * @if ENGLISH
   * @param {String} type attribute type, includes fontSizeRatio, opacity, bodyOpacity, outlineOpacity, shadowOpacity, outlineWidth, normalText, weight, underline, italic, color, outlineColor, fontFamily and rendererId
   * @param {Number} start start character
   * @param {Number} end end character
   * @param {Number | Boolean | String | NveColor} value attribute value, different type maybe different type of value, fontSizeRatio, opacity, bodyOpacity, outlineOpacity, shadowOpacity, outlineWidth and normalText are float value, weight is int value, underline and italic are boolean value, color and outlineColor are color value, fontFamily and rendererId are string value
   * @else
   * @param {String} type 属性类型，包含fontSizeRatio、opacity、bodyOpacity、outlineOpacity、shadowOpacity、outlineWidth、normalText、weight、underline、italic、color、outlineColor、fontFamily和rendererId
   * @param {Number} start 起始字符
   * @param {Number} end 结束字符
   * @param {Number | Boolean | String | NveColor} value 属性值，不同的属性类型对应不同的值类型，fontSizeRatio、opacity、bodyOpacity、outlineOpacity、shadowOpacity、outlineWidth和normalText是浮点数类型，weight是整数类型，underline和italic是布尔类型，color和outlineColor是颜色类型，fontFamily和rendererId是字符串类型
   * @endif
   */
  constructor() {
    this.type = "";
    this.start = -1;
    this.end = -1;
    this.value = undefined;
  }
}

/**
 * @if ENGLISH
 * @brief Two dimensional coordinates point, parameter type is double or float.
 * @else
 * @brief 二维坐标点结构。 参数类型为双精度浮点数。
 * @endif
 */
class NvePointF {
  /**
   * @constructor
   * @if ENGLISH
   * @param {Number} x x-coordinate
   * @param {Number} y y-coordinate
   * @else
   * @param {Number} x x坐标
   * @param {Number} y y坐标
   * @endif
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

/**
 * @if ENGLISH
 * @brief rectangular
 * @else
 * @brief 矩形类
 * @endif
 */
class NveRectF {
  /**
   * @constructor
   * @if ENGLISH
   * @param {Number} left left
   * @param {Number} top top
   * @param {Number} right right
   * @param {Number} bottom bottom
   * @else
   * @param {Number} left  左
   * @param {Number} top 上
   * @param {Number} right 右
   * @param {Number} bottom 下
   * @endif
   */
  constructor(left, top, right, bottom) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }
}

/**
 * @if ENGLISH
 * @brief Rational
 * @else
 * @brief 比例值
 * @endif
 */
class NveRational {
  /**
   * @constructor
   * @if ENGLISH
   * @param {Number} numerator numerator
   * @param {Number} denominator denominator
   * @else
   * @param {Number} numerator 分子
   * @param {Number} denominator 分母
   * @endif
   */
  constructor(numerator, denominator) {
    this.num = numerator;
    this.den = denominator;
  }
}

/**
 * @if ENGLISH
 * @brief Custom color class
   In the SDK, the NveColor class attributes, namely r, g, b and a, range [0, 1] instead of [0, 255].
 * @else
 * @brief 自定义颜色类
   SDK中，NveColor类属性r,g,b,a取值范围是[0,1]，而非[0,255]。
 * @endif
 */
class NveColor {
  /**
   * @constructor
   * @if ENGLISH
   * @param {Number} r red
   * @param {Number} g green
   * @param {Number} b blue
   * @param {Number} a alpha
   * @else
   * @param {Number} r 红
   * @param {Number} g 绿
   * @param {Number} b 蓝
   * @param {Number} a 透明度
   * @endif
   */
  constructor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}

/**
 * @if ENGLISH
 * @brief Render task
 * @else
 * @brief 渲染任务
 * @endif
 */
class NveRenderTask {
  /**
   * @constructor
   * @if ENGLISH
   * @param {Number} taskId task id
   * @param {Number} flags flags
   * @else
   * @param {Number} taskId 任务id
   * @param {Number} flags 扩展标志
   * @endif
   */
  constructor(taskId, flags) {
    this.taskId = taskId;
    this.flags = flags;
  }
}

/**
 * @if ENGLISH
 * @brief Effect instance.
 * @else
 * @brief 特效实例
 * @endif
 */
class NveEffectInstance {
  /**
   * @if ENGLISH
   * @brief The constructor of NveEffectInstance
   * @else
   * @brief 特效实例构造器
   * @endif
   */
  constructor() {
    this.internalObj = 0;
  }

  /**
     * @if ENGLISH
     * @brief Release the instance of effect
       You must call release() if you won't use this effect instance object anymore,
       otherwise there will be severe internal resources leak!
     * @else
     * @brief 特效实例构造器
       如果此特效实例后面不会再使用，必须要调用此方法释放，否则会有内部资源的泄漏
     * @endif
     */
  release() {
    Module.nve_effectInstance_release(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Set the integer parameter value of the effect.
   * @param {String} fxParam The name of the parameter of the effect.
   * @param {Number} val Integer value
   * @else
   * @brief 设置特效的整数参数值
   * @param {String} fxParam 特效的参数名称
   * @param {Number} val 整数值
   * @endif
   */
  setIntVal(fxParam, val) {
    Module.nve_effectInstance_setIntVal(this.internalObj, fxParam, val);
  }

  /**
   * @if ENGLISH
   * @brief Get the integer parameter value of the effect.
   * @param {String} fxParam The name of the parameter of the effect.
   * @return {Number} Integer value
   * @else
   * @brief 获取特效的整数参数值
   * @param {String} fxParam 特效的参数名称
   * @return {Number} 整数值
   * @endif
   */
  getIntVal(fxParam) {
    return Module.nve_effectInstance_getIntVal(this.internalObj, fxParam);
  }

  /**
   * @if ENGLISH
   * @brief Set the float parameter value of the effect.
   * @param {String} fxParam The name of the parameter of the effect.
   * @param {Number} val Float value
   * @else
   * @brief 设置特效的浮点数参数值
   * @param {String} fxParam 特效的参数名称
   * @param {Number} val 浮点数值
   * @endif
   */
  setFloatVal(fxParam, val) {
    Module.nve_effectInstance_setFloatVal(this.internalObj, fxParam, val);
  }

  /**
   * @if ENGLISH
   * @brief Get the float parameter value of the effect.
   * @param {String} fxParam The name of the parameter of the effect.
   * @return {Number} Float value
   * @else
   * @brief 获取特效的浮点数参数值
   * @param {String} fxParam 特效的参数名称
   * @return {Number} 浮点数值
   * @endif
   */
  getFloatVal(fxParam) {
    return Module.nve_effectInstance_getFloatVal(this.internalObj, fxParam);
  }

  /**
   * @if ENGLISH
   * @brief Set the boolean parameter value of the effect.
   * @param {String} fxParam The name of the parameter of the effect.
   * @param {Boolean} val Boolean value
   * @else
   * @brief 设置特效的布尔参数值
   * @param {String} fxParam 特效的参数名称
   * @param {Boolean} val 布尔值
   * @endif
   */
  setBooleanVal(fxParam, val) {
    Module.nve_effectInstance_setBooleanVal(this.internalObj, fxParam, val);
  }

  /**
   * @if ENGLISH
   * @brief Get the boolean parameter value of the effect.
   * @param {String} fxParam The name of the parameter of the effect.
   * @return {Boolean} Boolean value
   * @else
   * @brief 获取特效的布尔参数值
   * @param {String} fxParam 特效的参数名称
   * @return {Boolean} 布尔值
   * @endif
   */
  getBooleanVal(fxParam) {
    return Module.nve_effectInstance_getBooleanVal(this.internalObj, fxParam);
  }

  /**
   * @if ENGLISH
   * @brief Set the menu parameter value of the effect.
   * @param {String} fxParam The name of the parameter of the effect.
   * @param {String} val Menu value
   * @else
   * @brief 设置特效的菜单参数值
   * @param {String} fxParam 特效的参数名称
   * @param {String} val 菜单值
   * @endif
   */
  setMenuVal(fxParam, val) {
    Module.nve_effectInstance_setMenuVal(this.internalObj, fxParam, val);
  }

  /**
   * @if ENGLISH
   * @brief Get the menu parameter value of the effect.
   * @param {String} fxParam The name of the parameter of the effect.
   * @return {String} Menu value
   * @else
   * @brief 获取特效的菜单参数值
   * @param {String} fxParam 特效的参数名称
   * @return {String} 菜单值
   * @endif
   */
  getMenuVal(fxParam) {
    return Module.nve_effectInstance_getMenuVal(this.internalObj, fxParam);
  }

  /**
   * @if ENGLISH
   * @brief Set the string parameter value of the effect.
   * @param {String} fxParam The name of the parameter of the effect.
   * @param {String} val String value
   * @else
   * @brief 设置特效的字符串参数值
   * @param {String} fxParam 特效的参数名称
   * @param {String} val 字符串值
   * @endif
   */
  setStringVal(fxParam, val) {
    Module.nve_effectInstance_setStringVal(this.internalObj, fxParam, val);
  }

  /**
   * @if ENGLISH
   * @brief Get the string parameter value of the effect.
   * @param {String} fxParam The name of the parameter of the effect.
   * @return {String} String value
   * @else
   * @brief 获取特效的字符串参数值
   * @param {String} fxParam 特效的参数名称
   * @return {String} 字符串值
   * @endif
   */
  getStringVal(fxParam) {
    return Module.nve_effectInstance_getStringVal(this.internalObj, fxParam);
  }

  /**
   * @if ENGLISH
   * @brief Set the color parameter value of the effect.
   * @param {String} fxParam The name of the parameter of the effect.
   * @param {NveColor} val Color value
   * @else
   * @brief 设置特效的颜色参数值
   * @param {String} fxParam 特效的参数名称
   * @param {NveColor} val 颜色值
   * @endif
   */
  setColorVal(fxParam, val) {
    Module.nve_effectInstance_setColorVal(this.internalObj, fxParam, val);
  }

  /**
   * @if ENGLISH
   * @brief Get the color parameter value of the effect.
   * @param {String} fxParam The name of the parameter of the effect.
   * @return {NveColor} Color value
   * @else
   * @brief 获取特效的颜色参数值
   * @param {String} fxParam 特效的参数名称
   * @return {NveColor} 颜色值
   * @endif
   */
  getColorVal(fxParam) {
    return Module.nve_effectInstance_getColorVal(this.internalObj, fxParam);
  }

  /**
   * @if ENGLISH
   * @brief Set the intensity of the filter.
   * @param {Number} intensity The filter intensity value, the value range is generally [0,1]. 0 means no effect, while 1 indicates the default effect.
   * @else
   * @brief 设置滤镜强度
   * @param {Number} intensity 滤镜强度值，取值范围一般为[0,1]，为0则滤镜无效果，为1则为默认效果
   * @endif
   */
  setFilterIntensity(intensity) {
    Module.nve_effectInstance_setFilterIntensity(this.internalObj, intensity);
  }

  /**
   * @if ENGLISH
   * @brief Get the intensity of the filter.
   * @return {Number} The intensity value of the filter.
   * @else
   * @brief 获取滤镜强度
   * @return {Number} 返回滤镜的强度值
   * @endif
   */
  getFilterIntensity() {
    return Module.nve_effectInstance_getFilterIntensity(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Get the manipulate of ARScene.
   * @return {NveARSceneManipulate} Return the manipulate of ARScene.
   * @else
   * @brief 获取ARScene操作
   * @return {NveARSceneManipulate} 返回 AR 场景操作对象。
   * @endif
   */
  getARSceneManipulate() {
    return Module.nve_effectInstance_getARSceneManipulate(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Get in-point of effect
   *  @return {Number} In-point of effect (in microseconds)
   *  @else
   *  @brief 获取起始点
   *  @return {Number} 起始点(以微秒为单位)
   *  @endif
   */
  getInPoint() {
    return Module.nve_effectInstance_getInPoint(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Get out point of effect
   *  @return {Number} Out point of effect (in microseconds)
   *  @else
   *  @brief 获取结束点
   *  @return {Number} 结束点(以微秒为单位)
   *  @endif
   */
  getOutPoint() {
    return Module.nve_effectInstance_getOutPoint(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Changes in-point of effect
   *  @param {Number} newInPoint The new in-point of effect (in microseconds)
   *  @return {Number} The new in-point of effect (in microseconds).
   *  @else
   *  @brief 改变起始点
   *  @param {Number} newInPoint 新的起始点(以微秒为单位)
   *  @return {Number} 新的起始点(以微秒为单位)
   *  @endif
   */
  changeInPoint(newInPoint) {
    return Module.nve_effectInstance_changeInPoint(
      this.internalObj,
      newInPoint,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Changes out-point of effect
   *  @param {Number} newOutPoint The new out-point of effect (in microseconds)
   *  @return {Number} The new out-point of effect (in microseconds).
   *  @else
   *  @brief 改变起始点
   *  @param {Number} newOutPoint 新的结束点(以微秒为单位)
   *  @return {Number} 新的结束点(以微秒为单位)
   *  @endif
   */
  changeOutPoint(newOutPoint) {
    return Module.nve_effectInstance_changeOutPoint(
      this.internalObj,
      newOutPoint,
    );
  }
}

/**
 * @if ENGLISH
 * @brief Caption text alignment enum
 * @note Left Left alignment
 * @note Center Horizontal center alignment
 * @note Right Right alignment
 * @note Top Top alignment
 * @note Bottom Bottom alignment
 * @note VCenter Vertical center alignment
 * @else
 * @brief 字幕文本排列枚举
 * @note Left 左对齐
 * @note Center 水平中心对齐
 * @note Right 右对齐
 * @note Top 顶部对齐
 * @note Bottom 底部对齐
 * @note VCenter 垂直中心对齐
 * @endif
 */
const NveCaptionTextAlignmentEnum = Object.freeze({
  Left: 0,
  Center: 1,
  Right: 2,
  Top: 3,
  Bottom: 4,
  VCenter: 5,
});

/**
 * @if ENGLISH
 * @brief Caption text bounding type enum
 * @note Text The actual text bounding
 * @note TextFrame Text frame bounding
 * @note Frame The whole bounding including decoration
 * @note TextOriginFrame The origin text frame bounding
 * @else
 * @brief 字幕文本边界类型枚举
 * @note Text 实际的文本边界
 * @note TextFrame 文本框边界
 * @note Frame 包括装饰在内的整个边界
 * @note TextOriginFrame 原始文本框边界
 * @endif
 */
const NveCaptionTextBoundingTypeEnum = Object.freeze({
  Text: 0,
  TextFrame: 1,
  Frame: 2,
  TextOriginFrame: 3,
});

/**
 * @if ENGLISH
 * @brief Caption letter spacing type enum
 * @note Percentage Percentage
 * @note Absolute Absolute
 * @else
 * @brief 字幕字间距类型枚举
 * @note Percentage 百分比
 * @note Absolute 绝对值
 * @endif
 */
const NveCaptionLetterSpacingTypeEnum = Object.freeze({
  Percentage: 0,
  Absolute: 1,
});

/**
 * @if ENGLISH
 * @brief Captions are custom text superimposed on the video. You can add and adjust the caption position. After adding caption, you can also set styles, including font size, color, shadow, stroke, etc.
 * @see NveEffectInstance
 * @else
 * @brief 字幕是叠加在视频上的自定义文本。您可以添加并调整字幕位置。添加字幕后，还可以设置样式，包括字体大小、颜色、阴影、描边等。
 * @see NveEffectInstance
 *
 */
class NveCaption extends NveEffectInstance {
  /**
   *  @if ENGLISH
   *  @brief constructor
   *  @else
   *  @brief 构造函数
   *  @endif
   */
  constructor() {
    super();
  }

  /**
   *  @if ENGLISH
   *  @brief Gets the caption style package ID.
   *  @return {String} Returns the obtained caption style resource package ID.
   *  @else
   *  @brief 获取字幕样式包 ID。
   *  @return {String} 返回获取到的字幕样式资源包ID。
   *  @endif
   */
  getCaptionStylePackageId() {
    return Module.nve_caption_getCaptionStylePackageId(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Gets the modular caption context style package ID.
   *  @return {String} Returns the obtained modular caption context style resource package ID.
   *  @else
   *  @brief 获取模块化字幕上下文样式包 ID。
   *  @return {String} 返回获取的模块化字幕上下文样式资源包ID。
   *  @endif
   */
  getModularCaptionContextPackageId() {
    return Module.nve_caption_getModularCaptionContextPackageId(
      this.internalObj,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Gets the modular caption context style package ID.
   *  @return {String} Returns the obtained modular caption context style resource package ID.
   *  @else
   *  @brief 获取模块化字幕渲染样式包 ID。
   *  @return {String} 返回获取的模块化字幕渲染样式资源包ID。
   *  @endif
   */
  getModularCaptionRendererPackageId() {
    return Module.nve_caption_getModularCaptionRendererPackageId(
      this.internalObj,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Gets the modular caption animation style package ID.
   *  @return {String} Returns the obtained modular caption animation style resource package ID.
   *  @else
   *  @brief 获取模块化字幕动画样式包 ID。
   *  @return {String} 返回获取到的模块化字幕动画样式资源包ID。
   *  @endif
   */
  getModularCaptionAnimationPackageId() {
    return Module.nve_caption_getModularCaptionAnimationPackageId(
      this.internalObj,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Gets the modular caption in-animation style package ID.
   *  @return {String} Returns the obtained modular caption in-animation style resource package ID.
   *  @else
   *  @brief 获取模块化字幕动画样式包 ID。
   *  @return {String} 返回获取的模块化字幕动画样式资源包ID。
   *  @endif
   */
  getModularCaptionInAnimationPackageId() {
    return Module.nve_caption_getModularCaptionInAnimationPackageId(
      this.internalObj,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Gets the modular caption out-animation style package ID.
   *  @return {String} Returns the obtained modular caption out-animation style resource package ID.
   *  @else
   *  @brief 获取模块化字幕外动画样式包 ID。
   *  @return {String} 返回获取的模块化字幕外动画样式资源包ID。
   *  @endif
   */
  getModularCaptionOutAnimationPackageId() {
    return Module.nve_caption_getModularCaptionOutAnimationPackageId(
      this.internalObj,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Apply caption style
   *  @param {String} captionStylePackageId Caption style resource package ID.
   *  @param {Number} isUseDefaultAssetParam Whether to use the properties that come with the caption package.
   *  @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   *  @else
   *  @brief 应用标题样式
   *  @param {String} captionStylePackageId 字幕样式资源包 ID。
   *  @param {Number} isUseDefaultAssetParam 是否使用字幕包自带的属性。
   *  @return {Boolean} 返回布尔值。 true 表示申请成功，false 表示失败。
   *  @endif
   */
  applyCaptionStyle(captionStylePackageId, isUseDefaultAssetParam) {
    return Module.nve_caption_applyCaptionStyle(
      this.internalObj,
      captionStylePackageId,
      isUseDefaultAssetParam,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Applys modular caption context style.
   *  @param {String} captionContextPackageId Modular caption context style resource package ID.
   *  @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   *  @else
   *  @brief 应用模块化标题上下文样式。
   *  @param {String} captionContextPackageId 模块化字幕上下文样式资源包 ID。
   *  @return {Boolean} 返回布尔值。 true 表示申请成功，false 表示失败。
   *  @endif
   */
  applyModularCaptionContext(captionContextPackageId) {
    return Module.nve_caption_applyModularCaptionContext(
      this.internalObj,
      captionContextPackageId,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Applys modular caption render style.
   *  @param {String} captionRendererPackageId Modular caption render style resource package ID.
   *  @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   *  @else
   *  @brief 应用模块化字幕渲染样式。
   *  @param {String} captionRendererPackageId 模块化字幕渲染样式资源包 ID。
   *  @return {Boolean} 返回布尔值。 true 表示申请成功，false 表示失败。
   *  @endif
   */
  applyModularCaptionRenderer(captionRendererPackageId) {
    return Module.nve_caption_applyModularCaptionRenderer(
      this.internalObj,
      captionRendererPackageId,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Applys modular caption loop-animation style.
   *  @param {String} captionAnimationPackageId caption animation package id
   *  @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   *  @else
   *  @brief 应用模块化字幕循环动画样式。
   *  @param {String} captionAnimationPackageId 字幕动画包ID
   *  @return {Boolean} 返回布尔值。 true 表示申请成功，false 表示失败。
   *  @endif
   */
  applyModularCaptionAnimation(captionAnimationPackageId) {
    return Module.nve_caption_applyModularCaptionAnimation(
      this.internalObj,
      captionAnimationPackageId,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Applys modular caption in-animation style. Notes：please set loop-Animation to null before you set in-animation, otherwise it will NOT works.
   *  @param {String} captionInAnimationPackageId caption in animation package id
   *  @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   *  @else
   *  @brief 在动画样式中应用模块化字幕。注意：设置in-animation前请先设置loop-Animation为null，否则无效。
   *  @param {String} captionInAnimationPackageId 动画包 ID 中的字幕
   *  @return {Boolean} 返回布尔值。 true 表示申请成功，false 表示失败。
   *  @endif
   */
  applyModularCaptionInAnimation(captionInAnimationPackageId) {
    return Module.nve_caption_applyModularCaptionInAnimation(
      this.internalObj,
      captionInAnimationPackageId,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Applys modular caption out-animation style.Notes：please set loop-Animation to null before you set out-animation, otherwise it will NOT works.
   *  @param {String} captionOutAnimationPackageId Modular caption out-animation style resource package ID.
   *  @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   *  @else
   *  @brief 应用模块化字幕出动画样式。注意：请在设置出动画之前将loop-Animation设置为null，否则将不起作用。
   *  @param {String} captionOutAnimationPackageId 模块化字幕出动画样式资源包 ID。
   *  @return {Boolean} 返回布尔值。 true 表示申请成功，false 表示失败。
   *  @endif
   */
  applyModularCaptionOutAnimation(captionOutAnimationPackageId) {
    return Module.nve_caption_applyModularCaptionOutAnimation(
      this.internalObj,
      captionOutAnimationPackageId,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Set modular caption Animation Period.
   *  @param {Number} periodInMS Animation Period in millisecond
   *  @return {void}
   *  @else
   *  @brief 设置模块化字幕动画周期。
   *  @param {Number} periodInMS 动画周期（毫秒）
   *  @return {void}
   *  @endif
   */
  setModularCaptionAnimationPeriod(periodInMS) {
    return Module.nve_caption_setModularCaptionAnimationPeriod(
      this.internalObj,
      periodInMS,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Get modular caption Animation Period.
   *  @return {Number} Return animation period in millisecond
   *  @else
   *  @brief 获取模块化字幕动画周期。
   *  @return {Number} 返回动画周期（毫秒）
   *  @endif
   */
  getModularCaptionAnimationPeriod() {
    return Module.nve_caption_getModularCaptionAnimationPeriod(
      this.internalObj,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Set modular caption in-animation duration.
   *  @param {Number} inAnimationDurationInMS in-animation duration in millisecond
   *  @return {void}
   *  @else
   *  @brief 设置模块化字幕动画持续时间。
   *  @param {Number} inAnimationDurationInMS 动画持续时间（以毫秒为单位）
   *  @return {void}
   *  @endif
   */
  setModularCaptionInAnimationDuration(inAnimationDurationInMS) {
    Module.nve_caption_setModularCaptionInAnimationDuration(
      this.internalObj,
      inAnimationDurationInMS,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Get modular caption in-animation duration.
   *  @return {Number} Return in-animation duration in millisecond
   *  @else
   *  @brief 获取动画中的模块化字幕持续时间。
   *  @return {Number} 以毫秒为单位返回动画持续时间
   *  @endif
   */
  getModularCaptionInAnimationDuration() {
    return Module.nve_caption_getModularCaptionInAnimationDuration(
      this.internalObj,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Set modular caption out-animation duration.
   *  @param {Number} outAnimationDurationInMS out-animation duration in millisecond
   *  @return {void}
   *  @else
   *  @brief 设置模块化字幕动画持续时间。
   *  @param {Number} outAnimationDurationInMS 以毫秒为单位的动画持续时间
   *  @return {void}
   *  @endif
   */
  setModularCaptionOutAnimationDuration(outAnimationDurationInMS) {
    Module.nve_caption_setModularCaptionOutAnimationDuration(
      this.internalObj,
      outAnimationDurationInMS,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Get modular caption out-animation duration.
   *  @return {Number} Return out-animation duration in millisecond
   *  @else
   *  @brief 获取模块化字幕动画持续时间。
   *  @return {Number} 以毫秒为单位返回动画持续时间
   *  @endif
   */
  getModularCaptionOutAnimationDuration() {
    return Module.nve_caption_getModularCaptionOutAnimationDuration(
      this.internalObj,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Sets caption text.
   *  @param {String} text Caption text
   *  @return {void}
   *  @else
   *  @brief 设置标题文本。
   *  @param {String} text 字幕文本
   *  @return {void}
   *  @endif
   */
  setText(text) {
    Module.nve_caption_setText(this.internalObj, text);
  }

  /**
   *  @if ENGLISH
   *  @brief Gets caption text.
   *  @return {String} Returns caption text obtained.
   *  @else
   *  @brief 获取字幕文本。
   *  @return {String} 返回获得的字幕文本。
   *  @endif
   */
  getText() {
    return Module.nve_caption_getText(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption horizontal alignment style
   *  @param {Number} textAlign Indicates the caption horizontal alignment style
   *  @return {void}
   *  @else
   *  @brief 设置标题水平对齐样式
   *  @param {Number} textAlign 指示标题水平对齐方式
   *  @return {void}
   *  @endif
   */
  setTextAlignment(textAlign) {
    Module.nve_caption_setTextAlignment(this.internalObj, textAlign);
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption horizontal alignment style
   *  @return {Number} Returns caption horizontal alignment style.
   *  @else
   *  @brief 获取标题水平对齐样式
   *  @return {Number} 返回标题水平对齐样式。
   *  @endif
   */
  getTextAlignment() {
    return Module.nve_caption_getTextAlignment(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption horizontal alignment style
   *  @param {Number} textAlign Indicates the caption horizontal alignment style
   *  @return {void}
   *  @else
   *  @brief 设置标题水平对齐样式
   *  @param {Number} textAlign 指示标题水平对齐方式
   *  @return {void}
   *  @endif
   */
  setTextVerticalAlignment(textAlign) {
    Module.nve_caption_setTextVerticalAlignment(this.internalObj, textAlign);
  }

  /**
   *  @if ENGLISH
   *  @brief Gets caption vertical alignment style, valid for frame-caption only.
   *  @return {Number} Returns caption vertical alignment style.
   *  @else
   *  @brief 获取标题垂直对齐样式，仅对 frame-caption 有效。
   *  @return {Number} 返回标题垂直对齐样式。
   *  @endif
   */
  getTextVerticalAlignment() {
    return Module.nve_caption_getTextVerticalAlignment(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Sets whether to layout text vertically.
   *  @param {Boolean} verticalLayout whether to layout text vertically
   *  @return {void}
   *  @else
   *  @brief 设置是否垂直布局文本。
   *  @param {Boolean} verticalLayout 是否垂直布局文本
   *  @return {void}
   *  @endif
   */
  setVerticalLayout(verticalLayout) {
    Module.nve_caption_setVerticalLayout(this.internalObj, verticalLayout);
  }

  /**
   *  @if ENGLISH
   *  @brief Gets whether to layout text vertically.
   *  @return {Boolean}
   *  @else
   *  @brief 获取是否垂直布局文本。
   *  @return {Boolean}
   *  @endif
   */
  getVerticalLayout() {
    return Module.nve_caption_getVerticalLayout(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption font bold
   *  @param {Boolean} bold Indicates whether the caption font is bold. True means the font is bold, false means the font is not bold.
   *  @return {void}
   *  @else
   *  @brief 设置标题字体粗体
   *  @param {Boolean} bold 指示标题字体是否为粗体。 true 表示字体是粗体，false 表示字体不是粗体。
   *  @return {void}
   *  @endif
   */
  setBold(bold) {
    Module.nve_caption_setBold(this.internalObj, bold);
  }

  /**
   *  @if ENGLISH
   *  @brief Get the caption font bold state
   *  @return {Boolean} Returns the caption font bold state. True means the font is bold, false means the font is not bold.
   *  @else
   *  @brief 获取字幕字体加粗状态
   *  @return {Boolean} 返回字幕字体粗体状态。 true 表示字体是粗体，false 表示字体不是粗体。
   *  @endif
   */
  getBold() {
    return Module.nve_caption_getBold(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption font italic.
   *  @param {Boolean} italic Whether it is set to italic. True means that the caption font is set to italic, and false means the caption font is not set to italic.
   *  @return {void}
   *  @else
   *  @brief 设置标题字体斜体。
   *  @param {Boolean} italic 是否设置为斜体。 True 表示字幕字体设置为斜体，false 表示字幕字体未设置为斜体。
   *  @return {void}
   *  @endif
   */
  setItalic(italic) {
    Module.nve_caption_setItalic(this.internalObj, italic);
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption font italic.
   *  @return {Boolean} Returns boolean value. True means it is italic font, false means it is not italic.
   *  @else
   *  @brief 获取标题字体斜体。
   *  @return {Boolean} 返回布尔值。 true 表示它是斜体字体，false 表示它不是斜体。
   *  @endif
   */
  getItalic() {
    return Module.nve_caption_getItalic(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption underline
   *  @param {Boolean} underline Whether it is set to under line.
   *  @return {void}
   *  @else
   *  @brief 设置标题下划线
   *  @param {Boolean} underline 是否设置为下划线。
   *  @return {void}
   *  @endif
   */
  setUnderline(underline) {
    Module.nve_caption_setUnderline(this.internalObj, underline);
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption underline
   *  @return {Boolean} Returns boolean value. True means it is under line, false means it is not.
   *  @else
   *  @brief 获取标题下划线
   *  @return {Boolean} 返回布尔值。 true 表示在线下，false 表示不在线下。
   *  @endif
   */
  getUnderline() {
    return Module.nve_caption_getUnderline(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption word spacing type.
   *  @param {Number} letterSpacingType Word spacing type.
   *  @return {void}
   *  @else
   *  @brief 设置标题字间距类型。
   *  @param {Number} letterSpacingType 字间距类型。
   *  @return {void}
   *  @endif
   */
  setLetterSpacingType(letterSpacingType) {
    Module.nve_caption_setLetterSpacingType(
      this.internalObj,
      letterSpacingType,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption word spacing type.
   *  @return {Number} return letterSpacingType.
   *  @else
   *  @brief 获取标题字间距类型。
   *  @return {Number} 返回字母SpacingType。
   *  @endif
   */
  getLetterSpacingType() {
    return Module.nve_caption_getLetterSpacingType(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption letter spacing
   *  @param {Number} letterSpacing Word spacing is expressed in percentage value by default.
   *  @return {void}
   *  @else
   *  @brief 设置标题字母间距
   *  @param {Number} letterSpacing 字间距默认以百分比值表示。
   *  @return {void}
   *  @endif
   */
  setLetterSpacing(letterSpacing) {
    Module.nve_caption_setLetterSpacing(this.internalObj, letterSpacing);
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption letter spacing
   *  @return {Number} Returns the float value, the percentage value by default.
   *  @else
   *  @brief 获取标题字母间距
   *  @return {Number} 返回浮点值，默认为百分比值。
   *  @endif
   */
  getLetterSpacing() {
    return Module.nve_caption_getLetterSpacing(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set line spacing
   *  @param {} lineSpacing line spacing is expressed in absolute value.
   *  @return {void}
   *  @else
   *  @brief 设置行距
   *  @param {Number} lineSpacing 行间距以绝对值表示。
   *  @return {void}
   *  @endif
   */
  setLineSpacing(lineSpacing) {
    Module.nve_caption_setLineSpacing(this.internalObj, lineSpacing);
  }

  /**
   *  @if ENGLISH
   *  @brief Get line spacing
   *  @return {Number} return float value, line spacing is expressed in absolute value.
   *  @else
   *  @brief 获取行距
   *  @return {Number} 返回浮点值，行距以绝对值表示。
   *  @endif
   */
  getLineSpacing() {
    return Module.nve_caption_getLineSpacing(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption weight
   *  @param {Number} weight the value in opentype weight integer.
   *  @return {void}
   *  @else
   *  @brief 设置字幕权重
   *  @param {Number} weight opentype 权重整数中的值。
   *  @return {void}
   *  @endif
   */
  setWeight(weight) {
    Module.nve_caption_setWeight(this.internalObj, weight);
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption weight
   *  @return {Number} Returns the caption weight.
   *  @else
   *  @brief 获取字幕重量
   *  @return {Number} 返回字幕权重。
   *  @endif
   */
  getWeight() {
    return Module.nve_caption_getWeight(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption text color
   *  @param {NveColor} color Caption text color value.
   *  @else
   *  @return {void}
   *  @brief 设置标题文字颜色
   *  @param {NveColor} color 字幕文本颜色值。
   *  @return {void}
   *  @endif
   */
  setTextColor(color) {
    if (color === undefined || color === null || color === "") return;
    Module.nve_caption_setTextColor(this.internalObj, color);
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption text color
   *  @return {NveColor} Returns the NveColor object representing the color value obtained.
   *  @else
   *  @brief 获取标题文本颜色
   *  @return {NveColor} 返回表示获得的颜色值的 NveColor 对象。
   *  @endif
   */
  getTextColor() {
    return Module.nve_caption_getTextColor(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption stroke.
   *  @param {Boolean} drawOutline Whether to stroke the captions. True means it strokes the caption. False means it does not stroke the edges.
   *  @return {void}
   *  @else
   *  @brief 设置字幕描边。
   *  @param {Boolean} drawOutline 是否描边字幕。 True 表示描边标题。 False 表示不描边。
   *  @return {void}
   *  @endif
   */
  setDrawOutline(drawOutline) {
    Module.nve_caption_setDrawOutline(this.internalObj, drawOutline);
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption stroke.
   *  @return {Boolean}
   *  @else
   *  @brief 获取字幕描边。
   *  @return {Boolean}
   *  @endif
   */
  getDrawOutline() {
    return Module.nve_caption_getDrawOutline(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set the width of the caption stroke.
   *  @param {Number} outlineWidth The width of the caption stroke.
   *  @return {void}
   *  @else
   *  @brief 设置标题笔划的宽度。
   *  @param {Number} outlineWidth 标题笔划的宽度。
   *  @return {void}
   *  @endif
   */
  setOutlineWidth(outlineWidth) {
    Module.nve_caption_setOutlineWidth(this.internalObj, outlineWidth);
  }

  /**
   *  @if ENGLISH
   *  @brief Get the width of the caption stroke.
   *  @return {Number} Returns the width value of the obtained caption stroke.
   *  @else
   *  @brief 获取标题笔画的宽度。
   *  @return {Number} 返回获取的标题笔画的宽度值。
   *  @endif
   */
  getOutlineWidth() {
    return Module.nve_caption_getOutlineWidth(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set the color of the caption stroke.
   *  @param {NveColor} color Caption stroke color value.
   *  @return {void}
   *  @see NveColor
   *  @else
   *  @brief 设置标题描边的颜色。
   *  @param {NveColor} color 字幕描边颜色值。
   *  @return {void}
   *  @see NveColor
   *  @endif
   */
  setOutlineColor(color) {
    if (color === undefined || color === null || color === "") return;
    Module.nve_caption_setOutlineColor(this.internalObj, color);
  }

  /**
   *  @if ENGLISH
   *  @brief Get the color of the caption stroke.
   *  @return {NveColor} Returns the NveColor object representing the color of the resulting caption stroke.
   *  @else
   *  @brief 获取标题笔划的颜色。
   *  @return {NveColor} 返回 NveColor 对象，该对象表示生成的标题笔划的颜色。
   *  @endif
   */
  getOutlineColor() {
    return Module.nve_caption_getOutlineColor(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption shadows.
   *  @param {Boolean} drawShadow Whether to set the caption shadow. True means to set the caption shadow, false means to not set.
   *  @return {void}
   *  @else
   *  @brief 设置字幕阴影。
   *  @param {Boolean} drawShadow 是否设置字幕阴影。 true 表示设置字幕阴影，false 表示不设置。
   *  @return {void}
   *  @endif
   */
  setDrawShadow(drawShadow) {
    Module.nve_caption_setDrawShadow(this.internalObj, drawShadow);
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption shadows.
   *  @return {Boolean}
   *  @else
   *  @brief 获取字幕阴影。
   *  @return {Boolean}
   *  @endif
   */
  getDrawShadow() {
    return Module.nve_caption_getDrawShadow(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption shadow offset
   *  @param {NvePointF} offset Caption shadow offset.
   *  @return {void}
   *  @else
   *  @brief 设置字幕阴影偏移
   *  @param {NvePointF} offset 字幕阴影偏移。
   *  @return {void}
   *  @endif
   */
  setShadowOffset(offset) {
    Module.nve_caption_setShadowOffset(this.internalObj, offset);
  }

  /**
   *  @if ENGLISH
   *  @brief Gets the offset of the current caption shadow.
   *  @return {NvePointF} Returns a NvePointF object representing the caption shadow offset obtained.
   *  @else
   *  @brief 获取当前字幕阴影的偏移量。
   *  @return {NvePointF} 返回一个 NvePointF 对象，表示获得的字幕阴影偏移。
   *  @endif
   */
  getShadowOffset() {
    return Module.nve_caption_getShadowOffset(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption shadow color
   *  @param {NveColor} shadowColor Caption shadow color value.
   *  @return {void}
   *  @else
   *  @brief 设置字幕阴影颜色
   *  @param {NveColor} shadowColor 字幕阴影颜色值。
   *  @return {void}
   *  @endif
   */
  setShadowColor(color) {
    if (color === undefined || color === null || color === "") return;
    Module.nve_caption_setShadowColor(this.internalObj, color);
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption shadow color
   *  @return {NveColor} Returns the NveColor object representing the caption shadow color value obtained.
   *  @else
   *  @brief 获取字幕阴影颜色
   *  @return {NveColor} 返回表示获得的字幕阴影颜色值的 NveColor 对象。
   *  @endif
   */
  getShadowColor() {
    return Module.nve_caption_getShadowColor(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set the feathering degree of the caption shadow.
   *  @param {Number} feather feathering degree
   *  @return {void}
   *  @else
   *  @brief 设置字幕阴影的羽化程度。
   *  @param {Number} feather 羽化度
   *  @return {void}
   *  @endif
   */
  setShadowFeather(feather) {
    Module.nve_caption_setShadowFeather(this.internalObj, feather);
  }

  /**
   *  @if ENGLISH
   *  @brief Get the feathering degree of the caption shadow.
   *  @return {Number} Returns feathering degree
   *  @else
   *  @brief 获取字幕阴影的羽化度。
   *  @return {Number} 返回羽化度
   *  @endif
   */
  getShadowFeather() {
    return Module.nve_caption_getShadowFeather(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption font size.
   *  @param {Number} fontSize Caption font size value
   *  @return {void}
   *  @else
   *  @brief 设置字幕字体大小。
   *  @param {Number} fontSize 字幕字体大小值
   *  @return {void}
   *  @endif
   */
  setFontSize(fontSize) {
    Module.nve_caption_setFontSize(this.internalObj, fontSize);
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption font size.
   *  @return {Number} Returns the obtained caption font size value.
   *  @else
   *  @brief 获取字幕字体大小。
   *  @return {Number} 返回获取的字幕字体大小值。
   *  @endif
   */
  getFontSize() {
    return Module.nve_caption_getFontSize(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption font by file path
   *  @param {String} filePath The file path of the caption font. If it is set to a null string, it is set as the default font.
   *  @return {void}
   *  @else
   *  @brief 按文件路径设置字幕字体
   *  @param {String} filePath 字幕字体的文件路径。如果设置为空字符串，则设置为默认字体。
   *  @return {void}
   *  @endif
   */
  async setFontByFilePath(filePath) {
    if (FS.analyzePath(filePath).exists) {
      Module.nve_caption_setFontByFilePath(this.internalObj, filePath);
    } else {
      const fontFilePath = "/" + filePath.split("/").pop();
      if (!FS.analyzePath(fontFilePath).exists) {
        const res = await fetch(filePath);
        const data = await res.arrayBuffer();
        FS.writeFile(fontFilePath, new Uint8Array(data));
      }
      Module.nve_caption_setFontByFilePath(this.internalObj, fontFilePath);
    }
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption font file path
   *  @return {String} Returns the file path of the caption font.
   *  @else
   *  @brief 获取字幕字体文件路径
   *  @return {String} 返回字幕字体的文件路径。
   *  @endif
   */
  getFontFilePath() {
    return Module.nve_caption_getFontFilePath(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption font family
   *  @param {String} family Caption font name. It will be set to default font if a null string which is given.
   *  @return {void}
   *  @else
   *  @brief 设置标题字体系列
   *  @param {String} family Caption font name. 如果给出一个空字符串，它将被设置为默认字体。
   *  @return {void}
   *  @endif
   */
  setFontFamily(family) {
    Module.nve_caption_setFontFamily(this.internalObj, family);
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption font family
   *  @return {String} Returns font family of caption.
   *  @else
   *  @brief 获取字体名称
   *  @return {String} 返回字体名称。
   *  @endif
   */
  getFontFamily() {
    return Module.nve_caption_getFontFamily(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Get compound caption font family name
   *  @return {String} Returns the compound caption font family name of caption.
   *  @else
   *  @brief 获取字体组合名称
   *  @return {String} 返回字体组合名称。
   *  @endif
   */
  getFontCompoundFamilyName() {
    return Module.nve_caption_getFontCompoundFamilyName(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set the amount of caption translation.
   *  @param {NvePointF} translation The horizontal and vertical absolute translation of the caption.
   *  @return {void}
   *  @else
   *  @brief 设置字幕平移量。
   *  @param {NvePointF} translation 字幕的水平和垂直平移量绝对值。
   *  @return {void}
   *  @endif
   */
  setCaptionTranslation(translation) {
    Module.nve_caption_setCaptionTranslation(this.internalObj, translation);
  }

  /**
   *  @if ENGLISH
   *  @brief Get the amount of caption translation.
   *  @return {NvePointF} Returns NvePointF object indicating the amount of caption translation obtained.
   *  @else
   *  @brief 获取字幕平移量。
   *  @return {NvePointF} 返回 NvePointF 对象，指示获得的字幕平移量。
   *  @endif
   */
  getCaptionTranslation() {
    return Module.nve_caption_getCaptionTranslation(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Caption translation.
   *  @param {NvePointF} translationOffset Horizontal and vertical offset values for caption.
   *  @return {void}
   *  @else
   *  @brief 字幕平移。
   *  @param {NvePointF} translationOffset 字幕的水平和垂直偏移值.
   *  @return {void}
   *  @endif
   */
  translateCaption(translationOffset) {
    Module.nve_caption_translateCaption(this.internalObj, translationOffset);
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption anchor.
   *  @param {NvePointF} anchor Anchor
   *  @return {void}
   *  @else
   *  @brief 设置字幕锚。
   *  @param {NvePointF} anchor 锚
   *  @return {void}
   *  @endif
   */
  setAnchorPoint(anchor) {
    Module.nve_caption_setAnchorPoint(this.internalObj, anchor);
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption anchor.
   *  @return {NvePointF} Returns caption anchor.
   *  @else
   *  @brief 获取字幕锚。
   *  @return {NvePointF} 返回字幕锚。
   *  @endif
   */
  getAnchorPoint() {
    return Module.nve_caption_getAnchorPoint(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set horizontal scaling factor for caption.
   *  @param {Number} scale Horizontal scaling factor.
   *  @return {void}
   *  @else
   *  @brief 设置字幕的水平缩放系数。
   *  @param {Number} scale 水平比例系数。
   *  @return {void}
   *  @endif
   */
  setScaleX(scale) {
    Module.nve_caption_setScaleX(this.internalObj, scale);
  }

  /**
   *  @if ENGLISH
   *  @brief Get horizontal scaling factor for caption.
   *  @return {Number} Returns caption horizontal scaling factor.
   *  @else
   *  @brief 获取标题的水平缩放系数。
   *  @return {Number} 返回字幕水平缩放系数。
   *  @endif
   */
  getScaleX() {
    return Module.nve_caption_getScaleX(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set vertical scaling factor for caption.
   *  @param {Number} scale Vertical scaling factor.
   *  @return {void}
   *  @else
   *  @brief 设置标题的垂直比例系数。
   *  @param {Number} scale 垂直比例系数。
   *  @return {void}
   *  @endif
   */
  setScaleY(scale) {
    Module.nve_caption_setScaleY(this.internalObj, scale);
  }

  /**
   *  @if ENGLISH
   *  @brief Get vertical scaling factor for caption.
   *  @return {Number} Returns caption vertical scaling factor.
   *  @else
   *  @brief 获取标题的垂直比例系数。
   *  @return {Number} 返回字幕垂直比例系数。
   *  @endif
   */
  getScaleY() {
    return Module.nve_caption_getScaleY(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Zooms caption.
   *  @param {Number} scaleFactor Caption scaling factor.
   *  @param {NvePointF} anchor Caption zoom anchor.
   *  @return {void}
   *  @else
   *  @brief 缩放字幕。
   *  @param {Number} scaleFactor 字幕比例系数。
   *  @param {NvePointF} anchor 字幕缩放锚。
   *  @return {void}
   *  @endif
   */
  scaleCaption(scaleFactor, anchor) {
    Module.nve_caption_scaleCaption(this.internalObj, scaleFactor, anchor);
  }

  /**
   *  @if ENGLISH
   *  @brief Scale caption on center
   *  @param {Number} scaleFactor scale factor
   *  @return {void}
   *  @else
   *  @brief 在中心缩放标题
   *  @param {Number} scaleFactor 比例系数
   *  @return {void}
   *  @endif
   */
  scaleCaption2(scaleFactor) {
    var rect = this.getTextBoundingRect();
    this.scaleCaption(
      scaleFactor,
      new NvePointF((rect.left + rect.right) / 2, (rect.top + rect.bottom) / 2),
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Set rotation angle for caption.
   *  @param {Number} angle Rotation angle.
   *  @return {void}
   *  @else
   *  @brief 设置字幕的旋转角度。
   *  @param {Number} angle 旋转角度。
   *  @return {void}
   *  @endif
   */
  setRotationZ(angle) {
    Module.nve_caption_setRotationZ(this.internalObj, angle);
  }

  /**
   *  @if ENGLISH
   *  @brief Get rotation angle for caption.
   *  @return {Number} Returns caption rotation angle.
   *  @else
   *  @brief 获取标题的旋转角度。
   *  @return {Number} 返回字幕旋转角度。
   *  @endif
   */
  getRotationZ() {
    return Module.nve_caption_getRotationZ(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Rotate caption
   *  @param {Number} angle Angle of caption rotation.
   *  @param {NvePointF} anchor Anchor of caption rotation.
   *  @return {void}
   *  @else
   *  @brief 旋转字幕
   *  @param {Number} angle 字幕旋转的角度。
   *  @param {NvePointF} anchor 字幕旋转的锚点。
   *  @return {void}
   *  @endif
   */
  rotateCaption(angle, anchor) {
    Module.nve_caption_rotateCaption(this.internalObj, angle, anchor);
  }

  /**
   *  @if ENGLISH
   *  @brief Rotates caption with the caption center point as the anchor point.
   *  @param {Number} angle Angle of caption rotation.
   *  @return {void}
   *  @else
   *  @brief 以字幕中心点为锚点旋转字幕。
   *  @param {Number} angle 字幕旋转的角度。
   *  @return {void}
   *  @endif
   */
  rotateCaption2(angle) {
    var rect = this.getTextBoundingRect();
    this.rotateCaption(
      angle,
      new NvePointF((rect.left + rect.right) / 2, (rect.top + rect.bottom) / 2),
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption text rectangle
   *  @param {Boolean} captionActualBoundingRect text original rect or not.
   *  @return {NveRectF} Returns RectF object representing the obtained caption text rectangle.
   *  @else
   *  @brief 获取标题文本矩形
   *  @param {Boolean} captionActualBoundingRect 是否为文字的原始边框
   *  @return {RectF} 返回表示获得的标题文本矩形的 RectF 对象。
   *  @endif
   */
  getTextBoundingRect(captionActualBoundingRect = false) {
    return Module.nve_caption_getTextBoundingRect(
      this.internalObj,
      captionActualBoundingRect,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Get the transformed vertices position of the original caption bounding.
   *  @param {number} boundingType (NveCaptionTextBoundingTypeEnum) Bounding type
   *  @return {NveVectorVal<NvePointF>} Returns a NveVectorVal<NvePointF> object containing four vertices positions, which correspond to the top left, bottom left, bottom right, and top right vertices of the original bounding.
   *  @else
   *  @brief 获取原始字幕边界的变换顶点位置。
   *  @param {number} boundingType(NveCaptionTextBoundingTypeEnum) B起始类型
   *  @return {NveVectorVal<NvePointF>} 返回一个 NveVectorVal<NvePointF> 对象，其中包含四个顶点位置，分别对应于原始边界的左上角、左下角、右下角和右上角顶点。
   *  @endif
   */
  getCaptionBoundingVertices(boundingType) {
    return Module.nve_caption_getCaptionBoundingVertices(
      this.internalObj,
      boundingType,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption Z value.
   *  @param {Number} value Z value
   *  @return {void}
   *  @else
   *  @brief 设置标题 Z 值。
   *  @param {Number} value Z值
   *  @return {void}
   *  @endif
   */
  setZValue(value) {
    Module.nve_caption_setZValue(this.internalObj, value);
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption Z value.
   *  @return {Number} Returns caption Z value.
   *  @else
   *  @brief 获取标题 Z 值。
   *  @return {Number} 返回标题 Z值。
   *  @endif
   */
  getZValue() {
    return Module.nve_caption_getZValue(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set whether to record user actions.
   *  @param {Boolean} recordingUserOperation Record user actions or not
   *  @return {void}
   *  @else
   *  @brief 设置是否记录用户操作。
   *  @param {Boolean} recordingUserOperation 是否记录用户操作
   *  @return {}
   *  @endif
   */
  setRecordingUserOperation(recordingUserOperation) {
    Module.nve_caption_setRecordingUserOperation(
      this.internalObj,
      recordingUserOperation,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Set caption opacity.
   *  @param {Number} opacity caption opacity.
   *  @return {void}
   *  @else
   *  @brief 设置字幕不透明度。
   *  @param {Number} opacity 字幕不透明度。
   *  @return {void}
   *  @endif
   */
  setOpacity(opacity) {
    Module.nve_caption_setOpacity(this.internalObj, opacity);
  }

  /**
   *  @if ENGLISH
   *  @brief Get caption opacity.
   *  @return {Number} Return the caption opacity.
   *  @else
   *  @brief 设置字幕不透明度。
   *  @return {Number} 返回标题不透明度。
   *  @endif
   */
  getOpacity() {
    return Module.nve_caption_getOpacity(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Determine if it is a border caption.
   *  @return {Boolean} A return value of true indicates a border caption
   *  @else
   *  @brief 确定它是否是边框标题。
   *  @return {Boolean} 返回值为 true 表示边框标题
   *  @endif
   */
  isFrameCaption() {
    return Module.nve_caption_isFrameCaption(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Determine if caption text color changed.
   *  @return {void}
   *  @else
   *  @brief 确定标题文本颜色是否改变。
   *  @return {void}
   *  @endif
   */
  isTextColorChanged() {
    return Module.nve_caption_isTextColorChanged(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Determines whether the current caption is a modular caption.
   *  @return {Boolean} If returns value is true, it is panorama caption.
   *  @else
   *  @brief 确定当前标题是否为模块化标题。
   *  @return {Boolean} 如果返回值为真，则为全景字幕。
   *  @endif
   */
  isModular() {
    return Module.nve_caption_isModular(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set text background color.
   *  @param {NveColor} backgroundColor Background color value.
   *  @return {void}
   *  @else
   *  @brief 设置文本背景颜色。
   *  @param {NveColor} backgroundColor 背景颜色值。
   *  @return {void}
   *  @endif
   */
  setBackgroundColor(backgroundColor) {
    Module.nve_caption_setBackgroundColor(this.internalObj, backgroundColor);
  }

  /**
   *  @if ENGLISH
   *  @brief Get the current text background color value.
   *  @return {NveColor} Returns the NveColor object representing the current background color.
   *  @else
   *  @brief 获取当前文本背景颜色值。
   *  @return {NveColor} 返回表示当前背景颜色的 NveColor 对象。
   *  @endif
   */
  getBackgroundColor() {
    return Module.nve_caption_getBackgroundColor(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set text background rectangle's corner radius.
   *  @param {Number} radius Corner radius value
   *  @return {void}
   *  @else
   *  @brief 设置文本背景矩形的角半径。
   *  @param {Number} radius 圆角半径值
   *  @return {void}
   *  @endif
   */
  setBackgroundRadius(radius) {
    Module.nve_caption_setBackgroundRadius(this.internalObj, radius);
  }

  /**
   *  @if ENGLISH
   *  @brief Get text background rectangle's corner radius.
   *  @return {Number} Returns corner radius value
   *  @else
   *  @brief 获取文本背景矩形的角半径。
   *  @return {Number} 返回角半径值
   *  @endif
   */
  getBackgroundRadius() {
    return Module.nve_caption_getBackgroundRadius(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set the caption KeyFrameTime.
   *  @param {Number} time time
   *  @return {void}
   *  @else
   *  @brief 设置标题 KeyFrameTime。
   *  @param {Number} time 时间
   *  @return {void}
   *  @endif
   */
  setCurrentKeyFrameTime(time) {
    Module.nve_caption_setCurrentKeyFrameTime(this.internalObj, time);
  }

  /**
   *  @if ENGLISH
   *  @brief enable speed
   *  @param {Boolean} enable
   *  @return {void}
   *  @else
   *  @brief 开启变速
   *  @param {Boolean} enable
   *  @return {void}
   *  @endif
   */
  enableSpeed(enable) {
    Module.nve_caption_enableSpeed(this.internalObj, enable);
  }

  /**
   *  @if ENGLISH
   *  @brief is Enable speed
   *  @return {Boolean}
   *  @else
   *  @brief 是否开启变速
   *  @return {Boolean}
   *  @endif
   */
  isSpeedEnabled() {
    return Module.nve_caption_isSpeedEnabled(this.internalObj);
  }

  /**
   *  @if ENGLISH
   *  @brief Set the max font size for border caption. Only border caption can use this method.
   *  @param {Number} maxFontSize max font size
   *  @return {void}
   *  @else
   *  @brief 设置边框标题的最大字体大小。只有边框标题可以使用此方法。
   *  @param {Number} maxFontSize 最大字体大小
   *  @return {void}
   *  @endif
   */
  setFrameCaptionMaxFontSize(maxFontSize) {
    Module.nve_caption_setFrameCaptionMaxFontSize(
      this.internalObj,
      maxFontSize,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Set the original frame size of the frame caption. If the current caption is not a frame caption, this function has no effect. You can get origin frame size.
   *  @param {NveRectF} rect New frame size.
   *  @return {void}
   *  @else
   *  @brief 设置帧标题的原始帧大小。如果当前字幕不是帧字幕，则此功能无效。您可以获得原始帧大小。
   *  @param {NveRectF} rect 新的帧尺寸。
   *  @return {Number}
   *  @endif
   */
  setTextFrameOriginRect(rect) {
    Module.nve_caption_setTextFrameOriginRect(this.internalObj, rect);
  }

  /**
   *  @if ENGLISH
   *  @brief Set layout attributes from the start character to the end character of caption in list.
   *  @param {NveVectorVal<NveCaptionSpan>} spanList layout attributes list
   *  @return {void}
   *  @else
   *  @brief 用户可以指定字幕中位置从某一起始字符到某一结束字符之间，应用多种layout属性
   *  @param {NveVectorVal<NveCaptionSpan>} spanList layout属性列表
   *  @return {void}
   *  @endif
   */
  setTextSpanList(spanList) {
    Module.nve_caption_setTextSpanList(this.internalObj, spanList);
  }

  /**
   *  @if ENGLISH
   *  @brief Get layout attributes list of caption
   *  @return {NveVectorVal<NveCaptionSpan>} layout attributes list
   *  @else
   *  @brief 获取字幕layout属性列表
   *  @return {NveVectorVal<NveCaptionSpan>} layout属性列表
   *  @endif
   */
  getTextSpanList() {
    return Module.nve_caption_getTextSpanList(this.internalObj);
  }
}

/**
 * @if ENGLISH
 * @brief Animated sticker class.Animation sticker is a landscaping effect used in video editing to produce animated effects. Users can add and adjust various properties of the stickers through various APIs, such as position, size, display time, and so on.
 * @note The in-point and out-point units of the animated sticker are both in microseconds.
 * @see NveEffectInstance
 * @else
 * @brief 动画贴纸类。动画贴纸是视频编辑时使用的一种美化特效，可以产生动画效果。用户可以添加和修改动画贴纸，通过各种API调整贴纸的各种属性，如位置、大小、显示时间等等。
 * @note 动画贴纸的入点和出点单位都为微秒。
 * @see NveEffectInstance
 * @endif
 */
class NveAnimatedSticker extends NveEffectInstance {
  /**
   * @if ENGLISH
   * @brief constructor
   * @else
   * @brief 构造函数
   * @endif
   */
  constructor() {
    super();
  }

  /**
   * @if ENGLISH
   * @brief Sets the translation position of the animated sticker in the resolution coordinate system.The translation coordinate set by this function do not stack.
   * @param {NvePointF} translation Translation position
   * @see getTranslation
   * @else
   * @brief 设置贴纸的位置偏移
   * @param {NvePointF} translation 位置偏移量
   * @see getTranslation
   * @endif
   */
  setTranslation(translation) {
    Module.nve_animatedSticker_setTranslation(this.internalObj, translation);
  }

  /**
   * @if ENGLISH
   * @brief Get the translation position of the animated sticker in the resolution coordinate system.
   * @return {NvePointF} The translation position.
   * @see setTranslation
   * @else
   * @brief 获取贴纸的位置偏移
   * @return {NvePointF} 位置偏移量
   * @see setTranslation
   * @endif
   */
  getTranslation() {
    return Module.nve_animatedSticker_getTranslation(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Tanslate animated sticker in the resolution coordinate system.The translation coordinates set by this function are stackable.
   * @param {NvePointF} translationOffset translation offset.
   * @see setTranslation
   * @else
   * @brief 移动动画贴纸
   * @param {NvePointF} translationOffset 偏移量
   * @see setTranslation
   * @endif
   */
  translateAnimatedSticker(translationOffset) {
    Module.nve_animatedSticker_translateAnimatedSticker(
      this.internalObj,
      translationOffset,
    );
  }

  /**
   * @if ENGLISH
   * @brief Set the scale value of the animated sticker. The scale value set by this function do not stack.
   * @param {Number} scale the scale value.
   * @see getScale
   * @else
   * @brief 设置缩放
   * @param {Number} scale 缩放值
   * @see getScale
   * @endif
   */
  setScale(scale) {
    Module.nve_animatedSticker_setScale(this.internalObj, scale);
  }

  /**
   * @if ENGLISH
   * @brief Get the scale value of the animated sticker.
   * @return {Number} the scale value.
   * @see setScale
   * @else
   * @brief 获取缩放
   * @return {Number} 缩放值
   * @see setScale
   * @endif
   */
  getScale() {
    return Module.nve_animatedSticker_getScale(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Scale animation sticker with the anchor point as the center. The scaling value set by this function is stackable.
   * @param {Number} scaleFactor Animated sticker scaling factor.
   * @param {NvePointF} anchor Animated sticker scale anchor.
   * @see setScale
   * @see scaleAnimatedSticker2
   * @else
   * @brief 缩放动画贴纸
   * @param {Number} scaleFactor 缩放因子
   * @param {NvePointF} anchor 锚点
   * @see setScale
   * @see scaleAnimatedSticker2
   * @endif
   */
  scaleAnimatedSticker(scaleFactor, anchor) {
    Module.nve_animatedSticker_scaleAnimatedSticker(
      this.internalObj,
      scaleFactor,
      anchor,
    );
  }

  /**
   * @if ENGLISH
   * @brief Scale animation sticker on center. The scaling value set by this function is stackable.
   * @param {Number} scaleFactor Animated sticker scaling factor.
   * @see scaleAnimatedSticker
   * @else
   * @brief 缩放动画贴纸
   * @param {Number} scaleFactor 缩放因子
   * @see scaleAnimatedSticker
   * @endif
   */
  scaleAnimatedSticker2(scaleFactor) {
    var left, right, top, bottom;
    var list = this.getBoundingRectangleVertices();
    var point = list.get(0);
    left = right = point.x;
    top = bottom = point.y;
    for (var i = 1; i < 4; i++) {
      point = list.get(i);
      if (point.x < left) left = point.x;
      else if (point.x > right) right = point.x;
      if (point.y < bottom) bottom = point.y;
      else if (point.y > top) top = point.y;
    }
    this.scaleAnimatedSticker(
      scaleFactor,
      new NvePointF((left + right) / 2, (top + bottom) / 2),
    );
  }

  /**
   * @if ENGLISH
   * @brief Set seperated horizontal scaling factor for animated sticker.
   * @param {Number} seperatedScaleX Seperated horizontal scaling factor.
   * @return {void}
   * @else
   * @brief 设置分离式水平缩放因子
   * @param {Number} seperatedScaleX 分离式水平缩放因子
   * @return {void}
   * @endif
   */
  setSeperatedScaleX(seperatedScaleX) {
    Module.nve_animatedSticker_setSeperatedScaleX(
      this.internalObj,
      seperatedScaleX,
    );
  }

  /**
   * @if ENGLISH
   * @brief Set separated vertical scaling factor for animated sticker.
   * @param {Number} seperatedScaleY Seperated vertical scaling factor.
   * @return {void}
   * @else
   * @brief 设置分离式垂直缩放因子
   * @param {Number} seperatedScaleY 分离式垂直缩放因子
   * @return {void}
   * @endif
   */
  setSeperatedScaleY(seperatedScaleY) {
    Module.nve_animatedSticker_setSeperatedScaleY(
      this.internalObj,
      seperatedScaleY,
    );
  }

  /**
   * @if ENGLISH
   * @brief Get separated horizontal scaling factor for animated sticker.
   * @return {Number} Returns animated sticker separated horizontal scaling factor.
   * @else
   * @brief 获取分离式水平缩放因子
   * @return {Number} 返回分离式水平缩放因子
   * @endif
   */
  getSeperatedScaleX() {
    return Module.nve_animatedSticker_getSeperatedScaleX(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Get separated vertical scaling factor for animated sticker.
   * @return {Number} Returns animated sticker separated vertical scaling factor.
   * @else
   * @brief 获取分离式垂直缩放因子
   * @return {Number} 返回分离式垂直缩放因子
   * @endif
   */
  getSeperatedScaleY() {
    return Module.nve_animatedSticker_getSeperatedScaleY(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Separate scale animated sticker based on anchor point
   * @param {Number} scaleXFactor Seperated horizontal scaling factor.
   * @param {Number} scaleYFactor Seperated vertical scaling factor.
   * @param {NvePointF} anchor Animated sticker scale anchor.
   * @return {void}
   * @else
   * @brief 基于锚点分离式缩放贴纸
   * @param {Number} scaleXFactor 分离式水平缩放因子
   * @param {Number} scaleYFactor 分离式垂直缩放因子
   * @param {NvePointF} anchor 缩放锚点
   * @return {void}
   * @endif
   */
  seperateScaleAnimatedSticker(scaleXFactor, scaleYFactor, anchor) {
    Module.nve_animatedSticker_seperateScaleAnimatedSticker(
      this.internalObj,
      scaleXFactor,
      scaleYFactor,
      anchor,
    );
  }

  /**
   * @if ENGLISH
   * @brief Seperate scale animated sticker based on center point
   * @param {Number} scaleXFactor Seperated horizontal scaling factor.
   * @param {Number} scaleYFactor Seperated vertical scaling factor.
   * @return {void}
   * @else
   * @brief 基于中心点分离式缩放贴纸
   * @param {Number} scaleXFactor 分离式水平缩放因子
   * @param {Number} scaleYFactor 分离式垂直缩放因子
   * @return {void}
   * @endif
   */
  seperateScaleAnimatedSticker2(scaleXFactor, scaleYFactor) {
    var left, right, top, bottom;
    var list = this.getBoundingRectangleVertices();
    var point = list.get(0);
    left = right = point.x;
    top = bottom = point.y;
    for (var i = 1; i < 4; i++) {
      point = list.get(i);
      if (point.x < left) left = point.x;
      else if (point.x > right) right = point.x;
      if (point.y < bottom) bottom = point.y;
      else if (point.y > top) top = point.y;
    }
    this.seperateScaleAnimatedSticker(
      scaleXFactor,
      scaleYFactor,
      new NvePointF((left + right) / 2, (top + bottom) / 2),
    );
  }

  /**
   * @if ENGLISH
   * @brief Set the angle at which the animation sticker rotates clockwise along the Z-axis, which is perpendicular to the screen.The rotation Angle set by this function does not stack.
   * @param {Number} angle Rotation angle value.
   * @return {void}
   * @else
   * @brief 设置Z方向旋转
   * @param {Number} angle 角度
   * @return {void}
   * @endif
   */
  setRotationZ(angle) {
    Module.nve_animatedSticker_setRotationZ(this.internalObj, angle);
  }

  /**
   * @if ENGLISH
   * @brief Get the angle at which the animation sticker rotates clockwise along the Z-axis, which is perpendicular to the screen.
   * @return {Number} Return the rotation angle value.
   * @else
   * @brief 获取Z方向旋转
   * @return {Number} 返回旋转角度值。
   * @endif
   */
  getRotationZ() {
    return Module.nve_animatedSticker_getRotationZ(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Scale animation sticker with the anchor point as the center. The scaling value set by this function is stackable.
   * @param {Number} angle Rotation angle.
   * @param {NvePointF} anchor Rotation anchor.
   * @return {void}
   * @else
   * @brief 旋转动画贴纸
   * @param {Number} angle 角度
   * @param {NvePointF} anchor 锚点
   * @return {void}
   * @endif
   */
  rotateAnimatedSticker(angle, anchor) {
    Module.nve_animatedSticker_rotateAnimatedSticker(
      this.internalObj,
      angle,
      anchor,
    );
  }

  /**
   * @if ENGLISH
   * @brief Rotate the animation sticker around center. The rotation angle set by this function is stackable.
   * @param {Number} angle rotation angle.
   * @return {void}
   * @else
   * @brief 旋转动画贴纸
   * @param {Number} angle 旋转角度。
   * @return {void}
   * @endif
   */
  rotateAnimatedSticker2(angle) {
    var left, right, top, bottom;
    var list = this.getBoundingRectangleVertices();
    var point = list.get(0);
    left = right = point.x;
    top = bottom = point.y;
    for (var i = 1; i < 4; i++) {
      point = list.get(i);
      if (point.x < left) left = point.x;
      else if (point.x > right) right = point.x;
      if (point.y < bottom) bottom = point.y;
      else if (point.y > top) top = point.y;
    }
    this.rotateAnimatedSticker(
      angle,
      new NvePointF((left + right) / 2, (top + bottom) / 2),
    );
  }

  /**
   * @if ENGLISH
   * @brief Set the horizontal flip of the animated sticker.
   * @param {Boolean} flip Whether to flip horizontally. True means horizontal flip, and false means not.
   * @return {void}
   * @else
   * @brief 设置水平翻转
   * @param {Boolean} flip 翻转
   * @return {void}
   * @endif
   */
  setHorizontalFlip(flip) {
    Module.nve_animatedSticker_setHorizontalFlip(this.internalObj, flip);
  }

  /**
   * @if ENGLISH
   * @brief Get the horizontal flip state of the animated sticker.
   * @return {Boolean} Return a boolean value indicating a horizontal flip state. True means it flips, false means not.
   * @else
   * @brief 获取水平翻转
   * @return {Boolean} 返回一个布尔值，指示水平翻转状态。 true 表示翻转，false 表示不翻转。
   * @endif
   */
  getHorizontalFlip() {
    return Module.nve_animatedSticker_getHorizontalFlip(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Set the vertical flip of the animated sticker.
   * @param {Boolean} flip Whether to flip vertically. True means it flip vertically, false means not.
   * @return {void} Set the vertical flip of the animated sticker.
   * @else
   * @brief 设置垂直翻转
   * @param {Boolean} flip 翻转
   * @return {void} 设置动画贴纸的垂直翻转。。
   * @endif
   */
  setVerticalFlip(flip) {
    Module.nve_animatedSticker_setVerticalFlip(this.internalObj, flip);
  }

  /**
   * @if ENGLISH
   * @brief Get the vertical flip state of the animated sticker.
   * @return {Boolean} Return a boolean value indicating a vertical flip state. True means it flips, false means not.
   * @else
   * @brief 获取垂直翻转
   * @return {Boolean} 返回一个布尔值，指示垂直翻转状态。 true 表示翻转，false 表示不翻转。
   * @endif
   */
  getVerticalFlip() {
    return Module.nve_animatedSticker_getVerticalFlip(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Get the vertex positions of the animated sticker's original bounding in the resolution coordinate system.
   * @return {NveVectorVal<NvePointF>} Return a NveVectorVal<NvePointF> object containing four vertex positions corresponding to the top left, bottom left, bottom right, and top right vertices of the original bounding.
   * @see NveVectorVal
   * @else
   * @brief 获取边界矩形顶点
   * @return {NveVectorVal<NvePointF>} 返回一个 NveVectorVal<NvePointF> 对象，其中包含四个顶点位置，对应于原始边界的左上角、左下角、右下角和右上角顶点。
   * @see NveVectorVal
   * @endif
   */
  getBoundingRectangleVertices() {
    return Module.nve_animatedSticker_getBoundingRectangleVertices(
      this.internalObj,
    );
  }

  /**
   * @if ENGLISH
   * @brief Get animated sticker's package ID.
   * @return {String} Return the animated sticker's package ID.
   * @else
   * @brief 获取动画贴纸包ID
   * @return {String} 返回动画贴纸的包 ID。
   * @endif
   */
  getAnimatedStickerPackageId() {
    return Module.nve_animatedSticker_getAnimatedStickerPackageId(
      this.internalObj,
    );
  }

  /**
   * @if ENGLISH
   * @brief Set the sticker Z value.The higher the Z value, the higher the sticker is.
   * @param {Number} value Z value
   * @return {} Set the sticker Z value.The higher the Z value, the higher the sticker is.
   * @else
   * @brief 设置Z值
   * @param {Number} value Z值大小
   * @return {} 设置贴纸Z值。Z值越高，贴纸越高。
   * @endif
   */
  setZValue(value) {
    Module.nve_animatedSticker_setZValue(this.internalObj, value);
  }

  /**
   * @if ENGLISH
   * @brief Get the sticker Z value.
   * @return {Number} Return sticker Z value.
   * @else
   * @brief 获取Z值
   * @return {Number} 返回贴纸 Z 值。
   * @endif
   */
  getZValue() {
    return Module.nve_animatedSticker_getZValue(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Check whether the sticker contains audio.
   * @return {Boolean} Return whether the sticker contains audio.
   * @else
   * @brief 是否是音频
   * @return {Boolean} 返回贴纸是否包含音频。
   * @endif
   */
  hasAudio() {
    return Module.nve_animatedSticker_hasAudio(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Set the sticker volume.
   * @param {Number} leftVolumeGain Left channel volume gain,value range [0, 1].
   * @param {Number} rightVolumeGain Right channel volume gain,value range [0, 1].
   * @return {void}
   * @else
   * @brief 设置音量增益
   * @param {Number} leftVolumeGain 左音量增益
   * @param {Number} rightVolumeGain 右音量增益
   * @return {void}
   * @endif
   */
  setVolumeGain(leftVolumeGain, rightVolumeGain) {
    Module.nve_animatedSticker_setVolumeGain(
      this.internalObj,
      leftVolumeGain,
      rightVolumeGain,
    );
  }

  /**
   * @if ENGLISH
   * @brief Set the sticker volume.
   * @brief Get volume information.
   * @return {NveVolume} Return the volume object.
   * @else
   * @brief 获取音量增益
   * @return {NveVolume} 返回音量增益对象。
   * @endif
   */
  getVolumeGain() {
    return Module.nve_animatedSticker_getVolumeGain(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Set the sticker opacity,value range [0, 1].
   * @param {Number} opacity sticker opacity.
   * @return {void}
   * @else
   * @brief 设置不透明度
   * @param {Number} opacity 不透明度值
   * @return {void}
   * @endif
   */
  setOpacity(opacity) {
    Module.nve_animatedSticker_setOpacity(this.internalObj, opacity);
  }

  /**
   * @if ENGLISH
   * @brief Get the sticker opacity.
   * @return {Number} Return the sticker opacity.
   * @else
   * @brief 获取不透明度
   * @return {Number} 返回贴纸不透明度。
   * @endif
   */
  getOpacity() {
    return Module.nve_animatedSticker_getOpacity(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Set the sticker's Key frame time
   * @param {Number} time time point
   * @return {void}
   * @else
   * @brief 设置当前关键帧时间
   * @param {Number} time 时间
   * @return {void}
   * @endif
   */
  setCurrentKeyFrameTime(time) {
    Module.nve_animatedSticker_setCurrentKeyFrameTime(this.internalObj, time);
  }

  /**
   * @if ENGLISH
   * @brief Gets the animated sticker period animation style package ID.
   * @return {String} Returns the obtained modular sticker period animation style resource package ID.
   * @else
   * @brief 获取动画贴纸周期动画样式包ID。
   * @return {String} 返回获取到的模块化贴纸周期动画风格资源包ID。
   * @endif
   */
  getAnimatedStickerPeriodAnimationPackageId() {
    return Module.nve_animatedSticker_getAnimatedStickerPeriodAnimationPackageId(
      this.internalObj,
    );
  }

  /**
   * @if ENGLISH
   * @brief Set the sticker's Key frame time
   * @return {String} Returns the obtained modular sticker in-animation style resource package ID.
   * @else
   * @brief 设置贴纸的关键帧时间
   * @return {String} 返回获取到的模块化贴纸入动画风格资源包ID。
   * @endif
   */
  getAnimatedStickerInAnimationPackageId() {
    return Module.nve_animatedSticker_getAnimatedStickerInAnimationPackageId(
      this.internalObj,
    );
  }

  /**
   * @if ENGLISH
   * @brief Set the sticker's Key frame time
   * @return {String} Returns the obtained modular sticker in-animation style resource package ID.
   * @else
   * @brief 获取动画贴纸出动画样式包 ID。
   * @return {String} 返回获得的动画贴纸动画风格的资源包ID。
   * @endif
   */
  getAnimatedStickerOutAnimationPackageId() {
    return Module.nve_animatedSticker_getAnimatedStickerOutAnimationPackageId(
      this.internalObj,
    );
  }

  /**
   * @if ENGLISH
   * @brief Applys animated sticker loop-animation style.
   * @param {String} animatedStickerPeriodAnimationPackageId animated sticker loop-animation style resource package ID.
   * @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   * @else
   * @brief 应用动画贴纸循环动画样式。
   * @param {String} animatedStickerPeriodAnimationPackageId 动画贴纸循环-动画样式资源包ID。
   * @return {Boolean} Returns boolean value. true 表示应用成功，false 表示失败。
   * @endif
   */
  applyAnimatedStickerPeriodAnimation(animatedStickerPeriodAnimationPackageId) {
    return Module.nve_animatedSticker_applyAnimatedStickerPeriodAnimation(
      this.internalObj,
      animatedStickerPeriodAnimationPackageId,
    );
  }

  /**
   * @if ENGLISH
   * @brief Applys animated sticker in-animation style. Notes：please set loop-Animation to null before you set in-animation, otherwise it will NOT works.
   * @param {String} animatedStickerPeriodAnimationPackageId animated sticker in-animation style resource package ID.
   * @return {Boolean} Returns boolean value. Returns boolean value. True means a successful application, false means a failure.
   * @else
   * @brief 在动画样式中应用动画贴纸。注意：设置in-animation前请先设置loop-Animation为null，否则无效。
   * @param {String} animatedStickerPeriodAnimationPackageId 动画贴纸动画风格资源包ID。
   * @return {Boolean} Returns boolean value. 返回布尔值。 true 表示申请成功，false 表示失败。
   * @endif
   */
  applyAnimatedStickerInAnimation(animatedStickerInAnimationPackageId) {
    return Module.nve_animatedSticker_applyAnimatedStickerInAnimation(
      this.internalObj,
      animatedStickerInAnimationPackageId,
    );
  }

  /**
   * @if ENGLISH
   * @brief Applys animated sticker out-animation style.Notes：please set loop-Animation to null before you set out-animation, otherwise it will NOT works.
   * @param {String} animatedStickerPeriodAnimationPackageId animated sticker out-animation style resource package ID.
   * @return {Boolean} Returns boolean value. True means a successful application, false means a failure.
   * @else
   * @brief 应用动画贴纸 out-animation 样式。注意：请在设置 out-animation 之前将 loop-Animation 设置为 null，否则将不起作用。
   * @param {String} animatedStickerPeriodAnimationPackageId 动画贴纸-动画样式资源包ID。
   * @return {Boolean} Returns boolean value. true 表示申请成功，false 表示失败。
   * @endif
   */
  applyAnimatedStickerOutAnimation(animatedStickerOutAnimationPackageId) {
    return Module.nve_animatedSticker_applyAnimatedStickerOutAnimation(
      this.internalObj,
      animatedStickerOutAnimationPackageId,
    );
  }

  /**
   * @if ENGLISH
   * @brief Set animated sticker Animation Period.
   * @param {Number} periodInMS Animation period in millisecond
   * @return {void}
   * @else
   * @brief 设置动画贴纸动画周期。
   * @param {Number} periodInMS 动画周期（毫秒）
   * @return {void}
   * @endif
   */
  setAnimatedStickerAnimationPeriod(periodInMS) {
    Module.nve_animatedSticker_setAnimatedStickerAnimationPeriod(
      this.internalObj,
      periodInMS,
    );
  }

  /**
   * @if ENGLISH
   * @brief Get animated sticker Animation Period.
   * @return {Number} Return animation period in millisecond
   * @else
   * @brief 获取动画贴纸动画时期。
   * @return {Number} 以毫秒为单位返回动画周期
   * @endif
   */
  getAnimatedStickerAnimationPeriod() {
    return Module.nve_animatedSticker_getAnimatedStickerAnimationPeriod(
      this.internalObj,
    );
  }

  /**
   * @if ENGLISH
   * @brief Set animated sticker in-animation duration.
   * @param {Number} inAnimationDurationInMS in-animation duration in millisecond
   * @return {void}
   * @else
   * @brief 设置动画贴纸入动画持续时间。
   * @param {Number} inAnimationDurationInMS 入动画持续时间（以毫秒为单位）
   * @return {void}
   * @endif
   */
  setAnimatedStickerInAnimationDuration(inAnimationDurationInMS) {
    Module.nve_animatedSticker_setAnimatedStickerInAnimationDuration(
      this.internalObj,
      inAnimationDurationInMS,
    );
  }

  /**
   * @if ENGLISH
   * @brief Get animated sticker in-animation duration.
   * @return {Number} Get animated sticker in-animation duration.
   * @else
   * @brief 获取动画贴纸中的入动画持续时间。
   * @return {Number} 获取动画贴纸中的入动画持续时间。
   * @endif
   */
  getAnimatedStickerInAnimationDuration() {
    return Module.nve_animatedSticker_getAnimatedStickerInAnimationDuration(
      this.internalObj,
    );
  }

  /**
   * @if ENGLISH
   * @brief Set animated sticker out-animation duration.
   * @param {Number} outAnimationDurationInMS out-animation duration in millisecond
   * @return {void}
   * @else
   * @brief 设置动画贴纸出动画持续时间。
   * @param {Number} outAnimationDurationInMS 以毫秒为单位的出动画持续时间
   * @return {void}
   * @endif
   */
  setAnimatedStickerOutAnimationDuration(outAnimationDurationInMS) {
    Module.nve_animatedSticker_setAnimatedStickerOutAnimationDuration(
      this.internalObj,
      outAnimationDurationInMS,
    );
  }

  /**
   * @if ENGLISH
   * @brief Get animated sticker out-animation duration.
   * @return {Number} Return out-animation duration in millisecond
   * @else
   * @brief 获取动画贴纸出动画持续时间。
   * @return {Number} 以毫秒为单位返回出动画持续时间
   * @endif
   */
  getAnimatedStickerOutAnimationDuration() {
    return Module.nve_animatedSticker_getAnimatedStickerOutAnimationDuration(
      this.internalObj,
    );
  }
}

/**
 *  @if ENGLISH
 *  @brief Compound caption. Compound captions are compound caption that is superimposed on the video, each compound caption may composed of several sub-captions. When editing a video, users can add and adjust the captions position. User can also set its properties such as font family, text color, etc.
 *  @see NveEffectInstance
 *  @else
 *  @brief 复合字幕。复合字幕是视频上叠加的组合型文字，每个复合字幕包含若干个子字幕。编辑视频时，可以添加并对字幕位置进行调整处理，还可以对字体，颜色属性进行修改。
 *  @see NveEffectInstance
 *  @endif
 */
class NveCompoundCaption extends NveEffectInstance {
  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   *  @if ENGLISH
   *  @brief  Get number of sub-cpations in this compound caption.
   *  @return {Number} Returns number of sub-cpations
   *  @else
   *  @brief 获取字幕数量
   *  @return {Number} 返回字幕的数量
   *  @endif
   */
  getCaptionCount() {
    return Module.nve_compoundCaption_getCaptionCount(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Set sub-caption text with index
   * @param {Number} captionIndex caption index to set text
   * @param {String} text Caption text
   * @return {void}
   * @else
   * @brief 设置文本
   * @param {Number} captionIndex 字幕索引
   * @param {String} text 文本
   * @return {void} 文字内容
   * @endif
   */
  setText(captionIndex, text) {
    Module.nve_compoundCaption_setText(this.internalObj, captionIndex, text);
  }

  /**
   * @if ENGLISH
   * @brief Get sub-caption text with index
   * @param {Number} captionIndex caption index to get text
   * @return {String} Returns caption text.
   * @else
   * @brief 获取文本
   * @param {Number} captionIndex 字幕索引
   * @return {String} 返回字幕文本。
   * @endif
   */
  getText(captionIndex) {
    return Module.nve_compoundCaption_getText(this.internalObj, captionIndex);
  }

  /**
   * @if ENGLISH
   * @brief Set sub-caption color with index
   * @param {Number} captionIndex Caption index to set text color
   * @param {NveColor} color Caption text color value.
   * @return {void}
   * @else
   * @brief 设置文本颜色
   * @param {Number} captionIndex 字幕索引
   * @param {NveColor} color 颜色
   * @return {void}
   * @endif
   */
  setTextColor(captionIndex, color) {
    if (color === undefined || color === null || color === "") return;
    Module.nve_compoundCaption_setTextColor(
      this.internalObj,
      captionIndex,
      color,
    );
  }

  /**
   * @if ENGLISH
   * @brief Get sub-caption color with index
   * @param {Number} captionIndex caption index to get text color
   * @return {NveColor} Return NveColor object which is the text color
   * @else
   * @brief 获取文本颜色
   * @param {Number} captionIndex 字幕索引
   * @return {NveColor} 返回 NveColor 对象，它是文本颜色
   * @endif
   */
  getTextColor(captionIndex) {
    return Module.nve_compoundCaption_getTextColor(
      this.internalObj,
      captionIndex,
    );
  }

  /**
   * @if ENGLISH
   * @brief Set sub-caption font family with index
   * @param {Number} captionIndex Caption index to set font family
   * @param {String} family Caption font family name. It will be set to default font if family is an empty string
   * @return {void}
   * @else
   * @brief 设置字体家族
   * @param {Number} captionIndex 字幕索引
   * @param {String} family 字体家族
   * @return {void}
   * @endif
   */
  setFontFamily(captionIndex, family) {
    Module.nve_compoundCaption_setFontFamily(
      this.internalObj,
      captionIndex,
      family,
    );
  }

  /**
   * @if ENGLISH
   * @brief Get sub-caption font family with index
   * @param {Number} captionIndex sub-caption index
   * @return {String}
   * @else
   * @brief 获取字体家族
   * @param {Number} captionIndex 字幕索引
   * @return {String}
   * @endif
   */
  getFontFamily(captionIndex) {
    return Module.nve_compoundCaption_getFontFamily(
      this.internalObj,
      captionIndex,
    );
  }

  /**
   * @if ENGLISH
   * @brief Set the amount of caption translation.
   * @param {NvePointF} translation The horizontal and vertical translation of the caption.
   * @return {void}
   * @else
   * @brief 设置字幕平移
   * @param {NvePointF} translation 转场
   * @return {void}
   * @endif
   */
  setCaptionTranslation(translation) {
    Module.nve_compoundCaption_setCaptionTranslation(
      this.internalObj,
      translation,
    );
  }

  /**
   * @if ENGLISH
   * @brief Get the amount of caption translation.
   * @return {NvePointF} Returns NvePointF object indicating the amount of caption translation obtained.
   * @else
   * @brief 获取字幕平移
   * @return {NvePointF} 返回 NvePointF 对象，指示获得的字幕平移量。
   * @endif
   */
  getCaptionTranslation() {
    return Module.nve_compoundCaption_getCaptionTranslation(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Translate caption.
   * @param {NvePointF} translationOffset Horizontal and vertical offset values for caption.
   * @return {void}
   * @else
   * @brief 平移字幕
   * @param {NvePointF} translationOffset 转场偏移
   * @return {void}
   * @endif
   */
  translateCaption(translationOffset) {
    Module.nve_compoundCaption_translateCaption(
      this.internalObj,
      translationOffset,
    );
  }

  /**
   * @if ENGLISH
   * @brief Set caption anchor.
   * @param {NvePointF} anchor Anchor
   * @return {viod}
   * @else
   * @brief 设置锚点
   * @param {NvePointF} anchor 锚点
   * @return {void}
   * @endif
   */
  setAnchorPoint(anchor) {
    Module.nve_compoundCaption_setAnchorPoint(this.internalObj, anchor);
  }

  /**
   * @if ENGLISH
   * @brief Get caption anchor.
   * @return {NvePointF} Returns caption anchor.
   * @else
   * @brief 获取锚点
   * @return {NvePointF} 返回字幕锚。
   * @endif
   */
  getAnchorPoint() {
    return Module.nve_compoundCaption_getAnchorPoint(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Set horizontal scaling factor for caption.
   * @param {Number} scale Horizontal scaling factor.
   * @return {void}
   * @else
   * @brief 设置X方向缩放
   * @param {Number} scale 缩放
   * @return {void}
   * @endif
   */
  setScaleX(scale) {
    Module.nve_compoundCaption_setScaleX(this.internalObj, scale);
  }

  /**
   * @if ENGLISH
   * @brief Get horizontal scaling factor for caption.
   * @return {Number} Returns caption horizontal scaling factor.
   * @else
   * @brief 获取X方向缩放
   * @return {Number} 返回字幕水平缩放系数。
   * @endif
   */
  getScaleX() {
    return Module.nve_compoundCaption_getScaleX(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Set vertical scaling factor for captions.
   * @param {Number} scale Vertical scaling factor.
   * @return {void}
   * @else
   * @brief 设置Y方向缩放
   * @param {Number} scale 缩放
   * @return {void}
   * @endif
   */
  setScaleY(scale) {
    Module.nve_compoundCaption_setScaleY(this.internalObj, scale);
  }

  /**
   * @if ENGLISH
   * @brief Get vertical scaling factor for captions.
   * @return {Number} Returns caption vertical scaling factor.
   * @else
   * @brief 获取Y方向缩放
   * @return {Number} 返回字幕垂直比例系数。
   * @endif
   */
  getScaleY() {
    return Module.nve_compoundCaption_getScaleY(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Scale caption
   * @param {Number} scaleFactor Caption scaling factor.
   * @param {NvePointF} anchor Caption zoom anchor.
   * @return {void}
   * @else
   * @brief 缩放字幕
   * @param {Number} scaleFactor 缩放系数
   * @param {NvePointF} anchor 锚点
   * @return {void}
   * @endif
   */
  scaleCaption(scaleFactor, anchor) {
    Module.nve_compoundCaption_scaleCaption(
      this.internalObj,
      scaleFactor,
      anchor,
    );
  }

  /**
   *  @if ENGLISH
   *  @brief Scale caption on center
   *  @param {Number} scaleFactor scale factor
   *  @return {void}
   *  @else
   *  @brief 在中心缩放标题
   *  @param {Number} scaleFactor 比例系数
   *  @return {void}
   *  @endif
   */
  scaleCaption2(scaleFactor) {
    var vertices = this.getCompoundBoundingVertices(1);
    if (!vertices || vertices.size() !== 4) return;

    var cx = 0;
    var cy = 0;
    for (var i = 0; i < 4; ++i) {
      var pt = vertices.get(i);
      cx += pt.x;
      cy += pt.y;
    }
    this.scaleCaption(scaleFactor, new NvePointF(cx / 4, cy / 4));
  }

  /**
   * @if ENGLISH
   * @brief Set the rotation angle for the caption.
   * @param {Number} angle Rotation angle.
   * @return {void}
   * @else
   * @brief 设置Z方向旋转
   * @param {Number} angle 角度
   * @return {void}
   * @endif
   */
  setRotationZ(angle) {
    Module.nve_compoundCaption_setRotationZ(this.internalObj, angle);
  }

  /**
   * @if ENGLISH
   * @brief Get the rotation angle for the caption.
   * @return {Number} Returns caption rotation angle.
   * @else
   * @brief 获取Z方向旋转
   * @return {Number} 返回字幕旋转角度。
   * @endif
   */
  getRotationZ() {
    return Module.nve_compoundCaption_getRotationZ(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Rotate caption
   * @param {Number} angle angle
   * @param {NvePointF} anchor anchor
   * @return {void}
   * @else
   * @brief 旋转字幕
   * @param {Number} angle 角度
   * @param {NvePointF} anchor 锚点
   * @return {void}
   * @endif
   */
  rotateCaption(angle, anchor) {
    Module.nve_compoundCaption_rotateCaption(this.internalObj, angle, anchor);
  }

  /**
   * @if ENGLISH
   * @brief Rotate catpion on center
   * @param {Number} angle angle
   * @return {void}
   * @else
   * @brief 旋转字幕
   * @param {Number} angle 角度
   * @return {void}
   * @endif
   */
  rotateCaption2(angle) {
    var vertices = this.getCompoundBoundingVertices(1);
    if (!vertices || vertices.size() !== 4) return;

    var cx = 0;
    var cy = 0;
    for (var i = 0; i < 4; ++i) {
      var pt = vertices.get(i);
      cx += pt.x;
      cy += pt.y;
    }
    this.rotateCaption(angle, new NvePointF(cx / 4, cy / 4));
  }

  /**
   * @if ENGLISH
   * @brief Get the transformed vertices position of the original caption bounding.
   * @param {Number} captionIndex sub-caption index
   * @param {Number} boundingType bounding type
   * @param {NveMotionParameters} motionParams motion parameter
   * @return {NveVectorVal} Returns the NSArray object, the object type is NSValue, and the actual data type is CGPoint, which correspond to the top left, bottom left, bottom right, and top right vertices of the original bounding.
   * @see NveMotionParameters
   * @see NveVectorVal
   * @else
   * @brief 获取字幕边界顶点
   * @param {Number} captionIndex 字幕索引
   * @param {Number} boundingType 边界类型
   * @param {NveMotionParameters} motionParams 运动参数
   * @return {NveVectorVal} 返回NSArray对象，对象类型为NSValue，实际数据类型为CGPoint，分别对应原始边界的左上、左下、右下、右上顶点。
   * @see NveMotionParameters
   * @see NveVectorVal
   * @endif
   */
  getCaptionBoundingVertices(captionIndex, boudingType, motionParams) {
    return Module.nve_compoundCaption_getCaptionBoundingVertices(
      this.internalObj,
      captionIndex,
      boudingType,
      motionParams,
    );
  }

  /**
   * @if ENGLISH
   * @brief Get the transformed vertices position of the original compound caption bounding.
   * @param {Number} boundingType Bounding type.
   * @param {NveMotionParameters} motionParams motion parameter
   * @return {NveVectorVal} Returns the NSArray object, the object type is NSValue, and the actual data type is CGPoint, which correspond to the top left, bottom left, bottom right, and top right vertices of the original bounding.
   * @see NveVectorVal
   * @else
   * @brief 获取组合边界顶点
   * @param {Number} boudingType 边界类型
   * @param {NveMotionParameters} motionParams 运动参数
   * @return {NveVectorVal} 返回NSArray对象，对象类型为NSValue，实际数据类型为CGPoint，分别对应原始边界的左上、左下、右下、右上顶点。
   * @see NveVectorVal
   * @endif
   */
  getCompoundBoundingVertices(boudingType, motionParams) {
    return Module.nve_compoundCaption_getCompoundBoundingVertices(
      this.internalObj,
      boudingType,
      motionParams,
    );
  }

  /**
   * @if ENGLISH
   * @brief Set caption Z value.
   * @param {Number} value Z value
   * @return {void}
   * @else
   * @brief 设置Z值
   * @param {Number} value Z值大小
   * @return {void}
   * @endif
   */
  setZValue(value) {
    Module.nve_compoundCaption_setZValue(this.internalObj, value);
  }

  /**
   * @if ENGLISH
   * @brief Get caption Z value.
   * @return {Number}
   * @else
   * @brief 获取Z值
   * @return {Number}
   * @endif
   */
  getZValue() {
    return Module.nve_compoundCaption_getZValue(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Set caption opacity
   * @param {Number} value opacity
   * @return {void}
   * @else
   * @brief 设置不透明度
   * @param {Number} value 不透明度大小
   * @return {void}
   * @endif
   */
  setOpacity(value) {
    Module.nve_compoundCaption_setOpacity(this.internalObj, value);
  }

  /**
   * @if ENGLISH
   * @brief Get caption opacity
   * @return {Number} Return the caption opacity.
   * @else
   * @brief 获取不透明度
   * @return {Number} 返回标题不透明度。
   * @endif
   */
  getOpacity() {
    return Module.nve_compoundCaption_getOpacity(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Determine if it is a border caption.
   * @param {Number} captionIndex sub-caption index
   * @return {Boolean} A return value of true indicates a border caption
   * @else
   * @brief 是否帧字幕
   * @param {Number} captionIndex 字幕索引
   * @return {Boolean} 返回值为 true 表示边框字幕
   * @endif
   */
  isFrameCaption(captionIndex) {
    return Module.nve_compoundCaption_isFrameCaption(
      this.internalObj,
      captionIndex,
    );
  }

  /**
   * @if ENGLISH
   * @brief Get the caption style package ID.
   * @return {String} Returns the obtained caption style resource package ID.
   * @else
   * @brief 获取字幕风格包ID
   * @return {String} 返回获取到的字幕样式资源包ID。
   * @endif
   */
  getCaptionStylePackageId() {
    return Module.nve_compoundCaption_getCaptionStylePackageId(
      this.internalObj,
    );
  }
}

/**
 * @if ENGLISH
 * @brief There are multiple clips on the track. The transition is the transition effect from one video clip to another, and no video transitions can be added between clips with gaps. Currently it supports multiple video transitions including fade, turning, swap, stretch in, page curl, lens flare, star, dip to black, dip to white,push to right, push to top, upper left into.Each video transition can be set and retrieved via video track. The default transition is fade.
 * @see NveEffectInstance
 * @else
 * @brief 视频转场，片段间切换的特效。轨道上有多个片段，转场是从一个视频片段播放到另一个视频片段的衔接过渡效果，而在有间隙的片段之间不能添加视频转场。目前支持多种视频转场， 包括Fade(淡入淡出)、Turning(翻转)、Swap(层叠)、Stretch In(伸展进入)、Page Curl(卷页)、Lens Flare(镜头眩光)、Star(星形)、Dip To Black(闪黑)、Dip To White(闪白)、 Push To Right(右推拉)、Push To Top(上推拉)、Upper Left Into(斜推)。每种视频转场都可通过视频轨道来设置和获取。默认转场是Fade(淡入淡出)。
 * @see NveEffectInstance
 * @endif
 */
class NveVideoTransition extends NveEffectInstance {
  /**
   * @if ENGLISH
   * @brief constructor
   * @else
   * @brief 构造函数
   * @endif
   */
  constructor() {
    super();
  }

  /**
   * @if ENGLISH
   * @brief Get video transition type.
   * @return {Number} Returns the video transition type.
   * @else
   * @brief 获取视频转场类型
   * @return {Number} 返回视频转换类型。
   * @endif
   */
  getVideoTransitionType() {
    return Module.nve_videoTransition_getVideoTransitionType(this.internalObj);
  }

  /**
   * @if ENGLISH
   * @brief Get built-in video transition name.
   * @return {String} Returns the name of the built-in video transition. If it is not a built-in video transition, it will return a null string.
   * @else
   * @brief 获取内置视频转场名字
   * @return {String} 返回内置视频转换的名称。如果它不是一个内置的视频过渡，它将返回一个空字符串。
   * @endif
   */
  getBuiltinVideoTransitionName() {
    return Module.nve_videoTransition_getBuiltinVideoTransitionName(
      this.internalObj,
    );
  }

  /**
   * @if ENGLISH
   * @brief Get the video transition resource package ID.
   * @return {String} Returns the video transition resource package ID. If it is not a resource package video transition, it will return a null string.
   * @else
   * @brief 获取视频转场包ID
   * @return {String} 返回视频转换资源包ID。如果它不是一个资源包视频转换，它将返回一个空字符串。
   * @endif
   */
  getVideoTransitionPackageId() {
    return Module.nve_videoTransition_getVideoTransitionPackageId(
      this.internalObj,
    );
  }

  /**
   * @if ENGLISH
   * @brief Set video transition duration.
   * @param {Number} duration Video transition duration, min value 250000
   * @param {Number} matchMode Video transition duration scale mode
   * @return {void}
   * @else
   * @brief 设置视频转场持续时间
   * @param {Number} duration 持续时间
   * @param {Number} matchMode 比较模式
   * @return {void}
   * @endif
   */
  setVideoTransitionDuration(duration) {
    return Module.nve_videoTransition_setVideoTransitionDuration(
      this.internalObj,
      duration,
    );
  }

  /**
   * @if ENGLISH
   * @brief Get video transition duration.
   * @return {Number} Returns the video transition duration.
   * @else
   * @brief 获取视频转场持续时间
   * @return {Number} 返回视频转换持续时间。
   * @endif
   */
  getVideoTransitionDuration() {
    return Module.nve_videoTransition_getVideoTransitionDuration(
      this.internalObj,
    );
  }
}

/**
 * @if ENGLISH
 * @brief Render flag enum
 * @note DontDropFrame Don't drop frame
 * @note OutputImageBitmap Output ImageBitmap
 * @else
 * @brief 渲染标识枚举
 * @note DontDropFrame 不丢帧模式
 * @note OutputImageBitmap 输出ImageBitmap数据
 * @endif
 */
const NveRenderFlagEnum = Object.freeze({
  DontDropFrame: 1,
  OutputImageBitmap: 2,
});

/**
 * @if ENGLISH
 * @brief Asset package type enum
 * @note VideoFx Video Fx Type
 * @note VideoTransition Video Transition Type
 * @note CaptionStyle Caption Style Type
 * @note AnimatedSticker Animated Sticker Type
 * @note ARScene AR Scene Type
 * @note CompoundCaption Compound caption type
 * @note CaptionContext Modular caption context type
 * @note CaptionRenderer Modular caption renderer type
 * @note CaptionAnimation Modular caption animation type
 * @note CaptionInAnimation Modular caption in-animation type
 * @note CaptionOutAnimation Modular caption out-animation type
 * @note Template Template type
 * @note AvatarModel Avatar model type
 * @note AvatarMaterial Avatar material type
 * @note AnimatedStickerAnimation Animated sticker animation type
 * @note AnimatedStickerInAnimation Animated sticker in-animation type
 * @note AnimatedStickerOutAnimation Animated sticker out-animation type
 * @note Makeup Makeup type
 * @note FaceMesh Face mesh type
 * @note Warp Warp type
 * @note Project Project type
 * @else
 * @brief 资源包类型枚举
 * @note VideoFx 视频特效类型
 * @note VideoTransition 视频转场类型
 * @note CaptionStyle 字幕样式类型
 * @note AnimatedSticker 动画贴纸类型
 * @note ARScene AR场景类型
 * @note CompoundCaption 复合字幕类型
 * @note CaptionContext 模块化字幕上下文类型
 * @note CaptionRenderer 模块化字幕渲染器类型
 * @note CaptionAnimation 模块化字幕动画类型
 * @note CaptionInAnimation 模块化字幕入动画类型
 * @note CaptionOutAnimation 模块化字幕出动画类型
 * @note AvatarModel 头像模型类型
 * @note AvatarMaterial 头像材质类型
 * @note AnimatedStickerAnimation 动态贴纸动画类型
 * @note AnimatedStickerInAnimation 动态贴纸入动画类型
 * @note AnimatedStickerOutAnimation 动态贴纸出动画类型
 * @note Makeup 美妆包类型
 * @note FaceMesh 新版美型包类型
 * @note Warp 旧版美型包类型
 * @endif
 */
const NveAssetPackageTypeEnum = Object.freeze({
  VideoFx: 0,
  VideoTransition: 1,
  CaptionStyle: 2,
  AnimatedSticker: 3,
  CaptureScene: 5,
  ARScene: 6,
  CompoundCaption: 7,
  CaptionContext: 8,
  CaptionRenderer: 9,
  CaptionAnimation: 10,
  CaptionInAnimation: 11,
  CaptionOutAnimation: 12,
  AvatarModel: 14,
  AvatarMaterial: 15,
  AnimatedStickerAnimation: 16,
  AnimatedStickerInAnimation: 17,
  AnimatedStickerOutAnimation: 18,
  Makeup: 19,
  FaceMesh: 20,
  Warp: 21,
});

/**
 * @if ENGLISH
 * @brief Asset package status enum
 * @note NotInstalled Not installed
 * @note Installing Installing
 * @note Ready Ready
 * @note Upgrading Upgrading
 * @else
 * @brief 资源包状态枚举
 * @note NotInstalled 未安装
 * @note Installing 安装中
 * @note Ready 就绪
 * @note Upgrading 升级中
 * @endif
 */
const NveAssetPackageStatusEnum = Object.freeze({
  NotInstalled: 0,
  Installing: 1,
  Ready: 2,
  Upgrading: 3,
});

/**
 * @if ENGLISH
 * @brief The enum of human detection
 * @note 0x00000001 Landmarks on human face
 * @note 0x00000002 Actions of human face
 * @note 0x00000004 Avatar Expressions of human face
 * @note 0x00000008 Video detection mode
 * @note 0x00000010 Image detection mode
 * @note 0x00008000 Semi-image detection mode
 * @note 0x00000020 Multi thread detection
 * @note 0x00000040 Single thread detection
 * @note 0x00000080 Extra features of human face
 * @note 0x00000100 Background segmentation
 * @note 0x00000200 Hand landmarks
 * @note 0x00000400 Hand actions
 * @note 0x00000800 Bone landmarks of hand
 * @note 0x00001000 Eyeball landmarks
 * @note 0x00002000 Multiple detect, say multiple rois detection
 * @note 0x00004000 Sky segmentation
 * @note 0x00010000 Half body segmentation
 * @note 0x00020000 Base face attributes
 * @note 0x00040000 Face shape attribute
 * @else
 * @brief 人体检测功能枚举
 * @note 0x00000001 人脸点位
 * @note 0x00000002 人脸表情
 * @note 0x00000004 人脸Avatar表情
 * @note 0x00000008 视频检测模式
 * @note 0x00000010 图像检测模式
 * @note 0x00008000 半图像检测模式
 * @note 0x00000020 多线程检测
 * @note 0x00000040 单线程检测
 * @note 0x00000080 其他人脸特征
 * @note 0x00000100 背景分割
 * @note 0x00000200 手部点位
 * @note 0x00000400 手部动作
 * @note 0x00000800 手部骨骼点位
 * @note 0x00001000 眼球点位
 * @note 0x00002000 多重检测,例如多重ROI检测
 * @note 0x00004000 天空分割
 * @note 0x00010000 半身分割
 * @note 0x00020000 人脸基础属性
 * @note 0x00040000 脸型属性
 * @endif
 */
const NveHumanDetectionFeatureEnum = Object.freeze({
  FaceLandmark: 0x00000001,
  FaceAction: 0x00000002,
  AvatarExpression: 0x00000004,
  VideoMode: 0x00000008,
  ImageMode: 0x00000010,
  SemiImageMode: 0x00008000,
  MultiThread: 0x00000020,
  SingleThread: 0x00000040,
  Extra: 0x00000080,
  SegmentationBackground: 0x00000100,
  HandLandmark: 0x00000200,
  HandAction: 0x00000400,
  HandBone: 0x00000800,
  EyeballLandmark: 0x00001000,
  MultiDetect: 0x00002000,
  SegmentationSky: 0x00004000,
  SegmentationHalfBody: 0x00010000,
  FaceAttr: 0x00020000,
  FaceAttrShape: 0x00040000,
});

/**
 * @if ENGLISH
 * @brief Data type enum of human detection
 * @note FakeFace Fake face
 * @note Makeup Makeup
 * @note SkinColor Skin color
 * @note PE106 PE106
 * @note PE240 PE240
 * @note CustomAvatar Custom avatar
 * @note Makeup2 Makeup2
 * @note FaceCommon Face common
 * @note AdvancedBeauty Advanced beauty
 * @else
 * @brief 人脸检测数据类型
 * @note FakeFace 假脸数据包类型
 * @note Makeup 美妆数据包类型
 * @note SkinColor 美肤数据包类型
 * @note PE106 106点位姿态估计数据包类型
 * @note PE240 240点位姿态估计数据包类型
 * @note CustomAvatar 捏脸数据包类型
 * @note Makeup2 美妆2数据包类型
 * @note FaceCommon 人脸通用数据包类型
 * @note AdvancedBeauty 高级美颜数据包类型
 * @endif
 */
const NveHumanDetectionDataTypeEnum = Object.freeze({
  FakeFace: 0,
  Makeup: 1,
  SkinColor: 2,
  PE106: 3,
  PE240: 4,
  CustomAvatar: 5,
  Makeup2: 6,
  FaceCommon: 7,
  AdvancedBeauty: 8,
});

/**
 * @if ENGLISH
 * @brief Effect context
   Effect context is the entry to effect SDK framework, nveGetEffectContextInstance() used to get the unique effect context instance.
 * @else
 * @brief 特效上下文
   特效上下文类可视作Effect SDK框架的入口，可以通过nveGetEffectContextInstance()获取全局唯一的实例对象。
 * @endif
 */
class NveEffectContext {
  /**
   * @constructor
   */
  constructor() {}

  /**
   * @if ENGLISH
   * @brief Verifies the SDK license file.
   * @param {String} licenseFilePath License file path
   * @return {Boolean} true indicates that the authorization verification is successful, and false indicates that it fails. If the verification fails, effects are ineffective.
   * @else
   * @brief 验证SDK许可文件
   * @param {String} licenseFilePath 授权文件路径
   * @return {Boolean} true表示授权验证成功，false表示失败。如果验证失败, 无法正常使用。
   * @endif
   */
  verifySdkLicenseFile(licenseFilePath) {
    return Module.nve_effectContext_verifySdkLicenseFile(licenseFilePath);
  }

  /**
   * @if ENGLISH
   * @brief Verifies the SDK license file url.
   * @param {String} licenseFileUrl License file url
   * @return {Boolean} true indicates that the authorization verification is successful, and false indicates that it fails. If the verification fails, effects are ineffective.
   * @else
   * @brief 验证SDK许可文件网络地址
   * @param {String} licenseFileUrl 授权文件网络地址
   * @return {Boolean} true表示授权验证成功，false表示失败。如果验证失败, 无法正常使用。
   * @endif
   */
  async verifySdkLicenseFileUrl(licenseFileUrl) {
    const licenseFilePath = "/" + licenseFileUrl.split("/").pop();
    if (!FS.analyzePath(licenseFilePath).exists) {
      const res = await fetch(licenseFileUrl);
      const data = await res.arrayBuffer();
      FS.writeFile(licenseFilePath, new Uint8Array(data));
    }
    return Module.nve_effectContext_verifySdkLicenseFile(licenseFilePath);
  }

  /**
     * @if ENGLISH
     * @brief Set maximum of queued render task.
     * @param {Number} maxQueuedRenderTask Maximum value
       Since effect render task will be scheduled to an internal thread and be executed asynchronously,
       too many queued pending effect render task will consume excessive memory, this method
       setup a queued render task limitation, when the current queued render task reach the limitation
       newly created effect render task will be dropped except DontDropFrame render flag was set.
     * @else
     * @brief 设置渲染任务队列的最大值
     * @param {Number} maxQueuedRenderTask 最大值
       因为特效渲染任务会调度到内部线程异步执行，如果排队的渲染任务数量太多，会占用过多的内存，此方法可以设置渲染任务队列的最大值，
       限制队列的数量，当队列的数量达到最大值时，除非DontDropFrame标识被设置了，否则新的渲染任务会被丢弃。
     * @endif
     */
  setMaxQueuedRenderTask(maxQueuedRenderTask) {
    Module.nve_effectContext_setMaxQueuedRenderTask(maxQueuedRenderTask);
  }

  /**
   * @if ENGLISH
   * @brief Get maximum of queued render task.
   * @return {Number} Maximum value
   * @else
   * @brief 获取渲染任务队列的最大值
   * @return {Number} 最大值
   * @endif
   */
  getMaxQueuedRenderTask() {
    return Module.nve_effectContext_getMaxQueuedRenderTask();
  }

  /**
   * @if ENGLISH
   * @brief Create video effect object.
   * @param {String} fxName For built-in video effects, it is the name of the effect. If it is a resource package effect, it is the resource package id.
   * @param {String} aspectRatio Aspect ratio
   * @param {Boolean} workingInRealtimeMode Working in realtime mode or not, default value is true.
   * @return {NveEffectInstance} Effect instance object
   * @else
   * @brief 创建视频特效对象
   * @param {String} fxName 如果是内建特效，就是特效的名字，如果是资源包特效，就是资源包id。
   * @param {String} aspectRatio 画幅比
   * @param {Boolean} workingInRealtimeMode 是否工作在实时模式，默认值为true。
   * @return {NveEffectInstance} 特效对象
   * @endif
   */
  createVideoEffect(fxName, aspectRatio, workingInRealtimeMode = true) {
    return Module.nve_effectContext_createVideoEffect(
      fxName,
      aspectRatio,
      workingInRealtimeMode,
    );
  }

  /**
   * @if ENGLISH
   * @brief Create video transition object.
   * @param {String} fxName For built-in video transitions, it is the name of the transition. If it is a resource package transition, it is the resource package id.
   * @param {String} aspectRatio Aspect ratio
   * @return {NveEffectInstance} Effect instance object
   * @else
   * @brief 创建视频转场对象
   * @param {String} fxName 如果是内建转场，就是转场的名字，如果是资源包转场，就是资源包id。
   * @param {String} aspectRatio 画幅比
   * @return {NveEffectInstance} 特效对象
   * @endif
   */
  createVideoTransition(fxName, aspectRatio) {
    return Module.nve_effectContext_createVideoTransition(fxName, aspectRatio);
  }

  /**
   * @if ENGLISH
   * @brief Create animated sticker object.
   * @param {Number} inPoint In point
   * @param {Number} duration Duration
   * @param {Boolean} isPanoramic Panoramic or not
   * @param {String} packageId Animated sticker package id
   * @param {String} aspectRatio Aspect ratio
   * @return {NveEffectInstance} Effect instance object
   * @else
   * @brief 创建动画贴纸对象
   * @param {Number} inPoint 入点
   * @param {Number} duration 持续时间
   * @param {Boolean} isPanoramic 是否是全景
   * @param {String} packageId 动画贴纸包id
   * @param {String} aspectRatio 画幅比
   * @return {NveEffectInstance} 特效对象
   * @endif
   */
  createAnimatedSticker(
    inPoint,
    duration,
    isPanoramic,
    packageId,
    aspectRatio,
  ) {
    return Module.nve_effectContext_createAnimatedSticker(
      inPoint,
      duration,
      isPanoramic,
      packageId,
      aspectRatio,
    );
  }

  /**
   * @if ENGLISH
   * @brief Create compound caption object.
   * @param {Number} inPoint In point
   * @param {Number} duration Duration
   * @param {String} packageId Compound caption package id
   * @param {String} aspectRatio Aspect ratio
   * @return {NveEffectInstance} Effect instance object
   * @else
   * @brief 创建组合字幕对象
   * @param {Number} inPoint 入点
   * @param {Number} duration 持续时间
   * @param {String} packageId 组合字幕包id
   * @param {String} aspectRatio 画幅比
   * @return {NveEffectInstance} 特效对象
   * @endif
   */
  createCompoundCaption(inPoint, duration, packageId, aspectRatio) {
    return Module.nve_effectContext_createCompoundCaption(
      inPoint,
      duration,
      packageId,
      aspectRatio,
    );
  }

  /**
   * @if ENGLISH
   * @brief Create caption object.
   * @param {String} text Caption text
   * @param {Number} inPoint In point
   * @param {Number} duration Duration
   * @param {Boolean} isPanoramic Panoramic or not
   * @param {String} packageId Caption style package id
   * @param {String} aspectRatio Aspect ratio
   * @return {NveEffectInstance} Effect instance object
   * @else
   * @brief 创建字幕对象
   * @param {String} text 字幕文本
   * @param {Number} inPoint 入点
   * @param {Number} duration 持续时间
   * @param {Boolean} isPanoramic 是否是全景
   * @param {String} packageId 字幕样式包id
   * @param {String} aspectRatio 画幅比
   * @return {NveEffectInstance} 特效对象
   * @endif
   */
  createCaption(text, inPoint, duration, isPanoramic, packageId, aspectRatio) {
    return Module.nve_effectContext_createCaption(
      text,
      inPoint,
      duration,
      isPanoramic,
      packageId,
      aspectRatio,
    );
  }

  /**
   * @if ENGLISH
   * @brief Create modular caption object.
   * @param {String} text Caption text
   * @param {Number} inPoint In point
   * @param {Number} duration Duration
   * @param {String} aspectRatio Aspect ratio
   * @return {NveEffectInstance} Effect instance object
   * @else
   * @brief 创建模块字幕对象
   * @param {String} text 字幕文本
   * @param {Number} inPoint 入点
   * @param {Number} duration 持续时间
   * @param {String} aspectRatio 画幅比
   * @return {NveEffectInstance} 特效对象
   * @endif
   */
  createModularCaption(text, inPoint, duration, aspectRatio) {
    return Module.nve_effectContext_createModularCaption(
      text,
      inPoint,
      duration,
      aspectRatio,
    );
  }

  /**
     * @if ENGLISH
     * @brief Rendering special array effects.
     * @param {NveEffectInstance[]} effectInstanceArray Effect instance array
     * @param {ImageData|VideoFrame} inputImageData Input image data
     * @param {Number} timestampMs Current rendering timestamp in millisecond
     * @param {Number} flags Flags
     * @return {Promise} Return Promise, reject status with Error string information,
       and resolve status with {imageBitmap:imageData, spentTime:spentTime} as output image data object while OutputImageBitmap flag being set,
       imageBitmap is output image data, a ImageBitmap object, spentTime is spent time for current rendering in millisecond,
       otherwise, resolve status with {imageData:imageData, spentTime:spentTime} as output image data object,
       imageData is output image data, a ImageData object, spentTime is spent time for current rendering in millisecond.
     * @else
     * @brief 渲染特效数组
     * @param {NveEffectInstance[]} effectInstanceArray 特效实例数组
     * @param {ImageData|VideoFrame} inputImageData 输入图像数据
     * @param {Number} timestampMs 当前渲染的时间戳，以毫秒为单位
     * @param {Number} flags 标识
     * @return {Promise} 返回Promise，reject时，携带Error字符串信息，
       resolve时，如果flags设置了OutputImageBitmap，则携带{imageBitmap:imageData, spentTime:spentTime}结构的渲染结果，
       imageBitmap是输出的图像数据，类型为ImageBitmap，spentTime是渲染耗时，以毫秒为单位，
       flags没有设置OutputImageBitmap时，则携带{imageData:imageData, spentTime:spentTime}结构的渲染结果，
       imageData是输出的图像数据，类型为ImageData，spentTime是渲染耗时，以毫秒为单位。
     * @endif
     */
  renderEffects(
    effectInstanceArray,
    inputImageData,
    timestampMs,
    flags = 0,
    hostBufferInfoExtArray = [],
    renderRect = {},
  ) {
    const inputImageDataArray = [inputImageData];
    return this.renderEffectsWithMultiInputs(
      effectInstanceArray,
      inputImageDataArray,
      timestampMs,
      flags,
      hostBufferInfoExtArray,
      renderRect,
    );
  }

  /**
     * @if ENGLISH
     * @brief Rendering special array effects.
     * @param {NveEffectInstance[]} effectInstanceArray Effect instance array
     * @param {ImageData[]|VideoFrame[]} inputImageDataArray Input image data array
     * @param {Number} timestampMs Current rendering timestamp in millisecond
     * @param {Number} flags Flags
     * @return {Promise} Return Promise, reject status with Error string information,
       and resolve status with {imageBitmap:imageData, spentTime:spentTime} as output image data object while OutputImageBitmap flag being set,
       imageBitmap is output image data, a ImageBitmap object, spentTime is spent time for current rendering in millisecond,
       otherwise, resolve status with {imageData:imageData, spentTime:spentTime} as output image data object,
       imageData is output image data, a ImageData object, spentTime is spent time for current rendering in millisecond.
     * @else
     * @brief 渲染特效数组
     * @param {NveEffectInstance[]} effectInstanceArray 特效实例数组
     * @param {ImageData[]|VideoFrame[]} inputImageDataArray 输入图像数据数组
     * @param {Number} timestampMs 当前渲染的时间戳，以毫秒为单位
     * @param {Number} flags 标识
     * @return {Promise} 返回Promise，reject时，携带Error字符串信息，
       resolve时，如果flags设置了OutputImageBitmap，则携带{imageBitmap:imageData, spentTime:spentTime}结构的渲染结果，
       imageBitmap是输出的图像数据，类型为ImageBitmap，spentTime是渲染耗时，以毫秒为单位，
       flags没有设置OutputImageBitmap时，则携带{imageData:imageData, spentTime:spentTime}结构的渲染结果，
       imageData是输出的图像数据，类型为ImageData，spentTime是渲染耗时，以毫秒为单位。
     * @endif
     */
  renderEffectsWithMultiInputs(
    effectInstanceArray,
    inputImageDataArray,
    timestampMs,
    flags = 0,
    hostBufferInfoExtArray = [],
    renderRect = {},
  ) {
    for (const effectInstance of effectInstanceArray) {
      if (!(effectInstance instanceof NveEffectInstance)) {
        console.log("effectInstance must be a NveEffectInstance object!");
        return Promise.reject(new Error("Invalid effect instance!"));
      }
    }

    let self = this;
    self.inputImageDataArray = [];
    for (const inputImageData of inputImageDataArray) {
      let newInputImageData = inputImageData;
      if (!(inputImageData instanceof ImageData)) {
        if (typeof VideoFrame !== "undefined") {
          if (!(inputImageData instanceof VideoFrame)) {
            console.log(
              "inputImageData must be a ImageData or VideoFrame object!",
            );
            return Promise.reject(new Error("Invalid input image data!"));
          }
        } else {
          console.log("inputImageData must be a ImageData object!");
          return Promise.reject(new Error("Invalid input image data!"));
        }
      }

      if (
        typeof VideoFrame !== "undefined" &&
        inputImageData instanceof VideoFrame
      ) {
        if (
          (inputImageData.format !== "I420" &&
            inputImageData.format !== "NV12" &&
            inputImageData.format !== "RGBA" &&
            inputImageData.format !== "RGBX" &&
            inputImageData.format !== "BGRA" &&
            inputImageData.format !== "BGRX") ||
          (renderRect &&
            renderRect.width &&
            renderRect.height &&
            (renderRect.width !== inputImageData.visibleRect.width ||
              renderRect.height !== inputImageData.visibleRect.height))
        ) {
          // The video frame format is not suitable to be used as inference input image.
          // We copy the VideoFrame to a OffscreenCanvas and get a ImageData from it.
          if (typeof OffscreenCanvas === "undefined") {
            console.log("Input VideoFrame format is not accepted!");
            return Promise.reject(
              new Error("Invalid input image data format!"),
            );
          }

          try {
            const w = inputImageData.visibleRect.width;
            const h = inputImageData.visibleRect.height;
            if (!self.offscreenCanvas)
              self.offscreenCanvas = new OffscreenCanvas(w, h);
            if (
              self.offscreenCanvas.width !== w ||
              self.offscreenCanvas.height !== h
            ) {
              self.offscreenCanvas.width = w;
              self.offscreenCanvas.height = h;
            }

            const ctx = self.offscreenCanvas.getContext("2d", {
              willReadFrequently: true,
            });
            ctx.globalCompositeOperation = "copy";
            ctx.drawImage(inputImageData, 0, 0, w, h, 0, 0, w, h);
            let x = 0;
            let y = 0;
            let width = w;
            let height = h;
            if (renderRect && renderRect.width && renderRect.height) {
              if (renderRect.x) {
                x = renderRect.x;
              }
              if (renderRect.y) {
                y = renderRect.y;
              }
              width = renderRect.width;
              height = renderRect.height;
            }
            newInputImageData = ctx.getImageData(x, y, width, height);
          } catch (e) {
            console.error(e.name + ": " + e.message);
            return Promise.reject(
              new Error("Failed to convert VideoFrame to ImageData!"),
            );
          }
        }
      }

      self.inputImageDataArray.push(newInputImageData);
    }

    const renderPromise = new Promise((resolve, reject) => {
      let taskId = Module.nve_effectContext_renderEffects(
        effectInstanceArray,
        timestampMs,
        flags,
        hostBufferInfoExtArray,
      );
      self.inputImageDataArray = [];
      if (typeof taskId != "number" || taskId <= 0) {
        const err = new Error("Failed to send render task!");
        err.meisheDropFrame = taskId < 0;
        reject(err);
        return;
      }

      if (!self.renderTaskMap) self.renderTaskMap = new Map();

      let task = new NveRenderTask(taskId, flags);
      self.renderTaskMap.set(taskId, task);
      task.onNotifyCompletion = function (
        imageData,
        errString,
        spentTime,
        dropFrame = false,
      ) {
        if (!imageData) {
          const err = new Error("Failed to convert VideoFrame to ImageData!");
          err.meisheDropFrame = dropFrame;
          reject(err);
        } else {
          if (task.flags & NveRenderFlagEnum.OutputImageBitmap)
            resolve({ imageBitmap: imageData, spentTime: spentTime });
          else resolve({ imageData: imageData, spentTime: spentTime });
        }

        self.renderTaskMap.delete(taskId);
      };
    });
    return renderPromise;
  }

  /**
     * @if ENGLISH
     * @brief Rendering effect.
     * @param {NveEffectInstance} effectInstance Effect instance
     * @param {ImageData|VideoFrame} inputImageData Input image data
     * @param {Number} timestampMs Current rendering timestamp in millisecond
     * @param {Number} flags Flags
     * @return {Promise} Return Promise, reject status with Error string information,
       and resolve status with {imageBitmap:imageData, spentTime:spentTime} as output image data object while OutputImageBitmap flag being set,
       imageBitmap is output image data, a ImageBitmap object, spentTime is spent time for current rendering in millisecond,
       otherwise, resolve status with {imageData:imageData, spentTime:spentTime} as output image data object,
       imageData is output image data, a ImageData object, spentTime is spent time for current rendering in millisecond.
     * @else
     * @brief 渲染特效
     * @param {NveEffectInstance} effectInstance 特效实例
     * @param {ImageData|VideoFrame} inputImageData 输入图像数据
     * @param {Number} timestampMs 当前渲染的时间戳，以毫秒为单位
     * @param {Number} flags 标识
     * @return {Promise} 返回Promise，reject时，携带Error字符串信息，
       resolve时，如果flags设置了OutputImageBitmap，则携带{imageBitmap:imageData, spentTime:spentTime}结构的渲染结果，
       imageBitmap是输出的图像数据，类型为ImageBitmap，spentTime是渲染耗时，以毫秒为单位，
       flags没有设置OutputImageBitmap时，则携带{imageData:imageData, spentTime:spentTime}结构的渲染结果，
       imageData是输出的图像数据，类型为ImageData，spentTime是渲染耗时，以毫秒为单位。
     * @endif
     */
  renderEffect(
    effectInstance,
    inputImageData,
    timestampMs,
    flags = 0,
    hostBufferInfoExtArray = [],
  ) {
    const effectInstanceArray = [effectInstance];
    const inputImageDataArray = [inputImageData];
    return this.renderEffectsWithMultiInputs(
      effectInstanceArray,
      inputImageDataArray,
      timestampMs,
      flags,
      hostBufferInfoExtArray,
    );
  }

  /**
     * @if ENGLISH
     * @brief Rendering effect.
     * @param {NveEffectInstance} effectInstance Effect instance
     * @param {ImageData[]|VideoFrame[]} inputImageDataArray Input image data array
     * @param {Number} timestampMs Current rendering timestamp in millisecond
     * @param {Number} flags Flags
     * @return {Promise} Return Promise, reject status with Error string information,
       and resolve status with {imageBitmap:imageData, spentTime:spentTime} as output image data object while OutputImageBitmap flag being set,
       imageBitmap is output image data, a ImageBitmap object, spentTime is spent time for current rendering in millisecond,
       otherwise, resolve status with {imageData:imageData, spentTime:spentTime} as output image data object,
       imageData is output image data, a ImageData object, spentTime is spent time for current rendering in millisecond.
     * @else
     * @brief 渲染特效
     * @param {NveEffectInstance} effectInstance 特效实例
     * @param {ImageData[]|VideoFrame[]} inputImageDataArray 输入图像数据数组
     * @param {Number} timestampMs 当前渲染的时间戳，以毫秒为单位
     * @param {Number} flags 标识
     * @return {Promise} 返回Promise，reject时，携带Error字符串信息，
       resolve时，如果flags设置了OutputImageBitmap，则携带{imageBitmap:imageData, spentTime:spentTime}结构的渲染结果，
       imageBitmap是输出的图像数据，类型为ImageBitmap，spentTime是渲染耗时，以毫秒为单位，
       flags没有设置OutputImageBitmap时，则携带{imageData:imageData, spentTime:spentTime}结构的渲染结果，
       imageData是输出的图像数据，类型为ImageData，spentTime是渲染耗时，以毫秒为单位。
     * @endif
     */
  renderEffectWithMultiInputs(
    effectInstance,
    inputImageDataArray,
    timestampMs,
    flags = 0,
    hostBufferInfoExtArray = [],
  ) {
    const effectInstanceArray = [effectInstance];
    return this.renderEffectsWithMultiInputs(
      effectInstanceArray,
      inputImageDataArray,
      timestampMs,
      flags,
      hostBufferInfoExtArray,
    );
  }

  /**
   * @if ENGLISH
   * @brief Initializes human detection. Only once needed.
   * @param {String} modelFilePath Mode file path
   * @param {String} licenseFilePath License file path
   * @param {Number} features Features, see {@link NveHumanDetectionFeatureEnum} for detail
   * @return {Boolean} YES indicates success, NO indicates fail.
   * @see {@link NveEffectContext#initHumanDetectionExt} {@link NveEffectContext#closeHumanDetection}
   * @else
   * @brief 初始化人体检测机制，只需要初始化一次
   * @param {String} modelFilePath 模型文件路径
   * @param {String} licenseFilePath 授权文件路径
   * @param {Number} features 人体检测特征标志字段，参看{@link NveHumanDetectionFeatureEnum}
   * @return {Boolean} YES表示成功，NO表示失败
   * @see {@link NveEffectContext#initHumanDetectionExt} {@link NveEffectContext#closeHumanDetection}
   * @endif
   */
  initHumanDetection(modelFilePath, licenseFilePath, features) {
    return Module.nve_effectContext_initHumanDetection(
      modelFilePath,
      licenseFilePath,
      features,
    );
  }

  /**
   * @if ENGLISH
   * @brief Initializes human detection extention. Need use initHumanDetection first.
   * @param {String} modelFilePath Mode file path
   * @param {String} licenseFilePath License file path
   * @param {Number} features Features, see {@link NveHumanDetectionFeatureEnum} for detail
   * @return {Boolean} YES indicates success, NO indicates fail.
   * @see {@link NveEffectContext#initHumanDetection} {@link NveEffectContext#closeHumanDetection}
   * @else
   * @brief 初始化人体检测扩展机制，必须先调用initHumanDetection
   * @param {String} modelFilePath 模型文件路径
   * @param {String} licenseFilePath 授权文件路径
   * @param {Number} features 人体检测特征标志字段，参看{@link NveHumanDetectionFeatureEnum}
   * @return {Boolean} YES表示成功，NO表示失败
   * @see {@link NveEffectContext#initHumanDetection} {@link NveEffectContext#closeHumanDetection}
   * @endif
   */
  initHumanDetectionExt(modelFilePath, licenseFilePath, features) {
    return Module.nve_effectContext_initHumanDetectionExt(
      modelFilePath,
      licenseFilePath,
      features,
    );
  }

  /**
   * @if ENGLISH
   * @brief Setup human detection data
   * @param {Number} dataType Data type of human detection, see {@link NveHumanDetectionDataTypeEnum} for detail
   * @param {String} dataFilePath Data file path
   * @return {Boolean} YES indicates success, NO indicates fail.
   * @else
   * @brief 初始化人体检测相关数据包
   * @param {Number} dataType 人体检测数据包类型，参看{@link NveHumanDetectionDataTypeEnum}
   * @param {String} dataFilePath 数据文件路径
   * @return {Boolean} YES表示成功，NO表示失败
   * @endif
   */
  setupHumanDetectionData(dataType, dataFilePath) {
    return Module.nve_effectContext_setupHumanDetectionData(
      dataType,
      dataFilePath,
    );
  }

  /**
   * @if ENGLISH
   * @brief Close the human detection mechanism.
   * @return {}
   * @else
   * @brief 关闭人体检测
   * @return {}
   * @endif
   */
  closeHumanDetection() {
    Module.nve_effectContext_closeHumanDetection();
  }

  /**
   * @if ENGLISH
   * @brief Get asset package manager.
   * @return {NveAssetPackageManager} Asset package manager object
   * @else
   * @brief 获取资源包管理器
   * @return {NveAssetPackageManager} 资源包管理器对象
   * @endif
   */
  getAssetPackageManager() {
    return Module.nve_effectContext_getAssetPackageManager();
  }

  /**
   * @if ENGLISH
   * @brief Gets font file's fontFamily.
   * @param {String} fontFilePath Font file path
   * @return {String} Returns font file's fontFamily information.
   * @else
   * @brief 根据文件路径注册字体
   * @param {String} fontFilePath 字体文件路径
   * @return {String} 返回字体文件的 fontFamily 信息。
   * @endif
   */
  registerFontByFilePath(fontFilePath) {
    return Module.nve_effectContext_registerFontByFilePath(fontFilePath);
  }

  /**
   * @if ENGLISH
   * @brief Unregister font by file path.
   * @param {String} fontFilePath Font file path
   * @return {}
   * @else
   * @brief 注销字体文件
   * @param {String} fontFilePath 字体文件路径
   * @return {}
   * @endif
   */
  unregisterFontByFilePath(fontFilePath) {
    Module.nve_effectContext_unregisterFontByFilePath(fontFilePath);
  }

  inferenceTest(
    imageFilePath,
    modelFilePath,
    forwardType,
    threadNum,
    loopCount,
    flags,
  ) {
    return Module.nve_effectContext_inferenceTest(
      imageFilePath,
      modelFilePath,
      forwardType,
      threadNum,
      loopCount,
      flags,
    );
  }
}

/**
 * @if ENGLISH
 * @brief Asset package error enum
 * @note NoError No error
 * @note NameError Name error
 * @note AlreadyInstalledError Already installed
 * @note WorkingInProgress Working in progress
 * @note NotInstalledError Not installed error
 * @note ImproperStatusError Improper status error
 * @note DecompressionError Decompression error
 * @note InvalidPackageError Invalid package error
 * @note AssetTypeError Asset type error
 * @note PermissionError Permission error
 * @note MetaContentError Meta content error
 * @note SdkVersionError Sdk version error
 * @note UpgradeVersionError Upgrade version error
 * @note IOError IO error
 * @note ResourceError Resource error
 * @else
 * @brief 资源包错误枚举
 * @note NoError 没有错误
 * @note NameError 名称错误
 * @note AlreadyInstalledError 已安装
 * @note WorkingInProgress 安装中
 * @note NotInstalledError 没有安装
 * @note ImproperStatusError 非正常状态错误
 * @note DecompressionError 解压错误
 * @note InvalidPackageError 无效的包错误
 * @note AssetTypeError 包类型错误
 * @note PermissionError 权限错误
 * @note MetaContentError 内部数据错误
 * @note SdkVersionError Sdk版本号错误
 * @note UpgradeVersionError 升级版本号错误
 * @note IOError 读写文件错误
 * @note ResourceError 资源错误
 * @endif
 */
const NveAssetPackageErrorEnum = Object.freeze({
  NoError: 0,
  NameError: 1,
  AlreadyInstalledError: 2,
  WorkingInProgress: 3,
  NotInstalledError: 4,
  ImproperStatusError: 5,
  DecompressionError: 6,
  InvalidPackageError: 7,
  AssetTypeError: 8,
  PermissionError: 9,
  MetaContentError: 10,
  SdkVersionError: 11,
  UpgradeVersionError: 12,
  IOError: 13,
  ResourceError: 14,
});

/**
 * @if ENGLISH
 * @brief The asset package manager manages the asset packages in the video scene.
   During the development of SDK, the asset package manager uniformly installs, upgrades and uninstalls various stunt asset packages needed, including captions, animated stickers, etc.
   When installing, upgrading and uninstalling, there will be corresponding error prompt types in case of errors, so as to quickly locate and solve the errors.
 * @else
 * @brief 资源包管理器，管理视频场景中的资源包。
   在SDK开发过中，资源包管理器统一对需要的各种特技资源包，包括字幕、动画贴纸等进行相应的安装，升级，卸载等操作。
   在安装，升级，卸载时，出现差错都会有相应的错误提示类型，以便快速定位和解决错误。
 * @endif
 */
class NveAssetPackageManager {
  /**
   * @constructor
   */
  constructor() {
    this.internalObj = 0;
    this.onFinishAssetPackageInstallation = function (
      assetPackageId,
      assetPackageFilePath,
      assetPackageType,
      error,
    ) {};
    this.onFinishTemplatePackageGenerate = function (
      assetPackageFilePath,
      error,
    ) {};
  }

  /**
   * @if ENGLISH
   * @brief Set internal object
   * @param {Object} obj Internal object
   * @else
   * @brief 设置内置对象
   * @param {Object} obj 内置对象
   * @endif
   */
  setInternalObject(obj) {
    this.internalObj = obj;
  }

  /**
   * @if ENGLISH
   * @brief Get internal object
   * @return {Object}
   * @else
   * @brief 获取内置对象
   * @return {Object}
   * @endif
   */
  getInternalObject() {
    return this.internalObj;
  }

  /**
     * @if ENGLISH
     * @brief Install asset package.
       After calling this funtion, onFinishAssetPackageInstallation will be received with the result of installation.
       onFinishAssetPackageInstallation contains assetPackageId, assetPackageFilePath, assetPackageType and error parameters.
       assetPackageId is the asset package id of the finished installation,
       assetPackageFilePath is the asset package file path of the finished installation,
       assetPackageType is the asset package type of the finished installation,
       error is the error of the finished installation, see {@link NveAssetPackageErrorEnum}.
     * @param {String} assetPackageFilePath File path of the asset package to be installed
     * @param {String} licenseFilePath License file path of the asset package to be installed
     * @param {Number} type The type of asset package to be installed, see {@link NveAssetPackageTypeEnum}.
     * @else
     * @brief 安装资源包
       调用此函数后，会接收到回调函数onFinishAssetPackageInstallation返回安装结果。
       onFinishAssetPackageInstallation返回参数包括assetPackageId、assetPackageFilePath、assetPackageType和error。
       assetPackageId是当前安装完成的资源包id，
       assetPackageFilePath是当前安装完成的资源包文件路径，
       assetPackageType是当前安装完成的资源包类型，
       error是当前安装完成的错误码，参看{@link NveAssetPackageErrorEnum}。
     * @param {String} assetPackageFilePath 资源包文件路径
     * @param {String} licenseFilePath 授权文件路径
     * @param {Number} type 资源类型，参看{@link NveAssetPackageTypeEnum}
     * @endif
     */
  installAssetPackage(assetPackageFilePath, licenseFilePath, type) {
    return Module.nve_assetPackageManager_installAssetPackage(
      assetPackageFilePath,
      licenseFilePath,
      type,
    );
  }

  /**
   * @if ENGLISH
   * @brief Uninstall asset package.
   * @param {String} assetPackageId Id of asset package to be uninstalled
   * @param {Number} type The type of asset package to be uninstalled, see {@link NveAssetPackageTypeEnum}.
   * @return {Number} The result of uninstallation, see {@link NveAssetPackageTypeEnum}.
   * @else
   * @brief 卸载资源包
   * @param {String} assetPackageId 资源包id
   * @param {Number} type 资源类型，参看{@link NveAssetPackageTypeEnum}
   * @return {Number} 返回卸载资源包结果，参看{@link NveAssetPackageErrorEnum}。
   * @endif
   */
  uninstallAssetPackage(assetPackageId, type) {
    return Module.nve_assetPackageManager_uninstallAssetPackage(
      assetPackageId,
      type,
    );
  }

  /**
   * @if ENGLISH
   * @brief Get the status of the asset package.
   * @param {String} assetPackageId Asset package id
   * @param {Number} type Asset package type, see {@link NveAssetPackageTypeEnum}.
   * @return {Number} The status of the asset package, see {@link NveAssetPackageStatusEnum}.
   * @else
   * @brief 获取资源包状态
   * @param {String} assetPackageId 资源包id
   * @param {Number} type 资源类型，参看{@link NveAssetPackageTypeEnum}
   * @return {Number} 资源包状态，参看{@link NveAssetPackageStatusEnum}。
   * @endif
   */
  getAssetPackageStatus(assetPackageId, type) {
    return Module.nve_assetPackageManager_getAssetPackageStatus(
      assetPackageId,
      type,
    );
  }

  /**
   * @if ENGLISH
   * @brief Get the content type of the asset package.
   * @param {String} assetPackageId Asset package id
   * @param {Number} type Asset package type, see {@link NveAssetPackageTypeEnum}.
   * @return {String} The content type of the asset package.
   * @else
   * @brief 获取资源包内容类型
   * @param {String} assetPackageId 资源包id
   * @param {Number} type 资源类型，参看{@link NveAssetPackageTypeEnum}
   * @return {String} 资源包内容类型。
   * @endif
   */
  getAssetPackageContentType(assetPackageId, type) {
    return Module.nve_assetPackageManager_getAssetPackageContentType(
      assetPackageId,
      type,
    );
  }
}

/**
 * @if ENGLISH
 * @brief ARScene manipulate.
 * @else
 * @brief ARScene 操作。
 * @endif
 */
class NveARSceneManipulate {
  /**
   * @constructor
   */
  constructor() {
    this.contextInterface = 0;
  }

  /**
   * @if ENGLISH
   * @brief Set detection mode.
   * @param {} mode detection mode
   * @return {}
   * @else
   * @brief 设置检测模式
   * @param {} mode 检测模式
   * @return {}
   * @endif
   */
  setDetectionMode(mode) {
    Module.nve_arSceneManipulate_setDetectionMode(this.contextInterface, mode);
  }
}

/**
 * @if ENGLISH
 * @brief ARScene builtin fx compound renderer
   By internally downloading and initializing face models, and managing the installation of asset packages, the logic of appling beauty, shape, and makeup is simplified.
   It also provides starting camera media stream, external input media stream, output media stream, and IndexedDB caching internally.
   Just configure parameters while initializing, and then set the asset packages' url or other parameters to get the results of beauty, shape, and makeup rendering conveniently.
 * @else
 * @brief ARScene内建特效的快捷渲染类
   通过内部下载初始化人脸模型，内部下载管理安装美妆、美型等资源包的方式，简化美颜美型美妆以及整妆包的使用逻辑，
   同时内部还提供启动摄像头媒体流采集，外部输入媒体流，输出媒体流的多种形式，IndexedDB缓存机制，
   只需要初始化配置好相应的参数，然后设置特效包地址等参数即可快速得到美颜美型美妆等渲染结果。
 * @endif
 */
class NveARSceneRenderer {
  /**
     * @if ENGLISH
     * @brief Initialize ARScene renderer by configuration.
     * @param {} config configuration
       faceModelUrl:face model url,
       eyecontourModelUrl:eyecontour model url,
       avatarModelUrl:avatar model url,
       segmentationModelUrl:segmentation model url,
       makeupDataUrl:makeup data url,
       fakefaceDataUrl:fakeface data url,
       faceCommonDataUrl:face common data url,
       advancedBeautyDataUrl:advanced beauty data url,
       ratio:ratio of effect instance, NveRational object,
       detectionMode:face detection mode, NveHumanDetectionFeatureEnum type,
       beautyIntensity:beauty intensity,
       beautyLutUrl:beauty lut file url,
       beautyLutIntensity:beauty lut intensity,
       outputStreamFps:fps of output stream,
       cacheOnIndexedDB:cache asset package data on IndexedDB or not,
       workingInRealtimeMode:working in real time mode or not,
       jszip:JSZip object, using to unzip compound makeup file,
       printTimeCostAndFps:print time cost of image rendering and fps on console or not,
       mirror:mirror or not,
     * @return {Promise}
     * @else
     * @brief 初始化ARScene内建特效的渲染类
     * @param {} config 配置参数。
       faceModelUrl:人脸模型地址,
       eyecontourModelUrl:眼球模型地址,
       avatarModelUrl:表情模型地址,
       segmentationModelUrl:分割模型地址,
       makeupDataUrl:美妆数据包地址,
       fakefaceDataUrl:假脸数据包地址,
       faceCommonDataUrl:人脸通用数据包地址,
       advancedBeautyDataUrl:高级美颜数据包地址,
       ratio:特效的画幅比,NveRational对象,
       detectionMode:人脸检测模式,NveHumanDetectionFeatureEnum类型,
       beautyIntensity:美颜强度,
       beautyLutUrl:美颜lut文件地址,
       beautyLutIntensity:美颜lut强度,
       outputStreamFps:输出媒体流的帧速率,
       cacheOnIndexedDB:是否缓存资源包等数据到IndexedDB,
       workingInRealtimeMode:是否使用实时模式渲染,
       jszip:JSZip对象,用于解压整妆包,
       printTimeCostAndFps:是否控制台打印每帧图像渲染耗时和实时帧率,
       mirror:是否开启镜像,
     * @return {Promise}
     * @endif
     */
  async init(config) {
    this.release();
    this.config = {
      faceModelUrl: "",
      eyecontourModelUrl: "",
      avatarModelUrl: "",
      segmentationModelUrl: "",
      makeupDataUrl: "",
      fakefaceDataUrl: "",
      faceCommonDataUrl: "",
      advancedBeautyDataUrl: "",
      ratio: new NveRational(16, 9),
      detectionMode:
        NveHumanDetectionFeatureEnum.VideoMode |
        NveHumanDetectionFeatureEnum.MultiThread,
      beautyIntensity: 1,
      beautyLutUrl: "",
      beautyLutIntensity: 1,
      outputStreamFps: 30,
      cacheOnIndexedDB: true,
      workingInRealtimeMode: true,
      jszip: null,
      printTimeCostAndFps: false,
      mirror: false,
    };
    this.config = { ...this.config, ...config };

    this.indexedDBName = "nveffectcache";
    if (this.config.cacheOnIndexedDB) {
      try {
        await this.prepareIndexedDB(this.indexedDBName, 1);
      } catch (e) {
        console.error("prepareIndexedDB failed");
      }
    }

    if (this.config.ratio.num * 9 === this.config.ratio.den * 16) {
      this.sceneWidth = 1280;
      this.sceneHeight = 720;
    } else if (this.config.ratio.num * 16 === this.config.ratio.den * 9) {
      this.sceneWidth = 405;
      this.sceneHeight = 720;
    }
    this.beautyEnabled = true;
    this.effectInstanceArray = [];
    this.effectInstanceArrayInZip = [];
    this.needReleaseFSFileList = [];
    this.compoundMakeupsPreloadedList = [];
    if (this.config.faceModelUrl) {
      const faceModelFilePath = "/" + this.config.faceModelUrl.split("/").pop();
      await this.fetchAndWrite(this.config.faceModelUrl, faceModelFilePath);
      nveGetEffectContextInstance().initHumanDetection(
        faceModelFilePath,
        "",
        this.config.detectionMode |
          NveHumanDetectionFeatureEnum.FaceLandmark |
          NveHumanDetectionFeatureEnum.FaceAction,
      );
      this.needReleaseFSFileList.push(faceModelFilePath);
      if (this.config.eyecontourModelUrl) {
        const eyecontourModelFilePath =
          "/" + this.config.eyecontourModelUrl.split("/").pop();
        await this.fetchAndWrite(
          this.config.eyecontourModelUrl,
          eyecontourModelFilePath,
        );
        nveGetEffectContextInstance().initHumanDetectionExt(
          eyecontourModelFilePath,
          "",
          this.config.detectionMode |
            NveHumanDetectionFeatureEnum.EyeballLandmark,
        );
        this.needReleaseFSFileList.push(eyecontourModelFilePath);
      } else {
        console.warn(
          "eyecontourModelUrl is not be set, eyeball effect maybe not right!",
        );
      }
      if (this.config.avatarModelUrl) {
        const avatarModelFilePath =
          "/" + this.config.avatarModelUrl.split("/").pop();
        await this.fetchAndWrite(
          this.config.avatarModelUrl,
          avatarModelFilePath,
        );
        nveGetEffectContextInstance().initHumanDetectionExt(
          avatarModelFilePath,
          "",
          this.config.detectionMode |
            NveHumanDetectionFeatureEnum.AvatarExpression,
        );
        this.needReleaseFSFileList.push(avatarModelFilePath);
      } else {
        console.warn(
          "avatarModelUrl is not be set, avatar effect maybe not right!",
        );
      }
      if (this.config.segmentationModelUrl) {
        const segmentationModelFilePath =
          "/" + this.config.segmentationModelUrl.split("/").pop();
        await this.fetchAndWrite(
          this.config.segmentationModelUrl,
          segmentationModelFilePath,
        );
        nveGetEffectContextInstance().initHumanDetectionExt(
          segmentationModelFilePath,
          "",
          this.config.detectionMode |
            NveHumanDetectionFeatureEnum.SegmentationBackground,
        );
        this.needReleaseFSFileList.push(segmentationModelFilePath);
      } else {
        console.warn(
          "segmentationModelUrl is not be set, segmentation effect maybe not right!",
        );
      }
      if (this.config.makeupDataUrl) {
        const makeupDataFilePath =
          "/" + this.config.makeupDataUrl.split("/").pop();
        await this.fetchAndWrite(this.config.makeupDataUrl, makeupDataFilePath);
        nveGetEffectContextInstance().setupHumanDetectionData(
          NveHumanDetectionDataTypeEnum.Makeup2,
          makeupDataFilePath,
        );
        this.needReleaseFSFileList.push(makeupDataFilePath);
      } else {
        console.warn(
          "makeupDataUrl is not be set, makeup effect maybe not right!",
        );
      }
      if (this.config.fakefaceDataUrl) {
        const fakefaceDataFilePath =
          "/" + this.config.fakefaceDataUrl.split("/").pop();
        await this.fetchAndWrite(
          this.config.fakefaceDataUrl,
          fakefaceDataFilePath,
        );
        nveGetEffectContextInstance().setupHumanDetectionData(
          NveHumanDetectionDataTypeEnum.FakeFace,
          fakefaceDataFilePath,
        );
        this.needReleaseFSFileList.push(fakefaceDataFilePath);
      } else {
        console.warn(
          "fakefaceDataUrl is not be set, fakeface effect maybe not right!",
        );
      }
      if (this.config.faceCommonDataUrl) {
        const faceCommonDataFilePath =
          "/" + this.config.faceCommonDataUrl.split("/").pop();
        await this.fetchAndWrite(
          this.config.faceCommonDataUrl,
          faceCommonDataFilePath,
        );
        nveGetEffectContextInstance().setupHumanDetectionData(
          NveHumanDetectionDataTypeEnum.FaceCommon,
          faceCommonDataFilePath,
        );
        this.needReleaseFSFileList.push(faceCommonDataFilePath);
      } else {
        console.warn(
          "faceCommonDataUrl is not be set, beauty effect maybe not right!",
        );
      }
      if (this.config.advancedBeautyDataUrl) {
        const advancedBeautyDataFilePath =
          "/" + this.config.advancedBeautyDataUrl.split("/").pop();
        await this.fetchAndWrite(
          this.config.advancedBeautyDataUrl,
          advancedBeautyDataFilePath,
        );
        nveGetEffectContextInstance().setupHumanDetectionData(
          NveHumanDetectionDataTypeEnum.AdvancedBeauty,
          advancedBeautyDataFilePath,
        );
        this.needReleaseFSFileList.push(advancedBeautyDataFilePath);
      } else {
        console.warn(
          "advancedBeautyDataUrl is not be set, beauty effect maybe not right!",
        );
      }
    } else {
      console.error("init failed, faceModelUrl must be set!");
      return;
    }
    await this.resetEffects();
  }

  ensureIndexedDBObject(db, name) {
    if (!db.objectStoreNames.contains(name)) {
      db.createObjectStore(name, { keyPath: "id" });
    }
  }

  ensureIndexedDBObjects(db) {
    this.ensureIndexedDBObject(db, "asset");
    this.ensureIndexedDBObject(db, "lic");
  }

  prepareIndexedDB(name, version) {
    let self = this;
    return new Promise((resolve, reject) => {
      let openRequest = window.indexedDB.open(name, version);
      let deleteRequest;
      openRequest.onerror = function (e) {
        console.error("Open indexedDB error, ", openRequest.error);
        deleteRequest = window.indexedDB.deleteDatabase(name);
        deleteRequest.onsuccess = function (e) {
          openRequest = window.indexedDB.open(name, version);
          openRequest.onsuccess = function (e) {
            self.db = e.target.result;
            console.warn("IndexedDB version:" + self.db.version);
            resolve();
          };
          openRequest.onupgradeneeded = function (e) {
            console.warn("IndexedDB version upgrade");
            self.ensureIndexedDBObjects(e.target.result);
          };
          openRequest.onerror = function (e) {
            console.error("Open indexedDB error, ", openRequest.error);
            reject();
          };
        };
        deleteRequest.onerror = function (e) {
          console.error("Delete indexedDB error, ", deleteRequest.error);
          reject();
        };
      };
      openRequest.onsuccess = function (e) {
        self.db = e.target.result;
        console.warn("IndexedDB version:" + self.db.version);
        resolve();
      };
      openRequest.onupgradeneeded = function (e) {
        console.warn("IndexedDB version upgrade");
        self.ensureIndexedDBObjects(e.target.result);
      };
    });
  }

  findFromIndexedDB(name, key, version) {
    let self = this;
    return new Promise((resolve, reject) => {
      if (!self.db) {
        console.error("IndexedDB is null!");
        reject();
        return;
      }
      const req = self.db
        .transaction(name, "readwrite")
        .objectStore(name)
        .get(key);
      req.onsuccess = function (e) {
        if (e.target.result && e.target.result.name) {
          if (version) {
            const arr = e.target.result.name.split(".");
            if (arr.length === 3 && /\d+/.test(arr[1])) {
              if (version > arr[1]) {
                console.warn(
                  key,
                  " cached on indexedDB is too old, need update!",
                );
                reject();
                return;
              }
            }
          }
          resolve(e.target.result);
        } else {
          reject();
        }
      };
      req.onerror = function (e) {
        console.error(key, " cache from indexedDB error, ", req.error);
        reject();
      };
    });
  }

  /**
   * @if ENGLISH
   * @brief Clear cache on IndexedDB.
   * @return {Promise}
   * @else
   * @brief 清除IndexedDB的缓存数据
   * @return {Promise}
   * @endif
   */
  clearCacheOnIndexedDB() {
    let self = this;
    return new Promise((resolve, reject) => {
      const deleteRequest = window.indexedDB.deleteDatabase(self.indexedDBName);
      deleteRequest.onsuccess = function (e) {
        self.db = null;
        console.warn("clearCacheOnIndexedDB success");
        resolve();
      };
      deleteRequest.onerror = function (e) {
        console.error("clearCacheOnIndexedDB error, ", deleteRequest.error);
        reject();
      };
    });
  }

  /**
   * @if ENGLISH
   * @brief Release ARScene renderer, it will stop camera if camera started.
   * @else
   * @brief 释放ARScene内建特效的渲染类，如果启动了摄像头媒体流采集，会同时停止摄像头媒体流采集。
   * @endif
   */
  release() {
    if (this.fpsInterval) {
      clearInterval(this.fpsInterval);
      this.fpsInterval = null;
      this.lastDate = null;
      this.fps = 0;
    }
    if (this.captureInterval) {
      clearInterval(this.captureInterval);
      this.captureInterval = null;
    }
    this.stopCamera();
    this.config = null;
    if (this.outputStream) {
      this.outputStream.getTracks().forEach((track) => {
        track.stop();
      });
      this.outputStream = null;
    }
    if (this.canvas) {
      this.canvas = null;
    }
    if (this.dummyCanvas) {
      this.dummyCanvas = null;
    }
    if (this.videoElement) {
      this.videoElement = null;
    }
    this.clearEffects();
    if (this.needReleaseFSFileList) {
      this.needReleaseFSFileList.forEach((file) => {
        if (FS.analyzePath(file).exists) {
          FS.unlink(file, 0);
        }
      });
      this.needReleaseFSFileList = [];
    }
    this.externalEffectInstanceList = [];
    this.renderTimestampOffsetMs = null;
    this.beautyEnabled = true;
  }

  async fetchAndWrite(url, filePath, lic = false) {
    if (FS.analyzePath(filePath).exists) {
      return;
    }

    let data;
    if (this.config.cacheOnIndexedDB) {
      let version;
      const name = url.split("/").pop();
      const arr = name.split(".");
      if (arr.length === 3 && /\d+/.test(arr[1])) {
        version = arr[1];
      }
      const objectName = lic ? "lic" : "asset";
      try {
        const ret = await this.findFromIndexedDB(objectName, arr[0], version);
        data = ret.data;
      } catch (e) {
        const res = await fetch(url);
        data = await res.arrayBuffer();
        if (this.db && this.db.objectStoreNames.contains(objectName)) {
          this.db
            .transaction(objectName, "readwrite")
            .objectStore(objectName)
            .put({ id: arr[0], name: name, data: data });
        }
      }
    } else {
      const res = await fetch(url);
      data = await res.arrayBuffer();
    }
    FS.writeFile(filePath, new Uint8Array(data));
  }

  calculatePositionByVertices(position, vertices) {
    if (!vertices || vertices.size() !== 4) {
      return null;
    }
    const width = Math.max(
      Math.abs(vertices.get(0).x - vertices.get(2).x),
      Math.abs(vertices.get(1).x - vertices.get(3).x),
    );
    const height = Math.max(
      Math.abs(vertices.get(0).y - vertices.get(2).y),
      Math.abs(vertices.get(1).y - vertices.get(3).y),
    );
    if (position === "top-left") {
      return new NvePointF(
        (width - this.sceneWidth) / 2,
        (this.sceneHeight - height) / 2,
      );
    } else if (position === "top") {
      return new NvePointF(0, (this.sceneHeight - height) / 2);
    } else if (position === "top-right") {
      return new NvePointF(
        (this.sceneWidth - width) / 2,
        (this.sceneHeight - height) / 2,
      );
    } else if (position === "left") {
      return new NvePointF((width - this.sceneWidth) / 2, 0);
    } else if (position === "center") {
      return new NvePointF(0, 0);
    } else if (position === "right") {
      return new NvePointF((this.sceneWidth - width) / 2, 0);
    } else if (position === "bottom-left") {
      return new NvePointF(
        (width - this.sceneWidth) / 2,
        (height - this.sceneHeight) / 2,
      );
    } else if (position === "bottom") {
      return new NvePointF(0, (height - this.sceneHeight) / 2);
    } else if (position === "bottom-right") {
      return new NvePointF(
        (this.sceneWidth - width) / 2,
        (height - this.sceneHeight) / 2,
      );
    } else {
      return null;
    }
  }

  applyEffect(assetUuid, effect, assetType) {
    let intensity = 1;
    if (effect.intensity !== undefined && effect.intensity !== null) {
      intensity = effect.intensity;
    }
    if (assetType === NveAssetPackageTypeEnum.ARScene) {
      this.effectInstance.setStringVal("Scene Id", assetUuid);
      return null;
    } else if (assetType === NveAssetPackageTypeEnum.VideoFx) {
      const fx = nveGetEffectContextInstance().createVideoEffect(
        assetUuid,
        this.config.ratio,
        this.config.workingInRealtimeMode,
      );
      fx.setFilterIntensity(intensity);
      if (!effect.external) {
        this.effectInstanceArray.push(fx);
      }
      return fx;
    } else if (assetType === NveAssetPackageTypeEnum.CaptionStyle) {
      let caption;
      if (effect.modular) {
        caption = nveGetEffectContextInstance().createModularCaption(
          effect.text,
          effect.inPoint,
          effect.duration,
          this.config.ratio,
        );
        if (effect.captionContextUrl) {
          caption.applyModularCaptionContext(
            effect.captionContextUrl.split("/").pop().split(".")[0],
          );
        }
        if (effect.captionRendererUrl) {
          caption.applyModularCaptionRenderer(
            effect.captionRendererUrl.split("/").pop().split(".")[0],
          );
        }
        if (effect.captionAnimationUrl) {
          caption.applyModularCaptionAnimation(
            effect.captionAnimationUrl.split("/").pop().split(".")[0],
          );
          if (
            effect.animationPeriod !== undefined &&
            effect.animationPeriod !== null
          ) {
            caption.setModularCaptionAnimationPeriod(effect.animationPeriod);
          }
        }
        if (effect.captionInAnimationUrl) {
          caption.applyModularCaptionInAnimation(
            effect.captionInAnimationUrl.split("/").pop().split(".")[0],
          );
          if (
            effect.inAnimationDuration !== undefined &&
            effect.inAnimationDuration !== null
          ) {
            caption.setModularCaptionInAnimationDuration(
              effect.inAnimationDuration,
            );
          }
        }
        if (effect.captionOutAnimationUrl) {
          caption.applyModularCaptionOutAnimation(
            effect.captionOutAnimationUrl.split("/").pop().split(".")[0],
          );
          if (
            effect.outAnimationDuration !== undefined &&
            effect.outAnimationDuration !== null
          ) {
            caption.setModularCaptionOutAnimationDuration(
              effect.outAnimationDuration,
            );
          }
        }
      } else {
        caption = nveGetEffectContextInstance().createCaption(
          effect.text,
          effect.inPoint,
          effect.duration,
          false,
          assetUuid,
          this.config.ratio,
        );
        if (effect.captionRendererUrl) {
          caption.applyModularCaptionRenderer(
            effect.captionRendererUrl.split("/").pop().split(".")[0],
          );
        }
      }
      if (effect.fontFileUrl) {
        caption.setFontByFilePath("/" + effect.fontFileUrl.split("/").pop());
      }
      let position = caption.getCaptionTranslation();
      if (effect.position) {
        const vertices = caption.getCaptionBoundingVertices(
          NveCaptionTextBoundingTypeEnum.Frame,
        );
        const calcPosition = this.calculatePositionByVertices(
          effect.position,
          vertices,
        );
        if (calcPosition) {
          position = calcPosition;
        }
      }
      if (effect.positionX !== undefined && effect.positionX !== null) {
        position.x = (effect.positionX * this.sceneWidth) / 2;
      }
      if (effect.positionY !== undefined && effect.positionY !== null) {
        position.y = (effect.positionY * this.sceneHeight) / 2;
      }
      caption.setCaptionTranslation(position);
      return caption;
    } else if (assetType === NveAssetPackageTypeEnum.AnimatedSticker) {
      const sticker = nveGetEffectContextInstance().createAnimatedSticker(
        effect.inPoint,
        effect.duration,
        false,
        assetUuid,
        this.config.ratio,
      );
      if (effect.animatedStickerAnimationUrl) {
        sticker.applyAnimatedStickerPeriodAnimation(
          effect.animatedStickerAnimationUrl.split("/").pop().split(".")[0],
        );
        if (
          effect.animationPeriod !== undefined &&
          effect.animationPeriod !== null
        ) {
          sticker.setAnimatedStickerAnimationPeriod(effect.animationPeriod);
        }
      }
      if (effect.animatedStickerInAnimationUrl) {
        sticker.applyAnimatedStickerInAnimation(
          effect.animatedStickerInAnimationUrl.split("/").pop().split(".")[0],
        );
        if (
          effect.inAnimationDuration !== undefined &&
          effect.inAnimationDuration !== null
        ) {
          sticker.setAnimatedStickerInAnimationDuration(
            effect.inAnimationDuration,
          );
        }
      }
      if (effect.animatedStickerOutAnimationUrl) {
        sticker.applyAnimatedStickerOutAnimation(
          effect.animatedStickerOutAnimationUrl.split("/").pop().split(".")[0],
        );
        if (
          effect.outAnimationDuration !== undefined &&
          effect.outAnimationDuration !== null
        ) {
          sticker.setAnimatedStickerOutAnimationDuration(
            effect.outAnimationDuration,
          );
        }
      }
      let position = sticker.getTranslation();
      if (effect.position) {
        const vertices = sticker.getBoundingRectangleVertices();
        const calcPosition = this.calculatePositionByVertices(
          effect.position,
          vertices,
        );
        if (calcPosition) {
          position = calcPosition;
        }
      }
      if (effect.positionX !== undefined && effect.positionX !== null) {
        position.x = (effect.positionX * this.sceneWidth) / 2;
      }
      if (effect.positionY !== undefined && effect.positionY !== null) {
        position.y = (effect.positionY * this.sceneHeight) / 2;
      }
      sticker.setTranslation(position);
      return sticker;
    } else if (assetType === NveAssetPackageTypeEnum.CompoundCaption) {
      const compoundCaption =
        nveGetEffectContextInstance().createCompoundCaption(
          effect.inPoint,
          effect.duration,
          assetUuid,
          this.config.ratio,
        );
      let position = compoundCaption.getCaptionTranslation();
      if (effect.position) {
        const vertices = compoundCaption.getCompoundBoundingVertices(
          NveCaptionTextBoundingTypeEnum.Frame,
        );
        const calcPosition = this.calculatePositionByVertices(
          effect.position,
          vertices,
        );
        if (calcPosition) {
          position = calcPosition;
        }
      }
      if (effect.positionX !== undefined && effect.positionX !== null) {
        position.x = (effect.positionX * this.sceneWidth) / 2;
      }
      if (effect.positionY !== undefined && effect.positionY !== null) {
        position.y = (effect.positionY * this.sceneHeight) / 2;
      }
      compoundCaption.setCaptionTranslation(position);
      return compoundCaption;
    } else if (assetType === NveAssetPackageTypeEnum.VideoTransition) {
      return nveGetEffectContextInstance().createVideoTransition(
        assetUuid,
        this.config.ratio,
      );
    }
    const contentType = nveGetEffectContextInstance()
      .getAssetPackageManager()
      .getAssetPackageContentType(assetUuid, assetType);
    switch (contentType) {
      case "Lip": {
        this.effectInstance.setStringVal("Makeup Lip Package Id", assetUuid);
        this.effectInstance.setFloatVal("Makeup Lip Intensity", intensity);
        break;
      }
      case "Eyebrow": {
        this.effectInstance.setStringVal(
          "Makeup Eyebrow Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal("Makeup Eyebrow Intensity", intensity);
        break;
      }
      case "Eyeshadow": {
        this.effectInstance.setStringVal(
          "Makeup Eyeshadow Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Makeup Eyeshadow Intensity",
          intensity,
        );
        break;
      }
      case "Eyelash": {
        this.effectInstance.setStringVal(
          "Makeup Eyelash Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal("Makeup Eyelash Intensity", intensity);
        break;
      }
      case "Eyeliner": {
        this.effectInstance.setStringVal(
          "Makeup Eyeliner Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal("Makeup Eyeliner Intensity", intensity);
        break;
      }
      case "Blusher": {
        this.effectInstance.setStringVal(
          "Makeup Blusher Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal("Makeup Blusher Intensity", intensity);
        break;
      }
      case "Shadow": {
        this.effectInstance.setStringVal("Makeup Shadow Package Id", assetUuid);
        this.effectInstance.setFloatVal("Makeup Shadow Intensity", intensity);
        break;
      }
      case "Brighten": {
        this.effectInstance.setStringVal(
          "Makeup Brighten Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal("Makeup Brighten Intensity", intensity);
        break;
      }
      case "Eyeball": {
        this.effectInstance.setStringVal(
          "Makeup Eyeball Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal("Makeup Eyeball Intensity", intensity);
        break;
      }
      case "Eye Size": {
        this.effectInstance.setStringVal(
          "Face Mesh Eye Size Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal("Face Mesh Eye Size Degree", intensity);
        break;
      }
      case "Eye Corner Stretch": {
        this.effectInstance.setStringVal(
          "Face Mesh Eye Corner Stretch Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Eye Corner Stretch Degree",
          intensity,
        );
        break;
      }
      case "Face Size": {
        this.effectInstance.setStringVal(
          "Face Mesh Face Size Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Face Size Degree",
          intensity,
        );
        break;
      }
      case "Face Width": {
        this.effectInstance.setStringVal(
          "Face Mesh Face Width Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Face Width Degree",
          intensity,
        );
        break;
      }
      case "Face Length": {
        this.effectInstance.setStringVal(
          "Face Mesh Face Length Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Face Length Degree",
          intensity,
        );
        break;
      }
      case "Forehead Height": {
        this.effectInstance.setStringVal(
          "Face Mesh Forehead Height Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Forehead Height Degree",
          intensity,
        );
        break;
      }
      case "Malar Width": {
        this.effectInstance.setStringVal(
          "Face Mesh Malar Width Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Malar Width Degree",
          intensity,
        );
        break;
      }
      case "Jaw Width": {
        this.effectInstance.setStringVal(
          "Face Mesh Jaw Width Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Jaw Width Degree",
          intensity,
        );
        break;
      }
      case "Chin Length": {
        this.effectInstance.setStringVal(
          "Face Mesh Chin Length Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Chin Length Degree",
          intensity,
        );
        break;
      }
      case "Eye Distance": {
        this.effectInstance.setStringVal(
          "Face Mesh Eye Distance Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Eye Distance Degree",
          intensity,
        );
        break;
      }
      case "Nose Length": {
        this.effectInstance.setStringVal(
          "Face Mesh Nose Length Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Nose Length Degree",
          intensity,
        );
        break;
      }
      case "Nose Width": {
        this.effectInstance.setStringVal(
          "Face Mesh Nose Width Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Nose Width Degree",
          intensity,
        );
        break;
      }
      case "Mouth Size": {
        this.effectInstance.setStringVal(
          "Face Mesh Mouth Size Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Mouth Size Degree",
          intensity,
        );
        break;
      }
      case "Mouth Corner": {
        this.effectInstance.setStringVal(
          "Face Mesh Mouth Corner Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Mouth Corner Degree",
          intensity,
        );
        break;
      }
      case "Temple Width": {
        this.effectInstance.setStringVal(
          "Face Mesh Temple Width Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Temple Width Degree",
          intensity,
        );
        break;
      }
      case "Head Size": {
        this.effectInstance.setStringVal(
          "Face Mesh Head Size Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Head Size Degree",
          intensity,
        );
        break;
      }
      case "Eye Angle": {
        this.effectInstance.setStringVal(
          "Face Mesh Eye Angle Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Eye Angle Degree",
          intensity,
        );
        break;
      }
      case "Nose Bridge": {
        this.effectInstance.setStringVal(
          "Face Mesh Nose Bridge Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Nose Bridge Degree",
          intensity,
        );
        break;
      }
      case "Philtrum Length": {
        this.effectInstance.setStringVal(
          "Face Mesh Philtrum Length Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Philtrum Length Degree",
          intensity,
        );
        break;
      }
      case "Eye Arc": {
        this.effectInstance.setStringVal(
          "Face Mesh Eye Arc Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal("Face Mesh Eye Arc Degree", intensity);
        break;
      }
      case "Eye Width": {
        this.effectInstance.setStringVal(
          "Face Mesh Eye Width Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Eye Width Degree",
          intensity,
        );
        break;
      }
      case "Eye Height": {
        this.effectInstance.setStringVal(
          "Face Mesh Eye Height Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Eye Height Degree",
          intensity,
        );
        break;
      }
      case "Eye Y Offset": {
        this.effectInstance.setStringVal(
          "Face Mesh Eye Y Offset Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Eye Y Offset Degree",
          intensity,
        );
        break;
      }
      case "Eyebrow Angle": {
        this.effectInstance.setStringVal(
          "Face Mesh Eyebrow Angle Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Eyebrow Angle Degree",
          intensity,
        );
        break;
      }
      case "Eyebrow Thickness": {
        this.effectInstance.setStringVal(
          "Face Mesh Eyebrow Thickness Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Eyebrow Thickness Degree",
          intensity,
        );
        break;
      }
      case "Eyebrow X Offset": {
        this.effectInstance.setStringVal(
          "Face Mesh Eyebrow X Offset Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Eyebrow X Offset Degree",
          intensity,
        );
        break;
      }
      case "Eyebrow Y Offset": {
        this.effectInstance.setStringVal(
          "Face Mesh Eyebrow Y Offset Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Eyebrow Y Offset Degree",
          intensity,
        );
        break;
      }
      case "Nose Head Width": {
        this.effectInstance.setStringVal(
          "Face Mesh Nose Head Width Custom Package Id",
          assetUuid,
        );
        this.effectInstance.setFloatVal(
          "Face Mesh Nose Head Width Degree",
          intensity,
        );
        break;
      }
      default: {
        break;
      }
    }
    return null;
  }

  /**
   * @if ENGLISH
   * @brief Preload effect package.
   * @param {} effect effect object
   * @else
   * @brief 预加载特效包资源
   * @param {} effect 特效包对象
   * @endif
   */
  preloadEffect(effect) {
    if (!effect.url) {
      return Promise.reject();
    }
    if (effect.url.endsWith(".zip")) {
      return new Promise(async (resolve, reject) => {
        if (!this.config.jszip) {
          console.error("jszip of config is null, need use it to unzip file!");
          reject();
          return;
        }

        const filePath = "/" + effect.url.split("/").pop();
        const zipPackageDir = filePath.split(".")[0] + "/";
        const zipPackageUuid = zipPackageDir.replace("/", "");
        if (this.compoundMakeupsPreloadedList.includes(zipPackageUuid)) {
          resolve(zipPackageUuid);
          return;
        }
        if (!FS.analyzePath(zipPackageDir).exists) {
          FS.mkdir(zipPackageDir);
        }
        await this.fetchAndWrite(effect.url, filePath);
        try {
          const zip = await this.config.jszip.loadAsync(FS.readFile(filePath));
          for (let key in zip.files) {
            const zipEntry = zip.files[key];
            // info_new.json in zip file is the detailed description of the makeup package,
            // including all parameters used.
            if (key === "info_new.json") {
              const infoJsonData = await zipEntry.async("string");
              FS.writeFile(zipPackageDir + key, infoJsonData);
            } else if (
              key.endsWith(".makeup") ||
              key.endsWith(".facemesh") ||
              key.endsWith(".videofx")
            ) {
              await this.installPackageInZip(
                zipEntry,
                zipPackageDir,
                key,
                zip.files,
              );
            } else if (key.endsWith(".mslut")) {
              const lutData = await zipEntry.async("uint8array");
              FS.writeFile(zipPackageDir + key, new Uint8Array(lutData));
            }
          }
          this.compoundMakeupsPreloadedList.push(zipPackageUuid);
          resolve(zipPackageUuid);
        } catch (e) {
          console.error(e);
          reject();
        }
      });
    } else {
      return new Promise(async (resolve, reject) => {
        const fileName = effect.url.split("/").pop();
        const list = fileName.split(".");
        const assetUuid = list[0];
        const suffix = list.pop();
        let assetType = null;
        if (suffix === "makeup") {
          assetType = NveAssetPackageTypeEnum.Makeup;
        } else if (suffix === "facemesh") {
          assetType = NveAssetPackageTypeEnum.FaceMesh;
        } else if (suffix === "arscene") {
          assetType = NveAssetPackageTypeEnum.ARScene;
        } else if (suffix === "videofx") {
          assetType = NveAssetPackageTypeEnum.VideoFx;
        } else if (suffix === "captionstyle") {
          assetType = NveAssetPackageTypeEnum.CaptionStyle;
        } else if (suffix === "animatedsticker") {
          assetType = NveAssetPackageTypeEnum.AnimatedSticker;
        } else if (suffix === "compoundcaption") {
          assetType = NveAssetPackageTypeEnum.CompoundCaption;
        } else if (suffix === "videotransition") {
          assetType = NveAssetPackageTypeEnum.VideoTransition;
        } else if (suffix === "captioncontext") {
          assetType = NveAssetPackageTypeEnum.CaptionContext;
        } else if (suffix === "captionrenderer") {
          assetType = NveAssetPackageTypeEnum.CaptionRenderer;
        } else if (suffix === "captionanimation") {
          assetType = NveAssetPackageTypeEnum.CaptionAnimation;
        } else if (suffix === "captioninanimation") {
          assetType = NveAssetPackageTypeEnum.CaptionInAnimation;
        } else if (suffix === "captionoutanimation") {
          assetType = NveAssetPackageTypeEnum.CaptionOutAnimation;
        } else if (suffix === "animatedstickeranimation") {
          assetType = NveAssetPackageTypeEnum.AnimatedStickerAnimation;
        } else if (suffix === "animatedstickerinanimation") {
          assetType = NveAssetPackageTypeEnum.AnimatedStickerInAnimation;
        } else if (suffix === "animatedstickeroutanimation") {
          assetType = NveAssetPackageTypeEnum.AnimatedStickerOutAnimation;
        }
        if (assetType === null || assetType === undefined) {
          console.error(assetUuid, " type is invalid!");
          reject();
          return;
        }
        const packageManager =
          nveGetEffectContextInstance().getAssetPackageManager();
        const status = packageManager.getAssetPackageStatus(
          assetUuid,
          assetType,
        );
        if (status !== NveAssetPackageStatusEnum.NotInstalled) {
          resolve({ assetUuid, assetType });
          return;
        }

        const filePath = "/" + fileName;
        await this.fetchAndWrite(effect.url, filePath);
        let licFilePath = "";
        if (effect.licUrl) {
          licFilePath = "/" + effect.licUrl.split("/").pop();
          await this.fetchAndWrite(effect.licUrl, licFilePath, true);
        }
        packageManager.onFinishAssetPackageInstallation = (
          assetPackageId,
          assetPackageFilePath,
          assetPackageType,
          error,
        ) => {
          FS.unlink(assetPackageFilePath, 0);
          if (error === 0 && assetPackageId === assetUuid) {
            if (licFilePath) {
              FS.unlink(licFilePath, 0);
            }
            resolve({ assetUuid, assetType });
          } else {
            console.error(assetUuid, " install failed, error code is ", error);
            reject();
          }
        };
        packageManager.installAssetPackage(filePath, licFilePath, assetType);
      });
    }
  }

  installAndApplyEffect(effect) {
    return new Promise(async (resolve, reject) => {
      const { assetUuid, assetType } = await this.preloadEffect(effect);
      if (assetUuid) {
        const effectInstance = this.applyEffect(assetUuid, effect, assetType);
        resolve(effectInstance);
      } else {
        reject();
      }
    });
  }

  installPackageInZip(zipEntry, zipPackageDir, fileName, files) {
    return new Promise(async (resolve, reject) => {
      const filePath = zipPackageDir + fileName;
      const list = fileName.split(".");
      const assetUuid = list[0];
      const suffix = list.pop();
      let assetType = null;
      if (suffix === "makeup") {
        assetType = NveAssetPackageTypeEnum.Makeup;
      } else if (suffix === "facemesh") {
        assetType = NveAssetPackageTypeEnum.FaceMesh;
      } else if (suffix === "videofx") {
        assetType = NveAssetPackageTypeEnum.VideoFx;
      }
      if (assetType === null || assetType === undefined) {
        console.error(assetUuid, " type is invalid!");
        reject();
        return;
      }
      const packageManager =
        nveGetEffectContextInstance().getAssetPackageManager();
      const status = packageManager.getAssetPackageStatus(assetUuid, assetType);
      if (status !== NveAssetPackageStatusEnum.NotInstalled) {
        resolve();
        return;
      }

      if (!FS.analyzePath(filePath).exists) {
        const fileData = await zipEntry.async("uint8array");
        FS.writeFile(filePath, new Uint8Array(fileData));
      }
      let licFilePath = "";
      let licFileName = assetUuid + ".lic";
      for (let key in files) {
        const zipEntry = files[key];
        if (zipEntry.name === licFileName) {
          licFilePath = zipPackageDir + licFileName;
          if (!FS.analyzePath(licFilePath).exists) {
            const licFileData = await files[licFileName].async("uint8array");
            FS.writeFile(licFilePath, new Uint8Array(licFileData));
          }
          break;
        }
      }
      packageManager.onFinishAssetPackageInstallation = (
        assetPackageId,
        assetPackageFilePath,
        assetPackageType,
        error,
      ) => {
        FS.unlink(assetPackageFilePath, 0);
        if (error === 0 && assetPackageId === assetUuid) {
          if (licFilePath) {
            FS.unlink(licFilePath, 0);
          }
          resolve();
        } else {
          console.error(assetUuid, " install failed, error code is ", error);
          reject();
        }
      };
      packageManager.installAssetPackage(filePath, licFilePath, assetType);
    });
  }

  async applyEffectsInZip(effect) {
    this.zipInfoJson = null;
    const uuid = await this.preloadEffect(effect);
    if (!uuid) {
      return;
    }
    this.clearEffectInstanceArrayInZip();
    this.zipPackageDir = "/" + uuid + "/";
    const infoJsonData = FS.readFile(this.zipPackageDir + "info_new.json", {
      encoding: "utf8",
    });
    this.zipInfoJson = JSON.parse(infoJsonData);
    if (!this.zipInfoJson || !this.zipInfoJson.effectContent) {
      console.error("Json info in zip is invalid!");
      return;
    }

    if (this.zipInfoJson.effectContent.makeup) {
      for (let i = 0; i < this.zipInfoJson.effectContent.makeup.length; i++) {
        this.setParams(this.zipInfoJson.effectContent.makeup[i].params);
      }
    }
    if (this.zipInfoJson.effectContent.beauty) {
      for (let i = 0; i < this.zipInfoJson.effectContent.beauty.length; i++) {
        const item = this.zipInfoJson.effectContent.beauty[i];
        if (item.params) {
          this.setParams(item.params);
        } else if (item.uuid) {
          const fx = nveGetEffectContextInstance().createVideoEffect(
            item.uuid,
            this.config.ratio,
            this.config.workingInRealtimeMode,
          );
          fx.setFilterIntensity(item.value);
          this.effectInstanceArrayInZip.push(fx);
        }
      }
    }
    if (this.zipInfoJson.effectContent.shape) {
      for (let i = 0; i < this.zipInfoJson.effectContent.shape.length; i++) {
        this.setParams(this.zipInfoJson.effectContent.shape[i].params);
      }
    }
    if (this.zipInfoJson.effectContent.filter) {
      for (let i = 0; i < this.zipInfoJson.effectContent.filter.length; i++) {
        const item = this.zipInfoJson.effectContent.filter[i];
        if (item.uuid) {
          const fx = nveGetEffectContextInstance().createVideoEffect(
            item.uuid,
            this.config.ratio,
            this.config.workingInRealtimeMode,
          );
          fx.setFilterIntensity(item.value);
          this.effectInstanceArrayInZip.push(fx);
        }
      }
    }
  }

  setParams(params) {
    if (!params) {
      return;
    }
    for (let i = 0; i < params.length; i++) {
      const item = params[i];
      if (item.type === "boolean") {
        this.effectInstance.setBooleanVal(item.key, item.value);
      } else if (item.type === "string") {
        this.effectInstance.setStringVal(item.key, item.value);
      } else if (item.type === "int") {
        this.effectInstance.setIntVal(item.key, item.value);
      } else if (item.type === "float") {
        this.effectInstance.setFloatVal(item.key, item.value);
      } else if (item.type === "path") {
        this.effectInstance.setStringVal(
          item.key,
          this.zipPackageDir + item.value,
        );
      }
    }
  }

  clearEffectInstanceArray() {
    if (this.effectInstanceArray) {
      for (let i = 0; i < this.effectInstanceArray.length; i++) {
        this.effectInstanceArray[i].release();
      }
      this.effectInstanceArray = [];
    }
  }

  clearEffectInstanceArrayInZip() {
    if (this.effectInstanceArrayInZip) {
      for (let i = 0; i < this.effectInstanceArrayInZip.length; i++) {
        this.effectInstanceArrayInZip[i].release();
      }
      this.effectInstanceArrayInZip = [];
    }
  }

  clearEffects() {
    this.clearEffectInstanceArray();
    this.clearEffectInstanceArrayInZip();
    if (this.effectInstance) {
      this.effectInstance.release();
      this.effectInstance = null;
    }
    if (this.segmentationEffectInstance) {
      this.segmentationEffectInstance.release();
      this.segmentationEffectInstance = null;
    }
  }

  async resetEffects() {
    this.clearEffects();
    this.effectInstance = nveGetEffectContextInstance().createVideoEffect(
      "AR Scene",
      this.config.ratio,
      this.config.workingInRealtimeMode,
    );
    this.effectInstance
      .getARSceneManipulate()
      .setDetectionMode(this.config.detectionMode);
    this.effectInstance.setIntVal("Advanced Beauty Type", 0);
    this.effectInstance.setBooleanVal("Beauty Effect", this.beautyEnabled);
    this.effectInstance.setBooleanVal(
      "Advanced Beauty Enable",
      this.beautyEnabled,
    );
    this.effectInstance.setFloatVal(
      "Advanced Beauty Intensity",
      this.config.beautyIntensity,
    );
    if (this.config.beautyLutUrl) {
      const lutFilePath = "/" + this.config.beautyLutUrl.split("/").pop();
      await this.fetchAndWrite(this.config.beautyLutUrl, lutFilePath);
      this.effectInstance.setStringVal(
        "Advanced Beauty Face Lut File",
        lutFilePath,
      );
      this.effectInstance.setFloatVal(
        "Advanced Beauty Face Lut Intensity",
        this.config.beautyLutIntensity,
      );
      if (!this.needReleaseFSFileList.includes(lutFilePath)) {
        this.needReleaseFSFileList.push(lutFilePath);
      }
    }
    this.effectInstance.setBooleanVal("Beauty Shape", true);
    this.effectInstance.setBooleanVal("Face Mesh Internal Enabled", true);
    this.effectList = [];
  }

  async applyEffects() {
    for (let i = 0; i < this.effectList.length; i++) {
      const effect = this.effectList[i];
      if (
        effect.segmentationBackgroundUrl !== undefined &&
        effect.segmentationBackgroundUrl !== null
      ) {
        if (effect.segmentationBackgroundUrl) {
          if (!this.segmentationEffectInstance) {
            this.segmentationEffectInstance =
              nveGetEffectContextInstance().createVideoEffect(
                "Segmentation Background Fill",
                this.config.ratio,
                this.config.workingInRealtimeMode,
              );
          }
          if (this.segmentationEffectInstance) {
            const segmentationBackgroundFilePath =
              "/" + effect.segmentationBackgroundUrl.split("/").pop();
            await this.fetchAndWrite(
              effect.segmentationBackgroundUrl,
              segmentationBackgroundFilePath,
            );
            this.segmentationEffectInstance.setStringVal(
              "Tex File Path",
              segmentationBackgroundFilePath,
            );
            this.segmentationEffectInstance.setMenuVal(
              "Segment Type",
              "Background",
            );
            this.segmentationEffectInstance.setIntVal("Stretch Mode", 1);
            if (
              !this.needReleaseFSFileList.includes(
                segmentationBackgroundFilePath,
              )
            ) {
              this.needReleaseFSFileList.push(segmentationBackgroundFilePath);
            }
          }
        } else {
          if (this.segmentationEffectInstance) {
            this.segmentationEffectInstance.release();
            this.segmentationEffectInstance = null;
          }
        }
      } else if (effect.builtinEffectName) {
        this.applyEffect(
          effect.builtinEffectName,
          effect,
          NveAssetPackageTypeEnum.VideoFx,
        );
      } else if (effect.url) {
        if (effect.url.endsWith(".zip")) {
          await this.applyEffectsInZip(effect);
        } else {
          await this.installAndApplyEffect(effect);
        }
      } else if (
        effect.key &&
        effect.intensity !== undefined &&
        effect.intensity !== null
      ) {
        this.effectInstance.setFloatVal(effect.key, effect.intensity);
      }
    }
  }

  /**
   * @if ENGLISH
   * @brief Enable beauty effect or not.
   * @param {} enable enable
   * @else
   * @brief 是否开启美颜
   * @param {} enable 是否开启
   * @endif
   */
  enableBeauty(enable) {
    this.beautyEnabled = enable;
    if (this.effectInstance) {
      this.effectInstance.setBooleanVal("Beauty Effect", enable);
      this.effectInstance.setBooleanVal("Advanced Beauty Enable", enable);
    } else {
      console.error("AR Scene effect instance is invalid!");
    }
  }

  /**
   * @if ENGLISH
   * @brief Set effect list.
   * @param {} effectList effect list
   * @return {Promise}
   * @else
   * @brief 设置特效列表
   * @param {} effectList 特效列表
   * @return {Promise}
   * @endif
   */
  async setEffectList(effectList) {
    await this.resetEffects();
    this.effectList = effectList;
    await this.applyEffects();
  }

  /**
   * @if ENGLISH
   * @brief Get effect list has been set.
   * @return {} effect list
   * @else
   * @brief 获取已经设置的特效列表
   * @return {} 已经设置的特效列表
   * @endif
   */
  getEffectList() {
    return this.effectList ? this.effectList : [];
  }

  /**
   * @if ENGLISH
   * @brief Append effect list.
   * @param {} effectList effect list
   * @return {Promise}
   * @else
   * @brief 追加特效列表
   * @param {} effectList 特效列表
   * @return {Promise}
   * @endif
   */
  async appendEffectList(effectList) {
    this.effectList = this.effectList.concat(effectList);
    await this.applyEffects();
  }

  /**
     * @if ENGLISH
     * @brief Rendering effects.
     * @param {ImageData|VideoFrame} inputImageData Input image data
     * @param {Number} timestampMs Current rendering timestamp in millisecond
     * @return {Promise} Return Promise, reject status with Error string information,
       and resolve status with {imageBitmap:imageData, spentTime:spentTime},
       imageBitmap is output image data, a ImageBitmap object,
       spentTime is spent time for rendering in millisecond.
     * @else
     * @brief 渲染特效
     * @param {ImageData|VideoFrame} inputImageData 输入图像数据
     * @param {Number} timestampMs 当前渲染的时间戳，以毫秒为单位
     * @return {Promise} 返回Promise，reject时，携带Error字符串信息，
       resolve时，则携带{imageBitmap:imageData, spentTime:spentTime}结构的渲染结果，
       imageBitmap是输出的图像数据，类型为ImageBitmap，spentTime是渲染耗时，以毫秒为单位。
     * @endif
     */
  render(inputImageData, timestampMs, renderRect = {}) {
    let effectInstanceArray = [this.effectInstance]
      .concat(this.effectInstanceArray)
      .concat(this.effectInstanceArrayInZip);
    if (this.segmentationEffectInstance) {
      effectInstanceArray.push(this.segmentationEffectInstance);
    }
    if (this.externalEffectInstanceList) {
      effectInstanceArray = effectInstanceArray.concat(
        this.externalEffectInstanceList,
      );
    }
    const hostBufferInfoExt = {
      needHozFlip: this.config.mirror,
      displayRotation: 0,
      physicalOrientation: 0,
    };
    return nveGetEffectContextInstance().renderEffects(
      effectInstanceArray,
      inputImageData,
      timestampMs,
      NveRenderFlagEnum.OutputImageBitmap,
      [hostBufferInfoExt],
      renderRect,
    );
  }

  createDummyVideoElement(mediaStream) {
    if (!this.videoElement) {
      this.videoElement = document.createElement("video");
    }
    this.videoElement.style.display = "none";
    this.videoElement.muted = true;
    this.videoElement.playsinline = true;
    this.videoElement.srcObject = mediaStream;
  }

  async renderEffectAndCreateOutputStream(inputImageData, renderRect) {
    try {
      if (this.effectInstance) {
        if (!this.lastDate && this.config.printTimeCostAndFps) {
          this.lastDate = new Date();
          this.fps = 0;
          this.fpsInterval = setInterval(async () => {
            console.log("fps:", this.fps);
            this.fps = 0;
          }, 1000);
        }
        const performanceTime = Math.floor(performance.now());
        if (
          this.renderTimestampOffsetMs === undefined ||
          this.renderTimestampOffsetMs === null
        ) {
          this.renderTimestampOffsetMs = performanceTime;
        }
        const renderEffectsResult = await this.render(
          inputImageData,
          performanceTime - this.renderTimestampOffsetMs,
          renderRect,
        );
        if (this.config && this.config.printTimeCostAndFps) {
          const newDate = new Date();
          let costTime = newDate.getTime() - this.lastDate.getTime();
          console.log("costTime:", costTime);
          this.lastDate = newDate;
          this.fps++;
        }
        let outputImage = renderEffectsResult.imageBitmap;
        if (!outputImage) {
          outputImage = await createImageBitmap(renderEffectsResult.imageData);
        }
        if (this.canvas) {
          const ctx = this.canvas.getContext("2d");
          ctx.globalCompositeOperation = "copy";
          ctx.drawImage(
            outputImage,
            0,
            0,
            this.canvas.width,
            this.canvas.height,
          );
          outputImage.close();
        }
      }
    } catch (e) {
      if (!e.meisheDropFrame) console.error(e);
    }
  }

  /**
   * @if ENGLISH
   * @brief Push media stream.
   * @param {} mediaStream media stream
   * @else
   * @brief 推入媒体流
   * @param {} mediaStream 媒体流
   * @endif
   */
  pushMediaStream(mediaStream) {
    this.renderTimestampOffsetMs = null;
    let inputStream = mediaStream;
    if (inputStream) {
      this.stopCamera();
    } else {
      inputStream = this.cameraStream;
    }

    if (!this.canvas) {
      this.canvas = document.createElement("canvas");
    }
    const videoTrackSettings = inputStream.getVideoTracks()[0].getSettings();
    let renderRect = {};
    if (
      videoTrackSettings.width * this.config.ratio.height !==
      videoTrackSettings.height * this.config.ratio.width
    ) {
      if (
        this.config.ratio.den / this.config.ratio.num >
        videoTrackSettings.height / videoTrackSettings.width
      ) {
        renderRect.height = videoTrackSettings.height;
        renderRect.width =
          (renderRect.height * this.config.ratio.num) / this.config.ratio.den;
        renderRect.x = (videoTrackSettings.width - renderRect.width) / 2;
        renderRect.y = 0;
      } else {
        renderRect.width = videoTrackSettings.width;
        renderRect.height =
          (renderRect.width * this.config.ratio.den) / this.config.ratio.num;
        renderRect.x = 0;
        renderRect.y = (videoTrackSettings.height - renderRect.height) / 2;
      }
      this.canvas.width = renderRect.width;
      this.canvas.height = renderRect.height;
    } else {
      this.canvas.width = videoTrackSettings.width;
      this.canvas.height = videoTrackSettings.height;
    }
    this.canvas.style.visibility = "hidden";
    const audioTrack = inputStream.getAudioTracks()[0];
    this.outputStream = this.canvas.captureStream(this.config.outputStreamFps);
    if (audioTrack) {
      this.outputStream.addTrack(audioTrack);
    }

    let self = this;
    if (typeof VideoFrame !== "undefined") {
      // We should always prefer using VideoFrame to render effect since it's faster.
      if (typeof MediaStreamTrackProcessor !== "undefined") {
        const videoTrack = inputStream.getVideoTracks()[0];
        let trackProcessor = new MediaStreamTrackProcessor(videoTrack);
        let frameStream = trackProcessor.readable;
        let frameReader = frameStream.getReader();
        frameReader.read().then(async function processFrame({ done, value }) {
          let frame = value;
          if (done) return;
          await self.renderEffectAndCreateOutputStream(frame, renderRect);
          frame.close();
          return frameReader.read().then(processFrame);
        });
      } else {
        self.createDummyVideoElement(inputStream);
        self.videoElement.onloadedmetadata = async function () {
          try {
            await self.videoElement.play();
          } catch (e) {
            console.warn(e);
            return;
          }

          // Setup a timer to create VideoFrame from video element periodically.
          self.captureInterval = setInterval(async () => {
            const frame = new VideoFrame(self.videoElement);
            await self.renderEffectAndCreateOutputStream(frame, renderRect);
            frame.close();
          }, 1000 / self.config.outputStreamFps);
        };
      }
    } else {
      self.createDummyVideoElement(inputStream);

      // Create a dummy canvas object to get ImageData from video element.
      self.dummyCanvas = document.createElement("canvas");
      const ctx = self.dummyCanvas.getContext("2d", {
        willReadFrequently: true,
      });

      self.videoElement.onloadedmetadata = async function () {
        try {
          await self.videoElement.play();
        } catch (e) {
          console.warn(e);
          return;
        }

        self.dummyCanvas.width = self.videoElement.videoWidth;
        self.dummyCanvas.height = self.videoElement.videoHeight;
        let x = 0;
        let y = 0;
        let width = self.dummyCanvas.width;
        let height = self.dummyCanvas.height;
        if (renderRect && renderRect.width && renderRect.height) {
          if (renderRect.x) {
            x = renderRect.x;
          }
          if (renderRect.y) {
            y = renderRect.y;
          }
          width = renderRect.width;
          height = renderRect.height;
        }

        // Setup a timer to extract pixels from video element periodically.
        self.captureInterval = setInterval(async () => {
          ctx.drawImage(self.videoElement, 0, 0);
          const imageData = ctx.getImageData(x, y, width, height);
          await self.renderEffectAndCreateOutputStream(imageData);
        }, 1000 / self.config.outputStreamFps);
      };
    }
  }

  /**
   * @if ENGLISH
   * @brief Startup camera.
   * @param {} constraints constraints
   * @return {Promise}
   * @else
   * @brief 启动摄像头
   * @param {} constraints 约束
   * @return {Promise}
   * @endif
   */
  async startupCamera(constraints) {
    try {
      this.cameraStream =
        await navigator.mediaDevices.getUserMedia(constraints);
      const videoTracks = this.cameraStream.getVideoTracks();
      let hasCamera = false;
      videoTracks.forEach((track) => {
        if (track.kind === "video" && track.label !== "Intel Virtual Camera") {
          hasCamera = true;
        }
      });
      if (!hasCamera) {
        console.warn("There is no camera device!");
        this.stopCamera();
        return;
      }
      this.pushMediaStream();
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * @if ENGLISH
   * @brief Stop camera.
   * @else
   * @brief 停止摄像头
   * @endif
   */
  stopCamera() {
    if (this.cameraStream) {
      this.cameraStream.getTracks().forEach((track) => {
        track.stop();
      });
      this.cameraStream = null;
    }
  }

  /**
   * @if ENGLISH
   * @brief Get output stream.
   * @return {MediaStream} a MediaStream object
   * @else
   * @brief 获取输出媒体流
   * @return {MediaStream} MediaStream对象
   * @endif
   */
  getOutputStream() {
    return this.outputStream;
  }

  /**
   * @if ENGLISH
   * @brief Create external effect instance, including caption, animated sticker, compound caption, video transition and video fx.
   * @param {} effect External effect object
   * @return {Promise} In the resolved state, return the effect instance created, such as NveCaption, NveAnimatedSticker, NveCompoundCaption, NveVideoTransition and NveEffectInstance.
   * @else
   * @brief 创建外部特效实例, 包括字幕、贴纸、组合字幕、转场和滤镜
   * @param {} effect 外部特效对象
   * @return {Promise} resolve状态下, 返回结果携带创建的特效实例, 例如: NveCaption、NveAnimatedSticker、NveCompoundCaption、NveVideoTransition和NveEffectInstance。
   * @endif
   */
  async createExternalEffectInstance(effect) {
    effect.external = true;
    if (effect.captionContextUrl) {
      await this.installAndApplyEffect({
        url: effect.captionContextUrl,
        licUrl: effect.captionContextLicUrl,
      });
    }
    if (effect.captionRendererUrl) {
      await this.installAndApplyEffect({
        url: effect.captionRendererUrl,
        licUrl: effect.captionRendererLicUrl,
      });
    }
    if (effect.captionAnimationUrl) {
      await this.installAndApplyEffect({
        url: effect.captionAnimationUrl,
        licUrl: effect.captionAnimationLicUrl,
      });
    }
    if (effect.captionInAnimationUrl) {
      await this.installAndApplyEffect({
        url: effect.captionInAnimationUrl,
        licUrl: effect.captionInAnimationLicUrl,
      });
    }
    if (effect.captionOutAnimationUrl) {
      await this.installAndApplyEffect({
        url: effect.captionOutAnimationUrl,
        licUrl: effect.captionOutAnimationLicUrl,
      });
    }
    if (effect.fontFileUrl) {
      const fontFilePath = "/" + effect.fontFileUrl.split("/").pop();
      await this.fetchAndWrite(effect.fontFileUrl, fontFilePath);
    }
    if (effect.animatedStickerAnimationUrl) {
      await this.installAndApplyEffect({
        url: effect.animatedStickerAnimationUrl,
        licUrl: effect.animatedStickerAnimationLicUrl,
      });
    }
    if (effect.animatedStickerInAnimationUrl) {
      await this.installAndApplyEffect({
        url: effect.animatedStickerInAnimationUrl,
        licUrl: effect.animatedStickerInAnimationLicUrl,
      });
    }
    if (effect.animatedStickerOutAnimationUrl) {
      await this.installAndApplyEffect({
        url: effect.animatedStickerOutAnimationUrl,
        licUrl: effect.animatedStickerOutAnimationLicUrl,
      });
    }
    if (effect.url) {
      const effectInstance = await this.installAndApplyEffect(effect);
      return effectInstance;
    } else if (effect.text) {
      return this.applyEffect("", effect, NveAssetPackageTypeEnum.CaptionStyle);
    } else if (effect.builtinEffectName) {
      return this.applyEffect(
        effect.builtinEffectName,
        effect,
        NveAssetPackageTypeEnum.VideoFx,
      );
    } else if (effect.builtinTransitionName) {
      return this.applyEffect(
        effect.builtinTransitionName,
        effect,
        NveAssetPackageTypeEnum.VideoTransition,
      );
    }
    return null;
  }

  /**
   * @if ENGLISH
   * @brief Set external effect instance list.
   * @param {} effectInstanceList External effect instance list
   * @else
   * @brief 设置外部特效实例列表
   * @param {} effectInstanceList 外部特效实例列表
   * @endif
   */
  setExternalEffectInstanceList(effectInstanceList) {
    this.externalEffectInstanceList = effectInstanceList;
  }

  /**
   * @if ENGLISH
   * @brief Get external effect instance list.
   * @return {NveEffectInstance[]} External effect instance list
   * @else
   * @brief 获取外部特效实例列表
   * @return {NveEffectInstance[]} 外部特效实例列表
   * @endif
   */
  getExternalEffectInstanceList() {
    return this.externalEffectInstanceList;
  }

  /**
   * @if ENGLISH
   * @brief Append external effect instance list.
   * @param {} effectInstance External effect instance
   * @else
   * @brief 追加外部特效实例
   * @param {} effectInstance 外部特效实例
   * @endif
   */
  appendExternalEffectInstance(effectInstance) {
    if (!this.externalEffectInstanceList) {
      this.externalEffectInstanceList = [];
    }
    if (effectInstance) {
      this.externalEffectInstanceList.push(effectInstance);
    }
  }
}

function nveSetModule(module) {
  Module = module;
}

function nveInitClasses() {
  Module.Meishe.effectContext.classMap = {
    NveEffectContext,
    NveAssetPackageManager,
    NveEffectInstance,
    NveCaption,
    NveAnimatedSticker,
    NveCompoundCaption,
    NveVideoTransition,
    NveVectorVal,
    NveVolume,
    NveMotionParameters,
    NveCaptionSpan,
    NvePointF,
    NveRectF,
    NveRational,
    NveColor,
    NveARSceneManipulate,
  };

  Module.Meishe.effectContext.getClassByName = function (className) {
    return Module.Meishe.effectContext.classMap[className];
  };
}

function nveSetFS(fs) {
  FS = fs;
}
