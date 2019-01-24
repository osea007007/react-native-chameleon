---
page: swiper
---


[类型]默认轮播图default，露边轮播图offset，自定义轮播图none(无分页 sliderWidth,itemWidth 必填)
##### props参数：

 prop | type | default | required | description
 ---- | :----: | :-------: | :--------: | -----------
*data** | `Array` |  | true | 轮播数据
*itemWidth** | `Number` |  | false | 主体宽度
*offset** | `Number` |  | false | 露边宽度
*pagination** | `Function` |  | false | 分页pagination(data, activeDotIndex) [参考react-native-snap-carousel pagination]
*renderItem** | `Function` |  | true | 渲染函数
*showPagination** | `Boolean` | `true` | false | 是否显示分页
*sliderWidth** | `Number` |  | false | 容器宽度
*type** | `String` |  | false | 轮播图类型 enum（'default','offset','none' ）

##### props参数：

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------



