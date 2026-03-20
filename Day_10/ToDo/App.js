// import React from "react";

import { NavigationContainer } 
from "@react-navigation/native";
import { createNativeStackNavigator } 
from "@react-navigation/native-stack";

import { View, Text, TouchableOpacity, StyleSheet } 
from "react-native";

const Stack = createNativeStackNavigator(); 

function HomeScreen({navigation}){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Home Screen
      </Text>
      <TouchableOpacity 
      style={styles.button}
      onPress={() => {navigation.navigate("Details",{stuName:"John"})}}>
        <Text style={styles.buttonText}>Go To Details</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({route}){
  const {stuName} = route.params;
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Details Screen
      </Text>
      <Text style={styles.subtitle}>Hello Woocurs! Your Name is {stuName}</Text>
    </View>
  );
}

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        />
        <Stack.Screen
        name="Details"
        component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  title:{
    fontSize:25,
    fontWeight:"bold",
    marginbottom:20,
  },
  subtitle:{
    fontSize:20,
  },
  button:{
    backgroundColor:"#2563EB",
    padding:15,
    borderRadius:8,
  },
  buttonText: {
    color:"white",
    fontWeight:"bold",
  },
});