import React, {PureComponent} from "react";
import propTypes from 'prop-types';
import {ProgressBar} from "@xzchameleon/progressbar";
import {ProgressCircle} from "@xzchameleon/progresscircle";
import {ProgressHalfCircle} from "@xzchameleon/progresshalfcircle";

/**
 * ---
 * page: progress
 * ---
 *
 *  * 支持3中样式的进度条
 *  * 支持自定义背景色（默认 #dddddd ）
 *  * 提供function 用来关闭动画和隐藏进度条
 *  * line（线条形） circle（圆形） halfCircle（半圆形）
 *  *
 */

export class Progress extends PureComponent {
    getRef=()=>{
        return  this.progress;
    }
    render() {
        let {proType,...props}=this.props;
        return (
            proType!=='line'?proType==='circle'?<ProgressCircle {...props} ref={(e) => this.progress = e}/>:<ProgressHalfCircle {...props} ref={(e) => this.progress = e}/>:<ProgressBar {...props} ref={(e) => this.progress = e}/>
        )
    }

}

Progress.defaultProps = {
    proType: 'line',
};

Progress.propTypes = {
    /**
     * 进度条样式选择
     */
    proType: propTypes.oneOf(['line', 'circle', 'halfCircle']),
    /**
     * 进度条外边框的颜色
     */
    borderColor: propTypes.string,
    /**
     * 两端圆角值，默认4
     */
    borderRadius: propTypes.number,
    /**
     * 外边线的宽度，设置0外边线消失
     */
    borderWidth: propTypes.number,
    /**
     * 容器宽度
     */
    width: propTypes.number,
    /**
     * 容器高度
     */
    height: propTypes.number,
    /**
     * 容器样式
     */
    style: propTypes.any,//容器样式
    /**
     * 加载中的进度条颜色
     */
    color: propTypes.string,
    /**
     * 剩余进度的颜色
     */
    unfilledColor: propTypes.string,
    children: propTypes.node,
    /**
     * 完整一次加载完成所需时间
     */
    duration: propTypes.number,
    /**
     * 圆的方向clockwise或counter-clockwise
     */
    direction: propTypes.oneOf(['clockwise', 'counter-clockwise']),//
    /**
     * 填充内圈的颜色
     */
    fill: propTypes.string,
    /**
     * 百分数换算方法
     */
    formatText: propTypes.func,
    /**
     * 当前加载完成的进度数值
     */
    progress: propTypes.number,
    /**
     * 是否显示内部文字
     */
    showsText: propTypes.bool,
    /**
     * 填充圆环的首尾样式
     */
    strokeCap: propTypes.oneOf(['butt', 'square', 'round']),
    /**
     * 总进度数值，默认为1
     */
    totalValue: propTypes.number,
    /**
     * 文字样式
     */
    textStyle: propTypes.any,
    /**
     * 描边宽度，就是指圆环的宽度
     */
    thickness: propTypes.number,
    /**
     * 描边宽度，就是指圆环的宽度
     */
    useNativeDriver: propTypes.bool,
};