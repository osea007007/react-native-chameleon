import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import {
    Platform,
    TouchableNativeFeedback,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';

export const TOUCHABLE_TYPES = {
    HIGHLIGHT:TouchableHighlight,
    FEEDBACK:TouchableNativeFeedback,
    WITHOUT_FEEDBACK:TouchableWithoutFeedback,
    OPACITY:TouchableOpacity
};

const ACTIVE_OPACITY = .3;
const HIGHLIGHT_OPACITY = .85;

/**
 * ---
 * page: touchable
 * ---
 *
 *
 * 使用统一的组件设定点击效果
 */
export class Touchable extends Component{
    render() {
        let { borderless, touchComponent, children, ...props } = this.props;

        let Component = touchComponent;

        if(Platform.OS === 'ios' && Component === TOUCHABLE_TYPES.FEEDBACK) {
            Component = TOUCHABLE_TYPES.OPACITY;
        }

        if(Component === TOUCHABLE_TYPES.OPACITY) {
            props.activeOpacity || (props.activeOpacity = ACTIVE_OPACITY);
        }

        if(Component === TOUCHABLE_TYPES.HIGHLIGHT) {
            props.activeOpacity || (props.activeOpacity = HIGHLIGHT_OPACITY);
        }

        if(Component === TOUCHABLE_TYPES.FEEDBACK) {
            props.background = TouchableNativeFeedback.Ripple(this.props.ripple,!!borderless)
        }

        return (
            <Component { ...props } >
                { children }
            </Component>
        );
    }
}

Touchable.defaultProps = {
    touchComponent:TOUCHABLE_TYPES.HIGHLIGHT,
    ripple:'rgba(0,0,0,.4)',
    borderless:false
};

Touchable.propTypes = {
    /**
     * 设置点击效果，参考react native 官方文档
     * 参数必须为 HIGHLIGHT:TouchableHighlight,FEEDBACK:TouchableNativeFeedback,WITHOUT_FEEDBACK:TouchableWithoutFeedback,OPACITY:TouchableOpacity中的一个
     */
    touchComponent:PropTypes.any,
    /**
     * 设置touchable组件样式，例如背景色等
     */
    style:PropTypes.object,
    /**
     * touchComponent 为 TOUCHABLE_TYPES.HIGHLIGHT 该默认值为0.85， 为 TOUCHABLE_TYPES.OPACITY 时， 该默认值为 0.3
     */
    activeOpacity:PropTypes.number,
    /**
     * 仅在android上，且点击效果为FEEDBACK:TouchableNativeFeedback时有效
     */
    ripple:PropTypes.string,
    /**
     * 仅在android上，且点击效果为FEEDBACK:TouchableNativeFeedback时有效。设置feedback是否向外扩散
     */
    borderless:PropTypes.bool
};


