import React, {Component} from "react";
import {View, Text, ScrollView} from 'react-native';
import {BackTab} from "library/tab";
import styles from 'res/styles';
import colors from 'res/colors';
import {FeedItem, Label} from "library/utils";

CONTENT = 'Last night I hooked the desktop computer to the audio system, and played an hour of Witcher 3 in glorious immersive surround-sound. Since playing Witcher is the only thing I physically use the desktop server for anymore I always leave the game running, paused, as I go about my day (or days, or weeks). '

export default class FeedsScreen extends Component {
  static navigationOptions = {
        header: null
    }
  render() {
    return (
      <View style={[styles.container_full]}>
        <BackTab bgColor={colors.brand} iColor='#FFF' navigation={this.props.navigation}/>
        <View style={{backgroundColor: colors.brand, paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF', marginBottom: 20}}>Broadcasts</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Label text='Networking' mR={10}/>
            <Label text='Seeking Help' mR={10}/>
            <Label text='Work Opportunity'/>
          </ScrollView>
        </View>
        <ScrollView>
          <FeedItem name='Saksham Jain' imageUrl='https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/cedaus97.png'
                    content={CONTENT} onPress={() => this.props.navigation.navigate('FeedPost')}/>
          <FeedItem name='Harsh Gupta' imageUrl='https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/cedaus97.png'
                    content={CONTENT} onPress={() => this.props.navigation.navigate('FeedPost')}/>
        </ScrollView>
      </View>
    );
  }
}