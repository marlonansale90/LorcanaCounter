import { Text, StyleSheet, View } from "react-native";

function LoreCounter({ children }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default LoreCounter;

const styles = StyleSheet.create({
  titleContainer: {
    minHeight: 30,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
  },
});
