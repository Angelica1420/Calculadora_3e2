import { StyleSheet, Text, View } from 'react-native'

const Display = () => {
  return (
    <View style={styles.display}>
      <Text style={styles.result}>0</Text>
    </View>
  )
}

export default Display

const styles = StyleSheet.create({
  display:{
    width:"100%",
    padding:20,
    height:96
  },
  result:{
    color:"white",
    fontSize:64,
    textAlign:"right"
  }
})