import React, {Component} from 'react';
import {Text, View} from 'react-native';
import colors from 'res/colors';
import strings from 'res/strings';
import styles from 'res/styles';
import {ArrowButton, CustomButton, Hero, InputText, TextButton} from "library/utils";
import {connect} from "react-redux";
import {authLogin} from "auth/AuthService";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    this.props.callService();
  }

  shouldComponentRender() {
    const {pending} = this.props;
    if (pending === true) return false;
    // more tests
    return true;
  }

  render() {
    const {isLoggedIn, user, token, pending} = this.props;

    return (
      <View style={[styles.container_full]}>
        <View style={{height: 200, backgroundColor: colors.brand}}>

        </View>
        <View style={{
          display: 'flex',
          height: '70%',
          paddingTop: 70,
          paddingLeft: 40,
          paddingRight: 40
        }}>
          <Text style={[styles.h1, {marginBottom: 30}]}>{strings.login.heading}</Text>
          <View style={{marginBottom: 40}}>
            <InputText style={styles.inputStyle2} placeholder='Put your phone'/>
          </View>
          <ArrowButton title={strings.login.button} onPress={() => this.props.navigation.navigate('Home')}/>
          <Text style={[styles.h6, {marginTop: 30}]}>Please review our T&C</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user,
    token: state.token,
    pending: state.pending,
  };
};


const mapDispatchToProps = dispatch => ({
  callService: () => dispatch(authLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);