import React from 'react';
import 'react-native-gesture-handler';
import "react-native-reanimated";
import {NavigationContainer} from "@react-navigation/native"

import SplashScreen from 'react-native-splash-screen'
import AuthStack from './components/Navigation/AuthStack';



const App = () => {

  
  React.useEffect(()=>{
    SplashScreen.hide();
  },[])

  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
    );
  };
  
  

export default App;
