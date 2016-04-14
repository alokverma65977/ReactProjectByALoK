//import some code we need
import React,{
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

//create component 

class DayItem extends Component{
	render(){
		return(	
				<Text style={styles.day}>
				{this.props.day}
				</Text>
			
		);
	}
}



var styles=StyleSheet.create({
day:{
		fontSize:20,
		color: 'blue'
}


});

//expoert the component to available to elsewher

module.exports = DayItem;