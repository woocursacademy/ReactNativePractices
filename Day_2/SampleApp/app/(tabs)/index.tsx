import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 12 }}>
      <Text>Hello, This is Woocurs academy!</Text>
      <Button title="Click Me" onPress={() => {}} />
    </View>
  );
}
