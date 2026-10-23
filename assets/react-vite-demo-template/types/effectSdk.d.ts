/**
 * @if ENGLISH
 * @brief Get instance of effect context
 * @return {NveEffectContext} Instance of effect context
 * @else
 * @brief 获取特效上下文实例
 * @return {NveEffectContext} 特效上下文实例
 * @endif
 */
declare function nveGetEffectContextInstance(): NveEffectContext;
declare function nveSetModule(module: any): void;
declare function nveInitClasses(): void;
declare function nveSetFS(fs: any): void;
/**
 * @if ENGLISH
 * @brief Doc of Effect SDK WEB APPLICATION
 * @version 3.12.0
 * @copyright Meishe Co., Ltd.
 * @else
 * @brief Effect SDK WEB应用文档
 * @version 3.12.0
 * @copyright 北京美摄网络科技有限公司
 * @endif
 */
/** @file */
declare var Module: any;
declare var FS: any;
/**
 * @if ENGLISH
 * @brief vector contains object type values
 * @else
 * @brief 对象类型数组
 * @endif
 */
declare class NveVectorVal {
}
/**
 * @if ENGLISH
 * @brief volume
 * @else
 * @brief 音量类，设置音量的左右声道
 * @endif
 */
declare class NveVolume {
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
    constructor(leftVolume: number, rightVolume: number);
    leftVolume: number;
    rightVolume: number;
}
/**
 *  @if ENGLISH
 *  @brief  Motion parameter information
 *  @else
 *  @brief 运动参数
 *  @endif
 */
declare class NveMotionParameters {
    anchorX: number;
    anchorY: number;
    scaleX: number;
    scaleY: number;
    rotationZ: number;
    transX: number;
    transY: number;
}
/**
 * @if ENGLISH
 * @brief layout attributes class
 * @else
 * @brief 字幕layout属性类
 * @endif
 */
declare class NveCaptionSpan {
    type: string;
    start: number;
    end: number;
    value: any;
}
/**
 * @if ENGLISH
 * @brief Two dimensional coordinates point, parameter type is double or float.
 * @else
 * @brief 二维坐标点结构。 参数类型为双精度浮点数。
 * @endif
 */
declare class NvePointF {
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
    constructor(x: number, y: number);
    x: number;
    y: number;
}
/**
 * @if ENGLISH
 * @brief rectangular
 * @else
 * @brief 矩形类
 * @endif
 */
declare class NveRectF {
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
    constructor(left: number, top: number, right: number, bottom: number);
    left: number;
    top: number;
    right: number;
    bottom: number;
}
/**
 * @if ENGLISH
 * @brief Rational
 * @else
 * @brief 比例值
 * @endif
 */
