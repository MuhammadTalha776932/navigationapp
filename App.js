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

  return (
      <Navigation/>
    );
  };
  
  

export default App;
