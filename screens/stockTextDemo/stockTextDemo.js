import React, { Component } from 'react';
import {ScrollView} from "react-native";
import {DemoList} from "../component/DemoList";
import StockText from "../../components/stockText";


class StockTextDemo extends Component{
    render(){
        return(
            <ScrollView>
                <DemoList title={'value 为 undefined'}>
                    <StockText/>
                </DemoList>
                <DemoList title={'value 为负'}>
                    <StockText value={'-yu10'}/>
                </DemoList>
                <DemoList title={'value 为负'}>
                    <StockText value={'-123'}/>
                </DemoList>
                <DemoList title={'value 为负,后跟 %'}>
                    <StockText value={'-123'} tailCharacter={'%'}/>
                </DemoList>
                <DemoList title={'非法字符 $$'}>
                    <StockText value={'$$'}/>
                </DemoList>
                <DemoList title={'value 为正'}>
                    <StockText value={10}/>
                </DemoList>
                <DemoList title={'value 为0'}>
                    <StockText value={'0'}/>
                </DemoList>
                <DemoList title={'设置字体大小'}>
                    <StockText value={'90'} textStyle={{fontSize:22}}/>
                </DemoList>
            </ScrollView>

        );
    }
}

export default StockTextDemo;