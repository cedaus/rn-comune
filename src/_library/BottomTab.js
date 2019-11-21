import React, { Component } from 'react';
import {View} from 'react-native';
import {BottomNavigation} from "react-native-paper";
import {Greeting} from "library/utils";


const MusicRoute = () => <Greeting name='Music' sex='boy'/>

const AlbumsRoute = () => <Greeting name='Album' sex='boy'/>

const RecentsRoute = () => <Greeting name='Recent' sex='boy'/>


export default class BottomTab extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Go Out', icon: 'queue-music' },
      { key: 'albums', title: 'Nearby', icon: 'album' },
      { key: 'recents', title: 'People', icon: 'history' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}