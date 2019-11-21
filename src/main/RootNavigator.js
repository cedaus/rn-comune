import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoginNavigator from "../screens/login/LoginNavigator";
import SettingsNavigator from "../screens/settings/SettingsNavigator";
import ForgotPasswordNavigator from "../screens/forgot-password/ForgotPasswordNavigator";
import HomeNavigator from "../screens/home/HomeNavigator";
import NotificationsNavigator from '../screens/notifications/NotificationsNavigator';

const RootStack = createSwitchNavigator(
  {
    Login: LoginNavigator,
    Settings: SettingsNavigator,
    Notifications: NotificationsNavigator,
    ForgotPassword: ForgotPasswordNavigator,
    Home: HomeNavigator,
  },
  {
    initialRouteName: 'Login',
  }
);


const RootNavigator = createAppContainer(RootStack);
export default RootNavigator;