import React, { Component } from 'react';
import {Text} from 'react-native';
import colors from 'res/colors';

export const T1 = (props) => {
  const {text} = props;
  return (
    <Text style={{fontSize: 16, color:colors.textBold1, fontWeight:'bold'}}>{text}</Text>
  );
};