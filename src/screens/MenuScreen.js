import { StyleSheet,Button,  TouchableOpacity, Text, View,  FlatList,  ImageBackground,} from "react-native";
import React, { useEffect } from "react";

import { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import db from '../Config/firebaseConfig';
import {querySnapshot, collection, doc, onSnapshot, orderBy, query} from 'firebase/firestore';
import Product from '../components/Product';
import { ScrollView } from "react-native-gesture-handler";

const MenuScreen = () => {
  const navigation = useNavigation();

  const [mercaderia, setMercaderia] = useState ([]);

  useEffect (()=>{
    const collectionRef = collection(db, 'articulos');
    const q = query(collectionRef, orderBy ('categoria','asc'));

    const unsuscribe =onSnapshot (q, querySnapshot=> {
      setMercaderia(
        querySnapshot.docs.map (doc =>({
          id: doc.id,
          nombre: doc.data().nombre,
          sabor: doc.data().sabor,
          precio:doc.data().precio,
          categoria: doc.data().categoria,
          createdAt: doc.data().createdAt,
        })
        ))
    })
    return unsuscribe;
  },[])

 


  return (

    <View style={styles.container}>
    <ImageBackground source={require('../screens/img/background.png')} style={styles.image}>
      <FlatList
        data={mercaderia}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Product {...item} />}
      />
    </ImageBackground>
  </View>
     );
    };
   
 



export default MenuScreen;


const styles = StyleSheet.create({
 
  container: {
    flex:1,
   
  },
  button:{
    width: 40,
    height: 40,
    backgroundColor:"#451717",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:"45%",
    borderRadius:25,
  },
  textInput: {
    justifyContent:'center',
    alignSelf: 'center',
    alignItems:'center',
    fontSize: 30,
    fontWeight: "600",
    color: "white",
  },
})
