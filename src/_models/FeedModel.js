export class PostModel {
  id;
  title;
  content;
  createdAt;
  modifiedAt;
  attachedLink;
  numEngagements;
  allowEngagement;
  deletedByUser;
  hiddenByAdmin;
  constructor(data) {
    this.id = data['id'];
    this.content = data['content'];
    this.createdAt = data['created'];
    this.modifiedAt = data['modified'];
    this.attachedLink = data['attached_link'];
    this.allowEngagement = data['allow_open_engagement'];
    this.deletedByUser = data['deleted'];
    this.hiddenByAdmin = data['hidden_by_admin'];
  }
}