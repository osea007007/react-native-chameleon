import React, {PureComponent} from "react";
import {ART, Animated, Easing, View, StyleSheet} from "react-native";
import propTypes from 'prop-types';
import Svg, {Circle} from 'react-native-svg';
import Arc from "./component/Arc";

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

const CIRCLE = Math.PI * 2;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center',
    },
});
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedArc = Animated.createAnimatedComponent(Arc);
const INDETERMINATE_WIDTH_FACTOR = 0.3;
const BAR_WIDTH_ZERO_POSITION =
    INDETERMINATE_WIDTH_FACTOR / (1 + INDETERMINATE_WIDTH_FACTOR);

export class Progress extends PureComponent {
    constructor(props) {
        super(props);
        // const progress = Math.min(Math.max(props.progress, 0), 1);
        let {height, width, thickness, offsetRotate} = this.props;
        let R = (Math.min(width, height) - thickness * 2) / 2;
        let perimeter = Math.PI * 2 * R;
        let position = R + thickness;
        let offset = (offsetRotate / 180) * (Math.PI * R);
        this.state = {
            show: false,
            width: 0,
            progress: new Animated.Value(0),
            animationValue: new Animated.Value(BAR_WIDTH_ZERO_POSITION),
            R, // 半径
            offset, // 外层圆弧没有背景色的一段
            position, // 圆弧圆心位置
            perimeter, // 周长
            opacity: new Animated.Value(0),
        };
        this.circleProgress = this.state.progress.interpolate({
            inputRange: [
                0,
                this.props.totalValue ? this.props.totalValue : 1,
            ],
            outputRange: [
                perimeter,
                offset
            ]
        });
    }


    componentDidMount() {
        this.loading();
    }


    isShow = () => {
        return this.state.show;
    };
    loadStop = () => {
        Animated.timing(
            this.state.progress
        ).stop();
        this.setState({show: false})
    };

    loading() {

        let {proType} = this.props;


        if (proType === 'halfCircle') {
            this.state.progress.setValue(0);
            this.state.opacity.setValue(0);
            this.setState({show: true}, () => {
                Animated.parallel([
                    Animated.timing(
                        this.state.progress,
                        {
                            toValue: this.props.progress,
                            easing: Easing.linear,
                            duration: 800
                        }
                    ),
                    Animated.timing(
                        this.state.opacity,
                        {
                            toValue: 1,
                            easing: Easing.linear,
                            duration: 800
                        }
                    ),
                ]).start();
            });
        } else {
            this.setState({show: true}, () => {
                Animated.timing(this.state.progress, {
                    duration: this.props.duration,
                    easing: Easing.linear,
                    toValue: this.props.progress / this.props.totalValue,
                    useNativeDriver: this.props.useNativeDriver,
                }).start();
            });
        }
    }

    componentDidUpdate() {
        this.oldScore = this.newScore;
        this.newScore = this.props.progress / this.props.totalValue;
        Animated.timing(this.state.progress, {
            duration: this.props.duration * (this.newScore - this.oldScore),
            easing: Easing.inOut(Easing.ease),
            toValue: this.props.progress / this.props.totalValue,
            useNativeDriver: this.props.useNativeDriver,
        }).start(() => {
            if (this.props.progress === this.props.totalValue) {
                this.props.onEnd();
            }
        });
    }


