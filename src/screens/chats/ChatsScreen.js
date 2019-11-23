import React, {Component} from "react";
import {FlatList, Text, View} from 'react-native';
import {BackTab} from "library/tab";
import styles from 'res/styles';
import colors from 'res/colors';
import {ChatRow, Search} from "library/utils";
import {connect} from "react-redux";
import {fetchChatList} from "chats/ChatActions";
import {getChatList, getChatListCount} from "chats/ChatReducer";
import {apiChatList} from "chats/ChatService";
import {getToken} from "auth/AuthReducer";

class ChatsScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    this.props.callService(this.props.token);
  }

  render() {
    const {chats} = this.props;

    return (
      <View style={[styles.container_full]}>
        <BackTab bgColor={colors.brand} iColor='#FFF' navigation={this.props.navigation}/>
        <View style={{
          backgroundColor: '#FEBD1E', paddingLeft: 20,
          paddingRight: 20, paddingBottom: 20
        }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF', marginBottom: 20}}>Messages</Text>
          <Search/>
        </View>
        <FlatList
          data={chats}
          renderItem={({item}) => <ChatRow chat={item}/>}
        >
        </FlatList>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    chats: getChatList(state),
    count: getChatListCount(state),
    token: getToken(state),
  };
};

const mapDispatchToProps = dispatch => ({
  callService: (token) => dispatch(apiChatList(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatsScreen);