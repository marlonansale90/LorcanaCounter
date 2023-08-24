import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Title from "./Title";
import PrimaryButton from "./LoreButtons";

function LoreBoard({ rotate }) {
  const [lore, setLore] = useState(0);

  function addLore() {
    const newLore = lore + 1;

    if (newLore <= 20) {
      setLore(newLore);
    }
  }

  function minusLore() {
    const newLore = lore - 1;
    if (newLore >= 0) {
      setLore(newLore);
    }
  }

  const styles = StyleSheet.create({
    boardContainer: {
      flexDirection: "column",
      flex: 1,
      transform: [{ rotate: rotate }],
    },
    loreContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
  });

  return (
    <View style={styles.boardContainer}>
      <View style={styles.loreContainer}>
        <PrimaryButton onPress={minusLore}>-</PrimaryButton>
        <Title>{lore}</Title>
        <PrimaryButton onPress={addLore}>+</PrimaryButton>
      </View>
      <Title>Player 1</Title>
    </View>
  );
}

export default LoreBoard;