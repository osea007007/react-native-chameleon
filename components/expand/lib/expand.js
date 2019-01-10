import React, {Component} from "react";
import {View, Text, StyleSheet, findNodeHandle, Animated, UIManager} from 'react-native';
import Proptypes from 'prop-types';
import {Touchable} from "../../touchable";
import RotateIcon from "../../rotateIcon";

/**
 * ---
 * page: expand
 * ---
 *
 *
 * 内容展现收缩组件
 */

class Expand extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: new Animated.Value(0),
            expand: false,
        }
    }

    calculateHeight(ref) {
        const handle = findNodeHandle(ref);
        return new Promise((resolve) => {
            UIManager.measure(handle, (height) => {
                resolve(height);
            });
        });
    }


    expandChanged = () => {
        let { onExpandChanged } = this.props;
        onExpandChanged && onExpandChanged(this.state.expand);
    };

    show = (ref) => {
        let {time} = this.props;
        this.calculateHeight(ref).then((height) => {
            console.log(height);
            Animated.timing(this.state.height, {
                toValue: 100,
                duration: time,
            }).start(() => {
                this.setState({
                    expand:!this.state.expand,
                })
            });
        });
    };

    hide = () => {
        let {time} = this.props;
        Animated.timing(this.state.height, {
            toValue: 0,
            duration: time,
        }).start(() => {
            this.setState({
                expand:!this.state.expand,
            })
        });
    };

    render() {
        let {headerContainerStyle, headerLeftText, headerLeftTextStyle, showHeader, headerTitle, headerTitleStyle, children, contentStyle} = this.props;
        return (
            <View>
                <View>
                    <Touchable>
                        <View style={[ExpandStyle.header, headerContainerStyle]}>
                            <Text style={[ExpandStyle.left, headerLeftTextStyle]}>{headerLeftText}</Text>
                            {
                                showHeader &&
                                <Text style={[ExpandStyle.headerTitle, headerTitleStyle]}>{headerTitle}</Text>
                            }
                            <RotateIcon onValueChanged={this.expandChanged}/>
                        </View>
                    </Touchable>
                </View>
                <Animated.View style={[contentStyle, {
                    height: this.state.height
                }]}>
                    {children}
                </Animated.View>
            </View>
        )
    }
}

Expand.defaultProps = {
    showHeader: false,
    time: 300,
};

Expand.propTypes = {
    /**
     * 动画时间
     */
    time: Proptypes.number,
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
    /**
     * 点击右侧箭头触发的回调
     */
    onExpandChanged:Proptypes.any,
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