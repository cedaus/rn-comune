import {createSwitchNavigator} from 'react-navigation';
import SettingsScreen from "./SettingsScreen";

const routeConfig = {
    Settings: SettingsScreen,
};

const navigatorConfig = {
  navigationOptions: {
    header: null
  }
};

export default SettingsNavigator = createSwitchNavigator(routeConfig, navigatorConfig)