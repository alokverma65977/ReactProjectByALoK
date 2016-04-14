'use strict';

var React = require('react-native');
var t = require('tcomb-form-native');
var textbox = require('./textbox');
var { AppRegistry, StyleSheet, Text, View, TouchableHighlight, ScrollView, DatePickerIOS, TextInput } = React;

var Form = t.form.Form;

// here we are: define your domain model

var Gender = t.enums({
  M: 'Male',
  F: 'Female'
});

var CustomActionSheet = require('react-native-custom-action-sheet');
function myCustomTemplate(locals) {
  console.log(RegisterScreen);
  return (
    <View>
      <TouchableHighlight underlayColor='#99d9f4'>
        <TextInput/>
      </TouchableHighlight>
    </View>
  );
}

var Person = t.struct({
  firstName: t.String,
  lastName: t.String,
  email: t.String,
  gender: t.String,
  dob: t.String,
  phoneNum: t.Number,
  password: t.String,
  vPassword: t.String
});

var RegisterScreen = React.createClass({
  getDefaultProps: function () {
    return {
      date: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    };
  },
  getInitialState: function() {
    return {
      date: this.props.date,
      timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
      modalVisible: false,
      options: this.getOptions(),
    };
  },
  getOptions: function(){
    return {
      auto: 'placeholders',
      fields: {
        firstName:  {
          placeholder: 'Enter First Name',
          error: 'Insert a valid First Name',
          template: textbox,
        },              // a required string
        lastName:  {
          placeholder: 'Enter Last Name'
        },  // an optional string
        email:  {
          placeholder: 'Enter E-mail Address'
        },
        phoneNum:  {
          placeholder: 'Enter Phone Number'
        },
        dob:  {
          placeholder: 'DOB',
          onFocus: this.showPicker,
        },
        password:  {
          placeholder: 'Enter Password'
        },
        vPassword:  {
          placeholder: 'Re-enter Password'
        }
      }};
    },
    toggleModal: function(){
      this.setState({
        modalVisible: false,
      });
    },
    showPicker: function() {
      console.log();
      this.setState({
        modalVisible: true,
      });
    },
    onChange(value) {
      this.setState({value});
    },

    onPress: function () {
      // call getValue() to get the values of the form
      var value = this.refs.form.getValue();
      if (value) { // if validation fails, value will be null
        console.log(value); // value here is an instance of Person
      }
    },

    render: function() {
      return (
        <ScrollView>
          <View style={styles.container}>
            <View>
              <CustomActionSheet
                modalVisible={this.state.modalVisible}
                onCancel={this.toggleModal}>
                <View style={styles.actionSheet}>
                  <DatePickerIOS
                    date={this.state.date}
                    mode="date"
                    timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                    onDateChange={this.onDateChange}
                    />
                </View>
              </CustomActionSheet>
            </View>
            <Text >REGISTER A NEW ACCOUNT </Text>
            <Form
              ref="form"
              type={Person}
              options={this.state.options}
              value={this.state.value}
              onChange={this.onChange}
              />
            <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      );
    }
  });

  var styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
    title: {
      fontSize: 30,
      alignSelf: 'center',
      marginBottom: 30
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
    },
    button: {
      height: 36,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
    actionSheet: {
      backgroundColor: '#ffffff',
    }
  });

  module.exports = RegisterScreen;
