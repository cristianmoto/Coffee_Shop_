import { Alert, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { addDoc, collection } from 'firebase/firestore'
import db from '../Config/firebaseConfig'
import { useNavigation } from '@react-navigation/native'



const ItemRegistro = () => {

  const [newItem, SetNewItem] = useState({
    id: '',
    nombre: '',
    sabor: '',
    precio: '',
    categoria: '',
    createdAt: new Date(),
  })
  const showAlert = () =>
    Alert.alert(
      'Proceso',
      'carga realizada',
      [
        {
          text: 'ok',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'default',
        },
      ],

    );
  const navigation = useNavigation();

  const onSend = async () => {
    await addDoc(collection(db, 'articulos'), newItem);
    showAlert();

  }
  return (
    <View style={styles.container}>
        <ImageBackground source={require("../screens/img/back2.png")} style={styles.image}>
      <Text style={styles.texto}>Articulos Nuevos</Text>
      <Text>{newItem.nombre}</Text>
      <TextInput style={styles.input} onChangeText={(text) => SetNewItem({ ...newItem, categoria: text })} placeholder='Categoria ' placeholderTextColor={color = 'white'} />
      <TextInput style={styles.input} onChangeText={(text) => SetNewItem({ ...newItem, nombre: text })} placeholder='Nombre ' placeholderTextColor={color = 'white'} />
      <TextInput style={styles.input} onChangeText={(text) => SetNewItem({ ...newItem, sabor: text })} placeholder='Sabor ' placeholderTextColor={color = 'white'} />
      <TextInput style={styles.input} onChangeText={(text) => SetNewItem({ ...newItem, precio: text })} placeholder='$ precio' keyboardType='number-pad' placeholderTextColor={color = 'white'} />
      <TouchableOpacity onPress={onSend} style={styles.button}>
        <Text style={styles.textInput2}>Agregar</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default ItemRegistro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  texto: {
    fontSize: 20,
    fontWeight: "400",
    color: "#f1f1f1",
    
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
    width: '90%',
    color:"white",
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
    color: "white",
   
  },
  textInput2: {
    fontSize: 20,
    fontWeight: "400",
    color: "#f1f1f1",
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