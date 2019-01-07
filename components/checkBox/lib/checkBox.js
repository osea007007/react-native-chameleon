import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import Proptypes from 'prop-types';
import {Touchable, TOUCHABLE_TYPES} from "../../touchable";

/**
 * ---
 * page: CheckBox
 * ---
 *
 *
 * 单选组件
 */
export class CheckBox extends Component {
    constructor(props){
        super(props);
        this.state={
            checked:this.props.checked,
            preChecked:this.props.checked,
        };
    }

    static getDerivedStateFromProps({ checked }, preState) {
        if(checked !== preState.preChecked ) {
            return {
                checked,
                preChecked:checked,
            }
        }
        return null;
    }

    handleClick = (state) => {
        this.setState({checked:!state}, () => {
            let { onValueChanged, text } = this.props;
            onValueChanged && onValueChanged(this.state.checked, text);
        });
    };

    render() {
        let {checkedImg, unCheckedImg, imageStyle, containerStyle, text, textStyle} = this.props;
        return (
            <Touchable touchComponent={TOUCHABLE_TYPES.WITHOUT_FEEDBACK} onPress={() => this.handleClick(this.state.checked)}>
                <View style={[CheckBoxStyle.container, containerStyle]}>
                    <Image source={this.state.checked ? checkedImg : unCheckedImg} style={imageStyle}/>
                    <Text style={[CheckBoxStyle.text, textStyle]}>{text}</Text>
                </View>
            </Touchable>
        );
    }
}

const CheckBoxStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection:'row',
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
     * 指定左侧图片的style
     */
    imageStyle:Proptypes.any,
    /**
     * 指定组件容器的style
     */
    containerStyle:Proptypes.any,
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

