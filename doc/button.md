---
page: button


* 支持通常使用的button
* 支持原型的button 使用场景 header右侧的分享按钮 或 文字

---

##### props参数：

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**cBackgroundColor** | `String` | `'gray'` | false | 【type=circle】，设置backgroundColor
**cComponent** | `*` |  | false | 【type=circle】，内容区域可以使用组件填充
**cContainerSize** | `Number` | `50` | false | 【type=circle】，设置容器的大小
**cIconProps** | `*` |  | false | 【type=circle】，设置icon的props参考 @xzchameleon/icon API
**cText** | `String` |  | false | 【type=circle】，设置文字
**cTextStyle** | `*` |  | false | 【type=circle】，设置文字的样式。
**containerStyle** | `Object` |  | false | 设置按钮容器样式
**onPress** | `Function` |  | false | 设置按钮点击事件
**size** | `Enum('large','middle','small')` | `'middle'` | false | 指定按钮的大小
**textStyle** | `Object` |  | false | 设置按钮文字样式
**title** | `String` | `'按钮'` | false | 按钮上显示的文字
**touchableProps** | `*` |  | false | 含有Touchable组件props的对象
**type** | `Enum('default','circle')` | `'default'` | false | 指定按钮的类型



