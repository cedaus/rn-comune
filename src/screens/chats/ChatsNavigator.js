import {createStackNavigator} from 'react-navigation-stack';
import ChatsScreen from "./ChatsScreen";
import ChatMessagesScreen from "./ChatMessagesScreen";

const routeConfig = {
  Chats: {
    screen: ChatsScreen, navigationOptions: ({navigation}) => ({
    })
  },
  ChatMessages: {
    screen: ChatMessagesScreen, navigationOptions: ({navigation}) => ({
      title: 'Messages',
    })
  }
};

const navigatorConfig = {
  initialRouteName: 'Chats',
  navigationOptions: {
    header: null
  }
};

export default ChatsNavigator = createStackNavigator(routeConfig, navigatorConfig)