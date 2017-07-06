import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screen/home.js';
import MsdsList from '../screen/daftar_msds.js';
import SearchMsds from '../screen/search.js';
import CompareMsds from '../screen/compare_msds.js';
import DetailMsds from '../screen/detail_msds.js';
import Login from '../screen/login.js';
import Register from '../screen/register.js';
// import Feed from '../screen/feed.js';
// import Settings from '../screen/Settings.js';
// import UserDetail from '../screen/UserDetail.js';
// import Me from '../screen/Me.js';

export const MainPage = StackNavigator({
  HomeScreen: {
    screen: Home
  },
  MsdsListScreen: {
    screen: MsdsList
  },
  SearchScreen: {
    screen: SearchMsds
  },
  CompareMsdsScreen: {
    screen: CompareMsds
  },
  DetailMsdsScreen: {
    screen: DetailMsds
  },
  LoginScreen:{
    screen: Login
  },
  RegisterScreen:{
    screen: Register
  }
}, {
  // mode: 'modal',
  headerMode: 'none',
});

// export const FeedStack = StackNavigator({
//   Feed: {
//     screen: Feed,
//     navigationOptions: {
//       title: 'Feed',
//     },
//   },
//   Details: {
//     screen: UserDetail,
//     navigationOptions: ({ navigation }) => ({
//       title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
//     }),
//   },
// });
//
// export const Tabs = TabNavigator({
//   Feed: {
//     screen: FeedStack,
//     navigationOptions: {
//       tabBarLabel: 'Feed',
//       tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
//     },
//   },
//   Me: {
//     screen: Me,
//     navigationOptions: {
//       tabBarLabel: 'Me',
//       tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
//     },
//   },
// });
//
// export const SettingsStack = StackNavigator({
//   Settings: {
//     screen: Settings,
//     navigationOptions: {
//       title: 'Settings',
//     },
//   },
// });
//
// export const Root = StackNavigator({
//   Tabs: {
//     screen: Tabs,
//   },
//   Settings: {
//     screen: SettingsStack,
//   },
// }, {
//   mode: 'modal',
//   headerMode: 'none',
// });
