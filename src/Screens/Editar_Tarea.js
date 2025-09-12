import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

import styles from "../Styles/styles"; // Importación de los estilos
import { ScrollView } from "react-native/types_generated/index";


const EditarTarea = ({ tarea, onActualizar, navigation }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [prioridad, setPrioridad] = useState("");

  // useEffect: carga inicial de datos en los inputs
  useEffect(() => {
    if (tarea) {
      setTitulo(tarea.titulo);
      setDescripcion(tarea.descripcion);
      setFecha(tarea.fecha);
      setPrioridad(tarea.prioridad);
    }
  }, [tarea]);

  //actualizacion

  const handleAcutalizar = () => {
    if (!titulo.trim()) {
        Alert.alert (
            "error titulo",
            "el título es obligatorio"
        );
        return;
    }
    //Se llama la función y se actualiza la tarea 
    onActualizar ({ 
        ...tarea, titulo, descripcion, fecha, prioridad
    });
    navigation.goBack(); //volver 
  };

  