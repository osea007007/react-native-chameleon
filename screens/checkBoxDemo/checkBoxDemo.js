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
            checked: true,
        };
    }

    //受控
    change1 = () => {
        this.setState({
            checked: !this.state.checked,
        });
    };

    change2 = (checked) => {
        console.log(checked);
    };

    render() {
        return (
            <ScrollView>
                <DemoList title={'受控的 CheckBox'}>
                    <CheckBox
                        checked={this.state.checked}
                        checkedImg={require('../../components/checkBox/assets/image/checked_circle.png')}
                        unCheckedImg={require('../../components/checkBox/assets/image/choose.png')}
                        text={'Apple'}
                        onValueChanged={this.change1}/>
                    <View style={{height: 30}}/>
                    <Text onPress={this.change1}>点击改变状态</Text>
                    <Text>{this.state.checked ? 'true' : 'false'}</Text>
                </DemoList>

                <DemoList title={'不受控的 CheckBox'}>
                    <CheckBox
                        checkedImg={require('../../components/checkBox/assets/image/checked_circle.png')}
                        unCheckedImg={require('../../components/checkBox/assets/image/choose.png')}
                        text={'Apple'}
                        onValueChanged={this.change2}/>
                    <Text>{this.state.checked ? 'true' : 'false'}</Text>
                </DemoList>


                {/*<DemoList>*/}
                {/*<CheckBox*/}
                {/*checkedImg={require('../../components/checkBox/assets/image/checked_circle.png')}*/}
                {/*unCheckedImg={require('../../components/checkBox/assets/image/choose.png')}*/}
                {/*text={'北京'}*/}
                {/*onValueChanged={this.test}/>*/}
                {/*</DemoList>*/}

            </ScrollView>

        );
    }
}

export default CheckboxDemo;