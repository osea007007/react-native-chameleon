import {Component, Fragment} from "react";
import {DemoList} from "../component/DemoList";
import React from "react";
import {Touchable, TOUCHABLE_TYPES} from "../../components/touchable";
import {Text, View} from "react-native";
import {DropDown} from "../../components/dropdown";

class DropDownDemo extends Component {
    static navigationOptions = {
        title: 'DropDownDemo'
    };

    render() {
        return (
            <View>
                <DemoList
                    title={`展开收缩动画 `}>
                    <Demo/>
                </DemoList>
                <DemoList
                    title={`额外增加顶部距离,修改展开收回动画时间 \nextraTop={20} \nopenTime={1000} \ncloseTime={500}`}>
                    <Demo extraTop={20} openTime={2000} closeTime={1000}/>
                </DemoList>

            </View>
        );
    }
}

class Demo extends Component {
    state = {};

    render() {
        return (
            <Fragment>
                <Touchable touchComponent={TOUCHABLE_TYPES.OPACITY} onPress={() => {
                    this.modal.show(this.btn)
                }}>
                    <View
                        ref={(btn) => this.btn = btn}
                        style={{
                            height: 50,
                            width: 80,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#a50be0'
                        }}>
                        <Text>收展状态切换</Text>
                    </View>
                </Touchable>
                <DropDown ref={(modal) => this.modal = modal} {...this.props}>
                    <Content/>
                </DropDown>
            </Fragment>
        );
    }
}

class Content extends Component {
    state = {num: 0};
    render() {
        return (
            <Touchable touchComponent={TOUCHABLE_TYPES.WITHOUT_FEEDBACK} onPress={() => {
                this.setState({num: ++this.state.num})
            }}>
                <View style={{
                    width: '100%',
                    height: 160,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: 60,
                        height: 40,
                        backgroundColor: 'blue',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text>点击{this.state.num}次</Text>
                    </View>
                </View>
            </Touchable>
        );
    }
}

export default DropDownDemo;