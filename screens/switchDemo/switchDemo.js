import React, { Component } from 'react';
import {ScrollView, Text, View} from "react-native";
import {Switch} from "../../components/switch";
import {DemoList} from "../component/DemoList";


class SwitchDemo extends Component{
    static navigationOptions = {
        title:'SwitchDemo'
    };
    state = {
        s2:true,
        s4:true,
        s10:true
    };
    render() {
        return (
            <ScrollView>
                <DemoList title={'默认样式'}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between', alignItems:'center', height:50, paddingHorizontal:15}}>
                        <Switch onChange={() => this.setState({s1:!this.state.s1})}/>
                        <Text>
                            {
                                this.state.s1 ? '开' : '关'
                            }
                        </Text>
                    </View>
                </DemoList>

                <DemoList title={'默认打开状态'}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between', alignItems:'center', height:50, paddingHorizontal:15}}>
                        <Switch value={this.state.s2} onChange={() => this.setState({s2:!this.state.s2})}/>
                        <Text>
                            {
                                this.state.s2 ? '开' : '关'
                            }
                        </Text>
                    </View>
                </DemoList>

                <DemoList title={'禁用状态'}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between', alignItems:'center', height:50, paddingHorizontal:15}}>
                        <Switch disabled={true} onChange={() => this.setState({s3:!this.state.s3})}/>
                        <Text>
                            {
                                this.state.s3 ? '开' : '关'
                            }
                        </Text>
                    </View>
                </DemoList>

                <DemoList title={'打开的情况下禁用'}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between', alignItems:'center', height:50, paddingHorizontal:15}}>
                        <Switch disabled={true} value={this.state.s4} onChange={() => this.setState({s4:!this.state.s4})}/>
                        <Text>
                            {
                                this.state.s4 ? '开' : '关'
                            }
                        </Text>
                    </View>
                </DemoList>

                <DemoList title={'更换打开和关闭时的背景色'}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between', alignItems:'center', height:50, paddingHorizontal:15}}>
                        <Switch trackColor={{ false:'#57d72e', true:'#f1212e' }} onChange={() => this.setState({s6:!this.state.s6})}/>
                        <Text>
                            {
                                this.state.s6 ? '开' : '关'
                            }
                        </Text>
                    </View>
                </DemoList>

                <DemoList title={'更换打开和关闭时的圆圈的颜色'}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between', alignItems:'center', height:50, paddingHorizontal:15}}>
                        <Switch thumbColor={{ false:'#57d72e', true:'#f1212e' }} onChange={() => this.setState({s7:!this.state.s7})}/>
                        <Text>
                            {
                                this.state.s7 ? '开' : '关'
                            }
                        </Text>
                    </View>
                </DemoList>


                <DemoList title={'使用原生Switch（仅在ios上能看出区别）'}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between', alignItems:'center', height:50, paddingHorizontal:15}}>
                        <Switch useNative={true} onChange={() => this.setState({s8:!this.state.s8})}/>
                        <Text>
                            {
                                this.state.s8 ? '开' : '关'
                            }
                        </Text>
                    </View>
                </DemoList>

                <DemoList title={'使用原生Switch，禁用（仅在ios上能看出区别）'}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between', alignItems:'center', height:50, paddingHorizontal:15}}>
                        <Switch disabled={true} useNative={true} onChange={() => this.setState({s9:!this.state.s9})}/>
                        <Text>
                            {
                                this.state.s9 ? '开' : '关'
                            }
                        </Text>
                    </View>
                </DemoList>

                <DemoList title={'使用原生Switch，打开的情况下禁用（仅在ios上能看出区别）'}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between', alignItems:'center', height:50, paddingHorizontal:15}}>
                        <Switch disabled={true} useNative={true} value={this.state.s10} onChange={() => this.setState({s10:!this.state.s10})}/>
                        <Text>
                            {
                                this.state.s10 ? '开' : '关'
                            }
                        </Text>
                    </View>
                </DemoList>

                <DemoList title={'使用原生Switch，更换背景色（仅在ios上能看出区别）'}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between', alignItems:'center', height:50, paddingHorizontal:15}}>
                        <Switch trackColor={{ false:'#57d72e', true:'#f1212e' }} useNative={true} value={this.state.s11} onChange={() => this.setState({s11:!this.state.s11})}/>
                        <Text>
                            {
                                this.state.s11 ? '开' : '关'
                            }
                        </Text>
                    </View>
                </DemoList>
            </ScrollView>
        )
    }
}

export default SwitchDemo;