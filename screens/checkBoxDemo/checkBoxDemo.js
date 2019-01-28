import React, {Component} from 'react';
import {ScrollView, Text, View} from "react-native";
import {DemoList} from "../component/DemoList";
import {CheckBox} from "../../components/checkBox/lib/checkBox";


class CheckboxDemo extends Component {
    static navigationOptions = {
        title: 'CheckBoxDemo'
    };

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            outControlChecked:false,
        };
    }

    //受控
    change1 = () => {
        this.setState({
            checked: !this.state.checked,
        });
    };

    change2 = (checked) => {
        this.setState({
            outControlChecked: checked,
        });
    };

    render() {
        return (
            <ScrollView>
                <DemoList title={'受控的 CheckBox:可通过外界改变状态'}>
                    <CheckBox
                        checked={this.state.checked}
                        checkedImg={require('../../components/checkBox/lib/assets/image/checked_circle.png')}
                        unCheckedImg={require('../../components/checkBox/lib/assets/image/choose.png')}
                        text={'Apple'}
                        onValueChanged={this.change1}/>
                    <View style={{height: 30}}/>
                    <Text onPress={this.change1}>点击改变状态</Text>
                    <Text>{this.state.checked ? 'true' : 'false'}</Text>
                </DemoList>

                <DemoList title={'不受控的 CheckBox:不可通过外界改变状态'}>
                    <CheckBox
                        checkedImg={require('../../components/checkBox/lib/assets/image/checked_circle.png')}
                        unCheckedImg={require('../../components/checkBox/lib/assets/image/choose.png')}
                        text={'Apple'}
                        onValueChanged={this.change2}/>
                    <Text>{this.state.outControlChecked ? 'true' : 'false'}</Text>
                </DemoList>

                <DemoList title={'imageStyle:指定左侧图片的style'}>
                    <CheckBox
                        imageStyle={{width:40, height:40}}
                        checkedImg={require('../../components/checkBox/lib/assets/image/checked_circle.png')}
                        unCheckedImg={require('../../components/checkBox/lib/assets/image/choose.png')}
                        text={'Apple'}
                        onValueChanged={() => {}}/>
                </DemoList>

                <DemoList title={'containerStyle:指定组件容器的style'}>
                        <CheckBox
                            containerStyle={{padding:10}}
                            checkedImg={require('../../components/checkBox/lib/assets/image/checked_circle.png')}
                            unCheckedImg={require('../../components/checkBox/lib/assets/image/choose.png')}
                            text={'Apple'}
                            onValueChanged={() => {}}/>
                </DemoList>

                <DemoList title={`指定 text \n text={'Apple'}`}>
                    <View style={{flexDirection:'row'}}>
                        <CheckBox
                            containerStyle={{padding:10}}
                            checkedImg={require('../../components/checkBox/lib/assets/image/checked_circle.png')}
                            unCheckedImg={require('../../components/checkBox/lib/assets/image/choose.png')}
                            text={'Apple'}
                            onValueChanged={() => {}}/>
                        <CheckBox
                            containerStyle={{padding:10}}
                            checkedImg={require('../../components/checkBox/lib/assets/image/checked_circle.png')}
                            unCheckedImg={require('../../components/checkBox/lib/assets/image/choose.png')}
                            text={'Android'}
                            onValueChanged={() => {}}/>
                    </View>
                </DemoList>

                <DemoList title={`textStyle:指定文本样式 \n textStyle={{fontSize:15, color:'red'}}`}>
                    <CheckBox
                        containerStyle={{padding:10}}
                        checkedImg={require('../../components/checkBox/lib/assets/image/checked_circle.png')}
                        unCheckedImg={require('../../components/checkBox/lib/assets/image/choose.png')}
                        text={'Apple'}
                        textStyle={{fontSize:15, color:'red'}}
                        onValueChanged={() => {}}/>
                </DemoList>

                <DemoList title={'onValueChanged:点击事件'}>
                    <CheckBox
                        containerStyle={{padding:10}}
                        checkedImg={require('../../components/checkBox/lib/assets/image/checked_circle.png')}
                        unCheckedImg={require('../../components/checkBox/lib/assets/image/choose.png')}
                        text={'Apple'}
                        textStyle={{fontSize:15, color:'red'}}
                        onValueChanged={this.change1}/>
                    <Text>{this.state.checked ? '选中' :'未选中'}</Text>
                </DemoList>

            </ScrollView>

        );
    }
}

export default CheckboxDemo;