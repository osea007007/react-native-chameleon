import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from "react-native";
import {DemoList} from "../component/DemoList";
import {Touchable, TOUCHABLE_TYPES} from "../../components/touchable";
import {Modal} from "../../components/modal";

class ModalDemo extends Component {
    state={};

    static navigationOptions = {
        title:'ModalDemo'
    };

    static defaultProps = {};

    static propTypes = {};

    render() {
        return (
            <ScrollView>
                <DemoList title={`默认无动画 \nanimationType={'none'} \ncontainerStyle={{justifyContent:'center', alignItems:'center'}}`}>
                    <Demo containerStyle={{ justifyContent:'center', alignItems:'center' }}/>
                </DemoList>

                <DemoList title={`淡入淡出 \nanimationType={'fade'} \ncontainerStyle=......`}>
                    <Demo containerStyle={{ justifyContent:'center', alignItems:'center' }} animationType={'fade'}/>
                </DemoList>

                <DemoList title={`滑入 \nanimationType={'slide'} \ncontainerStyle=......`}>
                    <Demo containerStyle={{ justifyContent:'center', alignItems:'center' }} animationType={'slide'}/>
                </DemoList>

                <DemoList title={`修改背景色 \nanimationType={'slide'} \ncontainerStyle=...... \nbackgroundColor={'rgba(255,0,255,.4)'}`}>
                    <Demo containerStyle={{ justifyContent:'center', alignItems:'center' }} backgroundColor={'rgba(255,0,255,.4)'} animationType={'slide'}/>
                </DemoList>

                <DemoList title={`内容区域位于底部 \nanimationType={'slide'} \ncontainerStyle={{justifyContent:'flex-end', alignItems:'center'}}`}>
                    <Demo containerStyle={{ justifyContent:'flex-end', alignItems:'center' }} animationType={'slide'}/>
                </DemoList>
            </ScrollView>
        );
    }
}



class Demo extends Component {
    state = {};

    render() {
        return (
            <Fragment>
                <Touchable touchComponent={TOUCHABLE_TYPES.OPACITY} onPress={() => { this.modal.isShow() ? this.modal.hide() : this.modal.show() }}>
                    <View style={{height:50, width:80, alignItems:'center', justifyContent:'center', backgroundColor:'#a50be0'}}>
                        <Text>切换</Text>
                    </View>
                </Touchable>
                <Modal ref={(modal) => this.modal = modal} {...this.props}>
                    <Content/>
                </Modal>
            </Fragment>
        );
    }
}

class Content extends Component{
    state = {num:0};
    render() {
        return (
            <View style={{ width:300, height:160, backgroundColor:'white', justifyContent:'center', alignItems:'center' }}>
                <Touchable onPress={() => {this.setState({num:++this.state.num})}}>
                    <View style={{ width:60, height:40, backgroundColor:'blue',justifyContent:'center', alignItems:'center'  }}>
                        <Text>点击{this.state.num}次</Text>
                    </View>
                </Touchable>
            </View>
        );
    }
}

export default ModalDemo;



