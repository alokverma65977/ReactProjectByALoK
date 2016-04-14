import React,{

	Text,
	View,
	StyleSheet,
	Navigator
} from 'react-native';


   


var Signin = require('./components/signin');
var Signup = require('./components/signup');

var ROUTES ={
	signin : Signin,
	signup : Signup
};




module.exports = React.createClass({



	render : function(){


		return (

				<Navigator 
				style={styles.container}
				initialRoute={{name : 'signin'}}
				renderScene={this.renderScene}
				configuteScene={()=>{return Navigator.sceneConfigs.FloatFromRight}}

				/>
			)
	},
	renderScene : function (route,navigator){
	var Component = ROUTES[route.name];
	return <Component route={route} navigator={navigator} />;
}
});

var styles = StyleSheet.create({

container : {

	flex : 1,
	justifyContent : 'center',
		alignItems : 'center' 	
}
});