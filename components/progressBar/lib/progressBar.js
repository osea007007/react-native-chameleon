import React, {PureComponent} from "react";
import {Animated, Easing, View} from "react-native";
import propTypes from 'prop-types';

const INDETERMINATE_WIDTH_FACTOR = 0.3;
const BAR_WIDTH_ZERO_POSITION =
    INDETERMINATE_WIDTH_FACTOR / (1 + INDETERMINATE_WIDTH_FACTOR);

export class ProgressBar extends PureComponent {
    constructor(props) {
        super(props);
        // const progress = Math.min(Math.max(props.progress, 0), 1);
        this.state = {
            show:false,
            width: 0,
            progress: new Animated.Value(0),
            animationValue: new Animated.Value(BAR_WIDTH_ZERO_POSITION),
        };
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

    isShow = () => {
        return this.state.show;
    };
    loadEnd = () => {
        Animated.timing(
            this.state.progress
        ).stop();
        this.setState({show: false})
    };

    loading() {
        this.setState({show: true}, () => {
            Animated.timing(this.state.progress, {
                duration: this.props.duration,
                easing: Easing.linear,
                toValue: this.props.progress / this.props.totalValue,
                useNativeDriver: this.props.useNativeDriver,
            }).start();
        });
    }

    render() {
        const {
            borderColor,
            borderRadius,
            borderWidth,
            children,
            color,
            height,
            style,
            unfilledColor,
            width,
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

        return (
            this.state.show ?
                <View>
                    <View
                        style={[containerStyle, style]}
                        {...restProps}
                    >
                        <Animated.View style={progressStyle}/>
                    </View>
                    {children}
                </View>
                : null
        )
    }

    componentDidMount() {
        this.loading();
    }

}

ProgressBar.propTypes = {
    /**
     * 容器宽
     */
    width: propTypes.number,
    /**
     * 容器高
     */
    height: propTypes.number,
    /**
     * 进度条外边框的颜色
     */
    borderColor: propTypes.string,
    /**
     * 两端圆角值，默认4
     */
    borderRadius: propTypes.number,
    /**
     * 外边框的宽度，设置0外边线消失
     */
    borderWidth: propTypes.number,
    /**
     * 加载中的进度条颜色
     */
    color: propTypes.string,
    /**
     * 加载完成动画结束回调
     */
    onEnd: propTypes.func,
    /**
     * 当前加载完成的进度数值
     */
    progress: propTypes.number,
    /**
     * 容器样式
     */
    style: propTypes.any,
    /**
     * 总进度数值，默认为1
     */
    totalValue: propTypes.number,
    /**
     * 剩余进度的颜色
     */
    unfilledColor: propTypes.string,
    /**
     * 是否使用本机驱动程序进行动画制作
     */
    useNativeDriver: propTypes.bool,
};

ProgressBar.defaultProps = {
    borderRadius: 4,
    borderWidth: 1,
    color: '#364682',
    height: 6,
    borderColor: '#dddddd',
    onEnd: () => {
    },
    progress: 0,
    width: 150,
    totalValue: 1,
    unfilledColor: '#dddddd',
    useNativeDriver: false,
};
