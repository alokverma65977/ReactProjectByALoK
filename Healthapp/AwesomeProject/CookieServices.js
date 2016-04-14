'use strict';

var React = require('react-native');
const Test = require('Test');

const fetch = require('fetch');

import CookieManager from 'react-native-cookies';
var {View, Text, Image, ListView, StyleSheet, ActivityIndicatorIOS, TouchableHighlight} = React;
var buildUrl = function(q) {
  return 'http://54.83.205.169/healthapp/api/user/login';
};

var ResultsScreen = React.createClass(
  {
    getInitialState: function() {
      return {
        isLoading: true,
        dataSource: new ListView.DataSource(
          {rowHasChanged: (row1, row2) => row1 !== row2},
        ),
      };
    },
    _pressRow: function(termId, termName) {
      console.log('pressed');
      this.props.navigator.push({
        title: termName,
        component: Test,
        passProps: {'category': termId},
      });
    },
    componentDidMount: function() {
      this.fetchResults();
    },
    componentWillMount() {
      // CookieManager.clearAll((err, res) => {
      //   console.log(err);
      //   console.log(res);
      // });
      // CookieManager.getAll((cookie) => {
      //   console.log(cookie);
      //   let isAuthenticated;
      //   // If it differs, change `cookie.remember_me` to whatever the name for your persistent cookie is!!!
      //   if (cookie && cookie.remember_me) {
      //     isAuthenticated = true;
      //   }
      //   else {
      //     isAuthenticated = false;
      //   }'http://54.83.205.169/healthapp/api/entity_profile2/6'
      // });
    },
    fetchResults: function() {
      fetch(
        'http://54.83.205.169/healthapp/api/entity_profile2/6',
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cookie': 'SESSaafb23caf56e0dcd1b0bcc8d94f2a6cf=4n8tU9vUls5UbTVfb8DZucHKz8LSqMq2yCYMJSjw_3U',
            'X-CSRF-Token': 'JE2TVmYWJYk_ScRugvOPbEWcWliepZTXrda9wpwBYG8',
          },
        },
      ).// body: JSON.stringify({
      //   mail: 'deepak.khandelwal@daffodilsw.com',
      //   pass: 'hrhk',
      // })
      then((response) => response.json()).then((jsonData) => {
        console.log(jsonData);
      });
    },
    //       .catch(error => console.log(error));


    renderLoadingMessage: function() {
      return (<View style={styles.container}>        <ActivityIndicatorIOS
        animating={this.state.isLoading}
        style={[styles.centering, {height: 80}]}
        size="large"
      />        </View>);
    },
    renderResults: function() {
      console.log('rendering result');
      return (<Text>          Done         </Text>);
    },
    render: function() {
      if (this.state.isLoading) {
        return this.renderLoadingMessage();
      } else {
        return this.renderResults();
      }
    },
  },
);
var styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#5AC8FA',
    },
    thumbnail: {width: 70, height: 108, marginRight: 16},
    label: {fontSize: 24, fontWeight: 'normal', color: '#fff'},
    listView: {flexDirection: 'row', flexWrap: 'wrap'},
    rightContainer: {flex: 1},
    row: {
      margin: 3,
      width: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#5AC8FA',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 1,
    },
    centering: {alignItems: 'center', justifyContent: 'center'},
    title: {fontSize: 20, fontWeight: 'bold', color: '#fff'},
    subtitle: {fontSize: 16, fontWeight: 'normal', color: '#fff'},
  },
);
module.exports = ResultsScreen;
