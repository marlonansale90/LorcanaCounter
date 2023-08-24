import { StyleSheet, View, Text } from "react-native";

function WinnerContainer({ children, winnerColor }) {
  const styles = StyleSheet.create({
    boardContainer: {
      alignContent: "center",
      alignItems: "center",
      backgroundColor: winnerColor,
      padding: 20,
    },
    title: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
    },
  });

  return (
    <View style={styles.boardContainer}>
      <Text style={styles.title}>Winner {children}!</Text>
    </View>
  );
}

export default WinnerContainer;
