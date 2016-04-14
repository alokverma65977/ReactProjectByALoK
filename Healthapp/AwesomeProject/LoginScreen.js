'use strict';
var React = require('react-native');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var t = require('tcomb-form-native');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  AsyncStorage,
} = React;

var ResultsScreen = require('./RegisterScreen');
var ForgotScreen = require('./ForgotPassword');
var Home = require('./Home');
var GLOBAL = require('./Globals');

var Credentials = t.struct({
  userName: t.String,
  password: t.String,
});
var Form = t.form.Form;

var buildUrl = function() {
  return GLOBAL.BASE_URL+'user/login';
};

var Login1 = React.createClass({
  getInitialState: function() {
    return {
      options: this.getOptions(),
    }
  },
  getOptions: function(){
    return {
      auto: 'placeholders',
      fields: {
        userName:  {
          placeholder: 'UserName'
        },              // a required string
        password:  {
          placeholder: 'Password',
          password: true,
          secureTextEntry: true
        },
      }};
    },
    _onPressButton(){
      this.props.navigator.push({        title: 'Register',        component: ResultsScreen,
      });
    },
    _loginSubmit(){
      var value = this.refs.form.getValue();
      if (value) {
        this.fetchResults(value);
      }

    },
    onChange(value) {
      this.setState({value});
    },
    _forgotButton() {
      this.props.navigator.push({
        title: 'Forgot Password',
        component: ForgotScreen,
      });
    },
    fetchResults: function(value) {
      fetch(buildUrl() ,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mail: value.userName,
          pass: value.password,
        })
      })
      .then(response => response.json())
      .then(jsonData => {
        if(jsonData.sessid) {
          AsyncStorage.setItem(GLOBAL.KEY.SESSION_ID, jsonData.sessid);
          AsyncStorage.setItem(GLOBAL.KEY.SESSION_NAME, jsonData.session_name);
          AsyncStorage.setItem(GLOBAL.KEY.TOKEN, jsonData.token);
          AsyncStorage.setItem(GLOBAL.KEY.USER, JSON.stringify(jsonData.user));
          this.props.navigator.replace({
        title: 'Home',
        component: Home
          });
        }
      })
      .catch(error => console.log(error));
    },
    render: function() {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.mark} source={{uri: 'http://i.imgur.com/da4G0Io.png'}} />
          </View>
          <View style={styles.inputs}>
            <Text style={styles.headInput}>LOGIN TO YOUR ACCOUNT</Text>
            <Form
              ref="form"
              type={Credentials}
              options={this.state.options}
              value={this.state.value}
              onChange={this.onChange}
              />

            <View style={styles.forgotContainer}>
              <Text style={styles.greyFont} onPress={this._forgotButton}>Forgot Password</Text>
            </View>
          </View>
          <TouchableHighlight onPress={() => this._loginSubmit()} style={styles.signin}>
            <View style={styles.signin}>
              <Text style={styles.whiteFont}>Login</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.signup}>
            <Text style={styles.greyFont}>Dont have an account?<Text style={styles.greyFont} onPress={this._onPressButton}>  Register Here</Text></Text>
          </View>
        </View>
      );
    }
  });
  var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: windowSize.width,
      height: windowSize.height
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .5,
      backgroundColor: 'transparent'
    },
    mark: {
      width: 150,
      height: 100
    },
    signin: {
      backgroundColor: '#5AC8FA',
      padding: 15,
      marginLeft:20,
      marginRight:20,
      borderWidth: 2,
      borderColor: 'transparent',
      borderRadius: 25,
      alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
      marginTop: 10,
      marginBottom: 10,
      flex: .35
    },
    inputPassword: {
      marginLeft: 15,
      width: 20,
      height: 21,

    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20,
    },
    inputContainer: {
      padding: 10,
      marginLeft:20,
      marginRight:20,
      marginBottom:20,
      borderWidth: 1,
      borderColor: '#d3d3d3',
      borderRadius: 25,
    },
    input: {
      position: 'absolute',
      left: 61,
      top: 12,
      right: 0,
      height: 20,
      fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#2f4f4f'
    },
    whiteFont: {
      color: '#FFF'
    },
    headInput: {
      color: '#000',
      fontSize: 14,
      justifyContent: 'center',
      alignItems: 'center',      fontWeight: 'bold',
      marginBottom: 20
    }
  })
  module.exports = Login1;
