import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import About from './About';
import Contact from './contact';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const HomeTabs = () => {

    const Tabs = createBottomTabNavigator();
    return(
        <>
        <Tabs.Navigator screenOptions={({route,navigation})=>{return{header:()=>null,tabBarIcon:({focused,color,size})=>{
            let iconName ;
            if (route.name === "Home") {
                iconName="home"
            } else if (route.name ==="About") {
                iconName = "info"
            }
            else if (route.name === "Contact") {
                iconName = "address-book"
            }
            return (
                <FontAwesome5 name={iconName}/>
            )
        },tabBarLabelStyle:{fontSize:20},tabBarStyle:{backgroundColor:"#ffefef"}}}} initialRouteName="Home">
            <Tabs.Screen name='Home' component={Home} options={{tabBarLabel: 'Home',tabBarStyle:{display:"flex"}}}/>
            <Tabs.Screen name='About' component={About}/>
            <Tabs.Screen name='Contact' component={Contact}/>
        </Tabs.Navigator>
        </>
    )
}
export default HomeTabs;
