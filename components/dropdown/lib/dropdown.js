import React, {PureComponent} from 'react';
import {Modal} from "@xzchameleon/modal";
import {Dimensions, Animated, findNodeHandle, UIManager} from "react-native";
import propTypes from 'prop-types';
import {Touchable, TOUCHABLE_TYPES} from "../../../components/touchable";

/**
 * ---
 * page: dropdown
 * ---
 *
 *  * 支持react native modal 除visible外的所有属性
 *  * 默认点击空白区域关闭模态框
 */
export class DropDown extends PureComponent {
    height = new Animated.Value(0);

    constructor(props) {
        super(props);
        this.state = {
            top: 0
        }
    }

    show = (ele) => {
        this.getPosition(ele).then((top) => {
            this.setState({top}, () => {
                let {openTime, extraTop} = this.props;
                this.modal.show(() => {
                    Animated.timing(
                        this.height,
                        {
                            duration: openTime,
                            toValue: Dimensions.get('window').height - (this.state.top + extraTop || 0)
                        }).start();
                });
            })
        });
    };

    isShow = () => {
        return this.modal.isShow();
    };

    getPosition = (ele) => {
        return new Promise((resolve) => {
            let handle = findNodeHandle(ele);
            UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
                resolve(pageY + height)
            });
        });
    };

    render() {
        let {children, extraTop, ...props} = this.props;
        let {top} = this.state;
        return (
            <Modal {...props} ref={(modal) => this.modal = modal} wrapperStyle={{height: 0}}>
                {/* 距离顶部的距离 */}
                <Touchable touchComponent={TOUCHABLE_TYPES.WITHOUT_FEEDBACK} onPress={() => this.hide()}>
                    <Animated.View
                        style={{overflow: 'hidden', height: this.height, marginTop: top + extraTop, zIndex: 100}}>
                            {
                                children
                            }
                    </Animated.View>
                </Touchable>
            </Modal>
        );
    }

    componentDidMount() {
        let {closeTime} = this.props;
        this.modalHide = this.modal.hide;
        this.modal.hide = () => {
            Animated.timing(
                this.height,
                {
                    duration: closeTime,
                    toValue: 0
                }).start(() => {
                this.modalHide();
            });
        };
        this.hide = this.modal.hide;
    }
}

DropDown.defaultProps = {
    openTime: 1000,
    closeTime: 500,
    extraTop: 0,
};

DropDown.propTypes = {
    /**
     * 设置展开动画时间
     */
    openTime: propTypes.number,
    /**
     * 设置收起动画时间
     */
    closeTime: propTypes.number,
    /**
     * 距离顶部额外的高度设置
     */
    extraTop: propTypes.number,
};