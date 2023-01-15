import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { Text,SafeAreaView  } from 'react-native'

function  About({navigation,route}) {
  const [email,setEmail] = React.useState("")
  const [password,setPassword] = React.useState("")
  const setProps = () =>{
    try {
      AsyncStorage.getItem("email").then(userEmail => setEmail(userEmail));
      AsyncStorage.getItem("password").then(userPassword => setPassword(userPassword)); 
    } catch (error) {
      console.log(error.message);
    }
  }
  setProps();
  return (
    <SafeAreaView className = "flex-1 justify-center items-center">
        <Text className="text-xl font-serif font-normal">{route.name}</Text>
        <Text className="text-xl font-serif font-normal">{email}</Text>
        <Text className="text-xl font-serif font-normal">{password}</Text>
    </SafeAreaView>
  )
}

export default About