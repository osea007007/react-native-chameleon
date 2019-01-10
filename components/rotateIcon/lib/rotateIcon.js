import React, {Component} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import Proptypes from 'prop-types';
import {Touchable, TOUCHABLE_TYPES} from "@xzchameleon/touchable";
import {Icon} from "../../icon";

/**
 * ---
 * page: rotateIcon
 * ---
 *
 *
 * 点击可旋转的 icon
 */

class RotateIcon extends Component {

    constructor(props){
        super(props);
        this.state = {
            rotate:new Animated.Value(0),
            flag:false,
        }
    }
    rotateIcon = () => {
        let {animated, time} = this.props;
        if (animated) {
            Animated.timing(this.state.rotate, {
                toValue:this.state.flag ? 0 : 1,
                duration:time,
            }).start(() => {
                this.setState({
                    flag:!this.state.flag,
                }, () => {
                    let {onValueChanged} = this.props;
                    onValueChanged && onValueChanged();
                });
            });
        }
    };

    render() {
        let {containerStyle, contentComponent, iconProps} = this.props;
        return (
            <View style={[RotateIconStyle.container, containerStyle]}>
                <Touchable touchComponent={TOUCHABLE_TYPES.WITHOUT_FEEDBACK} onPress={this.rotateIcon}>
                    <Animated.View style={[RotateIconStyle.content, {
                        transform:[
                            {
                                rotateZ:this.state.rotate.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '-180deg']
                                })
                            }
                        ]
                    }]}>
                        {contentComponent ||
                        <Icon type={'Entypo'} name={'chevron-thin-down'} color={'black'} {...iconProps}/>
                        }
                    </Animated.View>
                </Touchable>
            </View>
        );
    }
}

RotateIcon.defaultProps = {
    animated: true,
    time:300,
};

RotateIcon.propTypes = {
    /**
     * 设置旋转的内容组件
     */
    contentComponent: Proptypes.any,
    /**
     * 设置 icon 的 props,当 contentComponent 为 icon 时有效
     */
    iconProps: Proptypes.object,
    /**
     * 设置旋转容器的样式
     */
    containerStyle: Proptypes.any,
    /**
     * 设置动画时间
     */
    time: Proptypes.number,
    /**
     * 设置是否有动画
     */
    animated: Proptypes.bool,
    /**
     * 动画结束后回调
     */
    onValueChanged:Proptypes.any
};

const RotateIconStyle = StyleSheet.create({
    container: {
        width: 42,
        height: 42,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default RotateIcon;

