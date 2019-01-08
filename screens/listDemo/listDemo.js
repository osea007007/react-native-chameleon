import React, {Component} from 'react';
import {ScrollView, Text, View} from "react-native";
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
                    <List leftIcon={'book'} leftText={'左边文字'}/>
                </DemoList>
                <DemoList title={'状态3'}>
                    <List leftIcon={'book'} leftText={'左边文字'} rightIcon={'right'} onPress={() => {
                        alert(1)
                    }}/>
                </DemoList>
                <DemoList title={'状态4'}>
                    <List leftIcon={'book'} leftText={'左边文字'} rightIcon={'right'} rightText={'右边文字'} onPress={() => {
                        alert(1)
                    }}/>
                </DemoList>
                <DemoList title={'使用自定义组件'}>
                    <List leftComponent={() => <LeftComponent/>} rightComponent={() => <RightComponent/>}/>
                </DemoList>
                <DemoList title={'禁用点击事件'}>
                    <List leftText={'左边文字'} rightIcon={'right'} disable={true} onPress={() => {
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