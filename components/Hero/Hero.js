import React from 'react';
import { Text, View } from 'react-native';

const Hero = () => (
    <View className="blur-md opacity-40 bg-white">
        <View className="relative h-[250px] items-center justify-center content-center bg-cover">
            <Text className="text-slate-800 font-serif text-2xl">{`Welcome to React Native`}</Text>
        </View>
    </View>
);

export default Hero;
