import React, { Component } from 'react';
import {Text, View} from 'react-native';
import colors from 'res/colors';
import strings from 'res/strings';
import styles from 'res/styles';
import {CustomButton, InputText, TextButton, InputOTP} from "library/utils";


export default class ForgotPasswordScreen extends Component {
  static navigationOptions = {
    title: 'Forgot Password',
  };

  render() {
    return (
      <View style={[styles.container]}>
        <View style={{marginBottom: 40}}>
          <Text style={{fontSize:24, marginBottom: 20}}>Please enter OTP</Text>
          <InputOTP width={50} height={50}/>
          <TextButton textColor={colors.text} textSize={16} title='Resend OTP'/>
        </View>
        <CustomButton bgColor={colors.button} borderRadius={2} textColor='#fff' title='VERIFY OTP' onPress={() => this.props.navigation.navigate('Home')}/>
      </View>
    );
  }
}