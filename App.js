import React from 'react';
import 'react-native-gesture-handler';
import "react-native-reanimated";
import DrawerNavigation from './components/Drawer/Drawer.navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return (
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>
    );
  };
  
  

export default App;
