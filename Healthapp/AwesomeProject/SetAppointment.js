'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var ScrollableTabView = require('react-native-scrollable-tab-view');
var FacebookTabBar = require('./FacebookTabBar');
var SelfAppointment = require('./SelfAppointment');
var OtherAppointment = require('./OtherAppointment');

var FacebookTabsExample = React.createClass({
  getInitialState: function() {
    console.log(this.props.navigator);
    return {
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <ScrollableTabView initialPage={0} renderTabBar={() => <FacebookTabBar />}>
          <ScrollView tabLabel="ion|ios-paper" tabName="test" style={styles.tabView}>
              <SelfAppointment navigator={this.props.navigator}></SelfAppointment>
          </ScrollView>
          <ScrollView tabLabel="ion|person-stalker" tabName="test2" style={styles.tabView}>
          <OtherAppointment navigator={this.props.navigator}></OtherAppointment>
          </ScrollView>
        </ScrollableTabView>
      </View>
    );
  }
});



//module.exports = SimpleExample;
module.exports = FacebookTabsExample;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
