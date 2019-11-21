import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {CustomButton, Greeting, IconButton, InputText, TextButton} from "library/utils";
import strings from 'res/strings';
import colors from 'res/colors';

class HeaderTab extends Component {
  render() {
    return (
      <View style={[{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: colors.brand
      }]}>
        <IconButton
          name="ios-contact"
          color="#fff"
          size={35}
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <IconButton
          name="ios-chatboxes"
          color="#fff"
          size={35}
          onPress={() => this.props.navigation.navigate('Chats')}
        />
      </View>
    );
  }
}

export default withNavigation(HeaderTab);