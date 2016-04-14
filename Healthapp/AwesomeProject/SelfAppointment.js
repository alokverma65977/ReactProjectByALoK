'use strict';

var React = require('react-native');
var t = require('tcomb-form-native');

var { AppRegistry, StyleSheet, Text, View, TouchableHighlight, ScrollView, DatePickerIOS, TextInput } = React;

var SearchScreen = require('./RegisterScreen');
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
      value: {
        dob:
          this.props.date.toLocaleDateString()

      }
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
    onDateChange: function(date) {
      this.setState({date: date});
      var val = this.state.value;
      val.dob =  date.toLocaleDateString()
      console.log(val);
      this.setState({value: val});
    },

    onPress: function () {
      this.props.navigator.immediatelyResetRouteStack([
        {title: 'Register',
        component: SearchScreen,}
      ]);
      // call getValue() to get the values of the form
  //    var value = this.refs.form.getValue();
    //  if (value) { // if validation fails, value will be null
        //console.log(value); // value here is an instance of Person
    //  }
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
                  <View style={styles.picker}>
                    <Text>Done</Text>
                  </View>
                  <DatePickerIOS
                    date={this.state.date}
                    mode="date"
                    timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                    style={styles.picker}
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
      flex:1,
      justifyContent: 'center',
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
      backgroundColor: 'transparent',
    },
    picker: {
      backgroundColor: '#ffffff',
      borderColor: '#48BBEC',
      borderWidth: 2
    }
  });

  module.exports = RegisterScreen;
