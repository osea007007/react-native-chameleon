---
page: progress
---

 * 支持3中样式的进度条
 * 支持自定义背景色（默认 #dddddd ）
 * 提供function 用来关闭动画和隐藏进度条
 * line（线条形） circle（圆形） halfCircle（半圆形）

##### props参数：

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**animated** | `Boolean` | `true` | false | 是否进行动画
**borderColor** | `String` | `'#dddddd'` | false | type='line'时 外边框的颜色
**borderRadius** | `Number` | `4` | false | type='line'时 两端圆角值，默认4
**borderWidth** | `Number` | `0` | false | type='line'时 外边线的宽度，设置0外边线消失
**children** | `ReactNode` |  | false | 内部子组件
**color** | `String` | `'#364682'` | false | 加载中的进度条颜色
**direction** | `Enum('clockwise','counter-clockwise')` | `'clockwise'` | false | 圆的方向clockwise或counter-clockwise
**duration** | `Number` | `3000` | false | 调整动画速度
**height** | `Number` | `100` | false | 容器高度，type='line'时为进度条高度，否则取Math.min(容器宽，容器高)为圆直径
**loadStart** | `Function` |  | false | 加载开启回调
**loadStop** | `Function` |  | false | 加载结束回调
**offsetRotate** | `Number` | `120` | false | 圆环缺口角度，满值360，默认120
**onEnd** | `Function` | `() => { }` | false | 加载完成回调
**progress** | `Number` | `0` | false | 当前加载完成的进度数值
**strokeCap** | `Enum('butt','square','round')` | `'butt'` | false | 填充圆环的首尾样式
**thickness** | `Number` | `3` | false | 描边宽度，就是指圆环的宽度
**totalValue** | `Number` | `1` | false | 总进度数值，默认为1
**type** | `Enum('line','circle','halfCircle')` | `'line'` | false | 进度条样式选择
**unfilledColor** | `String` | `'#dddddd'` | false | 剩余进度的颜色
**useNativeDriver** | `Boolean` | `true` | false | 是否使用本机驱动程序来制作动画
**width** | `Number` | `100` | false | 容器宽度，type='line'时为进度条长度，否则取Math.min(容器宽，容器高)为圆直径



