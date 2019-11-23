import React, {Component} from 'react';
import {Text, View} from 'react-native';
import colors from 'res/colors';
import strings from 'res/strings';
import styles from 'res/styles';
import {ArrowButton, CustomButton, Hero, InputText, TextButton} from "library/utils";
import {connect} from "react-redux";
import {authLogin} from "auth/AuthService";
import {getIsLoggedIn} from "auth/AuthReducer";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    // this.props.callService('9810626853', 'qwerty7241');
    // this.props.navigation.navigate('Home')
  }

  shouldComponentRender() {
    const {pending} = this.props;
    if (pending === true) return false;
    // more tests
    return true;
  }

  render() {
    const {isLoggedIn} = this.props;
    const navigation = this.props.navigation;

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
          <ArrowButton title={strings.login.button} onPress={() => this.props.callService('9810626853', 'qwerty7241', navigation)}/>
          <Text style={[styles.h6, {marginTop: 30}]}>Please review our T&C</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: getIsLoggedIn(state),
  };
};


const mapDispatchToProps = dispatch => ({
  callService: (phone, password, navigation) => dispatch(authLogin(phone, password, navigation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);