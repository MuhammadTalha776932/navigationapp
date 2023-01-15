import React from 'react'
import { Text,SafeAreaView  } from 'react-native'


function About({navigation,route}) {

  return (
    <SafeAreaView className = "flex-1 justify-center items-center">
        <Text className="text-xl font-serif font-normal">{route.name}</Text>
        <Text className="text-xl font-serif font-normal">{route.params?.email}</Text>
        <Text className="text-xl font-serif font-normal">{route.params?.password}</Text>
    </SafeAreaView>
  )
}

export default About