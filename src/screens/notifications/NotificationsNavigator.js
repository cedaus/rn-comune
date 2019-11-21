import {createSwitchNavigator} from 'react-navigation';
import NotificationsScreen from "./NotificationsScreen";

const routeConfig = {
    Notifications: NotificationsScreen,
};

const navigatorConfig = {
  navigationOptions: {
    header: null
  }
};

export default NotificationsNavigator = createSwitchNavigator(routeConfig, navigatorConfig)