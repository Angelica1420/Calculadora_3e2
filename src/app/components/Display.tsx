import { StyleSheet, Text, View } from "react-native";

type Props = { operacion: string; valor: string };

const Display = ({ operacion, valor }: Props) => (
  <View style={styles.display}>
    <Text style={styles.operacion} numberOfLines={1} adjustsFontSizeToFit>
      {operacion}
    </Text>
    <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
      {valor}
    </Text>
  </View>
);

export default Display;

const styles = StyleSheet.create({
  display: { width: "100%", paddingHorizontal: 20, paddingVertical: 12, minHeight: 130 },
  operacion: { color: "white", fontSize: 44, textAlign: "right" },
  resultado: { color: "#888888", fontSize: 28, marginTop: 10, textAlign: "right" },
});
