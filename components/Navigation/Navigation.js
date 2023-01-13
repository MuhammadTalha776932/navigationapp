import React from 'react'
import { View } from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../Screens/Home"
import About from "../Screens/About"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
const Tabs = createBottomTabNavigator();

export default function Navigation() {

  return (
   <NavigationContainer>
      <Tabs.Navigator screenOptions={ ({route}) =>({tabBarIcon:({focused,color,size})=>{
        let iconName;
        if(route.name === "Home"){
          iconName="home";
          size= focused? 25 : 20;
          color=focused? "green": "black";
         
        }else{
          iconName="info";
          size= focused? 25 : 20;
          color=focused? "green": "black";
        }
        return(
          <FontAwesome5 name={iconName} size={size} color={color}/>
        )
      }})}>
          <Tabs.Screen  name='Home' component={Home} />
          <Tabs.Screen name='About' component={About}/>
      </Tabs.Navigator>
   </NavigationContainer> 
  )
}
