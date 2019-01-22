import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Carousel from "react-native-snap-carousel/src/carousel/Carousel";
import {Dimensions, View} from "react-native";
import Pagination from "react-native-snap-carousel/src/pagination/Pagination";

/**
 * ---
 * page: swiper
 * ---
 *
 *
 * [类型]默认轮播图default，露边轮播图offset，自定义轮播图none(无分页 sliderWidth,itemWidth 必填)
 *##### props参数：

 prop | type | default | required | description
 ---- | :----: | :-------: | :--------: | -----------
 **data** | `Array` |  | true | 轮播数据
 **itemWidth** | `Number` |  | false | 主体宽度
 **offset** | `Number` |  | false | 露边宽度
 **pagination** | `Function` |  | false | 分页pagination(data, activeDotIndex) [参考react-native-snap-carousel pagination]
 **renderItem** | `Function` |  | true | 渲染函数
 **showPagination** | `Boolean` | `true` | false | 是否显示分页
 **sliderWidth** | `Number` |  | false | 容器宽度
 **type** | `String` |  | false | 轮播图类型 enum（'default','offset','none' ）
 *
 *
 *
 */
export const Swiper = React.forwardRef((props, ref) => {
    return (
        <SwiperContent swiperRef={ref} {...props}/>
    )
});

Swiper.Pagination = Pagination;

class SwiperContent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0
        }
    }

    onSnapToItem = (activeIndex) => {
        this.setState({
            activeIndex
        }, () => {
            this.props.onSnapToItem && this.props.onSnapToItem(activeIndex);
        })
    };

    render() {
        let {swiperRef, type, data, renderItem, pagination, showPagination, offset, ...otherProps} = this.props;
        let config = getConfig(type, offset);
        return (
            <View style={{position: 'relative'}}>
                <Carousel {...config}
                          {...otherProps}
                          ref={swiperRef}
                          data={data}
                          renderItem={renderItem}
                          onSnapToItem={this.onSnapToItem}
                />
                {
                    (type !== 'none' && !pagination && showPagination) &&
                    <SwiperPagination data={data} active={this.state.activeIndex}/>
                }
                {
                    (pagination && showPagination) && pagination(data, this.state.activeIndex)
                }
            </View>
        )
    }
}

const width = Dimensions.get('window').width;

function getConfig(type, offset = 80) {
    let config;
    if (type === undefined) {
        config = {
            loop: true,
            autoplay: true,
            sliderWidth: width,
            itemWidth: width,
            inactiveSlideScale: 1,
            inactiveSlideOpacity: 1,
            autoplayInterval: 5000,
        };
    } else if (type === 'offset') {
        config = {
            removeClippedSubviews: false,
            sliderWidth: width,
            itemWidth: width - offset / 2,
            inactiveSlideScale: 1,
            inactiveSlideOpacity: 1,
        }
    } else if (type === 'none') {
        return
    }
    return config;
}

function SwiperPagination({data, active}) {
    return (
        <Pagination
            dotsLength={data.length}
            activeDotIndex={active}
            containerStyle={{
                paddingVertical: 12,
                position: 'absolute',
                width: '100%',
                bottom: 0
            }}
            dotColor={'#4768f3'}
            dotStyle={{
                width: 14,
                height: 6,
                borderRadius: 3,
                backgroundColor: '#4768f3'
            }}
            inactiveDotStyle={{
                width: 6,
                height: 6,
                borderRadius: 3,
            }}
            dotContainerStyle={{marginHorizontal: 2.5}}
            inactiveDotColor={'#ffffff'}
            inactiveDotOpacity={1}
            inactiveDotScale={1}
        />
    )
}

Swiper.defaultProps = {
    showPagination: true,
};

Swiper.propTypes = {
    /**
     * 轮播图类型 enum（'default','offset','none' ）
     */
    type: PropTypes.string,
    /**
     * 轮播数据
     */
    data: PropTypes.array.isRequired,
    /**
     * 渲染函数
     */
    renderItem: PropTypes.func.isRequired,
    /**
     * 分页pagination(data, activeDotIndex) [参考react-native-snap-carousel pagination]
     */
    pagination: PropTypes.func,
    /**
     * 是否显示分页
     */
    showPagination: PropTypes.bool,
    /**
     * 容器宽度
     */
    sliderWidth: PropTypes.number,
    /**
     * 主体宽度
     */
    itemWidth: PropTypes.number,
    /**
     * 露边宽度
     */
    offset: PropTypes.number,
    ...Carousel.propTypes
};

