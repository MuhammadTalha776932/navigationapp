import React from 'react';

import {createStackNavigator} from "@react-navigation/stack";


import About from "../Screens/About"
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../Screens/LoginPage';

const DrawerNavigation = () => {
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator initialRouteName='Login'
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
            <Stack.Screen options={{header:()=>null}}  name='Login' component={Home} />
            <Stack.Screen  name='Home' component={About}/>
        </Stack.Navigator> 
    )
}

export default DrawerNavigation;
