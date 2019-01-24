---
page: switch
---


开关按钮，支持ios和android原生switch，支持ios和android使用相同样式的switch

##### props参数：

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**disabled** | `Boolean` | `false` | false | 是否禁用switch按钮
**onChange** | `Function` |  | false | 在switch 按钮状态值发生改变时调用
**thumbColor** | `Shape` | `{     false:'#f1f1f1',     true:'#ee9922' }` | false | 【android】switch 按钮在打开和关闭时圆圈的颜色
**thumbColor.false** | `String` |  | false | 关闭时圆圈的颜色
**thumbColor.true** | `String` |  | false | 打开时圆圈的颜色
**trackColor** | `Shape` | `{     false:'#d7d7d7',     true:'#F1AD88', }` | false | switch 按钮在打开和关闭时的背景色
**trackColor.false** | `String` |  | false | 关闭时的背景色
**trackColor.true** | `String` |  | false | 打开时的背景色
**useNative** | `Boolean` | `false` | false | 是否使用android和ios原生switch组件, 为true时ios上的switch圆圈无法修改颜色，总是为白色
**value** | `Boolean` |  | false | 指定switch的状态



