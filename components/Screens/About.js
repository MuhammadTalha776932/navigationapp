import React from 'react'
import { Text,SafeAreaView, Pressable  } from 'react-native'

var SQLite = require("react-native-sqlite-storage");

function  About({navigation,route}) {
  const [email,setEmail] = React.useState("")
  const [password,setPassword] = React.useState("")
  const db = SQLite.openDatabase(
    {
        name:"MainDB",
        location:"default"
    },
    ()=>{},
    (error) => {console.log(error.message)}
    
    )
  React.useEffect(()=>{
    db.transaction((transaction) => {
      transaction.executeSql("SELECT Email, Password FROM Users",[],(statement,results)=>{
          let lens = results.rows.length;
          if (lens > 0) {
              var Email = results.rows.item(0).Email;
              var Password = results.rows.item(0).Password;
              setEmail(Email);
              setPassword(Password);
          }
      })
  })
  },[email,password])

  // const setProps = () =>{
  //   try {
  //     AsyncStorage.getItem("email").then(userEmail => setEmail(userEmail));
  //     AsyncStorage.getItem("password").then(userPassword => setPassword(userPassword)); 
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  return (
    <SafeAreaView className = "flex-1 justify-center items-center">
        <Text className="text-xl font-serif font-normal">{route.name}</Text>
        <Text className="text-xl font-serif font-normal">{email}</Text>
        <Text className="text-xl font-serif font-normal">{password}</Text>
    </SafeAreaView>
  )
}

export default About