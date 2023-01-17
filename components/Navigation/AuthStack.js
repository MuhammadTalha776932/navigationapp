import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '../Screens/LoginPage';
import SignupPage from '../Screens/SignupPage';

const AuthStack = () => {
    const Stack = createStackNavigator();
    return (
    <Stack.Navigator screenOptions={{header:()=>null}} initialRouteName="Signup">
        <Stack.Screen name='Signin' component={LoginPage} />
        <Stack.Screen name='Signup' component={SignupPage}/>
    </Stack.Navigator>
    )
}


export default AuthStack;
