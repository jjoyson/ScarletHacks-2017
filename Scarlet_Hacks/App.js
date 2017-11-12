import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login/Login';
import Signup from './SignUp/sign_up';
import Menu from './Interface/Menu';

export default class App extends React.Component {
  render() {
    return (
      <Signup/>
    );
  }
}
