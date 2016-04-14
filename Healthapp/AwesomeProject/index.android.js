var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

var AwesomeProject = React.createClass({
  getInitialState: function() {
    return {
      name: 'World'
    }; },
    onNameChanged: function(event) {
      this.setState({ name: event.nativeEvent.text });
    },
    render: function() {
      return (
        <View style={styles.container}>
        <TextInput
        style={styles.nameInput} onChange={this.onNameChanged} placeholder='Who should be greeted?'/>
        <Text style={styles.welcome}>Hello, {this.state.name}!</Text>
        <Text style={styles.instructions}>
        To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+Control+Z for dev menu </Text>
        </View>
      );
    }
  });

  var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },

    nameInput: {
      height: 36,
      padding: 4,
      margin: 24,
      backgroundColor: '#F5FCFF',
      fontSize: 18,
      borderWidth: 1,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

  AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
