import React, {Component} from 'react';
import {ScrollView, Text, View} from "react-native";
import {DemoList} from "../component/DemoList";
import SearchBar from "../../components/searchBar";


class SearchBarDemo extends Component {
    static navigationOptions = {
        title: 'CheckBoxDemo'
    };

    constructor(props) {
        super(props);
        this.state = {
            searchText: 'search content',
        }
    }

    searchChanged = (text) => {
        this.setState({
            searchText: text,
        });
    };


    render() {
        return (
                <ScrollView>
                    <DemoList title={'设置 containerStyle'}>
                        <SearchBar searchIcon={require('../../components/searchBar/assets/image/search.png')}
                                   containerStyle={{backgroundColor:'#9BBBFF'}}
                                   placeholder={'enter search content'} onValueChanged={this.searchChanged}/>
                        <Text>{this.state.searchText}</Text>
                    </DemoList>

                    <DemoList title={'有左侧搜索icon'}>
                        <SearchBar searchIcon={require('../../components/searchBar/assets/image/search.png')}
                                   placeholder={'enter search content'} onValueChanged={this.searchChanged}/>
                        <Text>{this.state.searchText}</Text>
                    </DemoList>

                    <DemoList title={'无左侧搜索icon'}>
                        <SearchBar placeholder={'enter search content'} onValueChanged={this.searchChanged}/>
                        <Text>{this.state.searchText}</Text>
                    </DemoList>

                    <DemoList title={'无清除icon'}>
                        <SearchBar searchIcon={require('../../components/searchBar/assets/image/search.png')}
                                   placeholder={'enter search content'} onValueChanged={this.searchChanged}/>
                        <Text>{this.state.searchText}</Text>
                    </DemoList>

                    <DemoList title={'有清除icon'}>
                        <SearchBar searchIcon={require('../../components/searchBar/assets/image/search.png')}
                                   clearIcon={require('../../components/searchBar/assets/image/clear_search.png')}
                                   placeholder={'enter search content'} onValueChanged={this.searchChanged}/>
                        <Text>{this.state.searchText}</Text>
                    </DemoList>

                    <DemoList title={'两边都没有icon'}>
                        <SearchBar placeholder={'enter search content'} onValueChanged={this.searchChanged}/>
                        <Text>{this.state.searchText}</Text>
                    </DemoList>

                    <DemoList title={'改变搜索框默认文字颜色'}>
                        <SearchBar placeholder={'enter search content'} placeholderTextColor={'#FFF60A'} onValueChanged={this.searchChanged}/>
                        <Text>{this.state.searchText}</Text>
                    </DemoList>

                    <DemoList title={'最后一个:自动聚焦'}>
                        <SearchBar autoFocus={true} placeholder={'enter search content'} placeholderTextColor={'#FFF60A'} onValueChanged={this.searchChanged}/>
                        <Text>{this.state.searchText}</Text>
                    </DemoList>
                </ScrollView>
        );
    }
}

export default SearchBarDemo;