import React, { useState }  from 'react';
import { Text,SafeAreaView,Pressable, View,TouchableOpacity,Tex  } from 'react-native'

function Home({navigation}) {
    const goToAbout = () =>{
        navigation.navigate("About")
    }
  return (
    <SafeAreaView className = "flex-1 justify-center items-center">
        <View>
            <Text className="text-3xl font-serif font-normal">Home Screen</Text>
            <Pressable
            className = "bg-slate-500"
            onPress={goToAbout}
            >
                <Text className="text-center font-bold text-4xl">Go to About</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default Home