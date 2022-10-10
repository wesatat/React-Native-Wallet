//https://youtu.be/68l7wyHw97Y?list=PLraS8lt-XYFCTJO3wmNyWmsgP6VKq0mva&t=1812

import React from "react";
//import { StatusBar } from 'expo-status-bar';
//import Welcome from './screens/Welcome';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";
import RootStack from "./navigators/RootStack";

SplashScreen.preventAutoHideAsync();

export default function App() {
  
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  SplashScreen.hideAsync();
    return <RootStack />;
}
