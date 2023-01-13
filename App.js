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
  TextInput, TouchableOpacity,Pressable,SectionList
  
} from 'react-native';

import Navigation from './components/Navigation/Navigation';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    alert("Hello!");
  };
  return (
    <Navigation>
      <SafeAreaView className="flex-1 flex-col h-full">
        <View className="relative h-[200px] items-center justify-center content-center bg-teal-600
        ">
          <Text className="text-gray-700 font-serif text-2xl">{`Welcome ${email || "to React Native"}`}</Text>
        </View>
        <View className="flex-initial bottom-2 justify-start h-[500px]">
          <View className="flex justify-center bg-white h-full p-6 rounded-lg shadow-2xl
        
        ">
    
          <Text className="text-2xl mb-5 bottom-4 text-center mt-4 font-sans uppercase">Login</Text>
          
          <TextInput
            className="bg-gray-200 p-2 text-2xl rounded-lg h-[50px] mb-6"
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
            />
          <TextInput
            className="bg-gray-200 p-2 text-2xl rounded-lg h-[50px] mb-6"
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            />
            <View className="text-center items-center hover:bg-black">
              <TouchableOpacity className="bg-indigo-500 w-[300px] text-white p-2 rounded-lg
              hover:text-black
              " activeOpacity={0.9} onPress={handleSubmit}>
                  <Text className="text-lg text-center text-white">Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Navigation>
    );
  };
  
  

export default App;
