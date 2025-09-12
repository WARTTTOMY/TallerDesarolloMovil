import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListaTareasScreen = ({ route }) => {
  // Aqui se almacenan las tareas recibidas att:Tomas 
  const [tareas, setTareas] = useState([]);

  // Recibir nuevas tareas desde la pantalla CrearTarea de luismi
  useEffect(() => {
    if (route.params?.tarea) {
      setTareas((prevTareas) => [...prevTareas, route.params.tarea]);
    }
  }, [route.params?.tarea]);

   }