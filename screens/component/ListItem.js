import React, {Component, Fragment} from 'react';
import {Touchable} from "../../components/touchable";
import {Text, View} from "react-native";
import {RowLine} from "../../components/rowLine";


export function ListItem({ title, onPress, backgroundColor = 'white', color = '#000' }) {
    return (
        <Fragment>
            <Touchable onPress={onPress}>
                <View style={{ minHeight:44, backgroundColor, justifyContent:'center', paddingHorizontal:15 }}>
                    <Text style={{ fontSize:16,lineHeight:24, color}}>{ title }</Text>
                </View>
            </Touchable>
            <RowLine/>
        </Fragment>
    );
}

