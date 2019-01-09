import React from 'react';
import {
    ScrollView,
    Alert, Picker
} from 'react-native';

import {ListItem} from "./component/ListItem";
import RotateIconDemo from "./rotateIconDemo/rotateIconDemo";

export default class HomeScreen extends React.Component {
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
              <ListItem title={'checkBox'} onPress={() => {navigation.navigate('CheckBoxDemo')}}/>
              <ListItem title={'searchBar'} onPress={() => {navigation.navigate('SearchBarDemo')}}/>
              <ListItem title={'select'} onPress={() => {navigation.navigate('SelectDemo')}}/>
              <ListItem title={'rotateIcon'} onPress={() => {navigation.navigate('RotateIconDemo')}}/>
          </ScrollView>
      );
  }
}
