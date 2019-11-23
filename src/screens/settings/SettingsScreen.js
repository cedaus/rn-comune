import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import styles from 'res/styles';
import colors from 'res/colors';
import {CustomButton, InputOTP, InputText, TextButton, TextIconButton} from "library/utils";
import {CrossTab} from "library/tab";
import {getUser} from "auth/AuthReducer";
import {connect} from "react-redux";


class SettingsScreen extends Component {
  render() {
    const {user} = this.props;

    return (
      <View style={[styles.container_full]}>
        <CrossTab title={'Settings'} navigation={this.props.navigation}/>
        <View style={[styles.profileContainer]}>
          <Image
            source={{uri: user.image}}
            style={[styles.profileImage]}
          />
        </View>
        <View>
          <View style={[styles.settingsItem]}>
            <Text style={[styles.h5, {fontWeight: 'bold'}]}>Birthday</Text>
            <Text style={styles.p}>{user.birthDate}</Text>
          </View>
          <View style={[styles.settingsItem]}>
            <Text style={[styles.h5, {fontWeight: 'bold'}]}>Gender</Text>
            <Text style={styles.p}>{user.sex}</Text>
          </View>
          <View style={[styles.settingsItem]}>
            <Text style={[styles.h5, {fontWeight: 'bold'}]}>Location</Text>
            <Text style={styles.p}>{user.location}</Text>
          </View>
        </View>
        <View>
          <View style={[styles.settingsItem]}>
            <Text style={[styles.h5, {fontWeight: 'bold'}]}>Phone</Text>
            <Text style={styles.p}>{user.phone}</Text>
          </View>
          <View style={[styles.settingsItem]}>
            <Text style={[styles.h5, {fontWeight: 'bold'}]}>Email</Text>
            <Text style={styles.p}>{user.email}</Text>
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

const mapStateToProps = state => {
  return {
    user: getUser(state)
  };
};

export default connect(
  mapStateToProps,
)(SettingsScreen);