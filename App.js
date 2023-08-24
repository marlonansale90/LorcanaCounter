import React, { useRef } from "react";
import { StyleSheet, View, Alert } from "react-native";

import LoreBoard from "./components/LoreBoard";
import ResetButton from "./components/ResetButton";

export default function App() {
  const childRef1 = useRef(null);
  const childRef2 = useRef(null);
  const showAlertReset = () => {
    Alert.alert(
      "Want to reset the game?",
      "",
      [
        {
          text: "OK",
          onPress: () => {
            childRef1.current.reset();
            childRef2.current.reset();
            
          },
        },
        { text: "Cancel" },
      ],
      {
        onDismiss: () => {},
      }
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ResetButton onPress={showAlertReset} />
      <LoreBoard
        rotate={"180deg"}
        playerName={"Player 2"}
        color={"red"}
        ref={childRef1}
      />
      <LoreBoard
        rotate={"0deg"}
        playerName={"Player 1"}
        color={"blue"}
        ref={childRef2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#fff",
  },
});
