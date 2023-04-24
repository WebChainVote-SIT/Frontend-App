import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AndroidSmall1 from "./components/HomePage/HomePage";

export default function App() {
  return (
    <View style={styles.container}>
      <AndroidSmall1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
