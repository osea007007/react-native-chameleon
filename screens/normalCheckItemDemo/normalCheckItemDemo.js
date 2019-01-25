import {Component} from "react";
import {ScrollView} from "react-native";
import {DemoList} from "../component/DemoList";
import React from "react";
import {NormalCheckItem} from "../../components/normalCheckItem";

export class NormalCheckItemDemo extends Component {
    render() {
        return (
            <ScrollView>
                <DemoList
                    title={`默认无动画 \nanimationType={'none'} \ncontainerStyle={{justifyContent:'center', alignItems:'center'}}`}>
                    <NormalCheckItem />
                </DemoList>
            </ScrollView>
        );
    }
}