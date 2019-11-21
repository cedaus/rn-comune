import React, {Component} from "react";
import {FlatList, ScrollView, Text, View} from 'react-native';
import {BackTab} from "library/tab";
import styles from 'res/styles';
import colors from 'res/colors';
import expStyles from 'styles/experienceStyles.js';
import {ExpItem2, IconButton2, IconButton3, Search, SearchContainer} from "library/utils";


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    datetime: 'Today',
    price: '500',
    label: 'Spaces',
    labelColor: colors.labelLightRed,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    datetime: 'Tomorrow',
    price: '200',
    label: 'Events',
    labelColor: colors.labelLightBlue,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    datetime: 'Today',
    price: '300',
    label: 'Hosts',
    labelColor: colors.labelLightYellow,
  },
];

export default class EventsScreen extends Component {
  static navigationOptions = {
        header: null
    }
  render() {
    return (
      <View style={styles.container_full}>
        <BackTab bgColor={colors.brand} iColor='#FFF' navigation={this.props.navigation}/>
        <View style={{
          backgroundColor: colors.brand, paddingLeft: 20,
          paddingRight: 20,
        }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF', marginBottom: 20}}>Going Out</Text>
          <Search/>
          <View style={expStyles.expTabs}>
            <IconButton3 name='Events' route={require('../../../assets/events.png')}/>
            <IconButton3 name='Spaces' route={require('../../../assets/spaces.png')}/>
            <IconButton3 name='Hosts' route={require('../../../assets/hosts.png')}/>
          </View>
        </View>
        <ScrollView>
          <View style={expStyles.expRow}>
            <Text style={[styles.T2, {marginBottom: 10}]}>Experiences for you</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={DATA}
              renderItem={({item}) => <ExpItem2 label={item.label} labelColor={item.labelColor} title={item.title}
                                                datetime={item.datetime}
                                                price={item.price}/>}
            >
            </FlatList>
          </View>
          <View style={expStyles.expRow}>
            <Text style={[styles.T2, {marginBottom: 10}]}>Where your connections are</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={DATA}
              renderItem={({item}) => <ExpItem2 label={item.label} labelColor={item.labelColor} title={item.title}
                                                datetime={item.datetime}
                                                price={item.price}/>}
            >
            </FlatList>
          </View>
          <View style={expStyles.expRow}>
            <Text style={[styles.T2, {marginBottom: 10}]}>Experiences around you</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={DATA}
              renderItem={({item}) => <ExpItem2 label={item.label} labelColor={item.labelColor} title={item.title}
                                                datetime={item.datetime}
                                                price={item.price}/>}
            >
            </FlatList>
          </View>
          <View style={expStyles.expRow}>
            <Text style={[styles.T2, {marginBottom: 10}]}>Featured Experiences</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={DATA}
              renderItem={({item}) => <ExpItem2 label={item.label} labelColor={item.labelColor} title={item.title}
                                                datetime={item.datetime}
                                                price={item.price}/>}
            >
            </FlatList>
          </View>
        </ScrollView>
      </View>
    );
  }
}