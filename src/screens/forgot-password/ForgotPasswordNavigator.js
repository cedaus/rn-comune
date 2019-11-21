import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import ForgotPasswordScreen from "./ForgotPasswordScreen";

const routeConfig = {
    ForgotPassword: ForgotPasswordScreen,
};

const navigatorConfig = {
  navigationOptions: {
    header: null
  }
};

export default ForgotPasswordNavigator = createStackNavigator(routeConfig, navigatorConfig)