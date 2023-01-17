import React  from 'react';
import { Text,SafeAreaView, ImageBackground  } from 'react-native'
import HeaderImage from "../../assets/images/header-image.jpg"
import LoginForm from '../Form/Login.form';
import Hero from '../Hero/Hero';


function LoginPage({navigation,route}) {

  return (
      <SafeAreaView className="flex-1 flex-col h-full">
        <ImageBackground source={HeaderImage} style={{justifyContent:"center"}}>
        <Hero/>
        <LoginForm route={route} navigation={navigation} navigateRoute="Signup" navigationPath="HomePage"  state={{btnTitle:"Sign in",messageTitle:"Create a new account?",formHeader:"Sign in"}}/>
        </ImageBackground>
      </SafeAreaView>
      )
    }
    
    export default LoginPage;