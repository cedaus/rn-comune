import {createStackNavigator} from 'react-navigation-stack';
import FeedPostScreen from "./FeedPostScreen";
import FeedsScreen from "./FeedsScreen";
import colors from 'res/colors';

const routeConfig = {
  Feeds: {
    screen: FeedsScreen, navigationOptions: ({navigation}) => ({
    })
  },
  FeedPost: {
    screen: FeedPostScreen, navigationOptions: ({navigation}) => ({
      title: 'Post',
    })
  },
};

const navigatorConfig = {
  initialRouteName: 'Feeds',
  navigationOptions: {
    header: null
  }
};

export default FeedsNavigator = createStackNavigator(routeConfig, navigatorConfig)