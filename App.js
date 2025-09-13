import React from "react";
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";


// Pantallas del proyecto
import CrearTareaScreen from "./src/Screens/Crear_tarea"; 
import EditarTareaScreen from "./src/Screens/Editar_Tarea"; 
import ListaTareasScreen from "./src/Screens/ListaTareas"; 



const RootStack = createNativeStackNavigator({
  screens: {
    Home: CrearTareaScreen,
  },
});


const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation>
     <Navigation.Navigator initialRouteName="Home">
        <Navigation.Screen name="Home" component={HomeScreen} />
        <Navigation.Screen name="CrearTarea" component={CrearTareaScreen} />
        <Navigation.Screen name="EditarTarea" component={EditarTareaScreen} />
        <Navigation.Screen name="ListarTareas" component={ListaTareasScreen} />
      </Navigation.Navigator>
  </Navigation>
}




