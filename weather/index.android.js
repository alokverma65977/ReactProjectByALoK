// import 
import React, {

  AppRegistry,
  View,
  Text,
  MapView,
  StyleSheet  
} from 'react-native';

var weather = React.createClass({
     render : function() {
      return <MapView style={styles.map}>
      </MapView>
     }

});
var styles = StyleSheet.create({
  map : {
    flex : 1
  }

});

AppRegistry.registerComponent('weather',()=> weather);
