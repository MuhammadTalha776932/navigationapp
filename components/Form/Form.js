import React,{useState} from 'react';
import { Text,View,TouchableOpacity,TextInput } from 'react-native'

const Forms = ({navigation,route}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = () => {
        if (email.length !== 0 && password.length !== 0) {
            navigation.navigate("Home",{email,password})
            return;
        }
        alert("Please enter the values");
    };
   return (
    <View className="flex-initial bottom-2 justify-start h-full">
        <View className="flex-initial justify-center content-center  bg-slate-100 h-full p-6 rounded-lg shadow-2xl">
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
)};


export default Forms;
