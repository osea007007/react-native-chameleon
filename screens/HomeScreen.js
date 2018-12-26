import React from 'react';
import {
    Text, View
} from 'react-native';
import {Switch} from "../components/switch";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title:'组件'
  };

  render() {
      return (
          <View>
              <Switch/>
          </View>
      );
  }
}