    render() {
        const {
            width,
            height,
            offsetRotate,
            color,
            children,
            direction,
            fill,
            strokeCap,
            thickness,
            borderColor,
            borderRadius,
            borderWidth,
            style,
            unfilledColor,
            proType,
            ...restProps
        } = this.props;

        const innerWidth = Math.max(0, width || this.state.width) - borderWidth * 2;
        const containerStyle = {
            width,
            borderWidth,
            borderColor: borderColor,
            borderRadius,
            overflow: 'hidden',
            backgroundColor: unfilledColor,
        };
        const progressStyle = {
            backgroundColor: color,
            height,

            transform: [
                {
                    translateX: this.state.animationValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [innerWidth * -INDETERMINATE_WIDTH_FACTOR, innerWidth],
                    }),
                },
                {
                    translateX: this.state.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [innerWidth / -2, 0],
                    }),
                },
                {
                    // Interpolation a temp workaround for https://github.com/facebook/react-native/issues/6278
                    scaleX: this.state.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.0001, 1],
                    }),
                },
            ],
        };

        let pWidth = Math.min(height, width);
        const radius = pWidth / 2;
        const angle = Animated.multiply(this.state.progress, new Animated.Value(CIRCLE));
        const mAngle = Animated.multiply(this.state.progress, new Animated.Value(Math.PI * 2 - Math.PI * offsetRotate / 180));
        const halfAngle = Animated.add(new Animated.Value(Math.PI + Math.PI * offsetRotate / 360), mAngle);


        return (
            <View>
                {
                    proType === 'line' && this.state.show &&
                    <View>
                        <View
                            style={[containerStyle, style]}
                        >
                            <Animated.View style={progressStyle}/>
                        </View>
                        {children}
                    </View>
                }
                {
                    proType === 'circle' && this.state.show &&
                    <View style={[styles.container, style, {width: width, height: height}]}>
                        <ART.Surface
                            width={pWidth}
                            height={pWidth}
                        >

                            <Arc
                                radius={pWidth / 2}
                                startAngle={0}
                                endAngle={2 * Math.PI}
                                stroke={unfilledColor}
                                strokeCap={strokeCap}
                                strokeWidth={thickness}
                            />
                            {
                                this.props.progress > 0 && <AnimatedArc
                                    fill={fill}
                                    radius={radius}
                                    startAngle={0}
                                    endAngle={angle}
                                    direction={direction}
                                    stroke={color}
                                    strokeCap={strokeCap}
                                    strokeWidth={thickness}
                                />
                            }
                        </ART.Surface>
                        <View
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {children}
                        </View>

                    </View>
                }
                {
                    proType === 'halfCircle' && this.state.show &&
                    <View style={{height, width}}>
                        <ART.Surface
                            width={pWidth}
                            height={pWidth}

                        >

                            <Arc
                                radius={pWidth / 2}
                                startAngle={Math.PI + Math.PI * offsetRotate / 360}
                                endAngle={Math.PI * 3 - Math.PI * offsetRotate / 360}
                                stroke={unfilledColor}
                                strokeCap={strokeCap}
                                strokeWidth={thickness}
                            />
                            {
                                this.props.progress > 0 && <AnimatedArc
                                    fill={fill}
                                    radius={radius}
                                    startAngle={Math.PI + Math.PI * offsetRotate / 360}
                                    endAngle={halfAngle}
                                    direction={direction}
                                    stroke={color}
                                    strokeCap={strokeCap}
                                    strokeWidth={thickness}
                                />
                            }
                        </ART.Surface>
                        <View
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {children}
                        </View>
                    </View>
                }
            </View>)
    }
}

Progress.defaultProps = {
    proType: 'line',//进度条标签
    width: 100,//容器宽
    height: 100,//容器高
    color: '#364682',//加载中的进度条颜色
    unfilledColor: '#dddddd',//剩余进度的颜色
    duration: 3000,//调整动画速度
    direction: 'clockwise',//圆进度加载的方向clockwise或counter-clockwise
    formatText: progress => `${Math.round(progress * 100)}%`,//百分数换算方法
    offsetRotate: 120,//半圆消失的角度
    titleText: '组合评分',
    onEnd: () => {
    },//加载完成动画结束回调
    style: {width: 150, height: 6},
    progress: 0,//当前加载进度值
    strokeCap: 'round',//填充圆环的首尾样式
    totalValue: 1,//总进度数值，默认为1
    thickness: 3,//描边宽度，就是指圆环的宽度
    useNativeDriver: false,
    borderRadius: 4,//两端圆角值，默认4
    borderWidth: 0,//外边线的宽度，设置0外边线消失
    borderColor: '#dddddd',//进度条外边框的颜色
};

Progress
    .propTypes = {
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
     * 调整动画速度
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
     * 填充圆环的首尾样式
     */
    strokeCap: propTypes.oneOf(['butt', 'square', 'round']),
    /**
     * 总进度数值，默认为1
     */
    totalValue: propTypes.number,
    /**
     * 描边宽度，就是指圆环的宽度
     */
    thickness: propTypes.number,
    /**
     * 圆环缺口角度，满值360，默认120
     */
    offsetRotate: propTypes.number,
    /**
     * 描边宽度，就是指圆环的宽度
     */
    useNativeDriver: propTypes.bool,
};
