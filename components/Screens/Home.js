import React  from 'react';
import { Text,SafeAreaView, ImageBackground  } from 'react-native'
import HeaderImage from "../../assets/images/header-image.jpg"
import Forms from '../Form/Form';
import Hero from '../Hero/Hero';
function Home({navigation,route}) {

  return (
      <SafeAreaView className="flex-1 flex-col h-full">
        <ImageBackground source={HeaderImage} style={{justifyContent:"center"}}>
        <Hero/>
        <Forms route={route} navigation={navigation}/>
        </ImageBackground>
      </SafeAreaView>
      )
    }
    
    export default Home