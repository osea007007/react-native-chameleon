import {Component} from "react";
import {ScrollView} from "react-native";
import {DemoList} from "../component/DemoList";
import React from "react";
import {MyProgress, NormalCheckItem} from "../../components/normalCheckItem";

export class NormalCheckItemDemo extends Component {
    render() {
        return (
            <ScrollView>
                <DemoList>
                    <NormalCheckItem />
                </DemoList>
                <DemoList>
                    <MyProgress />
                </DemoList>
            </ScrollView>
        );
    }
}