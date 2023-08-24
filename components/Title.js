import { Text, StyleSheet } from "react-native";

function Title({ children, color }) {
  const styles = StyleSheet.create({
    title: {
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 16,
      borderRadius: 8,
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
      textAlign: "center",
      borderWidth: 2,
      borderColor: "white",
      backgroundColor: color,
      padding: 12,
      overflow: "hidden",
    },
  });

  return <Text style={styles.title}>{children}</Text>;
}

export default Title;
