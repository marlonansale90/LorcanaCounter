import { useRef, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

import LoreBoard from "../components/LoreBoard";
import ResetButton from "../components/ResetButton";
import WinnerContainer from "../components/WinnerContainer";

function BattleScreen() {
  const childRef1 = useRef(null);
  const childRef2 = useRef(null);

  const [winnerPlayer, setWinnerPlayer] = useState(null);
  const [winnerColor, setWinnerColor] = useState(null);

  const showAlertReset = () => {
    Alert.alert("Want to reset the game?", "", [
      {
        text: "OK",
        onPress: () => {
          reset();
        },
      },
      { text: "Cancel" },
    ]);
  };

  const reset = () => {
    childRef1.current.reset();
    childRef2.current.reset();
    setWinnerPlayer(null);
    setWinnerColor(null);
  };

  const winner = (winner, color) => {
    setWinnerPlayer(winner);
    setWinnerColor(color);
  };

  return (
    <View style={styles.mainContainer}>
      <ResetButton onPress={showAlertReset} />
      <LoreBoard
        rotate={"180deg"}
        playerName={"Player 2"}
        playerColor={"red"}
        winner={winner}
        ref={childRef1}
      />

      {winnerPlayer && (
        <WinnerContainer winnerColor={winnerColor}>
          {winnerPlayer}
        </WinnerContainer>
      )}

      <LoreBoard
        rotate={"0deg"}
        playerName={"Player 1"}
        playerColor={"blue"}
        winner={winner}
        ref={childRef2}
      />
    </View>
  );
}

export default BattleScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#fff",
  },
});
