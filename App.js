import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from "react-native-paper"; 
import AddTaskScreen from "./src/Screens/";
import ViewProfile from "./src/Screens/ViewProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CreateProfile">
          <Stack.Screen 
            name="Editar_Tarea" 
            component={EditarTarea} 
            options={{ title: 'Editar Tarea' }}
          />
          <Stack.Screen 
            name="Crear_tarea" 
            component={ViewProfile} 
            options={{ title: 'Crear tarea' }}
          />
          <Stack.Screen 
            name="Listar_tareas" 
            component={ViewProfile} 
            options={{ title: 'Ver Lista de tareas' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
