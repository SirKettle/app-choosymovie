import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Loading } from './components/Loading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Title = ({ children, color = '#555' }) => (
  <Text style={{ fontSize: 20, color }}>{children}</Text>
);

export default function App() {
  return (
    <View style={styles.container}>
      <Loading loadingStatus="PENDING">
        <Text style={{ fontSize: 30 }}>Choosy a movie!</Text>
      </Loading>
    </View>
  );
}
