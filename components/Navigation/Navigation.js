import React from 'react'
import { View } from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "../Screens/Home"
import About from "../Screens/About"
const stack = createStackNavigator();

export default function Navigation() {

  return (
   <NavigationContainer >
    <stack.Navigator >
        <stack.Screen name='Home' component={Home} />
        <stack.Screen name='About' component={About}/>
    </stack.Navigator>
   </NavigationContainer> 
  )
}
