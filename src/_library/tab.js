import React from 'react';
import {Text, View} from 'react-native';
import styles from 'res/styles';
import {CustomButton, Greeting, IconButton, InputText, TextButton} from "library/utils";

export const BackTab = (props) => {
  const {title, bgColor, iColor, navigation} = props;
  return (
    <View style={[{
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 30,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: bgColor
    }]}>
      <IconButton
        name="ios-arrow-round-back"
        color={iColor}
        size={40}
        onPress={() => navigation.navigate('Home')}
      />
      <View style={{textAlign: 'center', marginRight: 40}}>
        <Text style={{fontSize: 15}}>{title}</Text>
      </View>
    </View>
  );
};

export const CrossTab = (props) => {
  const {title, navigation} = props;
  return (
    <View style={[{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 20,
      paddingBottom: 15,
      paddingLeft: 20,
      paddingRight: 20
    }]}>
      <Text style={[styles.h3, {fontWeight: 'bold'}]}>{title}</Text>
      <IconButton
        name="ios-close-circle"
        color="#ccc"
        size={40}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export const NormalTab = (props) => {
  const {title, navigation} = props;
  return (
    <View style={[{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 30,
      paddingBottom: 15,
      paddingLeft: 20,
      paddingRight: 20
    }]}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>{title}</Text>
    </View>
  );
}