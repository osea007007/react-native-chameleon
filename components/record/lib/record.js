import React, {Fragment} from "react";
import {View, Text, StyleSheet} from "react-native";
import propTypes from 'prop-types';
import {Touchable} from "@xzchameleon/touchable";
import {RowLine} from "@xzchameleon/rowline";

export function Record({fundName, type, state, cash, date, onPress}) {
    return (
        <Fragment>
            <Touchable onPress={onPress}>
                <View style={RecordStyle.container}>
                    {fundName &&
                    <View>
                        <Text style={RecordStyle.textTitle}>{fundName}</Text>
                        <RowLine/>
                    </View>
                    }

                    <View style={RecordStyle.contain}>
                        <Text style={RecordStyle.text}>{type}</Text>
                        <Text style={RecordStyle.text}>{cash}</Text>
                    </View>
                    <View style={RecordStyle.contain}>
                        <Text style={RecordStyle.textTime}>{date}</Text>
                        <Text style={RecordStyle.textTime}>{state}</Text>
                    </View>
                </View>
            </Touchable>
        </Fragment>
    );
}

const RecordStyle = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    contain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:5,
    },
    textTitle: {
        fontSize: 15,
        marginVertical: 5,
    },
    text: {
        fontSize: 12,
        color: '#424A67'
    },
    textTime: {
        fontSize: 11,
        color: '#787878'
    },
})

Record.defaultProps = {
    fundName: '基金名称',
    type: '申购',
    state: '交易成功',
    cash: '1000',
    date: '2017 01-18 14:56:21',
}
Record.propTypes = {
    /**
     * 基金名称
     */
    proType: propTypes.string,
    /**
     * 交易状态
     */
    state: propTypes.string,
    /**
     * 交易类型
     */
    type: propTypes.string,
    /**
     * 交易⾦额
     */
    cash: propTypes.string,
    /**
     * 交易⽇期
     */
    date: propTypes.string,
    /**
     * 条目点击事件
     */
    onPress: propTypes.func,
}
