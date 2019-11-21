import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./HomeScreen";
import EventsScreen from "../events/EventsScreen";
import FeedsNavigator from "../feeds/FeedsNavigator";
import ChatsNavigator from "../chats/ChatsNavigator";

const routeConfig = {
  Home: HomeScreen,
  Events: EventsScreen,
  Feeds: FeedsNavigator,
  Chats: ChatsNavigator,
};

const navigatorConfig = {
  initialRouteName: 'Home',
};

export default HomeNavigator = createStackNavigator(routeConfig, navigatorConfig)