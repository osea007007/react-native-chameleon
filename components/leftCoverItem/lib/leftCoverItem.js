import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import Proptypes from 'prop-types';
import {Touchable, TOUCHABLE_TYPES} from "../../touchable";

/**
 * ---
 * page: LeftCoverItem
 * ---
 *
 *
 * 封面图片 标题 描述
 */
class LeftCoverItem extends Component {
    render() {
        let {height, defaultSource, source, title, describe, titleStyle, describeStyle, coverContainerStyle, coverStyle, contentStyle, onPress} = this.props;
        return(
            <Touchable touchComponent={TOUCHABLE_TYPES.OPACITY} onPress={onPress}>
                <View style={[LeftCoverItemStyle.container, {height:height}]}>
                    <View style={[LeftCoverItemStyle.coverContainerStyle, coverContainerStyle]}>
                        <Image defaultSource={defaultSource} source={source} style={coverStyle}/>
                    </View>
                    <View style={[LeftCoverItemStyle.content, contentStyle]}>
                        <Text style={[LeftCoverItemStyle.title, titleStyle]}>{title}</Text>
                        <Text style={[LeftCoverItemStyle.describe, describeStyle]}>{describe}</Text>
                    </View>
                </View>
            </Touchable>
        );
    }
}

LeftCoverItem.defaultProps = {
    height:102,
};


LeftCoverItem.propTypes = {
    /**
     * 设置 item 的高度
     */
    height:Proptypes.number,
    /**
     * 设置默认图片
     */
    defaultSource:Proptypes.any,
    /**
     * 设置封面图片
     */
    source:Proptypes.any,
    /**
     * 设置标题
     */
    title:Proptypes.string,
    /**
     * 设置描述
     */
    describe:Proptypes.string,
    /**
     * 设置标题样式
     */
    titleStyle:Proptypes.any,
    /**
     * 设置描述样式
     */
    describeStyle:Proptypes.any,
    /**
     * 设置封面样式
     */
    coverStyle:Proptypes.any,
    /**
     *  设置内容部分的样式
     */
    contentStyle:Proptypes.any,
};

const LeftCoverItemStyle = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    coverContainerStyle:{
        justifyContent:'center',
    },
    content:{
        backgroundColor:'#ffffff',
        paddingLeft: 8,
        flex: 1,
        justifyContent: 'space-between',
    },
    title:{
        color:'#262626',
        fontSize:16,
        lineHeight:18,
        marginTop: 8,
        marginRight: 8,
        flexWrap: 'wrap'
    },
    describe:{
        fontSize:14,
        marginBottom: 8,
        color: '#999999',
    }
});

export default LeftCoverItem;
