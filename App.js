import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Pressable, View} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text testID="headline" style={styles.headline}>
        Built on Macrunara M4
      </Text>
      <Text style={styles.subtitle}>
        This React Native app is tested and bundled for iOS and Android by
        GitHub Actions on a Mac mini M4 runner.
      </Text>
      <View style={styles.card}>
        <Text testID="counter" style={styles.counter}>
          Simulated builds: {count}
        </Text>
        <Pressable
          testID="buildButton"
          style={styles.button}
          onPress={() => setCount(c => c + 1)}>
          <Text style={styles.buttonText}>Run a build</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  headline: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 32,
  },
  card: {
    alignItems: 'center',
    gap: 16,
  },
  counter: {
    fontSize: 18,
    fontVariant: ['tabular-nums'],
  },
  button: {
    backgroundColor: '#1F9D4D',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
