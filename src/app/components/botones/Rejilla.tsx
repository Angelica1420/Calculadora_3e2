import Boton from "./Boton";
import { StyleSheet, View } from "react-native";

    const Rejilla = ({ onPress }: { onPress: (texto: string) => void }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fila}>
        <Boton texto="AC" onPress={() => onPress("AC")} color="mauve"></Boton>
        <Boton texto="+/-" onPress={() => onPress("+/-")} color="mauve"></Boton>
        <Boton texto="%" onPress={() => onPress("%")} color="mauve"></Boton>
        <Boton texto="÷" onPress={() => onPress("÷")} color="pink" />
      </View>
      <View style={styles.fila}>
        <Boton texto="7" onPress={() => onPress("7")} ></Boton>
        <Boton texto="8" onPress={() => onPress("8")} ></Boton>
        <Boton texto="9" onPress={() => onPress("9")} ></Boton>
        <Boton texto="×" onPress={() => onPress("×")} color="pink"></Boton>
      </View>
      <View style={styles.fila}>
        <Boton texto="4" onPress={() => onPress("4")} ></Boton>
        <Boton texto="5" onPress={() => onPress("5")} ></Boton>
        <Boton texto="6" onPress={() => onPress("6")} ></Boton>
        <Boton texto="-" onPress={() => onPress("-")} color="pink"></Boton>
      </View>
      <View style={styles.fila}>
        <Boton texto="1" onPress={() => onPress("1")} ></Boton>
        <Boton texto="2" onPress={() => onPress("2")} ></Boton>
        <Boton texto="3" onPress={() => onPress("3")} ></Boton>
        <Boton texto="+" onPress={() => onPress("+")} color="pink"></Boton>
      </View>
      <View style={styles.fila}>
        <Boton texto="0" onPress={() => onPress("0")} ></Boton>
        <Boton texto="." onPress={() => onPress(".")} ></Boton>
        <Boton texto="=" onPress={() => onPress("=")} color="pink"></Boton>
      </View>
    </View>
  );
}

export default Rejilla

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
  },
  fila: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
});         