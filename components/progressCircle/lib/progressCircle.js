import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import {Animated, ART, Easing, StyleSheet, Text, View} from 'react-native';
import Arc from "./component/Arc";

const CIRCLE = Math.PI * 2;

const AnimatedArc = Animated.createAnimatedComponent(Arc);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center',
    },
});


export class ProgressCircle extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this._value = 0;
        this.newScore = 0;
        this.state = {
            show:false,
            progressValue: 0,
            progress: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.loading();
    }

    isShow = () => {
        return this.state.show;
    };
    loadEnd = () => {
        Animated.timing(
            this.state.progress
        ).stop();
        this.setState({show: false});
    };

    loading() {
        this.setState({show: true},() => {
            Animated.timing(this.state.progress, {
                duration: this.props.duration,
                easing: Easing.inOut(Easing.ease),
                toValue: this.props.progress / this.props.totalValue,
                useNativeDriver: this.props.useNativeDriver,
            }).start();
        });
    }

    componentDidUpdate() {
        this.oldScore = this.newScore;
        this.newScore = this.props.progress/this.props.totalValue;
        Animated.timing(this.state.progress, {
            duration: this.props.duration * (this.newScore - this.oldScore),
            easing: Easing.inOut(Easing.ease),
            toValue: this.props.progress / this.props.totalValue,
            useNativeDriver: this.props.useNativeDriver,
        }).start(() => {
            if(this.props.progress ===this.props.totalValue){
                this.props.onEnd();
            }
        });
    }

    render() {
        const {
            color,
            children,
            direction,
            fill,
            formatText,
            progress,
            showsText,
            strokeCap,
            totalValue,
            textStyle,
            thickness,
            unfilledColor,
            width,
            height,
        } = this.props;
        let minSize=width>=height?height:width;
        const radius = minSize / 2;

        const textOffset = thickness;
        const textSize = minSize - textOffset * 2;
        const angle = Animated.multiply(this.state.progress, new Animated.Value(CIRCLE));
        return (
            this.state.show ?
            <View style={[styles.container, {width:width,height:height}]} >
                <ART.Surface
                    width={minSize}
                    height={minSize}

                >

                    <Arc
                        radius={minSize / 2}
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
                {showsText && (
                    <View
                        style={{
                            position: 'absolute',
                            width: textSize,
                            height: textSize,
                            borderRadius: textSize / 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={[
                                {
                                    color,
                                    fontSize: textSize / 4.5,
                                    fontWeight: '300',
                                },
                                textStyle,
                            ]}
                        >
                            {formatText(progress/totalValue)}
                        </Text>
                    </View>
                ) }
            </View>: null
        );
    }
}
ProgressCircle.propTypes = {
    /**
     * 容器宽
     */
    width:propTypes.number,
    /**
     * 容器高
     */
    height:propTypes.number,
    /**
     * 加载中的进度条颜色
     */
    color: propTypes.string,
    /**
     * 剩余进度的颜色
     */
    unfilledColor: propTypes.string,
    /**
     * 完整一次加载完成所需时间
     */
    duration: propTypes.number,
    /**
     * 圆的方向clockwise或counter-clockwise
     */
    direction: propTypes.oneOf(['clockwise', 'counter-clockwise']),
    /**
     * 填充内圈的颜色
     */
    fill: propTypes.string,
    /**
     * 百分数换算方法
     */
    formatText: propTypes.func,
    /**
     * 加载完成动画结束回调
     */
    onEnd: propTypes.func,
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
     * 是否使用本机驱动程序进行动画制作
     */
    useNativeDriver:propTypes.bool,

};

ProgressCircle.defaultProps = {
    width:200,
    height:200,
    color: '#364682',
    unfilledColor: '#dddddd',
    duration: 3000,
    direction: 'clockwise',
    formatText: progress => `${Math.round(progress * 100)}%`,
    onEnd:()=>{},
    progress: 0,
    showsText: false,
    strokeCap: 'round',
    totalValue: 1,
    thickness: 3,
    useNativeDriver:false,
};
