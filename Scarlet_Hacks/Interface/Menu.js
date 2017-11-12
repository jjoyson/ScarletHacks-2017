import React, {Component} from 'react';
import { StyleSheet,View,TouchableOpacity,TextInput, Text, KeyboardAvoidingView} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style= {styles.container}>
                <View style={styles.regform}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btntext}>Find Location</Text>
                    </TouchableOpacity>  
                    <TextInput 
                        style={styles.textinput} 
                        placeholder = "Start Location"
                        underlineColorAndroid={'transparent'} 
                    />
                    <TextInput 
                        style={styles.textinput} 
                        placeholder = "Destination"
                        underlineColorAndroid={'transparent'} 
                    />
                    <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>Find Bus Route</Text>
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
        textinput: {
            alignSelf: 'stretch',
            height: 40,
            marginTop: 30,
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
    