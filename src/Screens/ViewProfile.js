import React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import styles from "../Styles/styles";

const ViewProfile = ({ route }) => {
  const { perfil } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Card>
        <Card.Title title="Perfil Guardado" />
        <Card.Content>
          <Text>Nombre: {perfil.name}</Text>
          <Text>Apellido: {perfil.lastName}</Text>
          <Text>Email: {perfil.email}</Text>
          <Text>Teléfono: {perfil.phone}</Text>
          <Text>Descripción: {perfil.description}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ViewProfile;
