import {UserMiniModel} from "users/UserModels";
import {constructAll} from "helpers/base";

export class ChatModel {
  id;
  firebaseID;
  active;
  createdAt;
  modifiedAt;
  messages;
  lastMessage;
  totalMessagesCount;
  started;
  participant;
  constructor(data) {
    this.id = data['id'];
    this.firebaseID = data['firebase_id'];
    this.active = data['active'];
    this.createdAt = data['created'];
    this.modifiedAt = data['modified'];
    this.started = data['started'];
    this.totalMessagesCount = data['total_messages_count'];
    this.setLastMessage(data['last_message']);
    this.setParticipant(data['participant']);
    this.setMessages(data['messages']);
  }
  setParticipant(participant){
    if (participant) {
      this.participant = new UserMiniModel(participant);
    }
  }
  setMessages(messages) {
    if (messages) {

      this.messages = constructAll(messages, Message);
    }
  }
  setLastMessage(lastMessage) {
    if (lastMessage) {
      this.lastMessage = new Message(lastMessage);
    }
  }
}

export class Message {
  id;
  chatID;
  messageNumber;
  text;
  attachedURL;
  attachedFile;
  sender;
  createdAt;
  constructor(data) {
    console.log(data);
    this.messageNumber = data['message_number'];
    this.text = data['text'];
    this.createdAt = data['created'];
  }
}