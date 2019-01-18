import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import {Text, View, Animated, Easing, StyleSheet} from "react-native";
import Svg, {Circle} from 'react-native-svg';

let AnimatedCircle = Animated.createAnimatedComponent(Circle);

export class ProgressHalfCircle extends PureComponent {
    constructor(props) {
        super(props);
        let {height, width, circleWidth, offsetRotate} = this.props;
        let R = (Math.min(width, height) - circleWidth * 2) / 2;
        let perimeter = Math.PI * 2 * R;
        let position = R + circleWidth;
        let offset = (offsetRotate / 180) * (Math.PI * R);
        this.state = {
            show: false,
            R, // 半径
            offset, // 外层圆弧没有背景色的一段
            position, // 圆弧圆心位置
            perimeter, // 周长
            progress: new Animated.Value(0),
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

    }

    componentDidMount() {
        this.loading();
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
        let {
            color,
            formatText,
            unfilledColor,
            height,
            width,
            circleWidth,
            offsetRotate,
            progress,
            children,
            showsText,
            textStyle,
            totalValue,
            titleText,
            titleStyle
        } = this.props;
        let {offset, position, perimeter, R} = this.state;
        let svgWidth = Math.min(height, width);
        const textSize = svgWidth;
        return (this.state.show ?
                <View style={{height, width}}>
                    <Svg width={svgWidth} height={svgWidth}>
                        <Circle
                            cx={position}
                            cy={position}
                            r={R}
                            origin={`${ position },${ position }`}
                            rotation={90 + offsetRotate / 2}
                            stroke={unfilledColor}
                            strokeWidth={circleWidth}
                            strokeLinecap="round"
                            fill="transparent"
                            strokeDasharray={[perimeter]}
                            strokeDashoffset={offset}
                        />

                        <AnimatedCircle
                            cx={position}
                            cy={position}
                            r={R}
                            origin={`${ position },${ position }`}
                            rotation={90 + offsetRotate / 2}
                            stroke={progress ? color : 'transparent'}
                            strokeWidth={circleWidth}
                            strokeLinecap="round"
                            fill="transparent"
                            strokeDasharray={[perimeter]}
                            strokeDashoffset={this.circleProgress}
                        />

                    </Svg>
                    {
                        showsText &&
                        <Animated.View style={[ProgressHalfCircleStyle.content, {opacity: this.state.opacity}]}>
                            <Text style={[{fontSize:textSize/9},titleStyle]}>{titleText}</Text>
                            <Text style={ [{fontSize:textSize/4.5,color: 'white'},textStyle]}>
                                {formatText(progress / totalValue)}
                            </Text>
                            {children}
                        </Animated.View>
                    }
                </View> : null
        );
    }
}

ProgressHalfCircle.propTypes = {
    /**
     * 容器宽
     */
    width: propTypes.number,
    /**
     * 容器高
     */
    height: propTypes.number,
    /**
     * 加载中的进度条颜色
     */
    color: propTypes.string,
    /**
     * 剩余进度的颜色
     */
    unfilledColor: propTypes.string,//
    children: propTypes.node,
    /**
     * 完整一次加载完成所需时间
     */
    duration: propTypes.number,
    /**
     * 分数换算方法
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
     * 总进度值，默认1
     */
    totalValue: propTypes.number,
    /**
     * 头部文字样式
     */
    titleStyle: propTypes.any,
    /**
     * 文字样式
     */
    textStyle: propTypes.any,
    /**
     * 描边宽度，就是指圆环的宽度
     */
    thickness: propTypes.number,
    /**
     * 进度内部头部文字
     */
    titleText: propTypes.string,
    /**
     * 是否使用本机驱动程序进行动画制作
     */
    useNativeDriver: propTypes.bool,
};

ProgressHalfCircle.defaultProps = {
    width: 200,
    height: 200,
    circleWidth: 10,
    color: '#364682',
    formatText: progress => `${Math.round(progress * 100)}`,
    offsetRotate: 120,
    onEnd: () => {
    },
    unfilledColor: '#dddddd',
    showsText: false,
    score: 0.1,
    titleText: '组合评分',
    totalValue: 1,
};

const ProgressHalfCircleStyle = StyleSheet.create({
    content: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        alignItems: 'center',
        paddingTop: 40
    },
});