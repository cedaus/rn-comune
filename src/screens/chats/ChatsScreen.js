import React, {Component} from "react";
import {View, Text, ScrollView} from 'react-native';
import {BackTab} from "library/tab";
import styles from 'res/styles';
import colors from 'res/colors';
import {ChatRow, Search} from "library/utils";

export default class ChatsScreen extends Component {
  static navigationOptions = {
        header: null
    }
  render() {
    return (
      <View style={[styles.container_full]}>
        <BackTab bgColor={colors.brand} iColor='#FFF' navigation={this.props.navigation}/>
        <View style={{backgroundColor: '#FEBD1E', paddingLeft: 20,
          paddingRight: 20, paddingBottom: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF', marginBottom: 20}}>Messages</Text>
          <Search />
        </View>
        <ScrollView>
          <ChatRow name='Harsh' datetime='Mon' lastMessage='Hi Saksham can you please forward code'/>
          <ChatRow name='Samiksha' datetime='Mon' lastMessage='Hi Saksha can you please forward code'/>
        </ScrollView>
      </View>
    );
  }
}