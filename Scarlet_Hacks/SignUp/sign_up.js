import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, KeyboardAvoidingView } from 'react-native';

class sign_up extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
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
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e74c3c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  },
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
      backgroundColor: '#c0392b',
      marginTop: 30,
  },
  btntext: {
      color: '#fff',
      fontWeight: 'bold',
  }
});

export default sign_up