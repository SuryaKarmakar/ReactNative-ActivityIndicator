import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
} from "react-native";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <View style={styles.container}>
      {/* Size small*/}
      <ActivityIndicator size="small" color="#0000ff" />

      {/* Size large*/}
      <ActivityIndicator size="large" color="#0000ff" />

      {/*Size custom*/}
      <ActivityIndicator size={80} color="red" />

      {/* Show Hide Indicator with animating props*/}
      <ActivityIndicator size={80} color="tomato" animating={show} />
      <Button title="Show Hide Indicator" onPress={() => setShow(!show)} />
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
