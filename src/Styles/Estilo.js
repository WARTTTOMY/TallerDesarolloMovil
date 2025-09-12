return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe el título"
        value={titulo}
        onChangeText={setTitulo}
      />

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={styles.input}
        placeholder="Detalles de la tarea"
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <Text style={styles.label}>Fecha de vencimiento</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={fecha}
        onChangeText={setFecha}
      />

      <Text style={styles.label}>Prioridad</Text>
      <TextInput
        style={styles.input}
        placeholder="Alta / Media / Baja"
        value={prioridad}
        onChangeText={setPrioridad}
      />

      <Button title="Guardar tarea" onPress={handleGuardar} />
    </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
});