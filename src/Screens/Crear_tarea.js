
  
  import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert, ScrollView } from "react-native";
import { TextInput, Card } from "react-native-paper";
import styles from "../Styles/styles"; // importa tu hoja de estilos

const CrearTareaScreen = ({ navigation }) => {
  // Hooks para los campos
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [prioridad, setPrioridad] = useState("");
  

  // validamos cada vez que chagamos un cambio 
  useEffect(() => {
    const Validar =
      titulo.trim().length > 0 &&
      descripcion.trim().length > 0 &&
      fecha.trim().length > 0 &&
      prioridad.trim().length > 0;

    setIsFormValid(Validar);
  }, [titulo, descripcion, fecha, prioridad]);

  // Guardar la tarea
  const Guardar = () => {
    if (!FormValidar) {
      Alert.alert("Error", "Por favor, complete todos los campos.");
      return;
    }

    const nuevaTarea = { titulo, descripcion, fecha, prioridad };

    // Navegar a otra pantalla pasando la tarea creada
    navigation.navigate("ListaTareas", { tarea: nuevaTarea });
  };

}