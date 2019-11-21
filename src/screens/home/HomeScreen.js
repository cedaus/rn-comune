import React, {Component} from 'react';
import {FlatList, Image, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import styles from 'res/styles';
import colors from 'res/colors';
import {
  CustomButton,
  ExpItem,
  ExpItem2,
  FloatingButton,
  Greeting,
  Hero,
  IconButton,
  InputText,
  StoryIcon,
  TextButton,
  FeedItem
} from "library/utils";
import expStyles from 'styles/experienceStyles.js';
import HeaderTab from 'library/HeaderTab'
import getUser from "services/UserService";

const PEOPLE = [
  {img: 'https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/nayana6df00e.png'},
  {img: 'https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/ayushe1f381.png'},
  {img: 'https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/suhase34505.png'},
  {img: 'https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/sonalidc9873.png'},
  {img: 'https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/nitin82efa8.png'},
  {img: 'https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/vinisha90e542.png'},
  {img: 'https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/prajaktad1ff00.png'},
  {img: 'https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/abhishek8842d5.png'},
  {img: 'https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/avish3e355d.png'},
  {img: 'https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/anomitdc25c9.png'},
  {img: 'https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/pocketfulofyoga.png'}
];
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

const CONTENT = 'Last night I hooked the desktop computer to the audio system, and played an hour of Witcher 3 in glorious immersive surround-sound. Since playing Witcher is the only thing I physically use the desktop server for anymore I always leave the game running, paused, as I go about my day (or days, or weeks). '


export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    console.log('Hi');
    getUser('cedaus97');
  }

  render() {
    return (
      <View style={[styles.container_full]}>
        <ScrollView>
          <HeaderTab/>
          <Hero imageUrl='https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/cedaus97.png'
                onPress={() => this.props.navigation.navigate('Settings')}/>
          <View style={expStyles.expRow}>
            <View style={{display: 'flex', flexDirection: 'row', marginBottom: 15, alignItems: 'center'}}>
              <Image style={{'width': 20, 'height': 20, marginRight: 5}} source={require('../../../assets/hosts.png')}
              />
              <Text style={[styles.T2]}>People Nearby</Text>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={PEOPLE}
              renderItem={({item}) => <StoryIcon imageUrl={item.img}/>}
            >

            </FlatList>
          </View>
          <View style={expStyles.expRow}>
            <View style={{borderWidth: 1, borderRadius: 2, borderColor: colors.borderColorLight}}>
              <View>
                <FeedItem name='Saksham Jain' imageUrl='https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/cedaus97.png'
                    content={CONTENT} onPress={() => this.props.navigation.navigate('FeedPost')}/>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Feeds')} activeOpacity={.7}>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50, backgroundColor: colors.brand}}>
                  <Text style={{color: '#FFF', textTransform: 'uppercase'}}>Check All Broadcasts</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={expStyles.expRow}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15}}>
              <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Image style={{'width': 20, 'height': 20, marginRight: 5}}
                       source={require('../../../assets/events.png')}
                />
                <Text style={[styles.T2]}>Experiences for you</Text>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Events')}>
                <Text style={{fontSize: 12}}>See All</Text>
              </TouchableOpacity>
            </View>
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
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15}}>
              <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Image style={{'width': 20, 'height': 20, marginRight: 5}}
                       source={require('../../../assets/spaces.png')}
                />
                <Text style={[styles.T2]}>Spaces to meet people</Text>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Events')}>
                <Text style={{fontSize: 12}}>See All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={DATA}
              renderItem={({item}) => <ExpItem label={item.label} labelColor={item.labelColor} title={item.title}
                                               datetime={item.datetime}
                                               price={item.price}/>}
            >
            </FlatList>
          </View>
        </ScrollView>
        <FloatingButton/>
      </View>
    );
  }
}