---
page: touchable
---


使用统一的组件设定点击效果

##### props参数：

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**activeOpacity** | `Number` |  | false | touchComponent 为 TOUCHABLE_TYPES.HIGHLIGHT 该默认值为0.85， 为 TOUCHABLE_TYPES.OPACITY 时， 该默认值为 0.3
**borderless** | `Boolean` | `false` | false | 仅在android上，且点击效果为FEEDBACK:TouchableNativeFeedback时有效。设置feedback是否向外扩散
**ripple** | `String` | `'rgba(0,0,0,.4)'` | false | 仅在android上，且点击效果为FEEDBACK:TouchableNativeFeedback时有效
**style** | `Object` |  | false | 设置touchable组件样式，例如背景色等
**touchComponent** | `*` |  | false | 设置点击效果，参考react native 官方文档 参数必须为 HIGHLIGHT:TouchableHighlight,FEEDBACK:TouchableNativeFeedback,WITHOUT_FEEDBACK:TouchableWithoutFeedback,OPACITY:TouchableOpacity中的一个



