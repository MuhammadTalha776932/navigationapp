import React  from 'react';
import { Text,SafeAreaView, ImageBackground  } from 'react-native'
import HeaderImage from "../../assets/images/header-image.jpg"
import Forms from '../Form/Form';
import Hero from '../Hero/Hero';
import AsyncStorage from '@react-native-async-storage/async-storage'

function Home({navigation,route}) {
  React.useEffect(()=>{
    setProps();
  },[])
  const setProps = () =>{
    try {
      AsyncStorage.getItem("email").then(userEmail => {
        if (userEmail !=null) {
            navigation.navigate("Home");
        }
    });
    } catch (error) {
      console.log(error.message);
    }
  }
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