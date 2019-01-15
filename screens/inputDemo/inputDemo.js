import React, {Component} from 'react';
import {ScrollView, View} from "react-native";
import {DemoList} from "../component/DemoList";
import Input from "../../components/input";


class InputDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text1: '',
            text2: '',
            text3: '',
        }
    }

    test1 = (text) => {
        this.setState({
            text1: text,
        });
    };
    test2 = (text) => {
        this.setState({
            text2: text,
        });
    };
    test3 = (text) => {
        this.setState({
            text3: text,
        });
    };

    render() {
        return (
            <ScrollView>
                <DemoList title={'input:设置默认提示文字'}>
                    <View style={{padding: 2}}>
                        <Input
                            style={{width: '100%', height: 44, fontSize: 18}}
                            placeholder={'请输入文字'}
                            ref={(input) => this.input = input}
                            onChange={this.test1}
                            value={this.state.text1}
                        />
                    </View>
                </DemoList>
                <DemoList title={'input:添加边框'}>
                    <View style={{padding: 2}}>
                        <Input
                            style={{width: '100%', height: 44, fontSize: 18, borderColor: '#FF9333', borderWidth: 1}}
                            placeholder={'请输入文字'}
                            ref={(input) => this.input = input}
                            onChange={this.test2}
                            value={this.state.text2}
                        />
                    </View>
                </DemoList>
                <DemoList title={'input:设置 padding,改变字体大小,字体颜色'}>
                    <View style={{padding: 2}}>
                        <Input
                            style={{
                                width: '100%',
                                height: 44,
                                fontSize: 15,
                                borderColor: '#FF9333',
                                borderWidth: 1,
                                paddingLeft: 6,
                                color: 'red'
                            }}
                            placeholder={'请输入文字'}
                            ref={(input) => this.input = input}
                            onChange={this.test3}
                            value={this.state.text3}
                        />
                    </View>
                </DemoList>
            </ScrollView>
        )
    }
}

export default InputDemo;