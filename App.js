import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation';

import * as NavigationBar from 'expo-navigation-bar';
import * as SystemUI from 'expo-system-ui';

export default function App() {
  useEffect(() => {
    const configureNavigationBar = async () => {
      try {
        await NavigationBar.setBackgroundColorAsync('#e91e63');
        await NavigationBar.setButtonStyleAsync('light');
        await SystemUI.setBackgroundColorAsync('#e91e63');
      } catch (error) {
        console.warn('Erro ao configurar NavigationBar:', error);
      }
    };

    configureNavigationBar();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <Routes />
    </NavigationContainer>
  );
}
