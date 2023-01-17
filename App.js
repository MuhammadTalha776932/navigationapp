import React from 'react';
import 'react-native-gesture-handler';
import "react-native-reanimated";
import {NavigationContainer} from "@react-navigation/native"

import SplashScreen from 'react-native-splash-screen'

import HomeStack from './components/Navigation/HomeStack';



const App = () => {

  
  React.useEffect(()=>{
    SplashScreen.hide();
  },[])

  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
    );
  };
  
  

export default App;
