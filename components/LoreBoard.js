import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Title from "./Title";
import PrimaryButton from "./LoreButtons";
import LoreCounter from "./LoreCounter";

function LoreBoard(prop, ref) {
  const { rotate, playerName, playerColor, winner } = prop;
  const [lore, setLore] = useState(0);

  React.useImperativeHandle(ref, () => ({
    reset,
  }));

  const reset = () => {
    setLore(0);
  };

  const styles = StyleSheet.create({
    boardContainer: {
      flex: 1,
      flexDirection: "column",
      transform: [{ rotate: rotate }],
      alignContent: "center",
      alignItems: "center",
      marginBottom: 40,
    },
    loreContainer: {
      flexDirection: "row",
      flex: 1,
      alignItems: "center",
    },
    winnerContainer: {
      marginBottom: 40,
    },
  });

  function addLore() {
    const newLore = lore + 1;
    if (newLore <= 20) {
      setLore(newLore);

      if (newLore == 20) {
        winner(playerName, playerColor);
      }
    }
  }

  function minusLore() {
    const newLore = lore - 1;
    if (newLore >= 0) {
      setLore(newLore);
      winner(null, null);
    }
  }

  return (
    <View style={styles.boardContainer}>
      <View style={styles.loreContainer}>
        <PrimaryButton onPress={minusLore} color={playerColor}>
          -
        </PrimaryButton>
        <LoreCounter>{lore}</LoreCounter>
        <PrimaryButton onPress={addLore} color={playerColor}>
          +
        </PrimaryButton>
      </View>
      <Title color={playerColor}>{playerName}</Title>
    </View>
  );
}

export default React.forwardRef(LoreBoard);
