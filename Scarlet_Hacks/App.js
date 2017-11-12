import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Login from './Login/Login';
import SignUp from './SignUp/sign_up';
import Menu from './Interface/Menu';
import Firebase from "./Database/Firebase";
import Navigator from 'react-native-deprecated-custom-components';

export default class App extends React.Component {
  static renderScene(route, navigator) {
    
        switch (route.name) {
    
          case "Menu":
            return (<Menu navigator={navigator} />);
            break;
    
          case "Login":
            return (<Login navigator={navigator} />);
            break;
    
        } 
  }
  static configureScene(route) {
    if (route.sceneConfig) {
      return (route.sceneConfig);
    } else {
      return ({
        ...Navigator.SceneConfigs.HorizontalSwipeJump,
        gestures: {}
      });
    }

  }
  constructor(props) {
    super(props);
    Firebase.initialise();
  }

  render() {
    return (
      //<Menu/>
      <Navigator
        renderScene={App.renderScene}
        configureScene={App.configureScene}
       />
    );
  }
}