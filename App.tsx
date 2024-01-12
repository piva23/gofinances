import React from 'react';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';


import theme from './src/global/styles/theme';
import Dashboard from './src/screens/Dashboard';
import Register from './src/screens/Register';


import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { CategorySelect } from './src/screens/CategorySelect';

// import { useFonts } from 'expo-font';


export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  // const [fontsLoaded, fontError] = useFonts({
  //   'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  //   'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  //   'Poppins-Bold': require('./assets/fonts/Poppins-Medium.ttf'),
  // });

  
  if(!fontsLoaded) {
  return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Register/>
    </ThemeProvider>
  );
}


