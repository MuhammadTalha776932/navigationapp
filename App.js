import React from 'react';
import 'react-native-gesture-handler';
import "react-native-reanimated";
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen'

import LoginPage from './components/Screens/LoginPage';
import SignupPage from './components/Screens/SignupPage';

const App = () => {

  const Stack = createStackNavigator();
  React.useEffect(()=>{
    SplashScreen.hide();
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header:()=>null}}>
        <Stack.Screen name='Login' component={LoginPage} />
        <Stack.Screen name='Signup' component={SignupPage}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  };
  
  

export default App;
