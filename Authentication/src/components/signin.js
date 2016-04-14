import React,{

	View,
	Text,
	StyleSheet,
	TextInput
} from 'react-native';
import Button from '../common/button';

module.exports = React.createClass({

	getInitialState : function(){

		return {
		username : '',
		password : ''
	};
	},

render: function(){

	return (
			<View styel={styles.container}>
				<Text style={styles.title}>SignIn</Text>
				<Text style={styles.label}>Username : </Text>
				<TextInput
				 style={styles.input}
				 value={this.state.username}
				 onChangeText={(text)=>this.setState({username:text})}
				  />


				<Text style={styles.label}>Password :</Text>
				<TextInput secureTextEntry={true} 
				style={styles.input} 
				value={this.state.password}
				 onChangeText={(text)=>this.setState({password:text})}
				/>
				<Button text={'Sign In'} onPress={this.onPress} />
				<Button Text={'Dont have Account SignUp Here'} onPress={this.onSignUp} />
			</View>

		)

},
	onPress : function(){


	},
	onSignUp : function(){

		this.props.navigator.push({name : 'signup'})
	}

});
var styles = StyleSheet.create({

	container :{
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center' 	
	},
	input : {

		padding : 4,
		height : 40,
		borderColor : 'gray',
		borderRadius : 5,
		borderWidth : 1,
		width : 200,
		alignSelf : 'center',
		margin : 5
	},
	label : {

		fontSize : 18
	},
	title : {

		fontSize : 25,
		margin : 10
	}

});


