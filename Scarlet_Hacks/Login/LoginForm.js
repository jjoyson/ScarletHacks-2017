import React,  {Component} from 'react';
import {StyleSheet,View,TextInput,TouchableOpacity,Text} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return(
            <View style= {styles.container}>
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
                />
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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