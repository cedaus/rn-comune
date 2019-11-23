import {UserMiniModel} from "users/UserModels";

export class ChatModel {
  id;
  firebaseID;
  active;
  createdAt;
  lastMessage;
  participant;
  constructor(data) {
    this.id = data['id'];
    this.firebaseID = data['firebase_id'];
    this.active = data['active'];
    this.createdAt = data['created']
    this.lastMessage = new Message(data['last_message']);
    this.participant = new UserMiniModel(data['participant']);
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
    this.messageNumber = data['message_number'];
    this.text = data['text'];
    this.createdAt = data['created'];
  }
}