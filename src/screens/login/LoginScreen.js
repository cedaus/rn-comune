import React, {Component} from 'react';
import {Text, View} from 'react-native';
import colors from 'res/colors';
import strings from 'res/strings';
import styles from 'res/styles';
import {ArrowButton, CustomButton, Hero, InputText, TextButton} from "library/utils";

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={[styles.container_full]}>
        <View style={{height: 200, backgroundColor: colors.brand}}>

        </View>
        <View style={{
          display: 'flex',
          height: '70%',
          paddingTop: 70,
          paddingLeft: 40,
          paddingRight: 40
        }}>
          <Text style={[styles.h1, {marginBottom: 30}]}>{strings.login.heading}</Text>
          <View style={{marginBottom: 40}}>
            <InputText style={styles.inputStyle2} placeholder='Put your phone'/>
          </View>
          <ArrowButton title={strings.login.button} onPress={() => this.props.navigation.navigate('Home')}/>
          <Text style={[styles.h6, {marginTop: 30}]}>Please review our T&C</Text>
        </View>
      </View>
    );
  }
}