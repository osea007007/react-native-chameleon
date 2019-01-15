import React, {Component} from 'react';
import {Image, ScrollView, Text} from "react-native";
import {DemoList} from "../component/DemoList";
import RotateIcon from "../../components/rotateIcon";
import {Touchable, TOUCHABLE_TYPES} from "../../components/touchable";


class RotateIconDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            open2: false,
            open3: false,
            open4: false,
            open5: false,
        };
    }

    change = () => {
        this.setState({
            open: !this.state.open,
        });
    };
    change2 = () => {
        this.setState({
            open2: !this.state.open2,
        });
    };
    change3 = () => {
        this.setState({
            open3: !this.state.open3,
        });
    };
    change4 = () => {
        this.setState({
            open4: !this.state.open4,
        });
    };
    change5 = () => {
        this.setState({
            open5: !this.state.open5,
        });
    };

    render() {
        return (
            <ScrollView>
                <DemoList title={`默认动画时间300ms, 默认箭头向下(收起), 默认 icon`}>
                    <Touchable touchComponent={TOUCHABLE_TYPES.FEEDBACK} onPress={this.change}>
                        <RotateIcon open={this.state.open}/>
                    </Touchable>
                </DemoList>

                <DemoList title={`默认动画时间300ms, 默认 icon, 设置 icon 的 props, color:red`}>
                    <Touchable touchComponent={TOUCHABLE_TYPES.FEEDBACK} onPress={this.change2}>
                        <RotateIcon open={this.state.open2} iconProps={{color: 'red'}}/>
                    </Touchable>
                </DemoList>

                <DemoList title={`设置动画时间 1000ms, 默认 icon`}>
                    <Touchable touchComponent={TOUCHABLE_TYPES.FEEDBACK} onPress={this.change3}>
                        <RotateIcon open={this.state.open3} time={1000}/>
                    </Touchable>
                </DemoList>

                <DemoList title={`设置旋转容器的样式 backgroundColor:red, 默认 icon`}>
                    <Touchable touchComponent={TOUCHABLE_TYPES.FEEDBACK} onPress={this.change4}>

                        <RotateIcon open={this.state.open4} containerStyle={{backgroundColor: 'red'}}/>
                    </Touchable>
                </DemoList>

                <DemoList title={`自定义旋转组件`}>
                    <Touchable touchComponent={TOUCHABLE_TYPES.FEEDBACK} onPress={this.change5}>
                        <RotateIcon open={this.state.open5}
                                    contentComponent={<Image source={require('../../assets/images/robot-dev.png')}
                                                             style={{width: 28, height: 28}}/>}>
                        </RotateIcon>
                    </Touchable>
                </DemoList>

                <DemoList open={this.state.open} title={`禁用动画`}>
                    <Touchable touchComponent={TOUCHABLE_TYPES.FEEDBACK} onPress={this.change}>
                        <RotateIcon open={this.state.open} animated={false}/>
                    </Touchable>
                </DemoList>

            </ScrollView>
        );
    }
}

export default RotateIconDemo;