declare class NveRational {
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
    constructor(numerator: number, denominator: number);
    num: number;
    den: number;
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
declare class NveColor {
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
    constructor(r: number, g: number, b: number, a: number);
    r: number;
    g: number;
    b: number;
    a: number;
}
/**
 * @if ENGLISH
 * @brief Render task
 * @else
 * @brief 渲染任务
 * @endif
 */
declare class NveRenderTask {
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
    constructor(taskId: number, flags: number);
    taskId: number;
    flags: number;
}
/**
 * @if ENGLISH
 * @brief Effect instance.
 * @else
 * @brief 特效实例
 * @endif
 */
declare class NveEffectInstance {
    internalObj: number;
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
    release(): void;
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
    setIntVal(fxParam: string, val: number): void;
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
    getIntVal(fxParam: string): number;
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
    setFloatVal(fxParam: string, val: number): void;
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
    getFloatVal(fxParam: string): number;
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
    setBooleanVal(fxParam: string, val: boolean): void;
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
    getBooleanVal(fxParam: string): boolean;
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
    setMenuVal(fxParam: string, val: string): void;
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
    getMenuVal(fxParam: string): string;
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
    setStringVal(fxParam: string, val: string): void;
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
    getStringVal(fxParam: string): string;
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
    setColorVal(fxParam: string, val: NveColor): void;
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
    getColorVal(fxParam: string): NveColor;
    /**
     * @if ENGLISH
     * @brief Set the intensity of the filter.
     * @param {Number} intensity The filter intensity value, the value range is generally [0,1]. 0 means no effect, while 1 indicates the default effect.
     * @else
     * @brief 设置滤镜强度
     * @param {Number} intensity 滤镜强度值，取值范围一般为[0,1]，为0则滤镜无效果，为1则为默认效果
     * @endif
     */
    setFilterIntensity(intensity: number): void;
    /**
     * @if ENGLISH
     * @brief Get the intensity of the filter.
     * @return {Number} The intensity value of the filter.
     * @else
     * @brief 获取滤镜强度
     * @return {Number} 返回滤镜的强度值
     * @endif
     */
    getFilterIntensity(): number;
    /**
     * @if ENGLISH
     * @brief Get the manipulate of ARScene.
     * @return {NveARSceneManipulate} Return the manipulate of ARScene.
     * @else
     * @brief 获取ARScene操作
     * @return {NveARSceneManipulate} 返回 AR 场景操作对象。
     * @endif
     */
    getARSceneManipulate(): NveARSceneManipulate;
    /**
   *  @if ENGLISH
   *  @brief Get in-point of effect
   *  @return {Number} In-point of effect (in microseconds)
   *  @else
   *  @brief 获取起始点
   *  @return {Number} 起始点(以微秒为单位)
   *  @endif
   */
    getInPoint(): number;
    /**
   *  @if ENGLISH
   *  @brief Get out point of effect
   *  @return {Number} Out point of effect (in microseconds)
   *  @else
   *  @brief 获取结束点
   *  @return {Number} 结束点(以微秒为单位)
   *  @endif
   */
    getOutPoint(): number;
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
    changeInPoint(newInPoint: number): number;
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
    changeOutPoint(newOutPoint: number): number;
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
declare const NveCaptionTextAlignmentEnum: Readonly<{
    Left: 0;
    Center: 1;
    Right: 2;
    Top: 3;
    Bottom: 4;
    VCenter: 5;
}>;
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
declare const NveCaptionTextBoundingTypeEnum: Readonly<{
    Text: 0;
    TextFrame: 1;
    Frame: 2;
    TextOriginFrame: 3;
}>;
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
declare const NveCaptionLetterSpacingTypeEnum: Readonly<{
    Percentage: 0;
    Absolute: 1;
}>;
/**
 * @if ENGLISH
 * @brief Captions are custom text superimposed on the video. You can add and adjust the caption position. After adding caption, you can also set styles, including font size, color, shadow, stroke, etc.
 * @see NveEffectInstance
 * @else
 * @brief 字幕是叠加在视频上的自定义文本。您可以添加并调整字幕位置。添加字幕后，还可以设置样式，包括字体大小、颜色、阴影、描边等。
 * @see NveEffectInstance
 *
 */
declare class NveCaption extends NveEffectInstance {
    /**
   *  @if ENGLISH
   *  @brief Gets the caption style package ID.
   *  @return {String} Returns the obtained caption style resource package ID.
   *  @else
   *  @brief 获取字幕样式包 ID。
   *  @return {String} 返回获取到的字幕样式资源包ID。
   *  @endif
   */
    getCaptionStylePackageId(): string;
    /**
   *  @if ENGLISH
   *  @brief Gets the modular caption context style package ID.
   *  @return {String} Returns the obtained modular caption context style resource package ID.
   *  @else
   *  @brief 获取模块化字幕上下文样式包 ID。
   *  @return {String} 返回获取的模块化字幕上下文样式资源包ID。
   *  @endif
   */
    getModularCaptionContextPackageId(): string;
    /**
   *  @if ENGLISH
   *  @brief Gets the modular caption context style package ID.
   *  @return {String} Returns the obtained modular caption context style resource package ID.
   *  @else
   *  @brief 获取模块化字幕渲染样式包 ID。
   *  @return {String} 返回获取的模块化字幕渲染样式资源包ID。
   *  @endif
   */
    getModularCaptionRendererPackageId(): string;
    /**
   *  @if ENGLISH
   *  @brief Gets the modular caption animation style package ID.
   *  @return {String} Returns the obtained modular caption animation style resource package ID.
   *  @else
   *  @brief 获取模块化字幕动画样式包 ID。
   *  @return {String} 返回获取到的模块化字幕动画样式资源包ID。
   *  @endif
   */
    getModularCaptionAnimationPackageId(): string;
    /**
   *  @if ENGLISH
   *  @brief Gets the modular caption in-animation style package ID.
   *  @return {String} Returns the obtained modular caption in-animation style resource package ID.
   *  @else
   *  @brief 获取模块化字幕动画样式包 ID。
   *  @return {String} 返回获取的模块化字幕动画样式资源包ID。
   *  @endif
   */
    getModularCaptionInAnimationPackageId(): string;
    /**
   *  @if ENGLISH
   *  @brief Gets the modular caption out-animation style package ID.
   *  @return {String} Returns the obtained modular caption out-animation style resource package ID.
   *  @else
   *  @brief 获取模块化字幕外动画样式包 ID。
   *  @return {String} 返回获取的模块化字幕外动画样式资源包ID。
   *  @endif
   */
    getModularCaptionOutAnimationPackageId(): string;
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
    applyCaptionStyle(captionStylePackageId: string, isUseDefaultAssetParam: number): boolean;
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
    applyModularCaptionContext(captionContextPackageId: string): boolean;
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
    applyModularCaptionRenderer(captionRendererPackageId: string): boolean;
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
    applyModularCaptionAnimation(captionAnimationPackageId: string): boolean;
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
    applyModularCaptionInAnimation(captionInAnimationPackageId: string): boolean;
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
    applyModularCaptionOutAnimation(captionOutAnimationPackageId: string): boolean;
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
    setModularCaptionAnimationPeriod(periodInMS: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get modular caption Animation Period.
   *  @return {Number} Return animation period in millisecond
   *  @else
   *  @brief 获取模块化字幕动画周期。
   *  @return {Number} 返回动画周期（毫秒）
   *  @endif
   */
    getModularCaptionAnimationPeriod(): number;
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
    setModularCaptionInAnimationDuration(inAnimationDurationInMS: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get modular caption in-animation duration.
   *  @return {Number} Return in-animation duration in millisecond
   *  @else
   *  @brief 获取动画中的模块化字幕持续时间。
   *  @return {Number} 以毫秒为单位返回动画持续时间
   *  @endif
   */
    getModularCaptionInAnimationDuration(): number;
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
    setModularCaptionOutAnimationDuration(outAnimationDurationInMS: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get modular caption out-animation duration.
   *  @return {Number} Return out-animation duration in millisecond
   *  @else
   *  @brief 获取模块化字幕动画持续时间。
   *  @return {Number} 以毫秒为单位返回动画持续时间
   *  @endif
   */
    getModularCaptionOutAnimationDuration(): number;
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
    setText(text: string): void;
    /**
   *  @if ENGLISH
   *  @brief Gets caption text.
   *  @return {String} Returns caption text obtained.
   *  @else
   *  @brief 获取字幕文本。
   *  @return {String} 返回获得的字幕文本。
   *  @endif
   */
    getText(): string;
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
    setTextAlignment(textAlign: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption horizontal alignment style
   *  @return {Number} Returns caption horizontal alignment style.
   *  @else
   *  @brief 获取标题水平对齐样式
   *  @return {Number} 返回标题水平对齐样式。
   *  @endif
   */
    getTextAlignment(): number;
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
    setTextVerticalAlignment(textAlign: number): void;
    /**
   *  @if ENGLISH
   *  @brief Gets caption vertical alignment style, valid for frame-caption only.
   *  @return {Number} Returns caption vertical alignment style.
   *  @else
   *  @brief 获取标题垂直对齐样式，仅对 frame-caption 有效。
   *  @return {Number} 返回标题垂直对齐样式。
   *  @endif
   */
    getTextVerticalAlignment(): number;
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
    setVerticalLayout(verticalLayout: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Gets whether to layout text vertically.
   *  @return {Boolean}
   *  @else
   *  @brief 获取是否垂直布局文本。
   *  @return {Boolean}
   *  @endif
   */
    getVerticalLayout(): boolean;
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
    setBold(bold: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get the caption font bold state
   *  @return {Boolean} Returns the caption font bold state. True means the font is bold, false means the font is not bold.
   *  @else
   *  @brief 获取字幕字体加粗状态
   *  @return {Boolean} 返回字幕字体粗体状态。 true 表示字体是粗体，false 表示字体不是粗体。
   *  @endif
   */
    getBold(): boolean;
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
    setItalic(italic: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption font italic.
   *  @return {Boolean} Returns boolean value. True means it is italic font, false means it is not italic.
   *  @else
   *  @brief 获取标题字体斜体。
   *  @return {Boolean} 返回布尔值。 true 表示它是斜体字体，false 表示它不是斜体。
   *  @endif
   */
    getItalic(): boolean;
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
    setUnderline(underline: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption underline
   *  @return {Boolean} Returns boolean value. True means it is under line, false means it is not.
   *  @else
   *  @brief 获取标题下划线
   *  @return {Boolean} 返回布尔值。 true 表示在线下，false 表示不在线下。
   *  @endif
   */
    getUnderline(): boolean;
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
    setLetterSpacingType(letterSpacingType: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption word spacing type.
   *  @return {Number} return letterSpacingType.
   *  @else
   *  @brief 获取标题字间距类型。
   *  @return {Number} 返回字母SpacingType。
   *  @endif
   */
    getLetterSpacingType(): number;
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
    setLetterSpacing(letterSpacing: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption letter spacing
   *  @return {Number} Returns the float value, the percentage value by default.
   *  @else
   *  @brief 获取标题字母间距
   *  @return {Number} 返回浮点值，默认为百分比值。
   *  @endif
   */
    getLetterSpacing(): number;
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
    setLineSpacing(lineSpacing: any): void;
    /**
   *  @if ENGLISH
   *  @brief Get line spacing
   *  @return {Number} return float value, line spacing is expressed in absolute value.
   *  @else
   *  @brief 获取行距
   *  @return {Number} 返回浮点值，行距以绝对值表示。
   *  @endif
   */
    getLineSpacing(): number;
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
    setWeight(weight: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption weight
   *  @return {Number} Returns the caption weight.
   *  @else
   *  @brief 获取字幕重量
   *  @return {Number} 返回字幕权重。
   *  @endif
   */
    getWeight(): number;
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
    setTextColor(color: NveColor): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption text color
   *  @return {NveColor} Returns the NveColor object representing the color value obtained.
   *  @else
   *  @brief 获取标题文本颜色
   *  @return {NveColor} 返回表示获得的颜色值的 NveColor 对象。
   *  @endif
   */
    getTextColor(): NveColor;
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
    setDrawOutline(drawOutline: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption stroke.
   *  @return {Boolean}
   *  @else
   *  @brief 获取字幕描边。
   *  @return {Boolean}
   *  @endif
   */
    getDrawOutline(): boolean;
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
    setOutlineWidth(outlineWidth: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get the width of the caption stroke.
   *  @return {Number} Returns the width value of the obtained caption stroke.
   *  @else
   *  @brief 获取标题笔画的宽度。
   *  @return {Number} 返回获取的标题笔画的宽度值。
   *  @endif
   */
    getOutlineWidth(): number;
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
    setOutlineColor(color: NveColor): void;
    /**
   *  @if ENGLISH
   *  @brief Get the color of the caption stroke.
   *  @return {NveColor} Returns the NveColor object representing the color of the resulting caption stroke.
   *  @else
   *  @brief 获取标题笔划的颜色。
   *  @return {NveColor} 返回 NveColor 对象，该对象表示生成的标题笔划的颜色。
   *  @endif
   */
    getOutlineColor(): NveColor;
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
    setDrawShadow(drawShadow: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption shadows.
   *  @return {Boolean}
   *  @else
   *  @brief 获取字幕阴影。
   *  @return {Boolean}
   *  @endif
   */
    getDrawShadow(): boolean;
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
    setShadowOffset(offset: NvePointF): void;
    /**
   *  @if ENGLISH
   *  @brief Gets the offset of the current caption shadow.
   *  @return {NvePointF} Returns a NvePointF object representing the caption shadow offset obtained.
   *  @else
   *  @brief 获取当前字幕阴影的偏移量。
   *  @return {NvePointF} 返回一个 NvePointF 对象，表示获得的字幕阴影偏移。
   *  @endif
   */
    getShadowOffset(): NvePointF;
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
    setShadowColor(color: any): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption shadow color
   *  @return {NveColor} Returns the NveColor object representing the caption shadow color value obtained.
   *  @else
   *  @brief 获取字幕阴影颜色
   *  @return {NveColor} 返回表示获得的字幕阴影颜色值的 NveColor 对象。
   *  @endif
   */
    getShadowColor(): NveColor;
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
    setShadowFeather(feather: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get the feathering degree of the caption shadow.
   *  @return {Number} Returns feathering degree
   *  @else
   *  @brief 获取字幕阴影的羽化度。
   *  @return {Number} 返回羽化度
   *  @endif
   */
    getShadowFeather(): number;
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
    setFontSize(fontSize: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption font size.
   *  @return {Number} Returns the obtained caption font size value.
   *  @else
   *  @brief 获取字幕字体大小。
   *  @return {Number} 返回获取的字幕字体大小值。
   *  @endif
   */
    getFontSize(): number;
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
    setFontByFilePath(filePath: string): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption font file path
   *  @return {String} Returns the file path of the caption font.
   *  @else
   *  @brief 获取字幕字体文件路径
   *  @return {String} 返回字幕字体的文件路径。
   *  @endif
   */
    getFontFilePath(): string;
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
    setFontFamily(family: string): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption font family
   *  @return {String} Returns font family of caption.
   *  @else
   *  @brief 获取字体名称
   *  @return {String} 返回字体名称。
   *  @endif
   */
    getFontFamily(): string;
    /**
   *  @if ENGLISH
   *  @brief Get compound caption font family name
   *  @return {String} Returns the compound caption font family name of caption.
   *  @else
   *  @brief 获取字体组合名称
   *  @return {String} 返回字体组合名称。
   *  @endif
   */
    getFontCompoundFamilyName(): string;
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
    setCaptionTranslation(translation: NvePointF): void;
    /**
   *  @if ENGLISH
   *  @brief Get the amount of caption translation.
   *  @return {NvePointF} Returns NvePointF object indicating the amount of caption translation obtained.
   *  @else
   *  @brief 获取字幕平移量。
   *  @return {NvePointF} 返回 NvePointF 对象，指示获得的字幕平移量。
   *  @endif
   */
    getCaptionTranslation(): NvePointF;
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
    translateCaption(translationOffset: NvePointF): void;
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
    setAnchorPoint(anchor: NvePointF): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption anchor.
   *  @return {NvePointF} Returns caption anchor.
   *  @else
   *  @brief 获取字幕锚。
   *  @return {NvePointF} 返回字幕锚。
   *  @endif
   */
    getAnchorPoint(): NvePointF;
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
    setScaleX(scale: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get horizontal scaling factor for caption.
   *  @return {Number} Returns caption horizontal scaling factor.
   *  @else
   *  @brief 获取标题的水平缩放系数。
   *  @return {Number} 返回字幕水平缩放系数。
   *  @endif
   */
    getScaleX(): number;
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
    setScaleY(scale: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get vertical scaling factor for caption.
   *  @return {Number} Returns caption vertical scaling factor.
   *  @else
   *  @brief 获取标题的垂直比例系数。
   *  @return {Number} 返回字幕垂直比例系数。
   *  @endif
   */
    getScaleY(): number;
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
    scaleCaption(scaleFactor: number, anchor: NvePointF): void;
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
    scaleCaption2(scaleFactor: number): void;
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
    setRotationZ(angle: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get rotation angle for caption.
   *  @return {Number} Returns caption rotation angle.
   *  @else
   *  @brief 获取标题的旋转角度。
   *  @return {Number} 返回字幕旋转角度。
   *  @endif
   */
    getRotationZ(): number;
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
    rotateCaption(angle: number, anchor: NvePointF): void;
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
    rotateCaption2(angle: number): void;
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
    getTextBoundingRect(captionActualBoundingRect?: boolean): NveRectF;
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
    getCaptionBoundingVertices(boundingType: number): NveVectorVal<NvePointF>;
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
    setZValue(value: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption Z value.
   *  @return {Number} Returns caption Z value.
   *  @else
   *  @brief 获取标题 Z 值。
   *  @return {Number} 返回标题 Z值。
   *  @endif
   */
    getZValue(): number;
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
    setRecordingUserOperation(recordingUserOperation: boolean): void;
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
    setOpacity(opacity: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get caption opacity.
   *  @return {Number} Return the caption opacity.
   *  @else
   *  @brief 设置字幕不透明度。
   *  @return {Number} 返回标题不透明度。
   *  @endif
   */
    getOpacity(): number;
    /**
   *  @if ENGLISH
   *  @brief Determine if it is a border caption.
   *  @return {Boolean} A return value of true indicates a border caption
   *  @else
   *  @brief 确定它是否是边框标题。
   *  @return {Boolean} 返回值为 true 表示边框标题
   *  @endif
   */
    isFrameCaption(): boolean;
    /**
   *  @if ENGLISH
   *  @brief Determine if caption text color changed.
   *  @return {void}
   *  @else
   *  @brief 确定标题文本颜色是否改变。
   *  @return {void}
   *  @endif
   */
    isTextColorChanged(): void;
    /**
   *  @if ENGLISH
   *  @brief Determines whether the current caption is a modular caption.
   *  @return {Boolean} If returns value is true, it is panorama caption.
   *  @else
   *  @brief 确定当前标题是否为模块化标题。
   *  @return {Boolean} 如果返回值为真，则为全景字幕。
   *  @endif
   */
    isModular(): boolean;
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
    setBackgroundColor(backgroundColor: NveColor): void;
    /**
   *  @if ENGLISH
   *  @brief Get the current text background color value.
   *  @return {NveColor} Returns the NveColor object representing the current background color.
   *  @else
   *  @brief 获取当前文本背景颜色值。
   *  @return {NveColor} 返回表示当前背景颜色的 NveColor 对象。
   *  @endif
   */
    getBackgroundColor(): NveColor;
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
    setBackgroundRadius(radius: number): void;
    /**
   *  @if ENGLISH
   *  @brief Get text background rectangle's corner radius.
   *  @return {Number} Returns corner radius value
   *  @else
   *  @brief 获取文本背景矩形的角半径。
   *  @return {Number} 返回角半径值
   *  @endif
   */
    getBackgroundRadius(): number;
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
    setCurrentKeyFrameTime(time: number): void;
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
    enableSpeed(enable: boolean): void;
    /**
   *  @if ENGLISH
   *  @brief is Enable speed
   *  @return {Boolean}
   *  @else
   *  @brief 是否开启变速
   *  @return {Boolean}
   *  @endif
   */
    isSpeedEnabled(): boolean;
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
    setFrameCaptionMaxFontSize(maxFontSize: number): void;
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
    setTextFrameOriginRect(rect: NveRectF): void;
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
    setTextSpanList(spanList: NveVectorVal<NveCaptionSpan>): void;
    /**
     *  @if ENGLISH
     *  @brief Get layout attributes list of caption
     *  @return {NveVectorVal<NveCaptionSpan>} layout attributes list
     *  @else
     *  @brief 获取字幕layout属性列表
     *  @return {NveVectorVal<NveCaptionSpan>} layout属性列表
     *  @endif
     */
    getTextSpanList(): NveVectorVal<NveCaptionSpan>;
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
declare class NveAnimatedSticker extends NveEffectInstance {
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
    setTranslation(translation: NvePointF): void;
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
    getTranslation(): NvePointF;
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
    translateAnimatedSticker(translationOffset: NvePointF): void;
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
    setScale(scale: number): void;
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
    getScale(): number;
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
    scaleAnimatedSticker(scaleFactor: number, anchor: NvePointF): void;
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
    scaleAnimatedSticker2(scaleFactor: number): void;
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
    setSeperatedScaleX(seperatedScaleX: number): void;
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
    setSeperatedScaleY(seperatedScaleY: number): void;
    /**
   * @if ENGLISH
   * @brief Get separated horizontal scaling factor for animated sticker.
   * @return {Number} Returns animated sticker separated horizontal scaling factor.
   * @else
   * @brief 获取分离式水平缩放因子
   * @return {Number} 返回分离式水平缩放因子
   * @endif
   */
    getSeperatedScaleX(): number;
    /**
   * @if ENGLISH
   * @brief Get separated vertical scaling factor for animated sticker.
   * @return {Number} Returns animated sticker separated vertical scaling factor.
   * @else
   * @brief 获取分离式垂直缩放因子
   * @return {Number} 返回分离式垂直缩放因子
   * @endif
   */
    getSeperatedScaleY(): number;
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
    seperateScaleAnimatedSticker(scaleXFactor: number, scaleYFactor: number, anchor: NvePointF): void;
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
    seperateScaleAnimatedSticker2(scaleXFactor: number, scaleYFactor: number): void;
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
    setRotationZ(angle: number): void;
    /**
   * @if ENGLISH
   * @brief Get the angle at which the animation sticker rotates clockwise along the Z-axis, which is perpendicular to the screen.
   * @return {Number} Return the rotation angle value.
   * @else
   * @brief 获取Z方向旋转
   * @return {Number} 返回旋转角度值。
   * @endif
   */
    getRotationZ(): number;
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
    rotateAnimatedSticker(angle: number, anchor: NvePointF): void;
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
    rotateAnimatedSticker2(angle: number): void;
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
    setHorizontalFlip(flip: boolean): void;
    /**
   * @if ENGLISH
   * @brief Get the horizontal flip state of the animated sticker.
   * @return {Boolean} Return a boolean value indicating a horizontal flip state. True means it flips, false means not.
   * @else
   * @brief 获取水平翻转
   * @return {Boolean} 返回一个布尔值，指示水平翻转状态。 true 表示翻转，false 表示不翻转。
   * @endif
   */
    getHorizontalFlip(): boolean;
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
    setVerticalFlip(flip: boolean): void;
    /**
   * @if ENGLISH
   * @brief Get the vertical flip state of the animated sticker.
   * @return {Boolean} Return a boolean value indicating a vertical flip state. True means it flips, false means not.
   * @else
   * @brief 获取垂直翻转
   * @return {Boolean} 返回一个布尔值，指示垂直翻转状态。 true 表示翻转，false 表示不翻转。
   * @endif
   */
    getVerticalFlip(): boolean;
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
    getBoundingRectangleVertices(): NveVectorVal<NvePointF>;
    /**
   * @if ENGLISH
   * @brief Get animated sticker's package ID.
   * @return {String} Return the animated sticker's package ID.
   * @else
   * @brief 获取动画贴纸包ID
   * @return {String} 返回动画贴纸的包 ID。
   * @endif
   */
    getAnimatedStickerPackageId(): string;
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
    setZValue(value: number): any;
    /**
   * @if ENGLISH
   * @brief Get the sticker Z value.
   * @return {Number} Return sticker Z value.
   * @else
   * @brief 获取Z值
   * @return {Number} 返回贴纸 Z 值。
   * @endif
   */
    getZValue(): number;
    /**
   * @if ENGLISH
   * @brief Check whether the sticker contains audio.
   * @return {Boolean} Return whether the sticker contains audio.
   * @else
   * @brief 是否是音频
   * @return {Boolean} 返回贴纸是否包含音频。
   * @endif
   */
    hasAudio(): boolean;
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
    setVolumeGain(leftVolumeGain: number, rightVolumeGain: number): void;
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
    getVolumeGain(): NveVolume;
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
    setOpacity(opacity: number): void;
    /**
   * @if ENGLISH
   * @brief Get the sticker opacity.
   * @return {Number} Return the sticker opacity.
   * @else
   * @brief 获取不透明度
   * @return {Number} 返回贴纸不透明度。
   * @endif
   */
    getOpacity(): number;
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
    setCurrentKeyFrameTime(time: number): void;
    /**
   * @if ENGLISH
   * @brief Gets the animated sticker period animation style package ID.
   * @return {String} Returns the obtained modular sticker period animation style resource package ID.
   * @else
   * @brief 获取动画贴纸周期动画样式包ID。
   * @return {String} 返回获取到的模块化贴纸周期动画风格资源包ID。
   * @endif
   */
    getAnimatedStickerPeriodAnimationPackageId(): string;
    /**
   * @if ENGLISH
   * @brief Set the sticker's Key frame time
   * @return {String} Returns the obtained modular sticker in-animation style resource package ID.
   * @else
   * @brief 设置贴纸的关键帧时间
   * @return {String} 返回获取到的模块化贴纸入动画风格资源包ID。
   * @endif
   */
    getAnimatedStickerInAnimationPackageId(): string;
    /**
   * @if ENGLISH
   * @brief Set the sticker's Key frame time
   * @return {String} Returns the obtained modular sticker in-animation style resource package ID.
   * @else
   * @brief 获取动画贴纸出动画样式包 ID。
   * @return {String} 返回获得的动画贴纸动画风格的资源包ID。
   * @endif
   */
    getAnimatedStickerOutAnimationPackageId(): string;
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
    applyAnimatedStickerPeriodAnimation(animatedStickerPeriodAnimationPackageId: string): boolean;
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
    applyAnimatedStickerInAnimation(animatedStickerInAnimationPackageId: any): boolean;
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
    applyAnimatedStickerOutAnimation(animatedStickerOutAnimationPackageId: any): boolean;
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
    setAnimatedStickerAnimationPeriod(periodInMS: number): void;
    /**
   * @if ENGLISH
   * @brief Get animated sticker Animation Period.
   * @return {Number} Return animation period in millisecond
   * @else
   * @brief 获取动画贴纸动画时期。
   * @return {Number} 以毫秒为单位返回动画周期
   * @endif
   */
    getAnimatedStickerAnimationPeriod(): number;
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
    setAnimatedStickerInAnimationDuration(inAnimationDurationInMS: number): void;
    /**
   * @if ENGLISH
   * @brief Get animated sticker in-animation duration.
   * @return {Number} Get animated sticker in-animation duration.
   * @else
   * @brief 获取动画贴纸中的入动画持续时间。
   * @return {Number} 获取动画贴纸中的入动画持续时间。
   * @endif
   */
    getAnimatedStickerInAnimationDuration(): number;
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
    setAnimatedStickerOutAnimationDuration(outAnimationDurationInMS: number): void;
    /**
   * @if ENGLISH
   * @brief Get animated sticker out-animation duration.
   * @return {Number} Return out-animation duration in millisecond
   * @else
   * @brief 获取动画贴纸出动画持续时间。
   * @return {Number} 以毫秒为单位返回出动画持续时间
   * @endif
   */
    getAnimatedStickerOutAnimationDuration(): number;
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
declare class NveCompoundCaption extends NveEffectInstance {
    /**
   *  @if ENGLISH
   *  @brief  Get number of sub-cpations in this compound caption.
   *  @return {Number} Returns number of sub-cpations
   *  @else
   *  @brief 获取字幕数量
   *  @return {Number} 返回字幕的数量
   *  @endif
   */
    getCaptionCount(): number;
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
    setText(captionIndex: number, text: string): void;
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
    getText(captionIndex: number): string;
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
    setTextColor(captionIndex: number, color: NveColor): void;
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
    getTextColor(captionIndex: number): NveColor;
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
    setFontFamily(captionIndex: number, family: string): void;
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
    getFontFamily(captionIndex: number): string;
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
    setCaptionTranslation(translation: NvePointF): void;
    /**
   * @if ENGLISH
   * @brief Get the amount of caption translation.
   * @return {NvePointF} Returns NvePointF object indicating the amount of caption translation obtained.
   * @else
   * @brief 获取字幕平移
   * @return {NvePointF} 返回 NvePointF 对象，指示获得的字幕平移量。
   * @endif
   */
    getCaptionTranslation(): NvePointF;
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
    translateCaption(translationOffset: NvePointF): void;
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
    setAnchorPoint(anchor: NvePointF): viod;
    /**
   * @if ENGLISH
   * @brief Get caption anchor.
   * @return {NvePointF} Returns caption anchor.
   * @else
   * @brief 获取锚点
   * @return {NvePointF} 返回字幕锚。
   * @endif
   */
    getAnchorPoint(): NvePointF;
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
    setScaleX(scale: number): void;
    /**
   * @if ENGLISH
   * @brief Get horizontal scaling factor for caption.
   * @return {Number} Returns caption horizontal scaling factor.
   * @else
   * @brief 获取X方向缩放
   * @return {Number} 返回字幕水平缩放系数。
   * @endif
   */
    getScaleX(): number;
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
    setScaleY(scale: number): void;
    /**
   * @if ENGLISH
   * @brief Get vertical scaling factor for captions.
   * @return {Number} Returns caption vertical scaling factor.
   * @else
   * @brief 获取Y方向缩放
   * @return {Number} 返回字幕垂直比例系数。
   * @endif
   */
    getScaleY(): number;
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
    scaleCaption(scaleFactor: number, anchor: NvePointF): void;
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
    scaleCaption2(scaleFactor: number): void;
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
    setRotationZ(angle: number): void;
    /**
   * @if ENGLISH
   * @brief Get the rotation angle for the caption.
   * @return {Number} Returns caption rotation angle.
   * @else
   * @brief 获取Z方向旋转
   * @return {Number} 返回字幕旋转角度。
   * @endif
   */
    getRotationZ(): number;
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
    rotateCaption(angle: number, anchor: NvePointF): void;
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
    rotateCaption2(angle: number): void;
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
    getCaptionBoundingVertices(captionIndex: number, boudingType: any, motionParams: NveMotionParameters): NveVectorVal;
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
    getCompoundBoundingVertices(boudingType: number, motionParams: NveMotionParameters): NveVectorVal;
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
    setZValue(value: number): void;
    /**
   * @if ENGLISH
   * @brief Get caption Z value.
   * @return {Number}
   * @else
   * @brief 获取Z值
   * @return {Number}
   * @endif
   */
    getZValue(): number;
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
    setOpacity(value: number): void;
    /**
   * @if ENGLISH
   * @brief Get caption opacity
   * @return {Number} Return the caption opacity.
   * @else
   * @brief 获取不透明度
   * @return {Number} 返回标题不透明度。
   * @endif
   */
    getOpacity(): number;
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
    isFrameCaption(captionIndex: number): boolean;
    /**
   * @if ENGLISH
   * @brief Get the caption style package ID.
   * @return {String} Returns the obtained caption style resource package ID.
   * @else
   * @brief 获取字幕风格包ID
   * @return {String} 返回获取到的字幕样式资源包ID。
   * @endif
   */
    getCaptionStylePackageId(): string;
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
declare class NveVideoTransition extends NveEffectInstance {
    /**
   * @if ENGLISH
   * @brief Get video transition type.
   * @return {Number} Returns the video transition type.
   * @else
   * @brief 获取视频转场类型
   * @return {Number} 返回视频转换类型。
   * @endif
   */
    getVideoTransitionType(): number;
    /**
   * @if ENGLISH
   * @brief Get built-in video transition name.
   * @return {String} Returns the name of the built-in video transition. If it is not a built-in video transition, it will return a null string.
   * @else
   * @brief 获取内置视频转场名字
   * @return {String} 返回内置视频转换的名称。如果它不是一个内置的视频过渡，它将返回一个空字符串。
   * @endif
   */
    getBuiltinVideoTransitionName(): string;
    /**
   * @if ENGLISH
   * @brief Get the video transition resource package ID.
   * @return {String} Returns the video transition resource package ID. If it is not a resource package video transition, it will return a null string.
   * @else
   * @brief 获取视频转场包ID
   * @return {String} 返回视频转换资源包ID。如果它不是一个资源包视频转换，它将返回一个空字符串。
   * @endif
   */
    getVideoTransitionPackageId(): string;
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
    setVideoTransitionDuration(duration: number): void;
    /**
   * @if ENGLISH
   * @brief Get video transition duration.
   * @return {Number} Returns the video transition duration.
   * @else
   * @brief 获取视频转场持续时间
   * @return {Number} 返回视频转换持续时间。
   * @endif
   */
    getVideoTransitionDuration(): number;
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
declare const NveRenderFlagEnum: Readonly<{
    DontDropFrame: 1;
    OutputImageBitmap: 2;
}>;
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
declare const NveAssetPackageTypeEnum: Readonly<{
    VideoFx: 0;
    VideoTransition: 1;
    CaptionStyle: 2;
    AnimatedSticker: 3;
    CaptureScene: 5;
    ARScene: 6;
    CompoundCaption: 7;
    CaptionContext: 8;
    CaptionRenderer: 9;
    CaptionAnimation: 10;
    CaptionInAnimation: 11;
    CaptionOutAnimation: 12;
    AvatarModel: 14;
    AvatarMaterial: 15;
    AnimatedStickerAnimation: 16;
    AnimatedStickerInAnimation: 17;
    AnimatedStickerOutAnimation: 18;
    Makeup: 19;
    FaceMesh: 20;
    Warp: 21;
}>;
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
declare const NveAssetPackageStatusEnum: Readonly<{
    NotInstalled: 0;
    Installing: 1;
    Ready: 2;
    Upgrading: 3;
}>;
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
declare const NveHumanDetectionFeatureEnum: Readonly<{
    FaceLandmark: 1;
    FaceAction: 2;
    AvatarExpression: 4;
    VideoMode: 8;
    ImageMode: 16;
    SemiImageMode: 32768;
    MultiThread: 32;
    SingleThread: 64;
    Extra: 128;
    SegmentationBackground: 256;
    HandLandmark: 512;
    HandAction: 1024;
    HandBone: 2048;
    EyeballLandmark: 4096;
    MultiDetect: 8192;
    SegmentationSky: 16384;
    SegmentationHalfBody: 65536;
    FaceAttr: 131072;
    FaceAttrShape: 262144;
}>;
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
declare const NveHumanDetectionDataTypeEnum: Readonly<{
    FakeFace: 0;
    Makeup: 1;
    SkinColor: 2;
    PE106: 3;
    PE240: 4;
    CustomAvatar: 5;
    Makeup2: 6;
    FaceCommon: 7;
    AdvancedBeauty: 8;
}>;
/**
 * @if ENGLISH
 * @brief Effect context
   Effect context is the entry to effect SDK framework, nveGetEffectContextInstance() used to get the unique effect context instance.
 * @else
 * @brief 特效上下文
   特效上下文类可视作Effect SDK框架的入口，可以通过nveGetEffectContextInstance()获取全局唯一的实例对象。
 * @endif
 */
declare class NveEffectContext {
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
    verifySdkLicenseFile(licenseFilePath: string): boolean;
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
    verifySdkLicenseFileUrl(licenseFileUrl: string): boolean;
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
    setMaxQueuedRenderTask(maxQueuedRenderTask: number): void;
    /**
     * @if ENGLISH
     * @brief Get maximum of queued render task.
     * @return {Number} Maximum value
     * @else
     * @brief 获取渲染任务队列的最大值
     * @return {Number} 最大值
     * @endif
     */
    getMaxQueuedRenderTask(): number;
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
    createVideoEffect(fxName: string, aspectRatio: string, workingInRealtimeMode?: boolean): NveEffectInstance;
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
    createVideoTransition(fxName: string, aspectRatio: string): NveEffectInstance;
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
    createAnimatedSticker(inPoint: number, duration: number, isPanoramic: boolean, packageId: string, aspectRatio: string): NveEffectInstance;
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
    createCompoundCaption(inPoint: number, duration: number, packageId: string, aspectRatio: string): NveEffectInstance;
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
    createCaption(text: string, inPoint: number, duration: number, isPanoramic: boolean, packageId: string, aspectRatio: string): NveEffectInstance;
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
    createModularCaption(text: string, inPoint: number, duration: number, aspectRatio: string): NveEffectInstance;
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
    renderEffects(effectInstanceArray: NveEffectInstance[], inputImageData: ImageData | VideoFrame, timestampMs: number, flags?: number, hostBufferInfoExtArray?: any[], renderRect?: {}): Promise<any>;
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
    renderEffectsWithMultiInputs(effectInstanceArray: NveEffectInstance[], inputImageDataArray: ImageData[] | VideoFrame[], timestampMs: number, flags?: number, hostBufferInfoExtArray?: any[], renderRect?: {}): Promise<any>;
    inputImageDataArray: any[];
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
    renderEffect(effectInstance: NveEffectInstance, inputImageData: ImageData | VideoFrame, timestampMs: number, flags?: number, hostBufferInfoExtArray?: any[]): Promise<any>;
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
    renderEffectWithMultiInputs(effectInstance: NveEffectInstance, inputImageDataArray: ImageData[] | VideoFrame[], timestampMs: number, flags?: number, hostBufferInfoExtArray?: any[]): Promise<any>;
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
    initHumanDetection(modelFilePath: string, licenseFilePath: string, features: number): boolean;
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
    initHumanDetectionExt(modelFilePath: string, licenseFilePath: string, features: number): boolean;
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
    setupHumanDetectionData(dataType: number, dataFilePath: string): boolean;
    /**
     * @if ENGLISH
     * @brief Close the human detection mechanism.
     * @return {}
     * @else
     * @brief 关闭人体检测
     * @return {}
     * @endif
     */
    closeHumanDetection(): any;
    /**
     * @if ENGLISH
     * @brief Get asset package manager.
     * @return {NveAssetPackageManager} Asset package manager object
     * @else
     * @brief 获取资源包管理器
     * @return {NveAssetPackageManager} 资源包管理器对象
     * @endif
     */
    getAssetPackageManager(): NveAssetPackageManager;
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
    registerFontByFilePath(fontFilePath: string): string;
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
    unregisterFontByFilePath(fontFilePath: string): any;
    inferenceTest(imageFilePath: any, modelFilePath: any, forwardType: any, threadNum: any, loopCount: any, flags: any): any;
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
declare const NveAssetPackageErrorEnum: Readonly<{
    NoError: 0;
    NameError: 1;
    AlreadyInstalledError: 2;
    WorkingInProgress: 3;
    NotInstalledError: 4;
    ImproperStatusError: 5;
    DecompressionError: 6;
    InvalidPackageError: 7;
    AssetTypeError: 8;
    PermissionError: 9;
    MetaContentError: 10;
    SdkVersionError: 11;
    UpgradeVersionError: 12;
    IOError: 13;
    ResourceError: 14;
}>;
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
declare class NveAssetPackageManager {
    internalObj: number;
    onFinishAssetPackageInstallation: (assetPackageId: any, assetPackageFilePath: any, assetPackageType: any, error: any) => void;
    onFinishTemplatePackageGenerate: (assetPackageFilePath: any, error: any) => void;
    /**
     * @if ENGLISH
     * @brief Set internal object
     * @param {Object} obj Internal object
     * @else
     * @brief 设置内置对象
     * @param {Object} obj 内置对象
     * @endif
     */
    setInternalObject(obj: any): void;
    /**
     * @if ENGLISH
     * @brief Get internal object
     * @return {Object}
     * @else
     * @brief 获取内置对象
     * @return {Object}
     * @endif
     */
    getInternalObject(): any;
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
    installAssetPackage(assetPackageFilePath: string, licenseFilePath: string, type: number): any;
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
    uninstallAssetPackage(assetPackageId: string, type: number): number;
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
    getAssetPackageStatus(assetPackageId: string, type: number): number;
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
    getAssetPackageContentType(assetPackageId: string, type: number): string;
}
/**
 * @if ENGLISH
 * @brief ARScene manipulate.
 * @else
 * @brief ARScene 操作。
 * @endif
 */
declare class NveARSceneManipulate {
    contextInterface: number;
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
    setDetectionMode(mode: any): any;
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
declare class NveARSceneRenderer {
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
    init(config: any): Promise<any>;
    config: any;
    indexedDBName: string;
    sceneWidth: number;
    sceneHeight: number;
    beautyEnabled: any;
    effectInstanceArray: any[];
    effectInstanceArrayInZip: any[];
    needReleaseFSFileList: any[];
    compoundMakeupsPreloadedList: any[];
    ensureIndexedDBObject(db: any, name: any): void;
    ensureIndexedDBObjects(db: any): void;
    prepareIndexedDB(name: any, version: any): Promise<any>;
    findFromIndexedDB(name: any, key: any, version: any): Promise<any>;
    /**
     * @if ENGLISH
     * @brief Clear cache on IndexedDB.
     * @return {Promise}
     * @else
     * @brief 清除IndexedDB的缓存数据
     * @return {Promise}
     * @endif
     */
    clearCacheOnIndexedDB(): Promise<any>;
    /**
     * @if ENGLISH
     * @brief Release ARScene renderer, it will stop camera if camera started.
     * @else
     * @brief 释放ARScene内建特效的渲染类，如果启动了摄像头媒体流采集，会同时停止摄像头媒体流采集。
     * @endif
     */
    release(): void;
    fpsInterval: NodeJS.Timeout;
    lastDate: Date;
    fps: number;
    captureInterval: any;
    outputStream: MediaStream;
    canvas: HTMLCanvasElement;
    dummyCanvas: any;
    videoElement: HTMLVideoElement;
    externalEffectInstanceList: any;
    renderTimestampOffsetMs: number;
    fetchAndWrite(url: any, filePath: any, lic?: boolean): Promise<void>;
    calculatePositionByVertices(position: any, vertices: any): NvePointF;
    applyEffect(assetUuid: any, effect: any, assetType: any): NveEffectInstance;
    /**
     * @if ENGLISH
     * @brief Preload effect package.
     * @param {} effect effect object
     * @else
     * @brief 预加载特效包资源
     * @param {} effect 特效包对象
     * @endif
     */
    preloadEffect(effect: any): Promise<any>;
    installAndApplyEffect(effect: any): Promise<any>;
    installPackageInZip(zipEntry: any, zipPackageDir: any, fileName: any, files: any): Promise<any>;
    applyEffectsInZip(effect: any): Promise<void>;
    zipInfoJson: any;
    zipPackageDir: string;
    setParams(params: any): void;
    clearEffectInstanceArray(): void;
    clearEffectInstanceArrayInZip(): void;
    clearEffects(): void;
    effectInstance: NveEffectInstance;
    segmentationEffectInstance: NveEffectInstance;
    resetEffects(): Promise<void>;
    effectList: any;
    applyEffects(): Promise<void>;
    /**
     * @if ENGLISH
     * @brief Enable beauty effect or not.
     * @param {} enable enable
     * @else
     * @brief 是否开启美颜
     * @param {} enable 是否开启
     * @endif
     */
    enableBeauty(enable: any): void;
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
    setEffectList(effectList: any): Promise<any>;
    /**
     * @if ENGLISH
     * @brief Get effect list has been set.
     * @return {} effect list
     * @else
     * @brief 获取已经设置的特效列表
     * @return {} 已经设置的特效列表
     * @endif
     */
    getEffectList(): any;
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
    appendEffectList(effectList: any): Promise<any>;
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
    render(inputImageData: ImageData | VideoFrame, timestampMs: number, renderRect?: {}): Promise<any>;
    createDummyVideoElement(mediaStream: any): void;
    renderEffectAndCreateOutputStream(inputImageData: any, renderRect: any): Promise<void>;
    /**
     * @if ENGLISH
     * @brief Push media stream.
     * @param {} mediaStream media stream
     * @else
     * @brief 推入媒体流
     * @param {} mediaStream 媒体流
     * @endif
     */
    pushMediaStream(mediaStream: any): void;
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
    startupCamera(constraints: any): Promise<any>;
    cameraStream: MediaStream;
    /**
     * @if ENGLISH
     * @brief Stop camera.
     * @else
     * @brief 停止摄像头
     * @endif
     */
    stopCamera(): void;
    /**
     * @if ENGLISH
     * @brief Get output stream.
     * @return {MediaStream} a MediaStream object
     * @else
     * @brief 获取输出媒体流
     * @return {MediaStream} MediaStream对象
     * @endif
     */
    getOutputStream(): MediaStream;
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
    createExternalEffectInstance(effect: any): Promise<any>;
    /**
     * @if ENGLISH
     * @brief Set external effect instance list.
     * @param {} effectInstanceList External effect instance list
     * @else
     * @brief 设置外部特效实例列表
     * @param {} effectInstanceList 外部特效实例列表
     * @endif
     */
    setExternalEffectInstanceList(effectInstanceList: any): void;
    /**
     * @if ENGLISH
     * @brief Get external effect instance list.
     * @return {NveEffectInstance[]} External effect instance list
     * @else
     * @brief 获取外部特效实例列表
     * @return {NveEffectInstance[]} 外部特效实例列表
     * @endif
     */
    getExternalEffectInstanceList(): NveEffectInstance[];
    /**
     * @if ENGLISH
     * @brief Append external effect instance list.
     * @param {} effectInstance External effect instance
     * @else
     * @brief 追加外部特效实例
     * @param {} effectInstance 外部特效实例
     * @endif
     */
    appendExternalEffectInstance(effectInstance: any): void;
}
//# sourceMappingURL=effectSdk.d.ts.map