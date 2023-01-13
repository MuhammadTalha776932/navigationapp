import React from 'react';
import { Text, View } from 'react-native';

const Hero = () => (
    <View>
        <View className="relative h-[250px] items-center justify-center content-center bg-cover">
            <Text className="text-gray-700 font-serif text-2xl">{`Welcome to React Native`}</Text>
        </View>
    </View>
);

export default Hero;
