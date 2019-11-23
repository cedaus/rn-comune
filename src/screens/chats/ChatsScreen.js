import React, {Component} from "react";
import {FlatList, Text, View} from 'react-native';
import {BackTab} from "library/tab";
import styles from 'res/styles';
import colors from 'res/colors';
import {ChatRow, Search} from "library/utils";
import {connect} from "react-redux";
import {fetchChatList} from "chats/ChatActions";
import {getChatList, getChatCurrentCount, getChatTotalCount, getIsPaginating} from "chats/ChatReducer";
import {apiChatList, apiMoreChatList} from "chats/ChatService";
import {getToken} from "auth/AuthReducer";

class ChatsScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.paginateChat = this.paginateChat.bind(this);
  }

  componentWillMount() {
    this.props.callService(this.props.token);
  }

  paginateChat() {
    if (this.props.paginating || this.props.totalCount === this.props.currentCount) return null;
    this.props.loadMoreChat(this.props.currentCount, this.props.token);
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
          onEndReached={this.paginateChat}
          onEndThreshold={10}
        >
        </FlatList>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    chats: getChatList(state),
    currentCount: getChatCurrentCount(state),
    totalCount: getChatTotalCount(state),
    token: getToken(state),
    paginating: getIsPaginating(state)
  };
};

const mapDispatchToProps = dispatch => ({
  callService: (token) => dispatch(apiChatList(token)),
  loadMoreChat: (offset, token) => dispatch(apiMoreChatList(offset, token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatsScreen);