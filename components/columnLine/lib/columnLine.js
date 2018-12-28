import React from 'react';
import {View} from "react-native";
import PropTypes from 'prop-types';

/**
 *---
 * category: line
 * page: columnLine
 * range: 2
 *---
 *
 *
 * 竖线
 */
export function ColumnLine({ width, top, bottom, containerColor, lineColor  }) {
    return (
        <View style={{ height:'100%', backgroundColor:containerColor, flexDirection:'row' }}>
            <View style={{ marginTop:top, marginBottom:bottom, backgroundColor:lineColor, width }}/>
        </View>
    );
}

ColumnLine.defaultProps = {
    containerColor:'white',
    lineColor:'#eee',
    width:.5,
    top:0,
    bottom:0
};

ColumnLine.propTypes = {
    /**
     * 线条上边距
     */
    top:PropTypes.number,
    /**
     * 线条下边距
     */
    bottom:PropTypes.number,
    /**
     * 线条宽度
     */
    width:PropTypes.number,
    /**
     * 线条背景色
     */
    containerColor:PropTypes.string,
    /**
     * 线条颜色
     */
    lineColor:PropTypes.string
};
