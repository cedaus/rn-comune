import {createStackNavigator} from 'react-navigation-stack';
import ChatsScreen from "./ChatsScreen";

const routeConfig = {
  Chats: {
    screen: ChatsScreen, navigationOptions: ({navigation}) => ({
    })
  },
};

const navigatorConfig = {
  initialRouteName: 'Chats',
  navigationOptions: {
    header: null
  }
};

export default ChatsNavigator = createStackNavigator(routeConfig, navigatorConfig)