/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';
var StopWatch = React.createClass({

  getInitialState : function() {

    return {
      timeElapsed : null,
      running : false,
      startTime : null,
      laps: []
    }
  },
  render : function() {
                return <View style={styles.container}> 
                            <View style={styles.header}>
                               <View style={styles.timerWrapper}>
                                  <Text style= {styles.timer}>
                                     {formatTime(this.state.timeElapsed)}
                                  </Text>
                               </View>
                                      <View style={styles.buttonWrapper}> 
                                      {this.startButton()}
                                       {this.lapButton()}
                                       </View>
                                  
                              </View>

                                <View style={styles.footer}>
                                  {this.laps()}
                                </View>
                        </View>
  }, 
  laps : function() {
      return this.state.laps.map(function(time,index){

        return <View style={styles.lap}>
             <Text style={styles.lapText}>
              Lap #{index + 1}   
              </Text>
              <Text style={styles.lapText}>
              {formatTime(time)}
              </Text>
        </View>
      });
  } ,                 
  startButton : function() {

      var style = this.state.running ? styles.startButton : styles.stopButton;
      return <TouchableHighlight
               underlayColor="gray"
               onPress={this.handleStartPress}
               style={[styles.buttons,styles.startButton]}
               >
                <Text style={styles.start}>
                  {this.state.running ? 'Stop' : 'Start'}
                </Text>

        </TouchableHighlight>
  }, 
  lapButton : function() {
        return <TouchableHighlight
               underlayColor="gray"
               onPress={this.handleLapPress}
               style={[styles.buttons,styles.lapButton]}
               >
                <Text style={styles.start}>
                  Lap
                </Text>

        </TouchableHighlight>
  },
  handleStartPress : function() {

    if(this.state.running){
      clearInterval(this.interval);
      this.setState({running :false});
      return 
      }
     this.setState({startTime : new Date()});

     
      
      this.interval = setInterval(()=>{
      this.setState({
        timeElapsed :new Date() - this.state.startTime,
        running : true
      });
    },30);
  },
  handleLapPress : function() {

    var lap = this.state.timeElapsed;

    this.setState({

      startTime : new Date(),
      laps:this.state.laps.concat([lap])
    });
  },

  border : function(color) {
      return{
        borderColor : color,
        borderWidth : 4
      }

  }

});

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'stretch',


    
  },
  header : {

    flex : 1,

  },
  footer : {

    flex : 1,
  },
  timerWrapper : {
    flex : 5,
    justifyContent : 'center',
    alignItems : 'center'

  },

  buttonWrapper : {
    flex : 3,
    flexDirection :'row',
    justifyContent : 'space-around',
    alignItems : 'center'
  },
  timer : {
    fontSize : 90
  },
  buttons : {

    height : 100,
    width : 100,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 50,
    borderWidth : 10
  },
  startButton : {

    borderColor : 'green'
  },
  stopButton : {
    borderColor : 'red'
  },
  lapButton : {
    borderColor : 'blue'
  },
  lap : {

    justifyContent : 'space-around',
    flexDirection : 'row'
  },
  lapText : {

    fontSize :40,
    color : 'green'
  },
  start : {
    fontSize : 26,
    color : 'blue'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
