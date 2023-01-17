import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import About from './About';
import Contact from './contact';


const HomeTabs = () => {

    const Tabs = createBottomTabNavigator();
    return(
        <>
        <Tabs.Navigator screenOptions={{header:()=>null}}>
            <Tabs.Screen name='Home' component={Home}/>
            <Tabs.Screen name='About' component={About}/>
            <Tabs.Screen name='Contact' component={Contact}/>
        </Tabs.Navigator>
        </>
    )
}
export default HomeTabs;
