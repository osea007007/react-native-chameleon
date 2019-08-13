import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import {DemoList} from "../component/DemoList";
import {List} from "../../components/list";

class ListDemo extends Component {
    render() {
        return (
            <ScrollView>
                <DemoList title={'状态1'}>
                    <List leftText={'左边文字'}/>
                </DemoList>
                <DemoList title={'状态2'}>
                    <List leftIcon={{}} leftText={'左边文字'}/>
                </DemoList>
                <DemoList title={'状态3'}>
                    <List leftIcon={<Image source={require('../../assets/images/Line_icon.png')}/>} leftText={'左边文字'} rightIcon={{}} onPress={() => {
                        alert(1)
                    }}/>
                </DemoList>
                <DemoList title={'状态4'}>
                    <List leftIcon={{}} leftText={'左边文字'} rightIcon={{}} rightText={'右边文字'} onPress={() => {
                        alert(1)
                    }}/>
                </DemoList>
                <DemoList title={'使用自定义组件'}>
                    <List leftComponent={<LeftComponent/>} rightIcon={<RightComponent/>}/>
                </DemoList>
                <DemoList title={'禁用点击事件'}>
                    <List leftText={'左边文字'} rightIcon={{}} disable={true} onPress={() => {
                        alert(1)
                    }}/>
                </DemoList>
            </ScrollView>
        );
    }
}

function LeftComponent() {
    return (
        <View>
            <Text>左边</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
        </View>
    )
}

function RightComponent() {
    return (
        <View>
            <Text>右边</Text>
            <Text>123</Text>
        </View>
    )
}

export default ListDemo;