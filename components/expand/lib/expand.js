import React, {Component} from "react";
import {View, Text, StyleSheet, Animated} from 'react-native';
import Proptypes from 'prop-types';
import RotateIcon from "@xzchameleon/rotateicon";
import {Touchable, TOUCHABLE_TYPES} from "@xzchameleon/touchable";

/**
 * ---
 * page: expand
 * ---
 *
 *
 * 内容展开收缩组件
 */

class Expand extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: new Animated.Value(),
            expand: false,
            contentHeight: 0,
        }
    }

    show = () => {
        this.setState({expand: true});
    };

    hide = () => {
        this.setState({expand: false});
    };
    isShow = () => {
        return this.state.expand;
    };

    componentDidUpdate() {
        let {time} = this.props;
        Animated.timing(
            this.state.height,
            {
                toValue: this.state.expand ? this.state.contentHeight : 0,
                duration: time,
            }).start();
    };

    getHeight = (event) => {
        if (this.state.contentHeight > 0) {
            return;
        }
        this.setState({
            contentHeight: event.nativeEvent.layout.height,
        });
        this.state.height.setValue(this.state.expand ? this.state.contentHeight : 0);
    };
    onExpandChanged = () => {
      if(this.state.expand){
          this.hide();
      } else {
          this.show();
      }
    };

    render() {
        let {containerStyle, headerContainerStyle, headerLeftText, headerLeftTextStyle, showHeader, headerTitle, headerTitleStyle, children, contentStyle} = this.props;
        return (
            <View style={containerStyle}>
                {
                    showHeader &&
                    <Touchable touchComponent={TOUCHABLE_TYPES.FEEDBACK} onPress={this.onExpandChanged}>
                        <View style={[ExpandStyle.header, headerContainerStyle]}>
                            <Text style={[ExpandStyle.left, headerLeftTextStyle]}>{headerLeftText}</Text>
                            <Text style={[ExpandStyle.headerTitle, headerTitleStyle]}>{headerTitle}</Text>
                            <RotateIcon open={this.state.expand}/>
                        </View>
                    </Touchable>
                }
                <Animated.View style={[contentStyle, {height: this.state.height}]} onLayout={this.getHeight}>
                    {children}
                </Animated.View>
            </View>
        )
    }
}

Expand.defaultProps = {
    showHeader: true,
    time: 300,
};

Expand.propTypes = {
    /**
     * 动画时间
     */
    time: Proptypes.number,
    /**
     * 设置整个容器的样式
     */
    containerStyle: Proptypes.any,
    /**
     * 设置 header 容器的样式
     */
    headerContainerStyle: Proptypes.any,
    /**
     * 设置左侧文字
     */
    headerLeftText: Proptypes.string,
    /**
     * 左侧文字的样式
     */
    headerLeftTextStyle: Proptypes.any,
    /**
     * 是否显示中间标题,默认 false
     */
    showHeader: Proptypes.bool,
    /**
     * 中间标题
     */
    headerTitle: Proptypes.string,
    /**
     * 中间标题样式
     */
    headerTitleStyle: Proptypes.any,
    /**
     * 收起内容的样式
     */
    contentStyle: Proptypes.any,
};


const ExpandStyle = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    left: {
        marginLeft: 6,
        fontSize: 15,
        color: 'red',
    },
    headerTitle: {
        fontSize: 17,
        color: '#000',
    },
});

export default Expand;