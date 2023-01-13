import React from 'react'
import { View } from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../Screens/Home"
import About from "../Screens/About"
const Tabs = createBottomTabNavigator();

export default function Navigation() {

  return (
   <NavigationContainer >
    <Tabs.Navigator >
        <Tabs.Screen name='Home' component={Home} />
        <Tabs.Screen name='About' component={About}/>
    </Tabs.Navigator>
   </NavigationContainer> 
  )
}
