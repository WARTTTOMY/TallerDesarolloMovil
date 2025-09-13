import React from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, Platform, ScrollView } from "react-native";
import { useState, useEffect } from "react";


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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f6fc", // color de fondo suave
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: "600",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
   
    elevation: 5,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 10,
  },
});