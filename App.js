import { StyleSheet, View } from 'react-native';

import LoreBoard from './components/LoreBoard';

export default function App() {
  
  return (
    <View style={styles.mainContainer}>
      <LoreBoard rotate={'180deg'}/>
      <LoreBoard rotate={'0deg'}/>
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
