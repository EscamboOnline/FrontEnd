import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation';

import * as NavigationBar from 'expo-navigation-bar';
import * as SystemUI from 'expo-system-ui';

export default function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('#e91e63');
    NavigationBar.setButtonStyleAsync('light');
    SystemUI.setBackgroundColorAsync('#e91e63');
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <Routes />
    </NavigationContainer>
  );
}
