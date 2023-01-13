import React  from 'react';
import { Text,SafeAreaView, View  } from 'react-native'

function Home() {
  return (
    <SafeAreaView className = "flex-1 justify-center items-center">
        <View>
            <Text className="text-3xl font-serif font-normal">Home Screen</Text>
        </View>
    </SafeAreaView>
  )
}

export default Home