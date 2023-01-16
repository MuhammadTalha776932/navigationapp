import React from 'react';
import 'react-native-gesture-handler';
import "react-native-reanimated";
import {NavigationContainer} from "@react-navigation/native"

import SplashScreen from './components/Splash/Splash.screen';

const App = () => {

  return (
    <NavigationContainer>
      <SplashScreen/>
    </NavigationContainer>
    );
  };
  
  

export default App;
