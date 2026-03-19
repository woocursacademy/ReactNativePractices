import { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  },[]);

  useEffect(() => {
    saveTasks();
  },[tasks]);

  const saveTasks = async () => {
    await
    AsyncStorage.setItem("TASKS",JSON.stringify(tasks));
  };

  const loadTasks = async () => {
    const stored = await
    AsyncStorage.getItem("TASKS");
    setTasks(JSON.parse(stored));
  };

  const addTask = () => {

    if(task.trim() === "") return;

    const newTask = {
      id:Date.now().toString(),
      text:task,
      done:false
    };
    setTasks([...tasks,newTask]);
    setTask("");
  };

  const toggleTask = (id) => {
    const updated = tasks.map(t => 
      t.id === id? {...t,done:!t.done} : t
    );

    setTasks(updated);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Persistent To-do List</Text>
      <View style={styles.row}>
        <TextInput
        style={styles.input}
        placeholder="New Task..."
        value={task}
        onChangeText={setTask}
        />
        <TouchableOpacity 
        style={styles.addBtn}
        onPress={addTask}>
          <Text style={styles.addText}>ADD</Text>
        </TouchableOpacity>
      </View>
      <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <View style={styles.task}>
          <TouchableOpacity
          onPress={() => toggleTask(item.id)}>
            <Text style={[styles.text,item.done && styles.done]}>
              {item.text}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>deleteTask(item.id)}>
          <Text style={styles.delete}>X</Text>
          </TouchableOpacity>
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
    marginTop:40,
  },
  title:{
    fontSize:25,
    fontWeight:"bold",
    marginBottom:20,
  },
  row:{
    flexDirection:"row",
    marginBottom:20,
  },
  input:{
    flex:1,
    borderWidth:1,
    padding:10,
    borderRadius:8,
  },
  addBtn: {
    backgroundColor:"#2563EB",
    padding: 12,
    marginLeft:10,
    borderRadius:8,
  },
  addText:{
    color:"white",
    fontWeight:"bold",
  },
  task:{
    flexDirection:"row",
    justifyContent:"space-between",
    borderBottomWidth:1,
    padding:12,
  },
  text:{
    fontSize:18,
  },
  done:{
    textDecorationLine:"line-through",
    color:"gray",
  },
  delete:{
    fontSize:18,
    fontWeight:"bold",
  },
});