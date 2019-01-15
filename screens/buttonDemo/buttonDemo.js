import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text} from "react-native";
import {DemoList} from "../component/DemoList";
import Button from "../../components/button";

class ButtonDemo extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <ScrollView>
                <DemoList title={'button 默认样式'}>
                    <Button/>
                </DemoList>
                <DemoList title={'自定义button title'}>
                    <Button title={'我的按钮'}/>
                </DemoList>
                {/*'large', 'middle', 'small'*/}
                <DemoList title={'large 54'}>
                    <Button size={'large'}/>
                </DemoList>
                <DemoList title={'middle 49'}>
                    <Button size={'middle'}/>
                </DemoList>
                <DemoList title={'small 40'}>
                    <Button size={'small'}/>
                </DemoList>
                <DemoList title={'修改背景色'}>
                    <Button buttonStyle={{ backgroundColor:'red' }}/>
                </DemoList>
                <DemoList title={'type circle'}>
                    <Button type={'circle'} />
                </DemoList>
                <DemoList title={'type circle 自定义容器和内容'}>
                    <Button type={'circle'} cContainerSize={60} cIconProps={{ type:'Entypo', name:'drink',color:'blue',size:36 }}/>
                </DemoList>
                <DemoList title={'type circle 自定义容器和内容'}>
                    <Button type={'circle'} cContainerSize={40} cComponent={<Text style={{ color:'white' }}>分享</Text>}/>
                </DemoList>
            </ScrollView>
        );
    }
}

export default ButtonDemo;
