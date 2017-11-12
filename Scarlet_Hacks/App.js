import React from 'react';
import { StyleSheet, Prototypes, Text, View } from 'react-native';
import Login from './Login/Login';
import SignUp from './SignUp/sign_up';
import Menu from './Interface/Menu';
import Firebase from "./Database/Firebase";
//import Navigator from "react-native-deprecated-custom-components";
//import PropTypes from 'prop-types';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initialise();
  }
  
  render() {
    return (
      <Login/>
    )
  }
}