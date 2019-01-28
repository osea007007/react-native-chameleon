import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Proptypes from 'prop-types';
import {Touchable, TOUCHABLE_TYPES} from "@xzchameleon/touchable";
import Input from "@xzchameleon/input";


/**
 * ---
 * page: searchBar
 * ---
 *
 *
 * 搜索框,通常用于页面顶部
 */

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchContent:this.props.searchContent,
            preSearchContent:this.props.searchContent,
        }
    }

    static getDerivedStateFromProps({searchContent}, preState) {
        if (searchContent !== preState.preSearchContent) {
            return {
                searchContent,
                preChecked: searchContent,
            }
        }
        return null;
    }

    onTextChanged = (text) => {
        let {onValueChanged} = this.props;
        this.setState({
            searchContent:text,
        }, () => {
            onValueChanged && onValueChanged(text);
        });
    };
    clearIconClick = () => {
        let { clearHandler } = this.props;
        this.setState({
            searchContent:''
        }, () => {
            clearHandler && clearHandler();
        });
    };


    render(){
        let {containerStyle, searchIcon, searchIconStyle, textInputStyle, clearIcon, clearIconStyle, placeholder, placeholderTextColor, autoFocus} = this.props;
        return(
            <View style={[SearchBarStyle.container, containerStyle]}>
                {
                    searchIcon && <Image source={searchIcon} style={[SearchBarStyle.searchIconStyle, searchIconStyle]}/>
                }
                <Input
                    style={[SearchBarStyle.searchInputStyle, textInputStyle]}
                    androidunderlineColorAndroid={'transparent'}
                    placeholder={placeholder}
                    placeholderTextColor = {placeholderTextColor}
                    autoFocus = {autoFocus}
                    value={this.state.searchContent}
                    onChangeText={(text) => this.onTextChanged(text)}
                />
                {
                    clearIcon &&
                    <Touchable touchComponent={TOUCHABLE_TYPES.WITHOUT_FEEDBACK} onPress={this.clearIconClick}>
                        <Image source={clearIcon} style={clearIconStyle}/>
                    </Touchable>
                }
            </View>
        );
    }
}

SearchBar.defaultProps = {
    placeholderTextColor:'#999999',
    autoFocus:false,
};

SearchBar.propTypes = {
    /**
     * 搜索框的文本内容
     */
    searchContent:Proptypes.string,
    /**
     * searchBar 容器的样式
     */
    containerStyle:Proptypes.any,
    /**
     * 搜索图标
     */
    searchIcon:Proptypes.any,
    /**
     * 设置搜索图标的样式
     */
    searchIconStyle:Proptypes.any,
    /**
     * 清除图标
     */
    clearIcon:Proptypes.any,
    /**
     * 设置清除图标的样式
     */
    clearIconStyle:Proptypes.any,
    /**
     * 设置搜索输入框的样式
     */
    textInputStyle:Proptypes.any,
    /**
     * 搜索框内默认内容
     */
    placeholder:Proptypes.string,
    /**
     * 搜索框默认内容的文字颜色
     */
    placeholderTextColor:Proptypes.string,
    /**
     * 是否自动聚焦,默认 false
     */
    autoFocus:Proptypes.bool,
    /**
     * 搜索文本变化时的回调
     */
    onValueChanged:Proptypes.any,
    /**
     * 点击清除回调
     */
    clearHandler:Proptypes.any,
};

const SearchBarStyle = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        height:42,
        padding:4,
        backgroundColor:'#ffffff',
    },
    searchInputStyle:{
        marginLeft:4,
        marginRight:4,
        flex:1,
    },
});

export default SearchBar;

