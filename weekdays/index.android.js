//import dependencies
import React,{
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DayItem from './src/day_item';

const DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const weekdays = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Days of The Week:
        </Text>
        {this.days()}
      </View>
    );
  },
  days:function(){
    return DAYS.map(function(day){

      return <DayItem day={day} />
    });

  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',//that is default
    justifyContent: 'center',//flex-start/end column
    alignItems: 'center',// row
    backgroundColor: '#F5FCFF',
  },
  text:{
    fontSize: 20,
    color: '#000'
  }

  /*welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },*/
});

AppRegistry.registerComponent('weekdays', () => weekdays);
