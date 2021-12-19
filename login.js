import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import { auth,signInWithEmailAndPassword } from "../config/firebase";
import logo1 from "../image/logo1.png" 


export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
  await  signInWithEmailAndPassword(auth, email, password)
      .then( async (userCredential) => {
        // Signed in 
        const user = userCredential.user;

 alert(user.email)

alert("Login successful")
// navigation.navigate("home")

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });

      
  }

  return (
    <ScrollView>
     <View style={styles.container}>

 
      <StatusBar style="auto" />
      <Image style={styles.image} source={logo1} />

      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={text => setEmail(text)}  />
      </View>
      <br />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </View>
 

      <TouchableOpacity onPress={handleSignin} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Text>Not yet Registered <TouchableOpacity style={{color:"red"}} onPress={() => navigation.navigate('SignUp')}><Text>Sign Up</Text></TouchableOpacity> </Text>


    </View>
    </ScrollView>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
 

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  inputView: {
    backgroundColor: "green",
    borderRadius: 30,
    width: "40%",
    alignItems: "center",
    borderWidth: 3,
    color:"white",
    
},

  TextInput: {
    width: "100%",
    color:"white",
    borderRadius: 30,
    padding: 10,
  },
 
  image: {
    marginBottom: 30,
    width: 300,
    height: 250,
    padding: 50
  },
 
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor:"green",
    

    // backgroundColor: "#00000",
  },
  loginText:{
      color:"white",
  }
});