'use strict';

var React = require('react-native');
var t = require('tcomb-form-native');

var { AppRegistry, StyleSheet, Text, View, TouchableHighlight, ScrollView, DatePickerIOS, TextInput } = React;

var Form = t.form.Form;

// here we are: define your domain model

var Gender = t.enums({
  M: 'Male',
  F: 'Female'
});

var CustomActionSheet = require('react-native-custom-action-sheet');

var Person = t.struct({
  date: t.String,
  time: t.String,
  relation: t.String,
  name: t.String,
  dob: t.String,
  gender: t.String,
  contact: t.Number,
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
      fields: {
        date:  {
          label: 'Date',
          error: 'Insert a valid First Name',
        },              // a required string
        time:  {
          label: 'Time'
        },
        realtion:  {
          label: 'Relation'
        },
        name:  {
          label: 'Name'
        },
        dob:  {
          label: 'DOB',
          onFocus: this.showPicker,
        },
        gender:  {
          label: 'Gender'
        },
        contact:  {
          label: 'Contact Number'
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
            <Form
              ref="form"
              type={Person}
              options={this.state.options}
              value={this.state.value}
              onChange={this.onChange}
              />
            <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Confirm</Text>
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
