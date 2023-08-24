import { View, Text, Pressable, StyleSheet } from "react-native";

function ResetButton({ onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
}

export default ResetButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 1,
    alignSelf:"flex-end"
  },
  buttonInnerContainer: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 2,
    borderRadius: 16,
    overflow: "hidden",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
  pressed: {
    opacity: 0.75,
  },
});
