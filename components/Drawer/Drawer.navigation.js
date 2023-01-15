import React from 'react';

import {createDrawerNavigator} from "@react-navigation/drawer";


import About from "../Screens/About"
import Navigation from '../Navigation/Navigation';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator initialRouteName='Login Section'
        screenOptions={({route,navigation}) =>{ return {drawerPosition:"right",
        headerTitleAlign:"center",
        drawerIcon:({focused,size,color})=>{
            let iconName ;
            if (route.name === "Home Section") {
                iconName = "home"
                focused? 20:25;
                focused? color="green":color="black"
            } else if (route.name === "About Section") {
                iconName = "address-book"
                focused? 20:25;
                focused? color="green":color="black"
            } else if (route.name === "Setting Section") {
                iconName = "toolbox";
                focused? 20:25;
                focused? color="green":color="black"
            }
            return (<FontAwesome5Icon name={iconName} size={size} color={color}/>)
        },swipeEnabled:false,headerStyle:{
            backgroundColor:"#0081B4",
        }}}}
        > 
            <Drawer.Screen  name='Login Section' component={Navigation} />
            <Drawer.Screen  name='About Section' component={About}/>
            <Drawer.Screen  name='Setting Section' component={About}/>
        </Drawer.Navigator> 
    )
}

export default DrawerNavigation;
