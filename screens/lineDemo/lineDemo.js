import React,{ Component } from 'react';
import {ScrollView, Text, View} from "react-native";
import {DemoList} from "../component/DemoList";
import {RowLine} from "../../components/rowLine";
import {RowDashLine} from "../../components/rowDashLine";
import {ColumnLine} from "../../components/columnLine";

class LineDemo extends Component{
    render() {
        return (
            <ScrollView>
                <DemoList title={'横线 #eeeeee'}>
                    <View style={{ marginVertical:20 }}>
                        <RowLine/>
                    </View>
                </DemoList>

                <DemoList title={'横线 #ff00ff'}>
                    <View style={{ marginVertical:20 }}>
                        <RowLine lineColor={'#ff00ff'}/>
                    </View>
                </DemoList>

                <DemoList title={'横线 #ff00ff left:15'}>
                    <View style={{ marginVertical:20 }}>
                        <RowLine lineColor={'#ff00ff'} left={15}/>
                    </View>
                </DemoList>

                <DemoList title={'横线 #ff00ff left:15'}>
                    <View style={{ marginVertical:20 }}>
                        <RowLine lineColor={'#ff00ff'} right={15}/>
                    </View>
                </DemoList>

                <DemoList title={'横线 #ff00ff left:40 containerColor:blue'}>
                    <View style={{ marginVertical:20 }}>
                        <RowLine lineColor={'#ff00ff'} containerColor={'blue'} left={40}/>
                    </View>
                </DemoList>

                <DemoList title={'横线 #ff00ff left:40 containerColor:blue'}>
                    <View style={{ marginVertical:20 }}>
                        <RowLine lineColor={'#ff00ff'} containerColor={'blue'} left={40}/>
                    </View>
                </DemoList>

                <DemoList title={'横向虚线 blue'}>
                    <View style={{ marginVertical:20 }}>
                        <RowDashLine lineColor={'blue'}/>
                    </View>
                </DemoList>

                <DemoList title={'横向虚线 blue 修改虚线间距和线段长度'}>
                    <View style={{ marginVertical:20 }}>
                        <RowDashLine lineColor={'blue'} dashDistance={10} dashWidth={10}/>
                    </View>
                </DemoList>

                <DemoList title={'竖线 red'}>
                    <View style={{ marginVertical:20, height:60, paddingLeft:60, flexDirection:'row'}}>
                        <ColumnLine lineColor={'red'}/>
                    </View>
                </DemoList>
            </ScrollView>
        );
    }
}

export default LineDemo;