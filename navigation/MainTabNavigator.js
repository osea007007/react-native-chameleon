import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from './component/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SwitchDemo from "../screens/switchDemo/switchDemo";
import TouchableDemo from "../screens/touchableDemo/touchableDemo";
import LineDemo from "../screens/lineDemo/lineDemo";
import ModalDemo from "../screens/modalDemo/modalDemo";
import ListDemo from "../screens/listDemo/listDemo";
import CheckBoxDemo from "../screens/checkBoxDemo/checkBoxDemo";
import SearchBarDemo from "../screens/searchBarDemo/searchBarDemo";
import SelectDemo from "../screens/selectDemo/selectDemo";
import ButtonDemo from "../screens/buttonDemo/buttonDemo";
import RotateIconDemo from "../screens/rotateIconDemo/rotateIconDemo";
import ExpandDemo from "../screens/expandDemo/expendDemo";
import InputDemo from "../screens/inputDemo/inputDemo";
import SwiperDemo from "../screens/swiperDemo/swiperDemo";
import InfoInputDemo from "../screens/infoInputDemo/infoInputDemo";

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    SwitchDemo:SwitchDemo,
    TouchableDemo:TouchableDemo,
    LineDemo:LineDemo,
    ModalDemo:ModalDemo,
    ListDemo:ListDemo,
    CheckBoxDemo:CheckBoxDemo,
    SearchBarDemo:SearchBarDemo,
    SelectDemo:SelectDemo,
    RotateIconDemo:RotateIconDemo,
    ExpandDemo:ExpandDemo,
    InputDemo:InputDemo,
    ButtonDemo:ButtonDemo,
    SwiperDemo:SwiperDemo,
    InfoInputDemo:InfoInputDemo,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
