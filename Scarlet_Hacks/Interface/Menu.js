import React, {Component} from 'react';
import { StyleSheet, View, Image,Text, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style= {styles.container}>
                <Text>Start Point:</Text>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>FIND LOCATION</Text>
                </TouchableOpacity>
                <TextInput 
                    style = {styles.input}  
                    placeholder= "Destination"
                    placeholderTextColor = 'white'
                    returnKeyType = "go"
                    secureTextEntry
                    ref = {(input) => this.passwordInput = input}
                    style = {styles.input} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                />
            </KeyboardAvoidingView>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>FIND BUS ROUTE</Text>
            </TouchableOpacity>
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
    }
})