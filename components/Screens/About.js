import React from 'react'
import { Text,SafeAreaView  } from 'react-native'
import Navigation from '../Navigation/Navigation'

function About() {
  return (
    <SafeAreaView className = "flex-1 justify-center items-center">
        <Text className="text-xl font-serif font-normal">About Screen</Text>
    </SafeAreaView>
  )
}

export default About