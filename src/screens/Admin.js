import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ItemRegistro from '../components/ItemRegistro';
import UserRegistro from '../components/UserRegistro';

import React from 'react'


const Tab = createMaterialTopTabNavigator();

function Admin() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Usuario Nuevo" component={UserRegistro} />
      <Tab.Screen name="Articulo Nuevo" component={ItemRegistro} />
    </Tab.Navigator>
  );
}
export default Admin