import React  from 'react';
import { Text,SafeAreaView, ImageBackground  } from 'react-native'
import HeaderImage from "../../assets/images/header-image.jpg"
import LoginForm from '../Form/Login.form';
import Hero from '../Hero/Hero';


function SignupPage({navigation,route}) {

  return (
      <SafeAreaView className="flex-1 flex-col h-full">
        <ImageBackground source={HeaderImage} style={{justifyContent:"center"}}>
        <Hero/>
        <LoginForm route={route} navigation={navigation} navigationPath="Login"  navigateRoute="Login" state={{btnTitle:"Sign up",messageTitle:"Already have account?",formHeader:"Sign up"}}/>
        </ImageBackground>
      </SafeAreaView>
      )
    }
    
    export default SignupPage;