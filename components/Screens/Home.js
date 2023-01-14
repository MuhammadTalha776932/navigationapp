import React,{useState}  from 'react';
import { Text,SafeAreaView, View,TouchableOpacity,TextInput, ImageBackground  } from 'react-native'
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
    // <SafeAreaView className = "flex-1 justify-center items-center">
    //     <View>
    //         <Text className="text-3xl font-serif font-normal">Home Screen</Text>
    //     </View>
    // </SafeAreaView>