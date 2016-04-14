'use strict';
var React = require('react-native');
var { View, Text, TextInput, StyleSheet } = React;

function textbox(locals) {

  var stylesheet = locals.stylesheet;
  var formGroupStyle = stylesheet.formGroup.normal;
  var controlLabelStyle = stylesheet.controlLabel.normal;
  var textboxStyle = stylesheet.textbox.normal;
  var helpBlockStyle = stylesheet.helpBlock.normal;
  var errorBlockStyle = stylesheet.errorBlock;
  var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .5,
      backgroundColor: 'transparent'
    },
    mark: {
      width: 150,
      height: 100
    },
    signin: {
      backgroundColor: '#5AC8FA',
      padding: 15,
      marginLeft:20,
      marginRight:20,
      borderWidth: 2,
      borderColor: 'transparent',
      borderRadius: 25,
      alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
      marginTop: 10,
      marginBottom: 10,
      flex: .35
    },
    inputPassword: {
      marginLeft: 15,
      width: 20,
      height: 21,

    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20,
    },
    inputContainer: {
      padding: 10,
      marginLeft:20,
      marginRight:20,
      marginBottom:20,
      borderWidth: 1,
      borderColor: '#d3d3d3',
      borderRadius: 25,
    },
    input: {
      position: 'absolute',
      left: 61,
      top: 12,
      right: 0,
      height: 20,
      fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#2f4f4f'
    },
    whiteFont: {
      color: '#FFF'
    },
    headInput: {
      color: '#000',
      fontSize: 14,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      marginBottom: 20
    }
  });

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error;
    controlLabelStyle = stylesheet.controlLabel.error;
    textboxStyle = stylesheet.textbox.error;
    helpBlockStyle = stylesheet.helpBlock.error;
  }

  if (locals.editable === false) {
    textboxStyle = stylesheet.textbox.notEditable;
  }

  var label = locals.label ? <Text style={controlLabelStyle}>{locals.label}</Text> : null;
  var help = locals.help ? <Text style={helpBlockStyle}>{locals.help}</Text> : null;
  var error = locals.hasError && locals.error ? <Text style={errorBlockStyle}>{locals.error}</Text> : null;

  return (

    <View style={formGroupStyle}>
      {label}
      <TextInput
        ref="input"
        autoCapitalize={locals.autoCapitalize}
        autoCorrect={locals.autoCorrect}
        autoFocus={locals.autoFocus}
        bufferDelay={locals.bufferDelay}
        clearButtonMode={locals.clearButtonMode}
        editable={locals.editable}
        enablesReturnKeyAutomatically={locals.enablesReturnKeyAutomatically}
        keyboardType={locals.keyboardType}
        multiline={locals.multiline}
        onBlur={locals.onBlur}
        onEndEditing={locals.onEndEditing}
        onFocus={locals.onFocus}
        onSubmitEditing={locals.onSubmitEditing}
        password={locals.password}
        placeholderTextColor={locals.placeholderTextColor}
        returnKeyType={locals.returnKeyType}
        selectTextOnFocus={locals.selectTextOnFocus}
        secureTextEntry={locals.secureTextEntry}
        selectionState={locals.selectionState}
        onChangeText={(value) => locals.onChange(value)}
        placeholder={locals.placeholder}
        maxLength={locals.maxLength}
        numberOfLines={locals.numberOfLines}
        textAlign={locals.textAlign}
        textAlignVertical={locals.textAlignVertical}
        underlineColorAndroid={locals.underlineColorAndroid}
        style={styles.signin}
        value={locals.value}
      />
      {help}
      {error}
    </View>
  );
}

module.exports = textbox;
