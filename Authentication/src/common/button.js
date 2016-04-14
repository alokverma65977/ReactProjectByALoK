import React,{

	View,
	Text,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

module.exports = React.createClass({

	

	render : function(){

		return (
				<TouchableHighlight
				  onPress={this.props.onPress}
				  style={styles.button}
				  underlayColor='gray'>
				  <Text style={styles.buttonText}>{this.props.text}</Text>
				</TouchableHighlight>

			)
	}

});

var styles = StyleSheet.create({

		button :{

		padding : 4,
		borderColor : 'gray',
		borderRadius : 5,
		borderWidth : 1,
		justifyContent : 'center',
		alignItems : 'center',
		marginTop : 5
	},
	buttonText : {

		flex  :1,
		alignSelf : 'center',
		fontSize : 20	
	}
});