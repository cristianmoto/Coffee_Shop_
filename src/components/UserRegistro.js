import { Alert, StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { addDoc, collection } from 'firebase/firestore'
import db from '../Config/firebaseConfig'
import { useNavigation } from '@react-navigation/native'



const UserRegistro = () => {

  const [newItem, SetNewItem] = useState({
    id: '',
    nombre: '',
    nick: '',
    mail: '',
    categoria: '',
    apellido: '',
    password: '',

  })
  const showAlert = () =>
    Alert.alert(
     
      'Usuario creado',
     

    );
  const navigation = useNavigation();

  const onSend = async () => {
    await addDoc(collection(db, 'usuarios'), newItem);
    showAlert();

  }
  return (
    <ScrollView>
    <View style={styles.container}>
        <ImageBackground source={require('../screens/img/background.png')} style={styles.image}>
      <Text style={styles.texto}>Nuevo Usuario</Text>
      <Text>{newItem.nombre}</Text>
      <TextInput style={styles.input} onChangeText={(text) => SetNewItem({ ...newItem, categoria: text })} placeholder='Categoria ' placeholderTextColor={color = 'gray'} />
      <TextInput style={styles.input} onChangeText={(text) => SetNewItem({ ...newItem, nombre: text })} placeholder='Nombre ' placeholderTextColor={color = 'gray'} />
      <TextInput style={styles.input} onChangeText={(text) => SetNewItem({ ...newItem, apellido: text })} placeholder='Apellido ' placeholderTextColor={color = 'gray'} />
      <TextInput style={styles.input} onChangeText={(text) => SetNewItem({ ...newItem, nick: text })} placeholder='NickName' placeholderTextColor={color = 'gray'} />
      <TextInput style={styles.input} onChangeText={(text) => SetNewItem({ ...newItem, mail: text })} placeholder='mail'  placeholderTextColor={color = 'gray'} />
      <TextInput style={styles.input} onChangeText={(text) => SetNewItem({ ...newItem, password: text })} placeholder='Password' keyboardType='number-pad' placeholderTextColor={color = 'gray'} />
      <TouchableOpacity onPress={onSend} style={styles.button}>
        <Text style={styles.textInput2}>Agregar</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
    </ScrollView>
  )
}

export default UserRegistro

const styles = StyleSheet.create({
  container: {
    flex: 1,
     },
  texto: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    
    marginTop: 15,
    height: 40,
   alignSelf: 'center',

  },
  contenedor: {
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    color: "White",
    width: '90%',
    height: 50,
    alignSelf: 'center',
    marginTop: 15,
    padding: 4,
    borderWidth: 1,
    borderColor: "gold",
    borderBottomStartRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#f2f2f2',
    shadowOffset: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
   
    fontSize: 18,
    fontWeight: "400",
  },
  textInput: {
    justifyContent: 'flex-start',
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
   
  },
  textInput2: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
  },
  button: {
    margin: 20, 
    alignSelf: 'center',
    width: 250,
    height: 40,
    borderRadius: 10,
    borderColor: 'gold',
    borderWidth: 1,
    backgroundColor: 'rgba(44, 33, 30, 0.8)',
    alignItems: "center",
    justifyContent: "center",
    color: '#fafafa',
  },
  image: {
    flex:1,
   
     resizeMode: 'cover',
     
    },

})