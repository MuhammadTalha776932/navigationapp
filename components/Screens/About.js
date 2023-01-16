import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { Text,SafeAreaView, Pressable  } from 'react-native'

function  About({navigation,route}) {
  const [email,setEmail] = React.useState("")
  const [password,setPassword] = React.useState("")

  React.useEffect(()=>{
    setProps();
  },[])
  const setProps = () =>{
    try {
      AsyncStorage.getItem("email").then(userEmail => setEmail(userEmail));
      AsyncStorage.getItem("password").then(userPassword => setPassword(userPassword)); 
    } catch (error) {
      console.log(error.message);
    }
  }
  const deleteUser = () =>{
    AsyncStorage.clear();
    navigation.navigate("Login")
  }
  return (
    <SafeAreaView className = "flex-1 justify-center items-center">
        <Text className="text-xl font-serif font-normal">{route.name}</Text>
        <Text className="text-xl font-serif font-normal">{email}</Text>
        <Text className="text-xl font-serif font-normal">{password}</Text>
        <Pressable onPress={deleteUser} className="bg-red-500 mt-4">
          <Text className="text-2xl text-white p-5">Sign Out</Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default About