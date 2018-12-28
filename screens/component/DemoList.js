import React,{ Component } from 'react';
import {View} from "react-native";
import {ListItem} from "./ListItem";
import {RowLine} from "../../components/rowLine";

export function DemoList({ title, children }) {
    return (
        <View >
            <ListItem title={title}/>
            <View style={{ paddingVertical:5, backgroundColor:'#B1B1B1' }}>
                {
                    children
                }
            </View>
            <RowLine height={30} lineColor={'transparent'} containerColor={'transparent'}/>
        </View>
    );
}