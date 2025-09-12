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

   // Renderizar cada tarea en la lista
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text>{item.descripcion}</Text>
      <Text>Fecha: {item.fecha}</Text>
      <Text>Prioridad: {item.prioridad}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📋 Lista de Tareas</Text>

      {tareas.length === 0 ? (
        <Text style={styles.vacio}>No hay tareas aún</Text>
      ) : (
        <FlatList
          data={tareas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f4f4",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  vacio: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    padding: 12,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ListaTareasScreen;
