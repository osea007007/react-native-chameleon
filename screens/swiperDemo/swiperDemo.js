import React, {Component} from 'react';
import {ScrollView, Text, View} from "react-native";
import {DemoList} from "../component/DemoList";
import {Swiper} from "../../components/swiper";

class SwiperDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderFundItem({item, index}) {
        return (
            <View style={{backgroundColor: item.backgroundColor, height: 100, justifyContent: 'center'}}>
                <Text style={{textAlign: 'center'}}>{item.backgroundColor}</Text>
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                <DemoList title={'default'}>
                    <Swiper data={[{backgroundColor: 'pink'}, {backgroundColor: 'red'}, {backgroundColor: 'blue'}]}
                            renderItem={this.renderFundItem}
                            ref={(component) => this.swiper = component}
                    />
                </DemoList>
                <DemoList title={'转发ref 点击第一个轮播轮播至下标2(蓝色)'}>
                    <Text style={{fontSize: 30}} onPress={() => {
                        this.swiper.snapToItem(2)
                    }}>点我啊</Text>
                </DemoList>
                <DemoList title={'offset\noffset（默认40，可修改）\nshowPagination(默认true，可修改)'}>
                    <Swiper type={'offset'}
                            data={[{backgroundColor: 'pink'}, {backgroundColor: 'red'}, {backgroundColor: 'blue'}]}
                            renderItem={this.renderFundItem}
                            offset={200}
                    />
                </DemoList>
                <DemoList title={'none\nsliderWidth,itemWidth必填'}>
                    <Swiper type={'none'}
                            data={[{backgroundColor: 'pink'}, {backgroundColor: 'red'}, {backgroundColor: 'blue'}]}
                            renderItem={this.renderFundItem}
                            sliderWidth={123}
                            itemWidth={123}
                    />
                </DemoList>
                <DemoList title={'自定义pagination'}>
                    <Swiper type={'none'}
                            data={[{backgroundColor: 'pink'}, {backgroundColor: 'red'}, {backgroundColor: 'blue'}]}
                            renderItem={this.renderFundItem}
                            sliderWidth={375}
                            itemWidth={375}
                            pagination={(data, activeDotIndex) => <CustomPagination data={data}
                                                                                    activeDotIndex={activeDotIndex}
                            />}
                    />
                </DemoList>
            </ScrollView>
        );
    }
}

function CustomPagination({data, activeDotIndex}) {
    return (
        <Swiper.Pagination
            dotsLength={data.length}
            activeDotIndex={activeDotIndex}
            containerStyle={{
                paddingVertical: 12,
                position: 'absolute',
                width: '100%',
                bottom: 0
            }}
            dotColor={'#f37ce9'}
            dotStyle={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: '#f37ce9'
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

export default SwiperDemo;