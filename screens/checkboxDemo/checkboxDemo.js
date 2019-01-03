import React, { Component } from 'react';
import {ScrollView} from "react-native";
import {DemoList} from "../component/DemoList";
import {CheckBox} from "../../components/checkbox";


class CheckboxDemo extends Component {
    static navigationOptions = {
        title:'CheckboxDemo'
    };
    test = (checked, text) => {
        console.log(checked, text);
    };
    render(){
        return(
            <ScrollView>
                <DemoList>
                    <CheckBox checked={false} checkedImg={require('../../components/checkbox/assets/image/checked_circle@2x.png')} unCheckedImg={require('../../components/checkbox/assets/image/choose@2x.png')} text={'北京'} onValueChanged={this.test}/>
                </DemoList>
            </ScrollView>

        );
    }
}

export default CheckboxDemo;