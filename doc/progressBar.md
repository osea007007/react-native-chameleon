

##### props参数：

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**borderColor** | `String` | `'#dddddd'` | false | 进度条外边框的颜色
**borderRadius** | `Number` | `4` | false | 两端圆角值，默认4
**borderWidth** | `Number` | `1` | false | 外边框的宽度，设置0外边线消失
**color** | `String` | `'#364682'` | false | 加载中的进度条颜色
**height** | `Number` | `6` | false | 容器高
**onEnd** | `Function` | `() => { }` | false | 加载完成动画结束回调
**progress** | `Number` | `0` | false | 当前加载完成的进度数值
**style** | `*` |  | false | 容器样式
**totalValue** | `Number` | `1` | false | 总进度数值，默认为1
**unfilledColor** | `String` | `'#dddddd'` | false | 剩余进度的颜色
**useNativeDriver** | `Boolean` | `false` | false | 是否使用本机驱动程序进行动画制作
**width** | `Number` | `150` | false | 容器宽



