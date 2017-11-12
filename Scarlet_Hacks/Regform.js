import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class Regform extends React.Component {
  render() {
    return (
      <View style={styles.regform}>
     	   
         <Text style={styles.header}>Registeration</Text>

         <TextInput style={styles.textinput} placeholder = "First name"
         onSubmitEditing= {() => this.lastnameInput.focus()}
         underlineColorAndroid={'transparent'} />

         <TextInput style={styles.textinput} placeholder = "Last name"
         ref = {(input) => this.lastnameInput = input}
         onSubmitEditing= {() => this.password.focus()}
         underlineColorAndroid={'transparent'} />

         <TextInput style={styles.textinput} placeholder = "Password"
         ref = {(input) => this.password = input}
         onSubmitEditing= {() => this.email.focus()}
         secureTextEntry={true} underlineColorAndroid={'transparent'} />

         <TextInput style={styles.textinput} placeholder = "Email"
         ref = {(input) => this.email = input}
         underlineColorAndroid={'transparent'} />

         <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Sign Up</Text>
         </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',

  },
  header: {
      fontSize:24,
      color: '#fff',
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: '#199187',
      borderBottomWidth: 1,
  },
  textinput: {
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      color: '#fff',
      borderBottomColor: '#f8f8f8',
      borderBottomWidth: 1,
  },
  button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#59cbbd',
      marginTop: 30,
  },
  btntext: {
      color: '#fff',
      fontWeight: 'bold',
  }
});
