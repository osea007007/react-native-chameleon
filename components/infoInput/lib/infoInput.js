import React, {Component} from "react";
import PropTypes from 'prop-types';
import {TextInput, View, StyleSheet} from 'react-native';
import {Icon} from '@xzchameleon/icon';
import {Touchable, TOUCHABLE_TYPES} from '@xzchameleon/touchable';

/**
 * ---
 * page: InfoInput
 * ---
 *
 *
 * * 信息输入框组件
 * * ref返回input
 * ##### props参数：

 prop | type | default | required | description
 ---- | :----: | :-------: | :--------: | -----------
 **containerStyle** | `Object` |  | false | 容器样式
 **leftComponent** | `*` |  | false | 左边组件 接收Icon参数和自定义组件
 **leftContainerStyle** | `Object` |  | false | 左边组件容器样式
 **rightComponent** | `*` |  | false | 右边组件 接收Icon参数和自定义组件
 **rightContainerStyle** | `Object` |  | false | 右边组件容器样式
 **rightOnPress** | `Function` |  | false | 右边组件点击事件
 */
export const InfoInput = React.forwardRef((props, ref) => {
    return (
        <InfoInputContent infoInputRef={ref} {...props}/>
    )
});

class InfoInputContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {infoInputRef, containerStyle, leftComponent, leftContainerStyle, rightComponent, rightContainerStyle, rightOnPress, style, ...inputProps} = this.props
        return (
            <View
                style={[InfoInputStyle.container, leftComponent || {paddingLeft: 11}, rightComponent || {paddingRight: 11}, containerStyle]}>
                {
                    leftComponent && <View style={[InfoInputStyle.leftContainer, leftContainerStyle]}>
                        {
                            !React.isValidElement(leftComponent) ?
                                <Icon  {...leftComponent}/> :
                                leftComponent
                        }
                    </View>
                }

                <View style={[InfoInputStyle.centerContainer]}>
                    <TextInput ref={infoInputRef} style={[InfoInputStyle.input, style]}
                               underlineColorAndroid={'transparent'}
                               placeholderTextColor={'rgba(255,255,255,.3)'} {...inputProps}/>
                </View>
                {
                    rightComponent && (<Touchable touchComponent={TOUCHABLE_TYPES.WITHOUT_FEEDBACK}
                                                  onPress={() => {
                                                      rightOnPress && rightOnPress()
                                                  }}>
                        <View style={[InfoInputStyle.rightContainer, rightContainerStyle]}>
                            {
                                !React.isValidElement(rightComponent) ?
                                    <Icon  {...rightComponent}/> :
                                    rightComponent
                            }
                        </View>
                    </Touchable>)
                }

            </View>
        )
    }

}

InfoInput.propTypes = {
    /**
     * 容器样式
     */
    containerStyle: PropTypes.object,
    /**
     * 左边组件 接收Icon参数和自定义组件
     */
    leftComponent: PropTypes.any,
    /**
     * 左边组件容器样式
     */
    leftContainerStyle: PropTypes.object
    /**
     * 右边组件 接收Icon参数和自定义组件
     */,
    rightComponent: PropTypes.any,
    /**
     * 右边组件容器样式
     */
    rightContainerStyle: PropTypes.object,
    /**
     * 右边组件点击事件
     */
    rightOnPress: PropTypes.func
};
const InfoInputStyle = StyleSheet.create({
    container: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: .5,
        borderColor: 'rgba(255,255,255,.3)',
        borderRadius: 4,
    },
    leftContainer: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 11,
    },
    rightContainer: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 11,
    },
    centerContainer: {
        flex: 1,
        height: 44,
        flexDirection: 'row'
    },
    input: {
        height: 44,
        flex: 1,
        color: 'white',
        fontSize: 15,
        padding: 0
    }
});
export default InfoInput;
