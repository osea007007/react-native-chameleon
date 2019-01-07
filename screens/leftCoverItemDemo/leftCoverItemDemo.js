import React, {Component} from 'react';
import {ScrollView, Alert} from "react-native";
import {DemoList} from "../component/DemoList";
import LeftCoverItem from "../../components/leftCoverItem";


class LeftCoverItemDemo extends Component {
    render() {
        return (
            <ScrollView>
                <DemoList title={'未设置高度,默认高度'}>
                    <LeftCoverItem
                        defaultSource={require('../../components/leftCoverItem/assets/image/placeholder_img.png')}
                        source={require('../../components/leftCoverItem/assets/image/placeholder_img.png')}
                        title={'今天是个好天气啊好天气啊好天气啊好天气啊'}
                        describe={'2019-01-01'}
                    />
                </DemoList>

                <DemoList title={'设置高度120'}>
                    <LeftCoverItem
                        height={120}
                        defaultSource={require('../../components/leftCoverItem/assets/image/placeholder_img.png')}
                        source={require('../../components/leftCoverItem/assets/image/placeholder_img.png')}
                        title={'今天是个好天气啊好天气啊好天气啊好天气啊'}
                        describe={'2019-01-01'}
                    />
                </DemoList>

                <DemoList title={'设置封面图片'}>
                    <LeftCoverItem
                        height={120}
                        defaultSource={require('../../components/leftCoverItem/assets/image/placeholder_img.png')}
                        source={require('../../components/leftCoverItem/assets/image/cover.png')}
                        title={'今天是个好天气啊好天气啊好天气啊好天气啊'}
                        describe={'2019-01-01'}
                    />
                </DemoList>

                <DemoList title={'设置标题和描述'}>
                    <LeftCoverItem
                        height={120}
                        defaultSource={require('../../components/leftCoverItem/assets/image/placeholder_img.png')}
                        source={require('../../components/leftCoverItem/assets/image/cover.png')}
                        title={'这里是标题'}
                        describe={'这里是描述 2019-01-01'}
                    />
                </DemoList>

                <DemoList title={'设置标题和描述样式'}>
                    <LeftCoverItem
                        height={120}
                        defaultSource={require('../../components/leftCoverItem/assets/image/placeholder_img.png')}
                        source={require('../../components/leftCoverItem/assets/image/cover.png')}
                        title={'这里是标题'}
                        titleStyle={{color:'red', fontSize:10}}
                        describe={'这里是描述 2019-01-01'}
                        describeStyle={{color:'green'}}
                    />
                </DemoList>

                <DemoList title={'设置内容部分样式'}>
                    <LeftCoverItem
                        height={120}
                        defaultSource={require('../../components/leftCoverItem/assets/image/placeholder_img.png')}
                        source={require('../../components/leftCoverItem/assets/image/cover.png')}
                        contentStyle={{backgroundColor:'orange'}}
                        title={'这里是标题'}
                        titleStyle={{color:'red', fontSize:10}}
                        describe={'这里是描述 2019-01-01'}
                        describeStyle={{color:'green'}}
                    />
                </DemoList>

                <DemoList title={'设置点击事件'}>
                    <LeftCoverItem
                        height={120}
                        defaultSource={require('../../components/leftCoverItem/assets/image/placeholder_img.png')}
                        source={require('../../components/leftCoverItem/assets/image/cover.png')}
                        contentStyle={{backgroundColor:'orange'}}
                        title={'这里是标题'}
                        titleStyle={{color:'red', fontSize:10}}
                        describe={'这里是描述 2019-01-01'}
                        describeStyle={{color:'green'}}
                        onPress={() => Alert.alert('title','press')}
                    />
                </DemoList>

            </ScrollView>
        );
    }
}

export default LeftCoverItemDemo;