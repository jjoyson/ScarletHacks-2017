import React from 'react';
import { StyleSheet, Prototypes, Text, View } from 'react-native';
import Login from './Login/Login';
import SignUp from './SignUp/sign_up';
import Menu from './Interface/Menu';
import Firebase from "./Database/Firebase";
import StackNavigator from "react-navigation";
//import PropTypes from 'prop-types';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initialise();
  }
  
  render() {
    return (
      <Menu/>
    )
  }
}