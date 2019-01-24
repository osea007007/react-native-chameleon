import React,{Component} from "react";
import {Switch as AndroidSwitch, Platform, View, StyleSheet} from 'react-native';
import { Switch as IosSwitch } from 'react-native-switch';
import Proptypes from 'prop-types';

const IS_IOS = Platform.OS === 'ios';

/**
 * ---
 * page: switch
 * ---
 *
 *
 * 开关按钮，支持ios和android原生switch，支持ios和android使用相同样式的switch
 */
export class Switch extends Component {
    constructor(props){
        super(props);
        this.state={
            value:this.props.value
        }
    }

    static getDerivedStateFromProps({ value }) {
        if(value !== undefined) {
            return { value };
        }
        return null;
    }

    handleClick=(val)=>{
        this.setState({value:val}, () => {
            if(this.props.value !== undefined &&  IS_IOS && this.props.useNative !== true) {
                this.switch.animateSwitch(this.state.value);
            }
            this.props.onChange && this.props.onChange(val)
        });
    };

    render() {
        let {disabled, trackColor, thumbColor, useNative} = this.props;
        return(
            <View style={{ alignItems:'flex-start' }}>
                {
                    (!useNative && IS_IOS) ?
                        <View style={{ paddingVertical:IS_IOS ? 6 : 0, paddingLeft:8, paddingRight:10 }}>
                            <IosSwitch
                                disabled={disabled}
                                value={this.state.value}
                                barHeight={14}
                                ref={(component) => this.switch = component }
                                circleSize={22}
                                backgroundActive={trackColor['true']}
                                backgroundInactive={trackColor['false']}
                                circleActiveColor={thumbColor['true']}
                                circleInActiveColor={thumbColor['false']}
                                innerCircleStyle={{borderColor:'transparent'}}
                                switchWidthMultiplier={1.5}
                                changeValueImmediately={true}
                                onValueChange={(val) => this.handleClick(val)}
                            />
                        </View>
                        :
                        <View>
                            <AndroidSwitch
                                disabled={disabled}
                                trackColor={trackColor}
                                thumbColor={useNative && IS_IOS ? '' : (this.state.value ?  thumbColor['true'] : thumbColor['false'])}
                                style={{ alignSelf:'flex-start' }}
                                value={this.state.value}
                                onValueChange={(val) => this.handleClick(val)}
                            />
                        </View>
                }
            </View>
        )
    }
}

Switch.defaultProps = {
    disabled:false,
    trackColor:{
        false:'#d7d7d7',
        true:'#F1AD88',
    },
    thumbColor:{
        false:'#f1f1f1',
        true:'#ee9922'
    },
    useNative:false
};

Switch.propTypes = {
    /**
     *  是否禁用switch按钮
     */
    disabled:Proptypes.bool,
    /**
     * switch 按钮在打开和关闭时的背景色
     */
    trackColor:Proptypes.shape({
        /**
         * 关闭时的背景色
         */
        false:Proptypes.string,
        /**
         * 打开时的背景色
         */
        true:Proptypes.string
    }),
    /**
     * 【android】switch 按钮在打开和关闭时圆圈的颜色
     */
    thumbColor:Proptypes.shape({
        /**
         * 关闭时圆圈的颜色
         */
        false:Proptypes.string,
        /**
         * 打开时圆圈的颜色
         */
        true:Proptypes.string
    }),
    /**
     * 指定switch的状态
     */
    value:Proptypes.bool,
    /**
     * 在switch 按钮状态值发生改变时调用
     */
    onChange:Proptypes.func,
    /**
     * 是否使用android和ios原生switch组件, 为true时ios上的switch圆圈无法修改颜色，总是为白色
     */
    useNative:Proptypes.bool
};


