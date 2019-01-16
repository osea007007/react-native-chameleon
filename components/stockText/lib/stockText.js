import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Proptypes from 'prop-types';

/**
 * ---
 * page: stockText
 * ---
 *
 *
 * 用于显示收益率的文本,收益为正显示红色,收益为负显示绿色
 */

class StockText extends Component {
    render(){
        let {containerStyle, value, fontSize} = this.props;
        return(
            <View style={[StockTextStyle.container, containerStyle]}>
                <Text style={[StockTextStyle.text, {color: value ? (value.indexOf('-') === -1 ? 'red' : 'green') : 'black', fontSize:fontSize}]}>{ value ? value+'' : '--' }</Text>
            </View>
        );
    }
}

StockText.defaultProps = {
    fontSize:14,
};

StockText.propTypes = {
    /**
     * 容器样式
     */
    containerStyle:Proptypes.any,
    /**
     * 当前数值,传入字符串类型
     */
    value:Proptypes.string,
    /**
     * 字体大小
     */
    fontSize:Proptypes.number,
};

const StockTextStyle = StyleSheet.create({
    container:{
        padding:2,
    },
    text:{
        fontSize:14,
    },
});

export default StockText;