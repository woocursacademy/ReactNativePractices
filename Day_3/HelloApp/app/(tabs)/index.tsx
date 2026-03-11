import { useState } from "react";
import { View,Text,StyleSheet, Button } from "react-native";

export default function HomeScreen(){
  const [message, setMessage] = useState("Welcome to Woocurs Hub!");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {message}
      </Text>
      <Button 
      title="Click Here"
      onPress={()=>setMessage("You Clicked this Woocurs Button")}
      />
      <Button
      title="Reset"
      onPress={()=>setMessage("Welcome to Woocurs Hub!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:20,
  },
  conatinerOne: {
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center"
  },
  title:{
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    padding:10
  }
});