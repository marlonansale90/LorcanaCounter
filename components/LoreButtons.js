import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
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
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 16,
    alignItems: "center"
  },
  buttonInnerContainer: {
    backgroundColor: "black",
    paddingVertical: 20,
    paddingHorizontal: 30,
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
