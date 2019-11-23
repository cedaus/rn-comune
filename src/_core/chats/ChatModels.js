export class ChatModel {
  lastMessage;
  lastMessageAt;
  constructor() {}
}

export class Message {
  id;
  chatID;
  message;
  attachedURL;
  attachedFile;
  sender;
  createdAt;
  constructor() {}
}