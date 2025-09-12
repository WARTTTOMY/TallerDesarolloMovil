import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert, ScrollView, Image } from "react-native";
import { Card, TextInput } from "react-native-paper";
import styles from "../Styles/styles"; // Importación de los estilos

const editarPerfil = ({navigation}) => {

    //HOOKS PARA EDITAR TAREAS
    const [titulo, setTitulo] = useState ("");
    const [descripcion, setDescripcion] = useState ("");
    const [fecha, setFecha] = useState ("");
    const [prioridad, setPrioridad] = useState ("");
}