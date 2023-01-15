import React  from 'react';
import { Text,SafeAreaView, ImageBackground  } from 'react-native'
import HeaderImage from "../../assets/images/header-image.jpg"
import Forms from '../Form/Form';
import Hero from '../Hero/Hero';
function Home() {

  return (
      <SafeAreaView className="flex-1 flex-col h-full">
        <ImageBackground source={HeaderImage} style={{justifyContent:"center"}}>
        <Hero/>
        <Forms/>
        </ImageBackground>
      </SafeAreaView>
      )
    }
    
    export default Home