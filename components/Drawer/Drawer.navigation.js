import React from 'react';
import { Text, View } from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";

import Home from "../Screens/Home"
import About from "../Screens/About"
import Navigation from '../Navigation/Navigation';
const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={Navigation} />
            <Drawer.Screen name='About' component={About}/>
            <Drawer.Screen name='Contact' component={About}/>
        </Drawer.Navigator> 
    )
}

export default DrawerNavigation;
