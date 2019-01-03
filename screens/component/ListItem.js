import React, {Component, Fragment} from 'react';
import {Touchable} from "../../components/touchable";
import {Text, View} from "react-native";
import {RowLine} from "../../components/rowLine";


export function ListItem({ title, onPress }) {
    return (
        <Fragment>
            <Touchable onPress={onPress}>
                <View style={{ minHeight:44, backgroundColor:'white', justifyContent:'center', paddingHorizontal:15 }}>
                    <Text style={{ fontSize:16,lineHeight:24 }}>{ title }</Text>
                </View>
            </Touchable>
            <RowLine/>
        </Fragment>
    );
}

