import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

// Las pantallas de juanpa ,luismi y yo xd
import CrearTareaScreen from "./src/Screens/Crear_lista"; 
import EditarTareaScreen from "./src/Screens/Editar_Tarea"; 
import ListaTareasScreen from "./src/Screens/ListaTareas";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>crear
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
