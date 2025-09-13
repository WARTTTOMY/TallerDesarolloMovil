
import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert, ScrollView } from "react-native";
import { TextInput, Card } from "react-native-paper";


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

  // guardamos la tarea y vemos si cometio algun error al ingresar los datos
  const Guardar = () => {
    if (!FormValidar) {
      Alert.alert( "Por favor, complete todos los campos");
      return;
    }

    const nuevaTarea = { titulo, descripcion, fecha, prioridad };

    // pasamos pagina
    navigation.navigate("ListaTareas", { tarea: nuevaTarea });
  };

return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Text style={styles.title}>Crear Tarea</Text>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            label="Título"
            value={titulo}
            onChangeText={setTitulo}
            style={styles.input}
            left={<TextInput.Icon name="format-title" />}
            mode="outlined"
          />

          <TextInput
            label="Descripción"
            value={descripcion}
            onChangeText={setDescripcion}
            style={styles.input}
            left={<TextInput.Icon name="text" />}
            mode="outlined"
            multiline
          />

          <TextInput
            label="Fecha de vencimiento"
            value={fecha}
            onChangeText={setFecha}
            style={styles.input}
            left={<TextInput.Icon name="calendar" />}
            mode="outlined"
            placeholder="Año-Mes-Día"
          />

          <TextInput
            label="Prioridad"
            value={prioridad}
            onChangeText={setPrioridad}
            style={styles.input}
            left={<TextInput.Icon name="alerta" />}
            mode="outlined"
            placeholder="Alta / Media / Baja"
          />

          <View style={{ marginTop: 20 }}>
            <Button
              title="Guardar Tarea"
              onPress={Guardar}
              disabled={!FormValid}
            />
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default CrearTareaScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F5F7FA",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
    marginBottom: 12,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  input: {
    marginBottom: 18,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    fontSize: 15,
  },
  button: {
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#007BFF",
  },
  buttonDisabled: {
    backgroundColor: "#A0A0A0",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
});