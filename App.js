import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as Font from 'expo-font';
import LoginScreen from './src/screens/Login';
import Routes from './routes';
import LoadingScreen from './src/screens/Loading';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  state = {
    assetsLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Baloo Thambi 2 Bold': require('./assets/fonts/BalooThambi2Bold.ttf'),
      'Baloo Thambi 2 Regular': require('./assets/fonts/BalooThambi2Regular.ttf'),
      'Quicksand Regular': require('./assets/fonts/QuicksandRegular.ttf'),
      'Quicksand Bold': require('./assets/fonts/QuicksandBold.ttf'),
    });
    this.setState({ assetsLoaded: true });
  }
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#75cdff"></StatusBar>
        <AppNavigator />
      </>
    )
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  Routes: Routes
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
