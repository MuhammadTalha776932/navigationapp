/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState }  from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput, TouchableOpacity
} from 'react-native';



const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    
  };
  return (
    <SafeAreaView className="flex-1 flex-col h-full">
      <View className="flex-[1] items-center justify-center content-center bottom-[25%]  bg-teal-600">
        <Text className="text-gray-700 font-serif text-2xl">{`Welcome ${email || "to React Native"}`}</Text>
      </View>
      <View className="top-[-50%] w-full flex-initial justify-center">
        <View className="bg-white p-6 rounded-lg shadow-md">
        <Text className="text-xl  mb-2 text-center mt-4 font-sans">Sign In</Text>
        <TextInput
          className="bg-gray-200 p-2 rounded-lg mb-3"
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          className="bg-gray-200 p-2 rounded-lg mb-3"
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity className="bg-indigo-500 text-white p-2 rounded-lg" onPress={handleSubmit}>
          <Text>Sign In</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};



export default App;
