import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";


// Pantallas del proyecto
import CrearTareaScreen from "./src/Screens/Crear_tarea"; 
import EditarTareaScreen from "./src/Screens/Editar_Tarea"; 
import ListaTareasScreen from "./src/Screens/ListaTareas"; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CrearTarea" component={CrearTareaScreen} />
        <Stack.Screen name="EditarTarea" component={EditarTareaScreen} />
        <Stack.Screen name="ListarTareas" component={ListaTareasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <>
      <Button
        title="Crear Tarea"
        onPress={() => navigation.navigate("CrearTarea")}
      />
      <Button
        title="Editar Tarea"
        onPress={() => navigation.navigate("EditarTarea")}
      />
      <Button
        title="Listar Tareas"
        onPress={() => navigation.navigate("ListarTareas")}
      />
    </>
  );
}
