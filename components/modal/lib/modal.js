import React, {Component} from 'react';
import {Modal as RNModal, StyleSheet, View, Animated, Easing, Platform, Dimensions} from "react-native";
import propTypes from 'prop-types';
import { Touchable, TOUCHABLE_TYPES } from '@xzchameleon/touchable';

const IS_IOS = Platform.OS === 'ios';
const DEVICE_HEIGHT = Dimensions.get('window').height;

/**
 * ---
 * page: modal
 * ---
 * 
 *  * 支持react native modal 除visible外的所有属性  
 *  * 支持自定义背景色（默认 rgba(0,0,0,.4) ）
 *  * 修改react native modal 默认的slide动画
 *  * 默认模态框内容区域背景色为白色
 *  * 默认点击空白区域关闭模态框
 *  * **注意** 【ios】react native 无法同时打开俩个modal， show hide 方法均有提供callback
 */
export class Modal extends Component {
    translate = new Animated.Value(0);

    constructor(props) {
        super(props);
        this.state = {
            show:false
        };
    }

    isShow = () => {
        return this.state.show;
    };

    show = (callback) => {
        let { animationType } = this.props;
        if(animationType === 'slide') {
            this.setState({
                show:true
            },() => {
                Animated.timing(this.translate,{
                    duration:400,
                    useNativeDriver:true,
                    easing:Easing.bezier(.18,1.06,.46,.99),
                    toValue:1
                }).start(callback);
            });
        }else {
            this.setState({
                show:true
            },callback);
        }
    };

    hide = (callBack) => {
        if(IS_IOS) {
            this.hideCallBack = callBack;
            this.setState({
                show:false
            });
        }else {
            this.setState({
                show:false
            },callBack);
        }
    };

    handleBack = () => {
        this.props.androidEnableBackCloseModal && this.hide();
    };

    render() {
        let {children, backgroundColor, enableBlankPressCloseModal, containerStyle, animationType, wrapperStyle, cancelCallBack, ...ModalProps} = this.props;
        return (
            <RNModal
                onDismiss={() => this.hideCallBack && this.hideCallBack() }
                onRequestClose={this.handleBack}
                transparent={true}
                visible={this.state.show}
                animationType={animationType === 'slide' ? 'fade' : animationType}
                {...ModalProps}
            >
                <Touchable touchComponent={TOUCHABLE_TYPES.WITHOUT_FEEDBACK} onPress={() => enableBlankPressCloseModal && this.hide(cancelCallBack)}>
                    {/*设置背景色*/}
                    <View style={[ModalStyle.container, {backgroundColor}]}>
                        {/*可用于自定义内容位置，当为slide时，提供动画功能*/}
                        {
                            animationType === 'slide' ? (
                                <Animated.View style={{flex:1,transform:[{ translateY:this.translate.interpolate({
                                            inputRange:[0,1],
                                            outputRange:[DEVICE_HEIGHT,0]
                                        }) }],...containerStyle}}>
                                    <ModalContainerView style={wrapperStyle}>
                                        { children }
                                    </ModalContainerView>
                                </Animated.View>
                            ) :  (
                                <View style={{flex:1,...containerStyle}}>
                                    <ModalContainerView style={wrapperStyle}>
                                        { children }
                                    </ModalContainerView>
                                </View>
                            )
                        }
                    </View>
                </Touchable>
            </RNModal>
        );
    }
}

// 防止点击弹框内容区域关闭模态框
class ModalContainerView extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            // 拦截点击事件
            <View style={{backgroundColor:'#ffffff'}} onStartShouldSetResponder={() => true} onResponderTerminationRequest={() => false} { ...this.props }/>
        );
    }
}


Modal.defaultProps = {
    backgroundColor: 'rgba(0,0,0,.4)',
    androidEnableBackCloseModal:true,
    enableBlankPressCloseModal:true
};

Modal.propTypes = {
    /**
     * 设置空白区域背景色
     */
    backgroundColor:propTypes.string,
    /**
     * 是否允许android返回按钮关闭模态框
     */
    androidEnableBackCloseModal:propTypes.bool,
    /**
     * 是否允许点击空白区域关闭模态框
     */
    enableBlankPressCloseModal:propTypes.bool
};

const ModalStyle = StyleSheet.create({
    container: {
        flex: 1
    }
});