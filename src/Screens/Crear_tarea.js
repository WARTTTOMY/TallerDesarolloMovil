
  
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
  

}