import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from "react-native";
import {DemoList} from "../component/DemoList";
import Select from "../../components/select";

class SelectDemo extends Component {
    render() {
        return (
            <ScrollView>
                <DemoList title={`无默认值, iOS默认显示 请选择`}>
                    <Select style={{height:44}} dataSource={['dog', 'cat', 'lion', 'tiger']}  headerCenterText={'请选择'} headerLeftText={'取消'} headerRightText={'确定'} onValueChanged={(value, index) => { console.log(value, index) }} pickerValueChanged={(value, index) => { console.log(value, index) }}/>
                </DemoList>

                <DemoList title={`有默认值 cat`}>
                    <Select style={{height:44}} selectedValue={'cat'} dataSource={['dog', 'cat', 'lion', 'tiger']} headerCenterText={'请选择'} headerLeftText={'取消'} headerRightText={'确定'}/>
                </DemoList>

                <DemoList title={`设置头部样式, 仅 iOS`}>
                    <Select style={{height:44}} dataSource={['dog', 'cat', 'lion', 'tiger']} headerCenterText={'请选择'} headerLeftText={'取消'} headerRightText={'确定'}
                    leftTextStyle={{color:'red'}} centerTextStyle={{fontWeight:'bold'}} rightTextStyle={{color:'#3357FF'}}/>
                </DemoList>

                <DemoList title={`指定应用在每项标签上的样式, 仅 iOS`}>
                    <Select style={{height:44}} dataSource={['dog', 'cat', 'lion', 'tiger']} headerCenterText={'请选择'} headerLeftText={'取消'} headerRightText={'确定'}
                            leftTextStyle={{color:'red'}} centerTextStyle={{fontWeight:'bold'}} rightTextStyle={{color:'#3357FF'}}
                            itemStyle={{color:'red', fontSize:15}}/>
                </DemoList>

                <DemoList title={`android: 指定标题`}>
                    <Select style={{height:44}} dataSource={['dog', 'cat', 'lion', 'tiger']} headerCenterText={'请选择'} headerLeftText={'取消'} headerRightText={'确定'}
                            leftTextStyle={{color:'red'}} centerTextStyle={{fontWeight:'bold'}} rightTextStyle={{color:'#3357FF'}}
                            prompt={'选择动物类别'}/>
                </DemoList>

                <DemoList title={`android: 以下拉形式呈现`}>
                    <Select style={{height:44}} dataSource={['dog', 'cat', 'lion', 'tiger']} headerCenterText={'请选择'} headerLeftText={'取消'} headerRightText={'确定'}
                            leftTextStyle={{color:'red'}} centerTextStyle={{fontWeight:'bold'}} rightTextStyle={{color:'#3357FF'}}
                            prompt={'选择动物类别'} mode={'dropdown'}/>
                </DemoList>

                <DemoList title={`禁用点击`}>
                    <Select style={{height:44}} enabled={false} dataSource={['dog', 'cat', 'lion', 'tiger']} headerCenterText={'请选择'} headerLeftText={'取消'} headerRightText={'确定'}
                            leftTextStyle={{color:'red'}} centerTextStyle={{fontWeight:'bold'}} rightTextStyle={{color:'#3357FF'}}/>
                </DemoList>



            </ScrollView>
        );
    }
}

export default SelectDemo;