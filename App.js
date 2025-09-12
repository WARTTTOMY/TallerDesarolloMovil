import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

// Las pantallas de juanpa ,luismi y yo xd
import CrearTareaScreen from "./screens/Editar_Tarea"; 
import ListarTareasScreen from "./screens/ListarTareas"; 
import MostrarListaScreen from "./screens/Crear_tarea"; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CrearTarea" component={CrearTareaScreen} />
        <Stack.Screen name="ListarTareas" component={ListarTareasScreen} />
        <Stack.Screen name="MostrarLista" component={MostrarListaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <>
      <Button title="Crear Tarea" onPress={() => navigation.navigate("CrearTarea")} />
      <Button title="Listar Tareas" onPress={() => navigation.navigate("ListarTareas")} />
      <Button title="Mostrar Lista" onPress={() => navigation.navigate("MostrarLista")} />
    </>
  );
}
