import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#6200EE",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    textAlign: "center",
  },
  card: {
    margin: 15,
    elevation: 4,
    borderRadius: 10,
  },
  input: {
    marginBottom: 12,
    backgroundColor: "white",
  },
  button: {
    marginTop: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  // ---- Estilos para ViewProfile ----
  profileHeader: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#6200EE",
  },
  profileName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginTop: 15,
  },
  profession: {
    fontSize: 16,
    color: "#E0E0E0",
    marginTop: 5,
  },
  profileCard: {
    margin: 15,
    elevation: 3,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
});

export default styles;
