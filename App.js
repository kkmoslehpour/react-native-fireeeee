import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDlsczQ5CmXVZLOVHUMBHRlV_rIm3WoQAk",
      authDomain: "one-time-password-6b112.firebaseapp.com",
      databaseURL: "https://one-time-password-6b112.firebaseio.com",
      projectId: "one-time-password-6b112",
      storageBucket: "one-time-password-6b112.appspot.com",
      messagingSenderId: "678887401522"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
