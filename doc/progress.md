---
page: progress
---

 * 支持3中样式的进度条
 * 支持自定义背景色（默认 #dddddd ）
 * 提供function 用来关闭动画和隐藏进度条
 * line（线条形） circle（圆形） halfCircle（半圆形）
 *

##### props参数：

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**borderColor** | `String` |  | false | 进度条外边框的颜色
**borderRadius** | `Number` |  | false | 两端圆角值，默认4
**borderWidth** | `Number` |  | false | 外边线的宽度，设置0外边线消失
**children** | `ReactNode` |  | false | 
**color** | `String` |  | false | 加载中的进度条颜色
**direction** | `Enum('clockwise','counter-clockwise')` |  | false | 圆的方向clockwise或counter-clockwise
**duration** | `Number` |  | false | 完整一次加载完成所需时间
**fill** | `String` |  | false | 填充内圈的颜色
**formatText** | `Function` |  | false | 百分数换算方法
**height** | `Number` |  | false | 容器高度
**proType** | `Enum('line','circle','halfCircle')` | `'line'` | false | 进度条样式选择
**progress** | `Number` |  | false | 当前加载完成的进度数值
**showsText** | `Boolean` |  | false | 是否显示内部文字
**strokeCap** | `Enum('butt','square','round')` |  | false | 填充圆环的首尾样式
**style** | `*` |  | false | 容器样式
**textStyle** | `*` |  | false | 文字样式
**thickness** | `Number` |  | false | 描边宽度，就是指圆环的宽度
**totalValue** | `Number` |  | false | 总进度数值，默认为1
**unfilledColor** | `String` |  | false | 剩余进度的颜色
**useNativeDriver** | `Boolean` |  | false | 描边宽度，就是指圆环的宽度
**width** | `Number` |  | false | 容器宽度



