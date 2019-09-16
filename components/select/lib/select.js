import React, {Component} from "react";
import {View, Text, StyleSheet, Picker, Platform} from 'react-native';
import Proptypes from 'prop-types';
import {Touchable, TOUCHABLE_TYPES} from "@xzchameleon/touchable";
import {Modal} from "@xzchameleon/modal";
import {RowLine} from "@xzchameleon/rowline";
import {Icon} from "@xzchameleon/icon";

/**
 * ---
 * page: select
 * ---
 *
 *
 * 模态选择组件
 */
const IS_IOS = Platform.OS === 'ios';

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: this.props.selectedValue,
            index: 0,
            preValue: ''
        };
    }

    static getDerivedStateFromProps({selectedValue}, state) {
        if (selectedValue !== state.preValue) {
            return {
                selectedValue,
                preValue:selectedValue
            }
        }
        return null;
    }

    valueChanged = () => {
        let {onValueChanged, dataSource} = this.props;
        //如果未滑动 picker,点击确定默认设置第一项为选中项
        this.setState({
            selectedValue: dataSource[this.state.index],
        }, () => {
            onValueChanged && onValueChanged(this.state.selectedValue, this.state.index);
            this.modal.hide();
        });
    };
    valueChangedForAndroid = (value, index) => {
        let { selectText } = this.props;
        if (value === selectText) {
            return;
        }
        let {onValueChanged} = this.props;
        this.setState({
            selectedValue: value,
            index: index - 1
        }, () => {
            onValueChanged && onValueChanged(this.state.selectedValue, this.state.index);
        });
    };
    //点击取消的回调
    cancelPicker = () => {
        this.modal.hide();
    };

    render() {
        let {dataSource, style, textStyle, imgStyle, headerLeftText, headerCenterText, headerRightText, leftTextStyle, centerTextStyle, rightTextStyle, enabled, mode, itemStyle, prompt, selectText} = this.props;
        return (
            IS_IOS ?
                <Touchable touchComponent={TOUCHABLE_TYPES.OPACITY} onPress={() => enabled ? this.modal.show() : null}>
                    <View style={[SelectStyle.container, style]}>
                        <Text style={[SelectStyle.text, textStyle]}>{this.state.selectedValue}</Text>
                        <Icon style={[SelectStyle.img, imgStyle]} type={'AntDesign'} name={'caretdown'} size={12} color={'#383838'}/>
                        <Modal ref={(modal) => this.modal = modal} containerStyle={{justifyContent: 'flex-end'}} animationType={'slide'} enableBlankPressCloseModal={false}>
                            <View style={SelectStyle.pickerContainer}>
                                <View style={SelectStyle.header}>
                                    <View style={SelectStyle.headerText}>
                                        <View style={SelectStyle.left}>
                                            <Touchable touchComponent={TOUCHABLE_TYPES.WITHOUT_FEEDBACK}
                                                       onPress={this.cancelPicker}>
                                                <View style={{ paddingHorizontal:5, paddingVertical:5 }}>
                                                    <Text style={[SelectStyle.leftText, leftTextStyle]}>{headerLeftText}</Text>
                                                </View>
                                            </Touchable>
                                        </View>
                                        <View style={SelectStyle.center}>
                                            <Text style={[SelectStyle.centerText, centerTextStyle]}>{headerCenterText}</Text>
                                        </View>
                                        <View style={SelectStyle.right}>
                                            <Touchable touchComponent={TOUCHABLE_TYPES.WITHOUT_FEEDBACK}
                                                       onPress={this.valueChanged}>
                                                <View style={{ paddingHorizontal:5, paddingVertical:5 }}>
                                                    <Text style={[SelectStyle.rightText, rightTextStyle]}>{headerRightText}</Text>
                                                </View>
                                            </Touchable>
                                        </View>
                                    </View>
                                    <RowLine height={1}/>
                                </View>
                                <Picker
                                    selectedValue={dataSource[this.state.index]}
                                    style={{width: '100%', height: 216}}
                                    onValueChange={(value, index) => this.setState({
                                        selectedValue: value,
                                        index: index
                                    }, () => {
                                        //每次选择内容发生变化时调用
                                        let {pickerValueChanged} = this.props;
                                        pickerValueChanged && pickerValueChanged(this.state.selectedValue, this.state.index);
                                    })}
                                    itemStyle={itemStyle}
                                >
                                    {
                                        dataSource.map((value, index) => {
                                            return (
                                                <Picker.Item label={value} value={value} key={index + ''}/>
                                            )
                                        })
                                    }
                                </Picker>
                            </View>
                        </Modal>
                    </View>
                </Touchable>
                :
                <Picker
                    style={[SelectStyle.pickerAndroid, textStyle]}
                    selectedValue={this.state.selectedValue}
                    onValueChange={this.valueChangedForAndroid}
                    enabled={enabled}
                    mode={mode}
                    prompt={prompt}
                >
                    {
                        [selectText,...dataSource].map((value, index) => {
                            return (
                                <Picker.Item label={value} value={value} key={index + ''}/>
                            )
                        })
                    }
                </Picker>
        );
    }
}

