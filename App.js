import { StyleSheet, View } from 'react-native';

import LoreBoard from './components/LoreBoard';

export default function App() {
  
  return (
    <View style={styles.mainContainer}>
      <LoreBoard rotate={"180deg"} playerName={"Player 2"} />
      <LoreBoard rotate={"0deg"} playerName={"Player 1"} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
