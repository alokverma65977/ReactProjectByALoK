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
		password : '',
		email : '',
		fname : '',
		lname : ''
	};
	},

render: function(){

	return (
			<View styel={styles.container}>
				<Text style={styles.title}>Sign Up</Text>
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

				<Text style={styles.label}>Email : </Text>
				<TextInput 
				style={styles.input} 
				value={this.state.email}
				 onChangeText={(text)=>this.setState({email:text})}
				/>

				<Text style={styles.label}>First Name : </Text>
				<TextInput 
				style={styles.input} 
				value={this.state.fname}
				 onChangeText={(text)=>this.setState({fname:text})}
				/>

				<Text style={styles.label}>Last Name : </Text>
				<TextInput 
				style={styles.input} 
				value={this.state.lname}
				 onChangeText={(text)=>this.setState({lname:text})}
				/>
				<Button text={'Sign Up'} onPress={this.onPress} />
			</View>

		)

},
	onPress : function(){


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


