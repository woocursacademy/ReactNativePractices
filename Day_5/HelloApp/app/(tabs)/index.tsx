import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function HomeScreen() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [error, setError] = useState("");
  const [result, setResult] = useState({ name: "", age: 0 });

  const handleSubmit = () => {
    setError("");
    setResult({ name: "", age: 0 });

    const trimmedName = name.trim();
    const trimmedAge = age.trim();

    if (!trimmedName) {
      setError("Please Enter your Name.");
      return;
    }
    if (!trimmedAge) {
      setError("Please Enter your age.");
      return;
    }

    const ageNumber = Number(trimmedAge);

    if (Number.isNaN(ageNumber)) {
      setError("Age must be a number.");
      return;
    }
    if (ageNumber > 200) {
      setError("Please enter a relaistic age.");
      return;
    }
    if (ageNumber <= 0) {
      setError("Age must be greater than Zero");
      return;
    }
    setResult({ name: trimmedName, age: ageNumber });
  };

  const handleClear = () => {
    setName("");
    setAge("");
    setError("");
    setResult({ name: "", age: 0 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Form App</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Your Name</Text>
        <TextInput
          placeholder="Example: Ibrahim"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <Text style={styles.label}>Your Age</Text>
        <TextInput
          placeholder="Example: 21"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
          style={styles.input}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleClear}>
            <Text style={styles.btnText}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
      {result ? (
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>Result</Text>
          <Text style={styles.resultText}>Name: {result.name}</Text>
          <Text style={styles.resultText}>Age: {result.age}</Text>
          <Text style={styles.resultText}>
            {result.age < 18 ? "Status: Teen " : "Status: Adult"}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 18,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 14,
    padding: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginTop: 14,
  },
  btn: {
    flex: 1,
    backgroundColor: "#111827",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  errorText: {
    marginTop: 10,
    color: "crimson",
    fontWeight: "bold",
  },
  resultCard: {
    marginTop: 18,
    backgroundColor: "#F3F4F6",
    borderRadius: 14,
    padding: 16,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 800,
    marginBottom: 8,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 600,
  },
});
