import React,{ PureComponent } from 'react';
import {View} from "react-native";
import PropTypes from 'prop-types';

/**
 * ---
 * category: line
 * page: rowDashLine
 * range: 1
 * ---
 *
 *
 * 横向的虚线 支持自定义虚线间距，支持自定义虚线线段长度
 */
export class RowDashLine extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            content:[]
        }
    }

    renderDash = ({ nativeEvent }) => {
        let { width } = nativeEvent.layout;
        let { dashWidth,dashDistance,height,lineColor } = this.props;
        let dashNum = parseInt((width+dashDistance*2)/(dashWidth+dashDistance*2));
        let arr = [];
        for(let i = 0; i < dashNum; i++) {
            arr.push(<View style={{ width:dashWidth, height, backgroundColor:lineColor }} key={i}/>)
        }
        this.setState({ content:arr });
    };

    render() {
        let { height, left, right, containerColor } = this.props;
        return (
            <View style={{ paddingLeft:left, paddingRight:right, height, backgroundColor:containerColor }}>
                <View style={{ flexDirection:'row', justifyContent:'space-between'}} onLayout={this.renderDash}>
                    {
                        this.state.content
                    }
                </View>
            </View>
        );
    }
}

RowDashLine.defaultProps = {
    dashWidth:5,
    dashDistance:2,
    height:.5,
    left:0,
    right:0,
    lineColor:'#eeeeee',
    containerColor:'white'
};


RowDashLine.propTypes = {
    /**
     *  虚线宽度
     */
    dashWidth:PropTypes.number,
    /**
     * 虚线之间的间距
     */
    dashDistance:PropTypes.number,
    /**
     * 虚线高度
     */
    height:PropTypes.number,
    /**
     * 虚线左侧距离
     */
    left:PropTypes.number,
    /**
     * 虚线右侧距离
     */
    right:PropTypes.number,
    /**
     * 虚线颜色
     */
    lineColor:PropTypes.string,
    /**
     * 虚线背景色
     */
    containerColor:PropTypes.string
};