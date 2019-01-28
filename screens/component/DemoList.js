import React,{ Component } from 'react';
import {View} from "react-native";
import {ListItem} from "./ListItem";
import {RowLine} from "../../components/rowLine";

export function DemoList({ title, children,containStyle }) {
    return (
        <View>
            <ListItem title={title} backgroundColor={'#001f72'} color={'white'}/>
            <View style={[{ paddingVertical:5, backgroundColor:'#B1B1B1' },containStyle]}>
                {
                    children
                }
            </View>
            <RowLine height={30} lineColor={'transparent'} containerColor={'transparent'}/>
        </View>
    );
}