import React from "react";
import db from '../Config/firebaseConfig'
import {deleteDoc, doc, updateDoc} from 'firebase/firestore';
import { View ,Text, StyleSheet, Image}  from 'react-native'; 
import Categoria from "../utils/Categoria";
 

export default function Product({
    id,
    nombre,
    sabor,
    precio,
    categoria,
    createAt,
    
}) {
    return (
        <View style={styles.container}>
             
            <Text style={styles.categoria}>{categoria}</Text>           
            <Text style={styles.nombre}>{nombre}:</Text>
            <Text style={styles.categoria}>{sabor}</Text>
            <Text style={styles.categoria}>${precio}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    borderColor: 'white',
    borderWidth:1,
    borderRadius: 15,
    marginHorizontal: 25,
    marginVertical: 5,
    backgroundColor: '#fafafa',
    padding: 10,
  },
  categoria:{
    fontSize: 18,
    alignSelf: 'center',


  },
  nombre:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  sabor: {

  }



})