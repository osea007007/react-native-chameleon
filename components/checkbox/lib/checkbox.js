import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import Proptypes from 'prop-types';
import {Touchable, TOUCHABLE_TYPES} from "../../touchable";


export class CheckBox extends Component {
    constructor(props){
        super(props);
        let {checked} = this.props;
        this.state={
            value:checked,
        }
    }

    static getDerivedStateFromProps({ checked }) {
        if(checked !== undefined) {
            return { checked };
        }
        return null;
    }

    handleClick = () => {
        this.setState({checked:!this.state.checked}, () => {
            let { onValueChanged, text } = this.props;
            if(onValueChanged) {
                onValueChanged(this.state.checked, text);
            }
        });
    };

    render() {
        let {checkedImg, unCheckedImg, containerMargin, text, textStyle} = this.props;
        return (
            <Touchable touchComponent={TOUCHABLE_TYPES.FEEDBACK} onPress={this.handleClick}>
                <View style={[CheckBoxStyle.container, ...containerMargin]}>
                    <Image source={this.state.checked ? checkedImg : unCheckedImg}/>
                    <Text style={[CheckBoxStyle.text, ...textStyle]}>{text}</Text>
                </View>
            </Touchable>
        );
    }
}

const CheckBoxStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text:{
        marginLeft:12,
        fontSize:14,
        color:'#383838',
    },
});

CheckBox.propTypes = {
    /**
     * 指定选中状态
     */
    checked:Proptypes.bool,
    /**
     * 指定选中状态的图片
     */
    checkedImg:Proptypes.any,
    /**
     * 指定未选中状态的图片
     */
    unCheckedImg:Proptypes.any,
    /**
     * 指定组件距离外部容器的 margin
     */
    containerMargin:Proptypes.any,
    /**
     * 指定文本
     */
    text:Proptypes.string,
    /**
     * 指定文本的样式
     */
    textStyle:Proptypes.any,
    /**
     * 点击后触发的回调
     */
    onValueChanged:Proptypes.any,
};

