import { StyleSheet, View } from "react-native";
import Display from "./components/Display";
import Rejilla from "./components/botones/Rejilla";
import { useCalculadora } from "../hooks/useCalculadora";

export default function Index() {
  const { textoOperacion, resultadoPrevio, presionarBoton } = useCalculadora();

  return (
    <View style={styles.container}>
      <Display operacion={textoOperacion} valor={resultadoPrevio} />
      <View style={styles.espacio} />
      <View style={styles.separador} />
      <Rejilla onPress={presionarBoton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#1b1b1b",
    paddingTop: 30,
  },
  espacio: { flex: 1 },
  separador: {
    width: "88%",
    height: 2,
    backgroundColor: "#9a86a8",
    marginBottom: 15,
  },
});
