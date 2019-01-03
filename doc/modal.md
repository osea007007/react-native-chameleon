---
page: modal
---

 * 支持react native modal 除visible外的所有属性  
 * 支持自定义背景色（默认 rgba(0,0,0,.4) ）
 * 修改react native modal 默认的slide动画
 * 默认模态框内容区域背景色为白色
 * 默认点击空白区域关闭模态框

##### props参数：

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**androidEnableBackCloseModal** | `Boolean` | `true` | false | 是否允许android返回按钮关闭模态框
**backgroundColor** | `String` | `'rgba(0,0,0,.4)'` | false | 设置空白区域背景色
**enableBlankPressCloseModal** | `Boolean` | `true` | false | 是否允许点击空白区域关闭模态框



