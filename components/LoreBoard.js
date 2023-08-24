import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Title from "./Title";
import PrimaryButton from "./LoreButtons";
import LoreCounter from "./LoreCounter";

function LoreBoard({ rotate, playerName }) {
  const [lore, setLore] = useState(0);

  const styles = StyleSheet.create({
    boardContainer: {
      flex: 1,
      flexDirection: "column",
      transform: [{ rotate: rotate }],
      alignContent: "center",
      alignItems: "center",
      marginBottom: 40
    },
    loreContainer: {
      flexDirection: "row",
      flex: 1,
      alignItems: "center",
    },
  });

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

  return (
    <View style={styles.boardContainer}>
      <View style={styles.loreContainer}>
        <PrimaryButton onPress={minusLore}>-</PrimaryButton>
        <LoreCounter>{lore}</LoreCounter>
        <PrimaryButton onPress={addLore}>+</PrimaryButton>
      </View>
      <Title>{playerName}</Title>
    </View>
  );
}

export default LoreBoard;
