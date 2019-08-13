import React, {Component} from 'react';
import {Text} from 'react-native';
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

    displayColor = (value) => {
        if(value === undefined) {
            return '#383838';
        }
        // let temp = Number(value);
        let temp = value.indexOf('-');
        if(temp === -1) {
            return this.props.increaseColor;
        } else {
            return this.props.decreaseColor;
        }
    };

    displayContent = (value) => {
        let {tailCharacter='', placeholder=''} = this.props;
        if(value === undefined || value === '') {
            return placeholder;
        }
        // if(isNaN(value)) {
        //     return value;
        // }
        // let temp = Number(value);
        let temp = value.indexOf('-');
        if(temp === -1) {
            return '+' + value + tailCharacter;
        } else {
            return value + tailCharacter;
        }
    };

    render(){
        let {value, style} = this.props;
        return(
            <Text style={[{...style}, {color: this.displayColor(value)}]}>{this.displayContent(value)}</Text>
        );
    }
}

StockText.defaultProps = {
    increaseColor:'red',
    decreaseColor:'green',
};

StockText.propTypes = {
    /**
     * 当前数值,
     */
    value:Proptypes.string,
    /**
     * 大于等于0时颜色
     */
    increaseColor:Proptypes.string,
    /**
     * 小于0时颜色
     */
    decreaseColor:Proptypes.string,
    /**
     * 未赋值时的占位字符
     */
    placeholder:Proptypes.string,
    /**
     * 末尾自定义符号
     */
    tailCharacter:Proptypes.string,
    /**
     * 自定义文字样式,不可指定颜色(color)
     */
    style:Proptypes.any,
};

export default StockText;