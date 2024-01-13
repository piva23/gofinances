import React from 'react';
import 'react-native-gesture-handler';

import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { AppRoutes } from './src/routes/app.routes';

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
      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>
    </ThemeProvider>
  );
}


