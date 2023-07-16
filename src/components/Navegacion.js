import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, StyleSheet } from "react-native";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Config/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//screens
import CartScreen from "../screens/CartScreen";
import MenuScreen from "../screens/MenuScreen";
import DetalleScreen from "../screens/DetalleScreen";
import LoginScreen from "../screens/login/LoginScreen";
import RegisterScreen from "../screens/login/RegisterScreen";
import Admin from "../screens/Admin";
import { SafeAreaView } from "react-native-safe-area-context";


function Navegacion() {
 

  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSingOut = () => {
    signOut(auth).then(() => {
      console.log("Usuario ha cerrado sesión");
      navigation.navigate("Admin");
    });
  };

  return (
   
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#111111",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      initialRouteName="Login"
    >
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
       
      
      <Stack.Screen name="Registro" component={RegisterScreen} />
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={({ navigation, route }) => ({
          
          headerRight: () => (
            <TouchableOpacity onPress={handleSingOut} style={styles.button}>
              <MaterialCommunityIcons name="logout" color={"#fff"} size={30} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Detalle" component={DetalleScreen} />
      <Stack.Screen name="Orden" component={CartScreen} />
      <Stack.Screen name="Admin" component={Admin} options={({ navigation, route }) => ({
          
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Menu')} style={styles.button}>
              <MaterialCommunityIcons name="arrow-left-drop-circle-outline" color={"#fff"} size={30} />
            </TouchableOpacity>
          ),
        })} />
    </Stack.Navigator>
   
  );
}
export default Navegacion;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
