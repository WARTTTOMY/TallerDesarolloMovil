
  
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