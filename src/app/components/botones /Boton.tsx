import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BotonProps {
  texto: string;
  color?: "mauve" | "rose" | "pink";
  isDouble?: boolean;
}

const Boton = ({ texto, color = "rose", isDouble }: BotonProps) => {
  return (
    <TouchableOpacity style={[
      styles.boton,
      { backgroundColor:
         color === "mauve" ? "#9a86a8" : 
         color === "rose" ? "#745564" :
          color === "pink" ? "#45192f" : "#D4D4D2" },
        
    ]}>
     <Text style={[
        styles.text,
        { color: color === "mauve" ? "black" : "white" }
      ]}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
};

export default Boton;

const styles = StyleSheet.create({
  boton: {
    borderRadius: 100,
    display: "flex",
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});