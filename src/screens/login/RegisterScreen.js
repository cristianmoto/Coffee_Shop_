import { StyleSheet, Text, View ,ScrollView, TextInput, TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../Config/firebaseConfig';


    const RegisterScreen = () => {


        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [userName, setUserName]= useState ("");
        const [phone, setPhone]= useState ("");
        const navigation = useNavigation();
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        const handleCreateAccount = () => {
            createUserWithEmailAndPassword(auth, email, password, userName, phone)
              .then((userCredential) => {
                console.log("cuenta creada");
                const user = userCredential.user;
                console.log(user);
                navigation.navigate('Login');
                alert: ('Usuario creado');
              })
              .catch((error) => {
                console.log(error);
              });
          };
          return (
            <View style={styles.container}>
   <ImageBackground source={require("../img/back2.png")} style={styles.image}>

  
     
         <View style={styles.contenedor}>
              <ScrollView
                contentContainerStyle={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={styles.login}>
             
                    <Text style={styles.textInput}>Usuario</Text>
                    <TextInput
                      onChangeText={(text) => setUserName(text)}
                      style={styles.input}
                      placeholder="usuario"
                    ></TextInput>
                    <Text style={styles.textInput}>Password </Text>
                    <TextInput
                      onChangeText={(text) => setPassword(text)}
                      style={styles.input}
                      placeholder="password"
                      secureTextEntry={true}
                    ></TextInput>
                      <Text style={styles.textInput}>Mail</Text>
                    <TextInput
                      onChangeText={(text) => setEmail(text)}
                      style={styles.input}
                      placeholder="email"
                    ></TextInput>
                      <Text style={styles.textInput}>Telephone</Text>
                    <TextInput
                      onChangeText={(text) => setPhone(text)}
                      style={styles.input}
                      placeholder="telefono"
                    ></TextInput>
                  </View>
                 
                  <TouchableOpacity onPress={handleCreateAccount} style={styles.button}>
                    <Text style={styles.textInput2}>Registro</Text>
                  </TouchableOpacity>
              
              </ScrollView>
              </View>
              </ImageBackground>
              
            </View>
          );
      };


export default RegisterScreen

const styles = StyleSheet.create({
  container: {
     
      flex: 1,
      backgroundColor: '#f2f2f2',
   
    },
    contenedor:{

      marginVertical:50,
      alignItems: 'center',
      justifyContent:'center',
    },
  image: {
    flex:1,
   
     resizeMode: 'cover',
     
    },
  input: {
    width: 250,
    height: 50,
    marginVertical: 10,
    padding: 10,
    borderWidth:1,
    borderColor: "#451717",
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: 'white',
    fontSize: 20,
    fontWeight: "600",
  },
  textInput: {
    justifyContent:'flex-start',
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  textInput2: {
    fontSize: 20,
    fontWeight: "400",
    color: "#f1f1f1",
  },
  button: {
    marginVertical:10,
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(44, 33, 30, 0.8)',
    alignItems: "center",
    justifyContent: "center",
    
    color: '#fafafa',
  },

})