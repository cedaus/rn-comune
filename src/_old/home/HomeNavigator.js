import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./HomeScreen";
import EventsScreen from "../events/EventsScreen";
import colors from 'res/colors';
import ChatsScreen from "../chats/ChatsScreen";

const routeConfig = {
  Events: EventsScreen,
  Home: HomeScreen,
  Chats: ChatsScreen,
};

const navigatorConfig = {
  initialRouteName: 'Home',
  barStyle: {backgroundColor: '#fff'},
  activeColor: colors.iconActiveColor,
  inactiveColor: colors.iconInactiveColor,
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Chats') {
        iconName = `ios-options`;
      } else if (routeName === 'Events') {
        iconName = `ios-options`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor}/>;
    },
  }),
};

export default HomeNavigator = createMaterialBottomTabNavigator(routeConfig, navigatorConfig)