import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

import { StyleSheet, Platform } from "react-native";
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


  Return (
    <ScrollView>
        <View>
            <text style = {styles.container}>
                Titulo
                <TextInput 
                    style={styles.input}
                    value={titulo}
                    onChangeText={setTitulo}
                    placeholder="Editar título"
                />
            </text>
        </View>

        <View>
            <text style = {styles.container}>
                Descripción
                <TextInput 
                    style={styles.input}
                    value={descripcion}
                    onChangeText={setDescripcion}
                    placeholder="Editar descripción"
                />
            </text>
        </View>

        <View>
            <text style = {styles.container}>
                Fecha
                <TextInput 
                    style={styles.input}
                    value={fecha}
                    onChangeText={setFecha}
                    placeholder="Editar Fecha"
                />
            </text>
        </View>

        <View>
            <text style = {styles.container}>
                Titulo
                <TextInput 
                    style={styles.input}
                    value={prioridad}
                    onChangeText={setPrioridad}
                    placeholder="Editar Prioridad"
                />
            </text>
        </View>
    </ScrollView>
  );

};

export default EditarTarea;