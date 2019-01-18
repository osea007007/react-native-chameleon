

##### props参数：

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**color** | `String` | `'#364682'` | false | 加载中的进度条颜色
**direction** | `Enum('clockwise','counter-clockwise')` | `'clockwise'` | false | 圆的方向clockwise或counter-clockwise
**duration** | `Number` | `3000` | false | 完整一次加载完成所需时间
**fill** | `String` |  | false | 填充内圈的颜色
**formatText** | `Function` | `progress => `${Math.round(progress * 100)}%`` | false | 百分数换算方法
**height** | `Number` | `200` | false | 容器高
**onEnd** | `Function` | `()=>{}` | false | 加载完成动画结束回调
**progress** | `Number` | `0` | false | 当前加载完成的进度数值
**showsText** | `Boolean` | `false` | false | 是否显示内部文字
**strokeCap** | `Enum('butt','square','round')` | `'round'` | false | 填充圆环的首尾样式
**textStyle** | `*` |  | false | 文字样式
**thickness** | `Number` | `3` | false | 描边宽度，就是指圆环的宽度
**totalValue** | `Number` | `1` | false | 总进度数值，默认为1
**unfilledColor** | `String` | `'#dddddd'` | false | 剩余进度的颜色
**useNativeDriver** | `Boolean` | `false` | false | 是否使用本机驱动程序进行动画制作
**width** | `Number` | `200` | false | 容器宽



