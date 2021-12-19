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
  import moment from "moment";
  import DatePicker from 'react-native-datepicker';


  export default function Needy1(){
    const [name, setName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [cnic, setCnic] = useState()
    const [dob, setDob] = useState()
    const [numofMem, setNumofMem] = useState()
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

   

    return(
        <View style={styles.view}>
        <View style={styles.inputView}>

        <TextInput
          keyboardType="default"
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={ text => setName(text) }  />
      </View>
      <View style={styles.inputView}>

        <TextInput
         keyboardType="default"
          style={styles.TextInput}
          placeholder="FatherName"
          placeholderTextColor="#003f5c"
          onChangeText={text => setFatherName(text)}  />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
        keyboardType="number-pad"
          style={styles.TextInput}
          placeholder="CNIC."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={text => setCnic(text)}
        />
      </View>      

      <View>
      <DatePicker
          showIcon={false}
          androidMode="spinner"
          style={{ width: 300 }}
          date={dob}
          mode="date"
          placeholder="picker"
          format="DD-MM-YYYY"
          maxDate={moment().format('DD-MM-YYYY')}
          confirmBtnText="Chọn"
          cancelBtnText="Hủy"
          customStyles={{
            dateInput: {
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'black',
            },
          }}
          onDateChange={(date) => {
            setDob(date);
          }}
        />

      {/* <View style={styles.inputView}>
        <TextInput
        keyboardType="number-pad"
          style={styles.TextInput}
          placeholder="CNIC."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={text => numofMem(text)}
        />
      </View>  */}

</View>

</View>
    )
        }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
  
      // padding:"100"
    },
   
  
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    inputView: {
      backgroundColor: "white",
      borderRadius: 30,
      width: "25%",
      marginBottom: 20,
      textAlign:'center',
      alignItems: "center",
      borderWidth: 5,
      backgroundColor:"green",
      color:"white"
  },

  view:{
alignItems:"center",
  },
    TextInput: {
      width: "100%",
      borderRadius: 30,
      padding: 10,
      color:"white"
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    image: {
      marginBottom: 30,
      width: 300,
      height: 250,
      padding: 50
    },
   
   signupBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      borderWidth: 5,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
    },
  });