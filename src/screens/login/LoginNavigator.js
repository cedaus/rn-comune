import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import LoginScreen from "./LoginScreen";

const routeConfig = {
    Login: LoginScreen,
};

const navigatorConfig = {
  navigationOptions: {
    header: null
  }
};

export default LoginNavigator = createSwitchNavigator(routeConfig, navigatorConfig)