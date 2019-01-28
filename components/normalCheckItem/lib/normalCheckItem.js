import {PureComponent} from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import propTypes from "prop-types";
import {CheckBox} from "../../checkBox/lib/checkBox";
import React from "react";

export class NormalCheckItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            checkedId: this.props.checkedId,
        }
    }

    change1 = () => {
        this.setState({
            checkedId: 0,
        });
    };

    change2 = (checked) => {
        this.setState({
            checkedId: 1,
        });
    };

    render() {
        const {leftText, rightText} = this.props;
        return (
            <View style={NormalCheckItemStyle.container}>
                <View style={NormalCheckItemStyle.contain}>
                    <CheckBox
                        checked={this.state.checkedId === 0}
                        checkBySelf={false}
                        checkedImg={require('../../checkBox/assets/image/checked_circle.png')}
                        unCheckedImg={require('../../checkBox/assets/image/choose.png')}
                        text={leftText}
                        onValueChanged={this.change1}/>
                </View>
                <View style={NormalCheckItemStyle.contain}>
                    <CheckBox
                        checked={this.state.checkedId === 1}
                        checkBySelf={false}
                        checkedImg={require('../../checkBox/assets/image/checked_circle.png')}
                        unCheckedImg={require('../../checkBox/assets/image/choose.png')}
                        text={rightText}
                        onValueChanged={this.change2}/>
                </View>
            </View>
        );
    }
}

const NormalCheckItemStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    contain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

NormalCheckItem.defaultProps = {
    checkedId: 0,
    leftText: '是',
    rightText: '否'
}
NormalCheckItem.propTypes = {
    /**
     * 当前选中的状态的ID  0 选中第一个 1 选中第二个 默认选中第一个
     */
    checkedId: propTypes.number,
}

