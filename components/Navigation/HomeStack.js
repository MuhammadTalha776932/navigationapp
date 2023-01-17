import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeDrawer from '../Drawer/index.drawer';
import AuthStack from './AuthStack';




const HomeStack = () => {
    const Stack = createStackNavigator();
    return (
        <>
            <Stack.Navigator screenOptions={{header:()=>null}}>
                <Stack.Screen name='Register' component={AuthStack}/>
                <Stack.Screen name='HomePage' component={HomeDrawer}/>
            </Stack.Navigator>
        </>
    )
}


export default HomeStack;