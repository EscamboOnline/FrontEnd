import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/navigation'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#38A69D"} barStyle={"light-content"}/>
      <Routes/>
    </NavigationContainer>
  );
}

