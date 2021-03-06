import React, {Component} from 'react';
import { StyleSheet, View, Image,Text,TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import DismissKeyboard from "dismissKeyboard";
import * as firebase from "firebase";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
          fName: "",
          lName: "",
          pass: "",
          email: "",
          response: ""
        };
        this.login = this.login.bind(this);
      }
      async login() {
        DismissKeyboard();
        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass);
            this.setState({
                response: "Logged In!"
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
            <KeyboardAvoidingView behavior="padding" style= {styles.container}>
                <View style = {styles.logoContainer}>
                    <Text style = {styles.title} >Welcome to BusLyft</Text>
                    <Image style = {styles.logo} source = {require('../Images/symbol.png')} />
                </View>
                <View style = {styles.formContainer}>
                    <View style= {styles.Acontainer}>
                        <TextInput
                            placeholder= "Username or Email"
                            placeholderTextColor = 'white'
                            returnKeyType = "next"
                            onSubmitEditing = {() => this.passwordInput.focus()}
                            keyboardType = "email-address"
                            autoCapitalize = "none"
                            autoCorrect = {false}
                            style = {styles.input} 
                            underlineColorAndroid='rgba(0,0,0,0)'
                            onChangeText={(email) => this.setState({email})}
                            keyboardType="email-address"
                        />
                        <TextInput 
                            style = {styles.input}  
                            placeholder= "Password"
                            placeholderTextColor = 'white'
                            returnKeyType = "go"
                            secureTextEntry
                            ref = {(input) => this.passwordInput = input}
                            style = {styles.input} 
                            underlineColorAndroid='rgba(0,0,0,0)'
                            onChangeText={(pass) => this.setState({pass})}
                        />
                        <TouchableOpacity 
                            style = {styles.button}
                            onPress={this.login}
                        >
                            <Text style = {styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style = {styles.button}
                        >
                            <Text style = {styles.buttonText}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e74c3c'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        marginBottom: 50,
        textAlign: 'center',
        color: 'white',
        fontSize: 32
    },
    Acontainer: {
        padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: '#c0392b',
        marginBottom: 10,
        paddingVertical: 20
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
        marginTop : 10
    }
});

export default Login