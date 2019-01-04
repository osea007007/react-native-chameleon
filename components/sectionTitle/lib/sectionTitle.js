import React from 'react';
import {Image, Text, View, StyleSheet} from "react-native";
import PropTypes from 'prop-types';
import {Touchable, TOUCHABLE_TYPES} from "../../touchable";
import {RowLine} from "../../rowLine";

/**
 * ---
 * page: sectionTitle
 * ---
 *
 *
 * 章节标题
 * 底部有一条灰色的线
 * paddingHorizontal:15
 */
export function SectionTitle({source, title, titleStyle, subTitle, subTitleStyle, containerStyle, onPress}) {
    return (
        <Touchable touchComponent={TOUCHABLE_TYPES.WITHOUT_FEEDBACK} onPress={onPress && onPress}>
            <View style={[SectionTitleStyle.container, containerStyle]}>
                <View style={SectionTitleStyle.content}>
                    <View style={SectionTitleStyle.leftView}>
                        <Image source={source} style={{marginRight: 10}}/>
                        <Text style={[SectionTitleStyle.title,titleStyle]}>{title}</Text>
                    </View>
                    {
                        subTitle && <View style={SectionTitleStyle.rightView}>
                            <Text style={[SectionTitleStyle.subTitle,subTitleStyle]}>{subTitle}</Text>
                            <Image source={require('../../../assets/images/Return.png')}/>
                        </View>
                    }
                </View>
                <RowLine/>
            </View>
        </Touchable>
    );
}

const SectionTitleStyle = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#ffffff',
    },
    content: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    leftView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: '#001f72'
    },
    rightView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subTitle: {
        fontSize: 14,
        color: '#999999',
        marginRight: 8,
    }
});
SectionTitle.defaultProps = {
    source: require('../../../assets/images/decoration_blue.png'),
};

SectionTitle.propTypes = {
    /**
     * 左边图片
     */
    source: PropTypes.any,
    /**
     * 左边标题文字
     */
    title: PropTypes.string.isRequired,
    /**
     * 左边标题文字样式
     */
    titleStyle: PropTypes.object,
    /**
     * 右边标题文字
     */
    subTitle: PropTypes.string,
    /**
     * 右边标题文字样式
     */
    subTitleStyle: PropTypes.object,
    /**
     * 容器样式
     */
    containerStyle: PropTypes.object,
    /**
     * 点击事件
     */
    onPress: PropTypes.func
};

