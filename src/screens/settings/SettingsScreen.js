import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import styles from 'res/styles';
import colors from 'res/colors';
import {CustomButton, InputOTP, InputText, TextButton, TextIconButton} from "library/utils";
import {T1} from 'library/text';
import {CrossTab} from "library/tab";


export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={[styles.container_full]}>
        <CrossTab title={'Settings'} navigation={this.props.navigation}/>
        <View style={[styles.profileContainer]}>
          <Image
            source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'}}
            style={[styles.profileImage]}
          />
        </View>
        <View>
          <View style={[styles.settingsItem]}>
            <T1 text='Birthday'/>
            <Text>24/03/1994</Text>
          </View>
          <View style={[styles.settingsItem]}>
            <T1 text='Gender'/>
            <Text>Male</Text>
          </View>
          <View style={[styles.settingsItem]}>
            <T1 text='City'/>
            <Text>Bengaluru, India</Text>
          </View>
        </View>
        <View>
          <View style={[styles.settingsItem]}>
            <T1 text='Phone'/>
            <Text>(+91)9810626853</Text>
          </View>
          <View style={[styles.settingsItem]}>
            <T1 text='Email'/>
            <Text>cedaus97@gmail.com</Text>
          </View>
        </View>
        <View
          style={{padding: 30}}>
          <TextIconButton title='Sign out of app' color={colors.brandDark} iconSize={30}
                          onPress={() => this.props.navigation.navigate('Login')}/>
        </View>
      </View>
    );
  }
}