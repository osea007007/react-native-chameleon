

##### props参数：

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**children** | `ReactNode` |  | false | 
**circleWidth** | `Unknown` | `10` | false | 
**color** | `String` | `'#364682'` | false | 加载中的进度条颜色
**duration** | `Number` |  | false | 完整一次加载完成所需时间
**formatText** | `Function` | `progress => `${Math.round(progress * 100)}`` | false | 分数换算方法
**height** | `Number` | `200` | false | 容器高
**offsetRotate** | `Unknown` | `120` | false | 
**onEnd** | `Function` | `() => { }` | false | 加载完成动画结束回调
**progress** | `Number` |  | false | 当前加载完成的进度数值
**score** | `Unknown` | `0.1` | false | 
**showsText** | `Boolean` | `false` | false | 是否显示内部文字
**textStyle** | `*` | `{     color: 'white',     fontSize: 70 }` | false | 文字样式
**thickness** | `Number` |  | false | 描边宽度，就是指圆环的宽度
**titleStyle** | `*` | `{fontSize: 14}` | false | 头部文字样式
**titleText** | `String` | `'组合评分'` | false | 进度内部头部文字
**totalValue** | `Number` | `1` | false | 总进度值，默认1
**unfilledColor** | `String` | `'#dddddd'` | false | 剩余进度的颜色
**useNativeDriver** | `Boolean` |  | false | 是否使用本机驱动程序进行动画制作
**width** | `Number` | `200` | false | 容器宽



