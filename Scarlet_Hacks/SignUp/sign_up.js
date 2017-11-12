import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import DismissKeyboard from "dismissKeyboard";
import * as firebase from "firebase";

class sign_up extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fName: "",
      lName: "",
      pass: "",
      email: "",
      response: ""
    };
    this.signup = this.signup.bind(this);
  }
  async signup() {
    DismissKeyboard();
    try {
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass);
        this.setState({
            response: "account created"
        })/*;
        setTimeout(() => {
            this.props.navigator.push({
                name: "Home"
            })
        }, 1500);*/
    } 
    catch (error) {
        this.setState({
            response: error.toString()
        })
    }
  }
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
     	  <View style={styles.regform}>
     	   
         <Text style={styles.header}>Registeration</Text>

         <TextInput 
          style={styles.textinput} 
          placeholder = "First name"
          underlineColorAndroid={'transparent'}
          onChangeText={(fName) => this.setState({fName})}  
        />

         <TextInput 
          style={styles.textinput} 
          placeholder = "Last name"
          underlineColorAndroid={'transparent'}
          onChangeText={(lName) => this.setState({lName})} 
        />

        <TextInput 
          style={styles.textinput} 
          placeholder = "Password"
          secureTextEntry={true} underlineColorAndroid={'transparent'} 
          onChangeText={(pass) => this.setState({pass})}        
        />

         <TextInput 
         style={styles.textinput} 
         placeholder = "Email"
         onChangeText={(email) => this.setState({email})}
         keyboardType="email-address"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={this.signup}
        >
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