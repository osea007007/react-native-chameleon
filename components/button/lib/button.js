import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Touchable, TOUCHABLE_TYPES} from "@xzchameleon/touchable";
import {Text, View, StyleSheet, Platform} from "react-native";
import {Icon} from '@xzchameleon/icon';

/**
 * ---
 * page: button
 *
 *
 * * 支持通常使用的button
 * * 支持原型的button 使用场景 header右侧的分享按钮 或 文字
 *
 * ---
 */
class Button extends Component {
    render() {
        let {
            containerStyle,
            textStyle,
            onPress,
            touchableProps,
            type,
            size,
            title,
            buttonStyle,
            cBackgroundColor,
            cContainerSize,
            cIconProps,
            cText,
            cTextStyle,
            cComponent
        } = this.props;
        return (
            type !== 'circle' ?
                <View style={[containerStyle]}>
                    <Touchable onPress={onPress}
                               touchComponent={Platform.OS === 'ios' ? TOUCHABLE_TYPES.OPACITY : TOUCHABLE_TYPES.FEEDBACK} {...touchableProps}>
                        <View style={[ButtonStyle.containerCommon, ButtonStyle['container_'+size], buttonStyle]}>
                            <Text style={[ButtonStyle.text, textStyle]}>
                                { title }
                            </Text>
                        </View>
                    </Touchable>
                </View>
                :
                <View style={[ containerStyle,{ backgroundColor:cBackgroundColor, width:cContainerSize, height:cContainerSize, borderRadius:cContainerSize/2 }]}>
                    <Touchable touchComponent={TOUCHABLE_TYPES.FEEDBACK} borderless={true}>
                        <View style={{ height:cContainerSize, width:cContainerSize, justifyContent:'center', alignItems:'center' }}>
                            {cComponent || (cText ? <Text style={[{ fontSize:16, color:'#666' },cTextStyle]}>{ cText }</Text> : <Icon size={20} color={'white'} {...cIconProps}/>)}
                        </View>
                    </Touchable>
                </View>
        );
    }
}

const ButtonStyle = StyleSheet.create({
    container_large: {
        height: 54
    },
    container_middle: {
        height: 49
    },
    container_small: {
        height: 40
    },
    containerCommon:{
        backgroundColor:'#ee9922',
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:16,
        color:'#fff'
    }
});

Button.defaultProps = {
    type: 'default',
    size: 'middle',
    title: '按钮',
    cContainerSize:50,
    cBackgroundColor:'gray'
};

Button.propTypes = {
    /**
     * 设置按钮容器样式
     */
    containerStyle: PropTypes.object,
    /**
     * 设置button样式
     */
    buttonStyle:PropTypes.object,
    /**
     * 设置按钮文字样式
     */
    textStyle: PropTypes.object,
    /**
     * 设置按钮点击事件
     */
    onPress: PropTypes.func,
    /**
     * 指定按钮的类型
     */
    type: PropTypes.oneOf([
        'default', 'circle'
    ]),
    /**
     * 指定按钮的大小
     */
    size: PropTypes.oneOf([
        'large', 'middle', 'small'
    ]),
    /**
     * 含有Touchable组件props的对象
     */
    touchableProps: PropTypes.any,
    /**
     * 按钮上显示的文字
     */
    title:PropTypes.string.isRequired,
    /**
     * 【type=circle】，设置backgroundColor
     */
    cBackgroundColor:PropTypes.string,
    /**
     * 【type=circle】，设置容器的大小
     */
    cContainerSize:PropTypes.number,
    /**
     * 【type=circle】，设置icon的props参考 @xzchameleon/icon API
     */
    cIconProps:PropTypes.any,
    /**
     * 【type=circle】，设置文字
     */
    cText:PropTypes.string,
    /**
     * 【type=circle】，设置文字的样式。
     */
    cTextStyle:PropTypes.any,
    /**
     * 【type=circle】，内容区域可以使用组件填充
     */
    cComponent:PropTypes.any
};

export default Button;

