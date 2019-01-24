import React from 'react';
import {View, StyleSheet} from "react-native";
import PropTypes from 'prop-types';

/**
 * ---
 * category: line
 * page: rowLine
 * range: 0
 * ---
 *
 *
 * 横线，可以自定义宽度，自定义左右边距
 */
export function RowLine({ left, right, height, containerColor, lineColor }) {
    return (
        <View style={[RowLineStyle.container,{ backgroundColor: containerColor }]}>
            <View style={{ marginLeft:left, marginRight:right, height, backgroundColor: lineColor }}/>
        </View>
    )
}

const RowLineStyle = StyleSheet.create({
    container:{
        width:'100%'
    }
});

RowLine.defaultProps = {
    containerColor:'white',
    lineColor:'#eee',
    height:.5,
    left:0,
    right:0
};

RowLine.propTypes = {
    /**
     * 线条左边距
     */
    left:PropTypes.number,
    /**
     * 线条右边距
     */
    right:PropTypes.number,
    /**
     * 线条高度
     */
    height:PropTypes.number,
    /**
     * 线条背景色
     */
    containerColor:PropTypes.string,
    /**
     * 线条颜色
     */
    lineColor:PropTypes.string
};
