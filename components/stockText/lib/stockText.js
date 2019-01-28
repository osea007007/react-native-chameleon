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

    isLargerZero = (value) => {
        let temp = Number(value);

        return temp >= 0;
    };

    display = (value) => {
        if(isNaN(value)) {      //非法字符
            return '--';
        } else {
            let temp = Number(value);
            if(temp >= 0) {
                return '+' + temp;
            } else {
                return temp;
            }
        }
    };

    render(){
        let {value, fontSize, tailCharacter=''} = this.props;
        return(
            <Text style={[StockTextStyle.text, {color: value ? (this.isLargerZero(value) ? 'red' : 'green') : 'black', fontSize:fontSize}]}>{ value ? this.display(value)+tailCharacter : ' ' }</Text>
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
    value:Proptypes.any,
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