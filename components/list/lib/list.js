import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import PropTypes from 'prop-types';
import { Touchable, TOUCHABLE_TYPES } from "@xzchameleon/touchable";
import { Icon } from '@xzchameleon/icon';
import { RowLine } from "@xzchameleon/rowline";


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
export function List({ leftIcon, leftText, leftTextStyle, rightIcon, rightText, rightTextStyle, containerStyle, onPress, disable, leftComponent, rightComponent, showLine, lineProps, hideRightComponent }) {
    return (
        <Touchable touchComponent={onPress ? TOUCHABLE_TYPES.HIGHLIGHT : TOUCHABLE_TYPES.WITHOUT_FEEDBACK} onPress={() => {
            (onPress && !disable) && onPress()
        }}>
            <View style={[ListStyle.container, containerStyle]}>
                <View style={ListStyle.content}>
                    {
                        leftComponent || <View style={ListStyle.leftView}>
                            {
                                leftIcon && (!React.isValidElement(leftIcon) ?
                                    <Icon style={{ marginRight: 8 }} {...leftIcon} /> :
                                    leftIcon)
                            }
                            <Text style={[ListStyle.leftText, leftTextStyle]}>{leftText}</Text>
                        </View>
                    }
                    {
                        !hideRightComponent
                        &&
                        (
                            rightComponent || (React.isValidElement(rightIcon) && rightIcon) || (
                                <View style={ListStyle.rightView}>
                                    { rightText && <Text style={[ListStyle.rightText, rightTextStyle]}>{rightText}</Text> }
                                    {
                                        onPress !== undefined && ((!React.isValidElement(rightIcon) ?
                                            <Icon type={'AntDesign'} name={'right'} size={16} style={{ marginLeft: 8 }} color={'#999999'} {...rightIcon} /> :
                                            rightIcon))
                                    }
                                </View>
                            )
                        )
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftText: {
        fontSize: 16,
        color: '#262626'
    },
    rightView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightText: {
        fontSize: 16,
        color: '#999999'
    }
});
List.defaultProps = {
    disable: false,
    showLine: true,
    hideRightComponent: false
};


List.propTypes = {
    /**
     * 左边图标(使用icon参数 或 传入组件)
     */
    leftIcon: PropTypes.any,
    /**
     * 左边文字
     */
    leftText: PropTypes.string,
    /**
     * 左边文字样式
     */
    leftTextStyle: PropTypes.object,
    /**
     * 右边图标 (使用icon参数 或 传入组件)
     */
    rightIcon: PropTypes.any,
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
    leftComponent: PropTypes.any,
    /**
     * 右边自定义组件
     */
    rightComponent: PropTypes.any,
    /**
     * 底边线
     */
    showLine: PropTypes.bool.isRequired,
    /**
     * 底边线props
     */
    lineProps: PropTypes.object,
    /**
     * 是否隐藏右侧的icon
     */
    hideRightComponent: PropTypes.bool
};



