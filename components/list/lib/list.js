import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import PropTypes from 'prop-types';
import {Touchable, TOUCHABLE_TYPES} from "@xzchameleon/touchable";
import {AntDesign as Icon} from '@expo/vector-icons';
import {RowLine} from "@xzchameleon/rowline";


/**
 * ---
 * page: list
 * ---
 *
 *
 * 章节标题
 * 底部有一条灰色的线
 * paddingHorizontal:15
 */
export function List({leftIcon, leftIconStyle, leftText, leftTextStyle, rightIcon, rightIconStyle, rightText, rightTextStyle, containerStyle, onPress, disable, leftComponent, rightComponent, showLine, lineProps}) {
    return (
        <Touchable touchComponent={TOUCHABLE_TYPES.WITHOUT_FEEDBACK} onPress={() => {
            (onPress && !disable) && onPress()
        }}>
            <View style={[ListStyle.container, containerStyle]}>
                <View style={ListStyle.content}>
                    {
                        leftComponent ? leftComponent() : <View style={ListStyle.leftView}>
                            {
                                leftIcon && (typeof leftIcon === 'string' ?
                                    <Icon name={leftIcon} style={[ListStyle.leftIcon, leftIconStyle]}/> :
                                    <LeftIcon style={[ListStyle.leftIcon, leftIconStyle]}/>)
                            }
                            <Text style={[ListStyle.leftText, leftTextStyle]}>{leftText}</Text>
                        </View>
                    }
                    {
                        rightComponent ? rightComponent() : <View style={ListStyle.leftView}>
                            <Text style={[ListStyle.rightText, rightTextStyle]}>{rightText}</Text>
                            {
                                rightIcon && (typeof rightIcon === 'string' ?
                                    <Icon name={rightIcon} style={[ListStyle.rightIcon, rightIconStyle]}/> :
                                    <RightIcon style={[ListStyle.rightIcon, rightIconStyle]}/>)
                            }
                        </View>
                    }
                </View>
                {
                    showLine && <RowLine left={15} {...lineProps} />
                }
            </View>
        </Touchable>
    )
}

const ListStyle = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#ffffff',
    },
    content: {
        minHeight: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8
    },
    leftView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftIcon: {
        marginRight: 8,
        fontSize: 16
    },
    leftText: {
        fontSize: 16,
        color: '#262626'
    },
    rightView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightIcon: {
        marginLeft: 8,
        fontSize: 16,
        color: '#999999'
    },
    rightText: {
        fontSize: 16,
        color: '#999999'
    }
});
List.defaultProps = {
    disable: false,
    showLine:true
};

List.propTypes = {
    /**
     * 左边图标(可使用图片或icon)
     */
    LeftIcon: PropTypes.any,
    /**
     * 左边图标样式
     */
    leftIconStyle: PropTypes.object,
    /**
     * 左边文字
     */
    leftText: PropTypes.string,
    /**
     * 左边文字样式
     */
    leftTextStyle: PropTypes.object,
    /**
     * 右边图标
     */
    RightIcon: PropTypes.any,
    /**
     * 右边图标样式
     */
    rightIconStyle: PropTypes.object,
    /**
     * 右边文字
     */
    rightText: PropTypes.string,
    /**
     * 右边文字样式
     */
    rightTextStyle: PropTypes.object,
    /**
     * 容器样式
     */
    containerStyle: PropTypes.object,
    /**
     * 点击事件
     */
    onPress: PropTypes.func,
    /**
     * 是否禁用
     */
    disable: PropTypes.bool.isRequired,
    /**
     * 左边自定义组件
     */
    LeftComponent: PropTypes.func,
    /**
     * 右边自定义组件
     */
    RightComponent: PropTypes.func,
    /**
     * 底边线
     */
    showLine: PropTypes.bool.isRequired,
    /**
     * 底边线props
     */
    lineProps: PropTypes.object
};



