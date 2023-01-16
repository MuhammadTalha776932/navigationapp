import React from 'react';
import 'react-native-gesture-handler';
import "react-native-reanimated";
import {NavigationContainer} from "@react-navigation/native"
import SplashScreen from 'react-native-splash-screen'

import SplashScreens from './components/Splash/Splash.screen';

const App = () => {

  React.useEffect(()=>{
    SplashScreen.hide();
  },[])

  return (
    <NavigationContainer>
      <SplashScreens/>
    </NavigationContainer>
    );
  };
  
  

export default App;
