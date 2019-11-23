export class UserModel {
  id;
  username;
  firstName;
  lastName;
  name;
  image;
  heading;
  email;
  phone;
  sex;
  address;
  location;
  birthDate;
  authorised;
  facebookLink;
  linkedinLink;
  twitterLink;
  githubLink;
  behanceLink;
  dribbleLink;
  instagramLink;
  websiteLink;
  resumeLink;
  allowPhonePublic;
  allowEmailPublic;

  constructor(data) {
    this.id = data['id'];
    this.username = data['username'];
    this.firstName = data['first_name'];
    this.lastName = data['last_name'];
    this.name = data['name'];
    this.image = data['profile_image'];
    this.heading = data['heading'];
    this.location = data['location'];
    this.email = data['email'];
    this.phone = data['phone'];
    this.sex = data['sex'];
    this.authorised = data['authorised'];
    this.birthDate = data['birth'];
    this.allowEmailPublic = data['permission_email_public'];
    this.allowPhonePublic = data['permission_phone_public'];
  }

}