import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//
import {FlatList, ScrollView, Text, View} from 'react-native';
import {BackTab} from "library/tab";
import styles from 'res/styles';
import colors from 'res/colors';
import {FeedItem, Label} from "library/utils";
import fetchUserPosts from "feeds/FeedService";
import {getPosts, getPostsError, getPostsPending} from "feeds/FeedReducer";
import {fetchPostsSuccess, fetchPostsError, fetchPostsPending} from "feeds/FeedActions";

CONTENT = 'Last night I hooked the desktop computer to the audio system, and played an hour of Witcher 3 in glorious immersive surround-sound. Since playing Witcher is the only thing I physically use the desktop server for anymore I always leave the game running, paused, as I go about my day (or days, or weeks). '

class FeedsScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    console.log('Hi');
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    this.props.callService();
  }

  shouldComponentRender() {
    const {pending} = this.props;
    if (this.pending === false) return false;
    // more tests
    return true;
  }

  render() {
    const {posts, error, pending} = this.props;

    if (!this.shouldComponentRender()) return <Text>Hello</Text>;

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
        <FlatList
          data={posts}
          renderItem={({item}) => <FeedItem name='Saksham Jain'
                                            imageUrl='https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/cedaus97.png'
                                            content={item.content}
                                            onPress={() => this.props.navigation.navigate('FeedPost')}/>}
        >
        </FlatList>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  error: getPostsError(state),
  posts: getPosts(state),
  pending: getPostsPending(state)
});

const mapDispatchToProps = dispatch => ({
  callService: () => dispatch(fetchUserPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedsScreen);