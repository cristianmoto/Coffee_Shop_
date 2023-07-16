import React from "react";
import {TouchableOpacity, TextInput, StyleSheet, Text, View, ImageBackground} from "react-native";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../Config/firebaseConfig";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");

 

  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSingIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
        const db = getFirestore()
        const colRef = collection(db, "usuarios")
        const usuarios = [];
       await getDocs(colRef)
            .then((snapshot) => {
              snapshot.docs.forEach((doc) => {
             usuarios.push({...doc.data(), id: doc.id })
               })
            })
            console.log(usuarios );
     const isAdmin =usuarios.filter(element=> element.mail.toLocaleLowerCase()===email.toLocaleLowerCase() );
     if (isAdmin.length >=1 ) {
      
      console.log("es admin");
      navigation.navigate("Admin");
    } else {
      console.log("es normal");
      navigation.navigate("Menu");
    }
   
    } catch (error) {
      console.log("entro aca por error" );
      console.log(error);
    }
   

  };
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../img/back2.png")} style={styles.image}>
        <View style={styles.contenedor}>
          <Text style={styles.textInput}>Mail</Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={(color = "white")}
          ></TextInput>
          <Text style={styles.textInput}>Password </Text>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={(color = "white")}
            secureTextEntry={true}
            keyboardType="number-pad"
          ></TextInput>

          <TouchableOpacity onPress={handleSingIn} style={styles.button}>
            <Text style={styles.textInput2}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Registro")}
            style={styles.button}
          >
            <Text style={styles.textInput2}>Registro</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  contenedor: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,

    resizeMode: "cover",
  },
  input: {
    width: 250,
    height: 50,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#fcd206",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  textInput: {
    justifyContent: "flex-start",
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  textInput2: {
    fontSize: 20,
    fontWeight: "400",
    color: "#111111",
  },
  button: {
    marginVertical: 10,
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fcd206",
    alignItems: "center",
    justifyContent: "center",

    color: "#111111",
  },
});
