import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Touchable, TOUCHABLE_TYPES} from "../../touchable";
import {Text, View, StyleSheet, Platform} from "react-native";

class Button extends Component {
    render() {
        let {containerStyle, textStyle, onPress, touchableProps, type, size, title, buttonStyle} = this.props;
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
                <View><Text>11</Text></View>
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
    title: '按钮'
};

Button.propTypes = {
    /**
     * 设置按钮容器样式
     */
    containerStyle: PropTypes.object,
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
    title:PropTypes.string.isRequired
};

export default Button;

