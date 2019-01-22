import React, {Component} from 'react';
import {ScrollView, Text, View} from "react-native";
import {DemoList} from "../component/DemoList";
import InfoInput from "../../components/infoInput";
import {Touchable, TOUCHABLE_TYPES} from "../../components/touchable";


class InfoInputDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps={'handled'}>
                <DemoList title={'默认样式'}>
                    <View style={{backgroundColor: '#263b7c', paddingHorizontal: 15, paddingVertical: 15}}>
                        <InfoInput/>
                    </View>
                </DemoList>
                <DemoList title={'清除'}>
                    <View style={{backgroundColor: '#263b7c', paddingHorizontal: 15, paddingVertical: 15}}>
                        <InfoInput
                            ref={(e) => this.input1 = e}
                            leftComponent={{
                                type: 'AntDesign',
                                name: 'user',
                                color: '#ffffff',
                                size: 20
                            }}
                            rightComponent={{
                                type: 'AntDesign',
                                name: 'closecircleo',
                                color: '#ffffff',
                                size: 18
                            }}
                            onRightPress={() => {
                                this.input1.clear();
                            }}
                            placeholder={'请输入用户名'}
                        />
                    </View>
                </DemoList>
                <DemoList title={'密码显隐切换'}>
                    <View style={{backgroundColor: '#263b7c', paddingHorizontal: 15, paddingVertical: 15}}>
                        <InfoInput
                            ref={(e) => this.input2 = e}
                            leftComponent={{
                                type: 'AntDesign',
                                name: 'lock1',
                                color: '#ffffff',
                                size: 20
                            }}
                            rightComponent={{
                                type: 'Feather',
                                name: this.state.active ? 'eye' : 'eye-off',
                                color: '#ffffff',
                                size: 18
                            }}
                            secureTextEntry={!this.state.active}
                            onRightPress={() => {
                                this.input2.blur();
                                this.setState({
                                    active: !this.state.active,
                                })
                            }}
                        />
                    </View>
                </DemoList>

                <DemoList title={'自定义按钮组件'}>
                    <View style={{backgroundColor: '#dddddd', paddingHorizontal: 15, paddingVertical: 15}}>
                        <InfoInput
                            ref={(e) => this.input4 = e}
                            leftComponent={{
                                type: 'AntDesign',
                                name: 'lock1',
                                color: '#666',
                                size: 20
                            }}
                            rightComponent={<CodeNumber/>}
                            containerStyle={{
                                borderColor: '#666',
                                backgroundColor: '#ffffff'
                            }}
                            style={{color: '#000000'}}
                        />
                    </View>
                </DemoList>
            </ScrollView>
        )
    }
}

function CodeNumber() {
    return (
        <Touchable touchComponent={TOUCHABLE_TYPES.WITHOUT_FEEDBACK} onPress={() => {
            alert('获取中')
        }}>
            <View style={{height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: '#F39800'}}>获取验证码</Text>
            </View>
        </Touchable>

    )
}

export default InfoInputDemo;