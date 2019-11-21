import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import styles from 'res/styles';
import colors from 'res/colors';
import {CustomButton, InputOTP, InputText, TextButton, TextIconButton} from "library/utils";
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
            <Text style={[styles.h5, {fontWeight: 'bold'}]}>Birthday</Text>
            <Text style={styles.p}>24/03/1994</Text>
          </View>
          <View style={[styles.settingsItem]}>
            <Text style={[styles.h5, {fontWeight: 'bold'}]}>Gender</Text>
            <Text style={styles.p}>Male</Text>
          </View>
          <View style={[styles.settingsItem]}>
            <Text style={[styles.h5, {fontWeight: 'bold'}]}>Location</Text>
            <Text style={styles.p}>Bengaluru, India</Text>
          </View>
        </View>
        <View>
          <View style={[styles.settingsItem]}>
            <Text style={[styles.h5, {fontWeight: 'bold'}]}>Phone</Text>
            <Text style={styles.p}>(+91)9810626853</Text>
          </View>
          <View style={[styles.settingsItem]}>
            <Text style={[styles.h5, {fontWeight: 'bold'}]}>Email</Text>
            <Text style={styles.p}>cedaus97@gmail.com</Text>
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