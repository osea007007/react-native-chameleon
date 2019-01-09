import React, {Component} from 'react';
import {Image, ScrollView, Text} from "react-native";
import {DemoList} from "../component/DemoList";
import RotateIcon from "../../components/rotateIcon";


class RotateIconDemo extends Component {

    constructor(props){
        super(props);
        this.state = {
            value:'down',
        };
    }
    rotatedAnimated = () => {
        this.setState({
           value:this.state.value === 'down' ? 'up' : 'down',
        });
    };
    render(){
        return(
            <ScrollView>
                <DemoList title={`默认动画时间300ms, 默认 icon`}>
                    <RotateIcon/>
                </DemoList>

                <DemoList title={`默认动画时间300ms, 默认 icon, 设置 icon 的 props, color:red`}>
                    <RotateIcon iconProps={{color:'red'}}/>
                </DemoList>

                <DemoList title={`设置动画时间 1000ms, 默认 icon`}>
                    <RotateIcon time={1000}/>
                </DemoList>

                <DemoList title={`设置旋转容器的样式 backgroundColor:red, 默认 icon`}>
                    <RotateIcon containerStyle={{backgroundColor:'red'}}/>
                </DemoList>

                <DemoList title={`自定义旋转组件`}>
                    <RotateIcon contentComponent={<Image source={require('../../assets/images/robot-dev.png')} style={{width:28, height:28}}/>}>
                    </RotateIcon>
                </DemoList>

                <DemoList title={`动画回调`}>
                    <RotateIcon onValueChanged={this.rotatedAnimated}/>
                    <Text>{this.state.value}</Text>
                </DemoList>

                <DemoList title={`禁用动画`}>
                    <RotateIcon animated={false}/>
                </DemoList>

            </ScrollView>
        );
    }
}

export default RotateIconDemo;