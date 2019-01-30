import React, {Component} from 'react';
import {ScrollView, Text, View} from "react-native";
import {DemoList} from "../component/DemoList";
import CheckBox from "../../components/checkBox/lib/checkBox";


class CheckboxDemo extends Component {
    static navigationOptions = {
        title: 'CheckBoxDemo'
    };

    constructor(props) {
        super(props);
        this.state = {
            checked1: false,
            checked2: false,
            checked3: true,
            checked4: true,
            checked5: false,
            checked6: false,
            checked7: false,
            checked8: false,
            checked9: false,
            checked10: false,
        };
    }

    //受控
    change1 = () => {
        this.setState({
            checked1: !this.state.checked1,
        });
    };
    change3 = () => {
        this.setState({
            checked3: !this.state.checked3,
        });
    };
    change5 = () => {
        this.setState({
            checked5: !this.state.checked5,
        });
    };
    change6 = () => {
        this.setState({
            checked6: !this.state.checked6,
        });
    };
    change7 = () => {
        this.setState({
            checked7: !this.state.checked7,
        });
    };
    change8 = () => {
        this.setState({
            checked8: !this.state.checked8,
        });
    };
    change9 = () => {
        this.setState({
            checked9: !this.state.checked9,
        });
    };
    change10 = () => {
        this.setState({
            checked10: !this.state.checked10,
        });
    };

    render() {
        return (
            <ScrollView>
                <DemoList title={'未选中,可点击'}>
                    <CheckBox
                        checked={this.state.checked1}
                        text={'Apple'}
                        onChange={this.change1}/>
                </DemoList>
                <DemoList title={'未选中,不可点击'}>
                    <CheckBox
                        checked={this.state.checked2}
                        disable={true}
                        text={'Apple'}
                        onChange={this.change1}/>
                </DemoList>

                <DemoList title={'选中,可点击'}>
                    <CheckBox
                        checked={this.state.checked3}
                        text={'Apple'}
                        onChange={this.change3}/>
                </DemoList>
                <DemoList title={'选中,不可点击'}>
                    <CheckBox
                        checked={this.state.checked4}
                        disable={true}
                        text={'Apple'}
                        onChange={this.change4}/>
                </DemoList>

                <DemoList title={'imageStyle:指定左侧图片的style'}>
                    <CheckBox
                        checked={this.state.checked5}
                        imageStyle={{width: 40, height: 40}}
                        text={'Apple'}
                        onChange={this.change5}/>
                </DemoList>

                <DemoList title={'containerStyle:指定组件容器的style'}>
                    <CheckBox
                        checked={this.state.checked6}
                        containerStyle={{padding: 10}}
                        text={'Apple'}
                        onChange={this.change6}/>
                </DemoList>

                <DemoList title={`指定 text \n text={'Apple'}`}>
                    <View style={{flexDirection: 'row'}}>
                        <CheckBox
                            checked={this.state.checked7}
                            containerStyle={{padding: 10}}
                            text={'Apple'}
                            onChange={this.change7}/>
                        <CheckBox
                            checked={this.state.checked8}
                            containerStyle={{padding: 10}}
                            text={'Android'}
                            onChange={this.change8}/>
                    </View>
                </DemoList>

                <DemoList title={`textStyle:指定文本样式 \n textStyle={{fontSize:15, color:'red'}}`}>
                    <CheckBox
                        checked={this.state.checked9}
                        containerStyle={{padding: 10}}
                        text={'Apple'}
                        textStyle={{fontSize: 15, color: 'red'}}
                        onChange={this.change9}/>
                </DemoList>

                <DemoList title={'onValueChanged:点击事件'}>
                    <CheckBox
                        checked={this.state.checked10}
                        containerStyle={{padding: 10}}
                        text={'Apple'}
                        textStyle={{fontSize: 15, color: 'red'}}
                        onChange={this.change10}/>
                    <Text>{this.state.checked10 ? '选中' : '未选中'}</Text>
                </DemoList>

            </ScrollView>

        );
    }
}

export default CheckboxDemo;