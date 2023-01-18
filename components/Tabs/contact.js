import React, { useState } from 'react';
import { View, Text, TextInput, Button, Dimensions } from 'react-native';

const Contact = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;

    const isPortrait = screenHeight > screenWidth;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                style={{ width: isPortrait ? '80%' : '40%', marginBottom: 10}}
                placeholder="Username"
                onChangeText={text => setUsername(text)}
                value={username}
            />
            <TextInput
                style={{ width: isPortrait ? '80%' : '40%', marginBottom: 10 }}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                value={password}
            />
            <Button title="Login" onPress={() => console.log(`Logging in with ${username} and ${password}`)} />
        </View>
    );
}

export default Contact;
