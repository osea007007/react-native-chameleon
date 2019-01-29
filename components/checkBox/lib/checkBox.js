import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import Proptypes from 'prop-types';
import {Touchable, TOUCHABLE_TYPES} from "@xzchameleon/touchable";

/**
 * ---
 * page: CheckBox
 * ---
 *
 *
 * 单选组件
 */
export class CheckBox extends Component {

    handleClick = () => {
        let {disable, onValueChanged} = this.props;
        if (!disable) {
            onValueChanged && onValueChanged();
        }
    };

    render() {
        let {checkedImg, unCheckedImg, imageStyle, containerStyle, text, textStyle} = this.props;
        return (
            <Touchable touchComponent={TOUCHABLE_TYPES.WITHOUT_FEEDBACK}
                       onPress={this.handleClick}>
                <View style={[CheckBoxStyle.container, containerStyle]}>
                    <Image source={this.props.checked ? checkedImg : unCheckedImg} style={imageStyle}/>
                    <Text style={[CheckBoxStyle.text, textStyle]}>{text}</Text>
                </View>
            </Touchable>
        );
    }
}

const CheckBoxStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        marginLeft: 12,
        fontSize: 14,
        color: '#383838',
    },
});

CheckBox.defaultProps = {
    checked: false,
    disable: false,
    checkedImg: require('./assets/image/checked_circle.png'),
    unCheckedImg: require('./assets/image/choose.png'),
};

CheckBox.propTypes = {
    /**
     * 指定选中状态
     */
    checked: Proptypes.bool,
    /**
     * 指定选中状态的图片
     */
    checkedImg: Proptypes.any,
    /**
     * 指定未选中状态的图片
     */
    unCheckedImg: Proptypes.any,
    /**
     * 指定状态图片的style
     */
    imageStyle: Proptypes.any,
    /**
     * 指定组件容器的style
     */
    containerStyle: Proptypes.any,
    /**
     * 指定文本
     */
    text: Proptypes.string,
    /**
     * 指定文本的样式
     */
    textStyle: Proptypes.any,
    /**
     * 点击后触发的回调
     */
    onValueChanged: Proptypes.any,
    /**
     * 是否禁用点击
     */
    disable: Proptypes.bool,
};

