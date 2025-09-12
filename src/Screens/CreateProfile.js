import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert, ScrollView, Image } from "react-native";
import { Card, TextInput } from "react-native-paper";
import styles from "../Styles/styles"; // Importación de los estilos

const CreateProfile = ({ navigation }) => {
  // Hooks para los campos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Validar el formulario cada vez que cambia un campo
  useEffect(() => {
    const isValid =
      name.trim().length > 0 &&
      lastName.trim().length > 0 &&
      email.trim().length > 0 &&
      phone.trim().length > 0 &&
      description.trim().length > 0;

    setIsFormValid(isValid);
  }, [name, lastName, email, phone, description]);

  // Guardar el perfil
  const handleSave = () => {
    if (!isFormValid) {
      Alert.alert("Error", "Por favor, complete todos los campos.");
      return;
    }

    const profileUser = { name, lastName, email, phone, description };

    navigation.navigate("ViewProfile", { perfil: profileUser });
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={{ uri: "https://example.com/profile.jpg" }}
          style={styles.profileImage}
        />
        <Text style={styles.title}>Crear Perfil</Text>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            label="Nombre"
            value={name}
            onChangeText={setName}
            style={styles.input}
            left={<TextInput.Icon name="account" />}
            mode="outlined"
          />

          <TextInput
            label="Apellido"
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
            left={<TextInput.Icon name="account-outline" />}
            mode="outlined"
          />

          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            left={<TextInput.Icon name="email" />}
            mode="outlined"
          />

          <TextInput
            label="Teléfono"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            left={<TextInput.Icon name="phone" />}
            mode="outlined"
          />

          <TextInput
            label="Descripción"
            value={description}
            onChangeText={setDescription}
            style={styles.input}
            left={<TextInput.Icon name="text" />}
            mode="outlined"
            multiline
          />

          <View style={{ marginTop: 20 }}>
            <Button
              title="Guardar Perfil"
              onPress={handleSave}
              disabled={!isFormValid}
            />
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default CreateProfile;
