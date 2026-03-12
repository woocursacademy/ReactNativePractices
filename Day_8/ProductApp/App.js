import {
  View, 
  Text, 
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <TextInput
      style={styles.search}
      placeholder="Search Product..."
      value=""
      onChangeText=""
      />
      <FlatList
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    marginBottom:40,
  },
  title:{
    fontSize:25,
    fontWeight:"bold",
    marginBottom:30,
  },
  search:{
    borderWidth:1,
    padding:10,
    borderRadius:8,
    marginBottom:20,
  },
});
