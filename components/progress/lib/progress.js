import React, {PureComponent} from "react";
import {ART, Animated, Easing, View, StyleSheet} from "react-native";
import propTypes from 'prop-types';
import Arc from "./component/Arc";

const CIRCLE = Math.PI * 2;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center',
    },
});
const AnimatedArc = Animated.createAnimatedComponent(Arc);
const INDETERMINATE_WIDTH_FACTOR = 0.3;
const BAR_WIDTH_ZERO_POSITION =
    INDETERMINATE_WIDTH_FACTOR / (1 + INDETERMINATE_WIDTH_FACTOR);

/**
 * ---
 * page: progress
 * ---
 *
 *  * 支持3中样式的进度条
 *  * 支持自定义背景色（默认 #dddddd ）
 *  * 提供function 用来关闭动画和隐藏进度条
 *  * line（线条形） circle（圆形） halfCircle（半圆形）
 */
export class Progress extends PureComponent {
    constructor(props) {
        super(props);
        let {height, width, thickness, offsetRotate} = this.props;
        let R = (Math.min(width, height) - thickness * 2) / 2;
        this.state = {
            show: false,
            width: 0,
            progress: this.props.animated ? new Animated.Value(0) : this.props.progress,
            animationValue: new Animated.Value(BAR_WIDTH_ZERO_POSITION),
        };
    }

    componentDidMount() {
        this.loadStart();
    }

    isShow = () => {
        return this.state.show;
    };
    loadStop = () => {
        const {loadStop} = this.props;
        if (this.props.animated) {
            Animated.timing(
                this.state.progress
            ).stop();
            this.setState({show: false})
        } else {
            this.setState({show: false});
        }
        loadStop && loadStop();
    };

    loadStart() {
        let { animated, loadStart} = this.props;
        if (animated) {
                this.setState({show: true}, () => {
                    Animated.timing(this.state.progress, {
                        duration: this.props.duration,
                        easing: Easing.inOut(Easing.ease),
                        toValue: this.props.progress / this.props.totalValue,
                        useNativeDriver: this.props.type==='line'?this.props.useNativeDriver:false,
                    }).start();
                });
        } else {
            this.setState({show: true});
        }
        loadStart && loadStart();
    }

    componentDidUpdate() {
        if (this.props.animated) {
            this.oldScore = this.newScore;
            this.newScore = this.props.progress / this.props.totalValue;
            Animated.timing(this.state.progress, {
                duration: this.props.duration * (this.newScore - this.oldScore),
                easing: Easing.inOut(Easing.ease),
                toValue: this.props.progress / this.props.totalValue,
                useNativeDriver: this.props.type==='line'?this.props.useNativeDriver:false,
            }).start(() => {
                if (this.props.progress === this.props.totalValue) {
                    this.props.onEnd();
                }
            });
        }
    }


    render() {
        const {
            width,
            height,
            childStyle,
            offsetRotate,
            color,
            children,
            direction,
            strokeCap,
            thickness,
            borderColor,
            borderRadius,
            borderWidth,
            progress,
            unfilledColor,
            type,
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
            height: height,
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
        const angle = this.props.animated ? Animated.multiply(this.state.progress, new Animated.Value(CIRCLE)) : progress * CIRCLE;
        const mAngle = Animated.multiply(this.state.progress, new Animated.Value(Math.PI * 2 - Math.PI * offsetRotate / 180));
        const halfAngle = this.props.animated ? Animated.add(new Animated.Value(Math.PI + Math.PI * offsetRotate / 360), mAngle)
            : (Math.PI + Math.PI * offsetRotate / 360) + progress * (Math.PI * 2 - Math.PI * offsetRotate / 180);


        return (
            <View style={{width: width, height: height}} {...restProps}>
                {
                    type === 'line' && this.state.show &&
                    <View>
                        <View
                            style={[containerStyle]}
                        >
                            <Animated.View style={progressStyle}/>
                        </View>
                        {children}
                    </View>
                }
                {
                    type === 'circle' && this.state.show &&
                    <View style={[styles.container, {width: width, height: height}]}>
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
                            style={[{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                alignItems: 'center',
                                justifyContent: 'center',
                            },childStyle]}
                        >
                            {children}
                        </View>

                    </View>
                }
                {
                    type === 'halfCircle' && this.state.show &&
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
                            style={[{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                alignItems: 'center',
                                justifyContent: 'center',
                            },childStyle]}
                        >
                            {children}
                        </View>
                    </View>
                }
            </View>)
    }
}

Progress.defaultProps = {
    animated: true,
    type: 'line',//进度条标签
    width: 100,//容器宽
    height: 100,//容器高
    color: '#364682',//加载中的进度条颜色
    unfilledColor: '#dddddd',//剩余进度的颜色
    duration: 3000,//调整动画速度
    direction: 'clockwise',//圆进度加载的方向clockwise或counter-clockwise
    offsetRotate: 120,//半圆消失的角度
    onEnd: () => {},//加载完成动画结束回调
    progress: 0,//当前加载进度值
    strokeCap: 'butt',//填充圆环的首尾样式
    totalValue: 1,//总进度数值，默认为1
    thickness: 3,//描边宽度，就是指圆环的宽度
    useNativeDriver: true,
    borderRadius: 4,//两端圆角值，默认4
    borderWidth: 0,//外边线的宽度，设置0外边线消失
    borderColor: '#dddddd',//进度条外边框的颜色
};

Progress.propTypes = {
    /**
     * 是否进行动画
     */
    animated: propTypes.bool,
    /**
     * child 样式设置
     */
    childStyle: propTypes.any,
    /**
     * 进度条样式选择
     */
    type: propTypes.oneOf(['line', 'circle', 'halfCircle']),
    /**
     * type='line'时 外边框的颜色
     */
    borderColor: propTypes.string,
    /**
     * type='line'时 两端圆角值，默认4
     */
    borderRadius: propTypes.number,
    /**
     * type='line'时 外边线的宽度，设置0外边线消失
     */
    borderWidth: propTypes.number,
    /**
     * 容器宽度，type='line'时为进度条长度，否则取Math.min(容器宽，容器高)为圆直径
     */
    width: propTypes.number,
    /**
     * 容器高度，type='line'时为进度条高度，否则取Math.min(容器宽，容器高)为圆直径
     */
    height: propTypes.number,
    /**
     * 加载中的进度条颜色
     */
    color: propTypes.string,
    /**
     * 剩余进度的颜色
     */
    unfilledColor: propTypes.string,
    /**
     * 内部子组件
     */
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
     * 是否使用本机驱动程序来制作动画
     */
    useNativeDriver: propTypes.bool,
    /**
     * 加载开启回调
     */
    loadStart: propTypes.func,
    /**
     * 加载结束回调
     */
    loadStop: propTypes.func,
    /**
     * 加载完成回调
     */
    onEnd: propTypes.func,
};
