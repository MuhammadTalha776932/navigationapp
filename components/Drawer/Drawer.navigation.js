import React from 'react';
import { Text, View } from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";

import Home from "../Screens/Home"
import About from "../Screens/About"
import Navigation from '../Navigation/Navigation';
const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator initialRouteName='Home Page'>
            <Drawer.Screen name='Home Page' component={Navigation} />
            <Drawer.Screen name='About Page' component={About}/>
            <Drawer.Screen name='Contact page' component={About}/>
        </Drawer.Navigator> 
    )
}

export default DrawerNavigation;
