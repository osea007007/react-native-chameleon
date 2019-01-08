import React from 'react';
import {
    ScrollView,
    Alert, Picker
} from 'react-native';

import {ListItem} from "./component/ListItem";
import Button from "../components/button";
import {Touchable} from "../components/touchable";

export default class HomeScreen extends React.Component {
    state = {};
  static navigationOptions = {
    title:'组件列表'
  };

  render() {
      let { navigation} = this.props;
      return (
          <ScrollView>
              <ListItem title={'touchable'} onPress={() => {navigation.navigate('TouchableDemo')}}/>
              <ListItem title={'switch'} onPress={() => {navigation.navigate('SwitchDemo')}}/>
              <ListItem title={'line'} onPress={() => {navigation.navigate('LineDemo')}}/>
              <ListItem title={'modal'} onPress={() => {navigation.navigate('ModalDemo')}}/>
              <Button onPress={() => {Alert.alert('1')}}/>
              <Button textStyle={{ color:'red', fontSize:12 }} containerStyle={{ marginTop:20 }} onPress={() => {console.log(!!global.Expo)}}/>
              <Button textStyle={{ color:'red', fontSize:12 }} type={'circle'} onPress={() => {Alert.alert('1')}}/>
          </ScrollView>
      );
  }
}