const SelectStyle = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pickerContainer: {
        backgroundColor: '#ffffff',
    },
    pickerAndroid:{
        width:'100%',
        // height:42,
        flex:1,
        justifyContent:'center',
    },
    text: {
        marginLeft: 8,
        fontSize: 15,
        color: '#383838',
    },
    img: {
        marginRight: 15,
    },
    header: {
        height: 42,
        backgroundColor: '#fff',
    },
    headerText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    left: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 4,
    },
    leftText: {
        fontSize: 15,
        color: '#383838',
    },
    center: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerText: {
        fontSize: 16,
        color: '#383838',
    },
    right: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 4,
    },
    rightText: {
        fontSize: 15,
        color: '#383838',
    },

});

Select.defaultProps = {
    selectedValue: '请选择',
    selectText: '请选择',
    enabled:true,
    mode:'dialog',
};

Select.propTypes = {
    /**
     * 每次选择的内容发生变化时回调
     */
    pickerValueChanged:Proptypes.any,
    /**
     * 选择完成后的回调
     */
    onValueChanged:Proptypes.any,
    /**
     * 数据源
     */
    dataSource: Proptypes.array,
    /**
     * 默认选项
     */
    selectedValue: Proptypes.string,
    /**
     * 点击容器的样式
     */
    style: Proptypes.any,
    /**
     * 【iOS】左侧选择文本的样式
     */
    textStyle: Proptypes.any,
    /**
     * 【iOS】设置头部左侧文字
     */
    headerLeftText: Proptypes.string,
    /**
     * 【iOS】设置头部标题
     */
    headerCenterText: Proptypes.string,
    /**
     * 【iOS】设置头部右侧文字
     */
    headerRightText: Proptypes.string,
    /**
     * 【iOS】设置头部左侧文本样式
     */
    leftTextStyle:Proptypes.any,
    /**
     * 【iOS】设置头部标题样式
     */
    centerTextStyle:Proptypes.any,
    /**
     * 【iOS】设置头部右侧文本样式
     */
    rightTextStyle:Proptypes.any,
    /**
     * 选择是否可用
     */
    enable:Proptypes.bool,
    /**
     * 【Android】可以指定在用户点击选择器时，以怎样的形式呈现选项
     * 'dialog': 显示一个模态对话框。默认选项
     * 'dropdown': 以选择器所在位置为锚点展开一个下拉框
     */
    mode:Proptypes.string,
    /**
     * 【iOS】指定应用在每项标签上的样式
     */
    itemStyle:Proptypes.any,
    /**
     * 【Android】设置选择器的提示字符串。在Android的对话框模式中用作对话框的标题
     */
    prompt:Proptypes.string,
    /**
     * 【Android】数据源首项数据，默认"请选择"，主要为了多语言显示
     */
    selectText:Proptypes.string,
};

export default Select;
