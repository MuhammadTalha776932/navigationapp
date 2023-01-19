import React from 'react';
import 'react-native-gesture-handler';
import "react-native-reanimated";
import {NavigationContainer} from "@react-navigation/native"

import SplashScreen from 'react-native-splash-screen'

import HomeStack from './components/Navigation/HomeStack';
import { NativeBaseProvider } from 'native-base';
import StartPage from './components/ParentStartPage/StartPage';



const App = () => {

  
  React.useEffect(()=>{
    SplashScreen.hide();
  },[])

  return (
    <NativeBaseProvider>
        <NavigationContainer >
          {/* <HomeStack/> */}
          <StartPage/>
        </NavigationContainer>
    </NativeBaseProvider>
    );
  };
  
  

export default App;
