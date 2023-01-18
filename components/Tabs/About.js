import React from 'react';
import { Text,View,ScrollView } from 'react-native';


const About = ({
    params,
}) => (
    <>
        <ScrollView style={{flex:1,backgroundColor:"gray"}}>
            <View style={{flex:1,height:300,justifyContent:"center",alignItems:"center"}}>
                <Text>Section One</Text>
            </View>
            <View style={{flex:1,height:300,justifyContent:"center",alignItems:"center"}}>
                <Text>Section Two</Text>
            </View>
            <View style={{flex:1,height:300,justifyContent:"center",alignItems:"center"}}>
                <Text>Section Three</Text>
            </View>
            <View style={{flex:1,height:300,justifyContent:"center",alignItems:"center"}}>
                <Text>Section Four</Text>
            </View>
        </ScrollView>
    </>
);

export default About;
