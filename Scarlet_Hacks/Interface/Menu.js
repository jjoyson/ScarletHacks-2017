import React, {Component} from 'react';
import { StyleSheet,View,AppRegistry ,TouchableOpacity,TextInput, Text, KeyboardAvoidingView} from 'react-native';
import Database from "../Database/Database";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myLocation: '',
            endLocation: '',
            user: "1ILlTuKqwNZYgAXP2wqaipawYJ33"//Jithin
        }
        
    }
    click1 = () => {
        this.setState({user: 'Zz596ODbQ3RaKf6nhPKcGy9p5SZ2'});//Tanwir Right
    }

    click2 = () => {
        this.setState({user: 'ggQSAspq0tbdqZTtg5W2XaIvyqx2'});//Sai Left
    }

    handleClick = () => {
        this.setState({myLocation: 'My Location'});
    }

    handleClick2 = () => {
        if (this.state.myLocation == ''){
            this.setState({myLocation: 'My Location'});
        }
        if (this.state.endLocation == ''){
            this.setState({endLocation: 'My Location'});
         }
        Database.setLocation(this.state.user,this.state.myLocation,this.state.endLocation);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style= {styles.container}> 
                <View style={{flexDirection: 'row'}}>
                    <Text
                        style = {{fontSize: 120,color: '#e74c3c'}}
                        onPress={this.click2} 
                    >CCc
                    </Text>
                    <Text
                        style = {{fontSize: 120,color: '#e74c3c'}}
                        onPress={this.click1} 
                    >AAa
                    </Text>
                </View>
                <View style={styles.regform}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={this.handleClick}  
                    >
                        <Text style={styles.btntext}>Find Location</Text>
                    </TouchableOpacity>  
                    <TextInput 
                        style={styles.textinput} 
                        placeholder = 'Start Location'
                        underlineColorAndroid={'transparent'}
                        value = {this.state.myLocation}
                        onChangeText={(myLocation) => this.setState({myLocation})}
                    />
                    <TextInput 
                        style={styles.textinput} 
                        placeholder = "Destination"
                        underlineColorAndroid={'transparent'} 
                        value={this.state.endLocation}
                        onChangeText={(endLocation) => this.setState({endLocation})}
                    />
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={this.handleClick2}  
                    >
                    <Text style={styles.btntext}>Request Bus</Text>
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
          },
        regform: {
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 60,
            paddingRight: 60
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
    })