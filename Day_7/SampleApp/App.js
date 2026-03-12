import { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  StyleSheet,
  FlatList 
} from "react-native";

export default function App(){
  
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    
    if(!amount || !category) return;
    const newExpense = {
      id:Date.now().toString(),
      amount: Number(amount),
      category
    };
    setExpenses([...expenses,newExpense]);
    setAmount("");
    setCategory("");
  };

  const total = expenses.reduce((sum,item) => sum+item.amount,0);

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Expense Tracker</Text>
      <TextInput
      style={styles.input}
      placeholder="Amount"
      value={amount}
      onChangeText={setAmount}
      keyboardType="numeric"
      />
      <TextInput
      style={styles.input}
      placeholder="Category(Food, Travel,etc)"
      value={category}
      onChangeText={setCategory}
      />
      <TouchableOpacity style={styles.addBtn} onPress={addExpense}>
        <Text style={styles.addText}>Add Expenses</Text>
      </TouchableOpacity>
      <Text style={styles.total}>Total: ${total}</Text>
      <FlatList 
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <View style={styles.card}>
          <Text style={styles.category}>{item.category}</Text>
          <Text>{item.amount}</Text>
        </View>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    marginTop: 40,
  },
  title:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:20,
  },
  input:{
    borderWidth:1,
    padding:12,
    borderRadius:8,
    marginBottom:10,
  },
  addBtn:{
    backgroundColor:"#2563EB",
    padding:14,
    borderRadius:8,
    marginBottom:20,
  },
  addText:{
    color:"white",
    textAlign:"center",
    fontWeight:"bold",
  },
  card: {
    flexDirection: "row",
    justifyContent:"space-between",
    borderWidth: 1,
    padding:12,
    borderRadius:8,
    marginBottom: 10,
  },
  category:{
    fontWeight:"bold",
  },
  total:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:20,
  },
});