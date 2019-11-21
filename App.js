import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Image, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RootNavigator from "./src/main/RootNavigator";

// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Text>Hello {this.props.name}! You are {this.props.sex}</Text>
//       </View>
//     );
//   }
// }
//
// // ScrollView
// class Scroll extends Component {
//   render() {
//     return (
//       <ScrollView>
//           <Text style={{fontSize:16}}>Scroll me plz</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Text style={{fontSize:16}}>If you like</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Text style={{fontSize:16}}>Scrolling down</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Text style={{fontSize:16}}>What's the best</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Text style={{fontSize:16}}>Framework around?</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Text style={{fontSize:20}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }
//
// // BottomTab Component
// const MusicRoute = () =>
//   <View style={{width: 150, height: 300, backgroundColor: 'steelblue'}}>
//     <Greeting name='Music' sex='boy'/>
//   </View>
//
// const AlbumsRoute = () => <Greeting name='Album' sex='boy'/>
//
// const RecentsRoute = () => <Greeting name='Recent' sex='boy'/>
//
// class BottomTab extends Component {
//   state = {
//     index: 0,
//     routes: [
//       { key: 'music', title: 'Music', icon: 'queue-music' },
//       { key: 'albums', title: 'Albums', icon: 'album' },
//       { key: 'recents', title: 'Recents', icon: 'history' },
//     ],
//   };
//
//   _handleIndexChange = index => this.setState({ index });
//
//   _renderScene = BottomNavigation.SceneMap({
//     music: MusicRoute,
//     albums: AlbumsRoute,
//     recents: RecentsRoute,
//   });
//
//   render() {
//     return (
//       <BottomNavigation
//         navigationState={this.state}
//         onIndexChange={this._handleIndexChange}
//         renderScene={this._renderScene}
//       />
//     );
//   }
// }
//
// class LoginScreen extends Component {
//   render() {
//     return (
//      <View style={[styles.container]}>
//         <View style={{marginBottom: 40}}>
//           <Text style={{fontSize:24, marginBottom: 20}}>Lets get started</Text>
//           <InputText placeholder='Put your email or phone'/>
//           <TextButton textColor='#1a1a1a' textSize={16} title='Forgot Password' onPress={() => this.props.navigation.navigate('OTP')}/>
//         </View>
//         <CustomButton bgColor='#1f1f1f' borderRadius={2} textColor='#fff' title='CONFIRM' onPress={() => this.props.navigation.navigate('Home')}/>
//       </View>
//     );
//   }
// }
//
// class HomeScreen extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, flexDirection: 'column'}}>
//       <View style={{flex: 1}}>
//         <BottomTab/>
//       </View>
//     </View>
//     );
//   }
// }
//
// class OTPScreen extends Component {
//   static navigationOptions = {
//     title: 'Forgot Password',
//   };
//
//   render() {
//     return (
//       <View style={[styles.container]}>
//         <View style={{marginBottom: 40}}>
//           <Text style={{fontSize:24, marginBottom: 20}}>Please enter OTP</Text>
//           <InputOTP width={50} height={50}/>
//           <TextButton textColor='#1a1a1a' textSize={16} title='Resend OTP'/>
//         </View>
//         <CustomButton bgColor='#1f1f1f' borderRadius={2} textColor='#fff' title='VERIFY OTP' onPress={() => this.props.navigation.navigate('Home')}/>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     paddingLeft: 40,
//     paddingRight: 40
//   },
//   red: {
//     color: 'red',
//   },
//   btn: {
//     height: 50,
//     color:"#1c1"
//   }
// });
//
// //
// const RootStack = createStackNavigator (
//   {
//     Login: LoginScreen,
//     OTP: OTPScreen,
//   },
//   {
//     initialRouteName: 'Login',
//   }
// );
//
// const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <RootNavigator />;
  }
}