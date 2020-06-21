import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TabScreen from "./src/screens/TabScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <TabScreen style={{ alignItems: "center" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
