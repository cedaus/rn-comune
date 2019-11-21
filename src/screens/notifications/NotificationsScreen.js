import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from 'res/styles';
import {CustomButton, InputText, TextButton, InputOTP} from "library/utils";
import {T1} from 'library/text';
import {CrossTab} from "library/tab";


export default class NotificationsScreen extends Component {
  render() {
    return (
      <View style={[styles.container_full]}>
        <CrossTab title={'Notifications'} navigation={this.props.navigation}/>
      </View>
    );
  }
}