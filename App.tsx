import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}

// ! -código da aula 1-
// #missaoespacial

//! -código da aula 2-
// #embuscadoproximonivel


// NLW5 - Trilha React Native - Aula 3 

//json-server ./src/service/server.json --host 192.168.15.8 --port 3333 --delay 1000