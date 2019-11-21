import React, {Component} from "react";
import {Image, Text, TextInput, View} from 'react-native';
import {BackTab, NormalTab} from "library/tab";
import styles from 'res/styles';
import colors from 'res/colors';
import {FeedItem, Label} from "library/utils";
import KeyboardShift from "library/KeyboardShift";

CONTENT = 'Last night I hooked the desktop computer to the audio system, and played an hour of Witcher 3 in glorious immersive surround-sound. Since playing Witcher is the only thing I physically use the desktop server for anymore I always leave the game running, paused, as I go about my day (or days, or weeks). '
IMAGE = 'https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/cedaus97.png'
NAME = 'Saksham Jain'

export default class FeedPostScreen extends Component {

  render() {
    return (
      <View style={[styles.container_full, {backgroundColor: colors.backgroundColor1}]}>
        <View style={{
          backgroundColor: '#FFF',
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
          borderBottomWidth: 1,
          borderColor: colors.borderColorLight
        }}>
          <View style={{diplay: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
            <View style={{diplay: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
              <Image style={{width: 40, height: 40, borderRadius: 20, marginRight: 10}} source={{uri: IMAGE}}/>
              <Text style={{fontWeight: 'bold', color: colors.textBold1}}>{NAME}</Text>
            </View>
          </View>
          <View style={{paddingBottom: 20}}>
            <Text style={styles.p}>{CONTENT}</Text>
          </View>
        </View>
        <View style={{}}>

        </View>
        <KeyboardShift>
          <View style={{
            position: 'absolute',
            bottom: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            backgroundColor: '#FFF',
            padding: 10
          }}>
            <Image style={{width: 30, height: 30, borderRadius: 15, marginRight: 10}} source={{uri: IMAGE}}/>
            <TextInput
              style={{
                width: '90%',
                minHeight: 40,
                backgroundColor: '#FFF',
                borderColor: colors.borderColorLight,
                borderWidth: 1,
                borderRadius: 3,
                paddingLeft: 20,
                paddingRight: 20
              }}
              placeholder='Your comment'
              multiline={true}
              numberOfLines={4}
            />
          </View>
        </KeyboardShift>

      </View>
    );
  }
}