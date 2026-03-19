import { useState } from "react";
import {
  View, 
  Text, 
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";

const Products = [
  {id:"1",name:"Laptop",price:"$1200"},
  {id:"2",name:"Smartphone",price:"$750"},
  {id:"3",name:"Headphone",price:"$150"},
  {id:"4",name:"Keyboard",price:"$40"},
  {id:"5",name:"Mouse",price:"$35"},
  {id:"6",name:"Smart Watch",price:"$350"},
];

function ProductCard({name, price}) {
  return(
    <View style={styles.card}>
      <Text style={styles.productName}>
        {name}
      </Text>
      <Text style={styles.productPrice}>
        {price}
      </Text>
    </View>
  );
}
export default function App() {
  const [search,setSearch] = useState("");

  const filteredProducts = Products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <TextInput
      style={styles.search}
      placeholder="Search Product..."
      value={search}
      onChangeText={setSearch}
      />
      <FlatList
      data={filteredProducts}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <ProductCard name={item.name} price={item.price}/>
      )}
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
  card:{
    borderWidth:1,
    padding:15,
    borderRadius:10,
    marginBottom:10,
  },
  productName:{
    fontSize:18,
    fontWeight:"bold",
  },
  productPrice:{
    marginTop: 5,
    color: "gray",
  },
});
