import React,{ Component } from 'react';
import {ScrollView, Text, View} from "react-native";
import {DemoList} from "../component/DemoList";
import {Touchable, TOUCHABLE_TYPES} from "../../components/touchable";
import {ListItem} from "../component/ListItem";

class TouchableDemo extends Component{
    static navigationOptions = {
        title:'TouchableDemo'
    };
    render() {
        return (
            <ScrollView>
                <DemoList title={'原生点击效果'}>
                    <Touchable onPress={() => {}}>
                        <View style={{ height:50, justifyContent:'center', paddingHorizontal:15,  backgroundColor:'white' }}>
                            <Text>点击测试</Text>
                        </View>
                    </Touchable>
                </DemoList>

                <DemoList title={'透明度点击效果'}>
                    <Touchable touchComponent={TOUCHABLE_TYPES.OPACITY} onPress={() => {}}>
                        <View style={{ height:50, justifyContent:'center',  paddingHorizontal:10, backgroundColor:'white' }}>
                            <Text>点击测试</Text>
                        </View>
                    </Touchable>
                </DemoList>

                <DemoList title={'无点击效果'}>
                    <Touchable touchComponent={TOUCHABLE_TYPES.WITHOUT_FEEDBACK} onPress={() => {}}>
                        <View style={{ height:50, justifyContent:'center',  paddingHorizontal:10, backgroundColor:'white' }}>
                            <Text>点击测试</Text>
                        </View>
                    </Touchable>
                </DemoList>

                <DemoList title={'feedback点击效果,android上有效，iOS上和OPACITY效果相同'}>
                    <Touchable touchComponent={TOUCHABLE_TYPES.FEEDBACK} onPress={() => {}}>
                        <View style={{ height:50, justifyContent:'center',  paddingHorizontal:10, backgroundColor:'white' }}>
                            <Text>点击测试</Text>
                        </View>
                    </Touchable>
                </DemoList>
            </ScrollView>
        )
    }
}

export default TouchableDemo;