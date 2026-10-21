import Boton from "@/app/components/botones /Boton";
import { StyleSheet, View } from "react-native";

    const Rejilla = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fila}>
        <Boton texto="AC" color="mauve"></Boton>
        <Boton texto="+/-" color="mauve"></Boton>
        <Boton texto="%" color="mauve"></Boton>
        <Boton texto="÷" color="pink" />
      </View>
      <View style={styles.fila}>
        <Boton texto="7" ></Boton>
        <Boton texto="8" ></Boton>
        <Boton texto="9" ></Boton>
        <Boton texto="×" color="pink"></Boton>
      </View>
      <View style={styles.fila}>
        <Boton texto="4" ></Boton>
        <Boton texto="5" ></Boton>
        <Boton texto="6" ></Boton>
        <Boton texto="-" color="pink"></Boton>
      </View>
      <View style={styles.fila}>
        <Boton texto="1" ></Boton>
        <Boton texto="2" ></Boton>
        <Boton texto="3" ></Boton>
        <Boton texto="+" color="pink"></Boton>
      </View>
      <View style={styles.fila}>
        <Boton texto="0" ></Boton>
        <Boton texto="." ></Boton>
        <Boton texto="=" color="pink"></Boton>
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