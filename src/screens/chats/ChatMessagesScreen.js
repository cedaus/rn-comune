import React, {Component} from "react";
import {FlatList, Image, TextInput, View} from 'react-native';
import styles from 'res/styles';
import colors from 'res/colors';
import {getToken, getUser} from "auth/AuthReducer";
import {connect} from "react-redux";
import {ChatBubble, IconButton2} from "library/utils";
import {apiChat, apiMoreChat} from "chats/ChatService";
import {getSelectedChat, getSelectedChatID, getSelectedChatPaginating} from "chats/ChatReducer";


class ChatMessagesScreen extends Component {
  constructor(props) {
    super(props);
    this.paginateChat = this.paginateChat.bind(this);
  }
  componentWillMount() {
    this.props.callService(this.props.chatID, this.props.token);
  }

  paginateChat() {
    const offset =  this.props.chat.messages.length;
    if (this.props.paginating || this.props.chat.totalMessagesCount === offset) return null;
    this.props.onPaginateChat(this.props.chatID, offset, this.props.token);
  }

  render() {
    return (
      <View style={[styles.container_full, {backgroundColor: colors.backgroundColorWhite}]}>
        <FlatList
          style={{flex: 1, padding: 20, marginBottom: 90}}
          data={this.props.chat?.messages}
          renderItem={({item}) => <View style={{display: 'flex', flexDirection: this.props.user.id===item.fromUser?'row-reverse':'row'}}><ChatBubble text={item.text}/></View>}
          onEndReached={this.paginateChat}
          onEndThreshold={10}
        >
        </FlatList>
        <View style={{
          position: 'absolute',
          bottom: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 70,
          width: '100%',
          backgroundColor: '#FFF',
          padding: 10,
          borderTopWidth: 1,
          borderColor: colors.borderColorLight
        }}>
          <Image style={{width: 30, height: 30, borderRadius: 15}} source={{uri: this.props.user.image}}/>
          <TextInput
            style={[styles.inputStyle2, {
              flex: 1,
              minHeight: 40,
              marginLeft: 10,
              marginRight: 10
            }]}
            placeholder='Type here...'
            multiline={true}
            numberOfLines={4}
          />
          <IconButton2 boxColor={colors.brand} boxSize={40} iconSize={30} iconColor='#FFF' name='ios-add'/>
        </View>
      </View>
    );
  };
}

const mapStateToProps = state => {
  return {
    user: getUser(state),
    token: getToken(state),
    chatID: getSelectedChatID(state),
    chat: getSelectedChat(state),
    paginating: getSelectedChatPaginating(state)
  };
};

const mapDispatchToProps = dispatch => ({
  callService: (chatID, token) => dispatch(apiChat(chatID, token)),
  onPaginateChat: (chatID, offset, token) => dispatch(apiMoreChat(chatID, offset, token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatMessagesScreen);