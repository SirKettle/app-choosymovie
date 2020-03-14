import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/logo.png';

export type LoadingStatus = 'INITIAL' | 'PENDING' | 'SUCCESS' | 'ERROR';

export interface Props {
  children: any;
  loadingStatus: LoadingStatus;
  errorText?: String;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    color: '#aaa',
  },
  errorText: {
    color: '#a44',
  },
});

export const ErrorMessage = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>{children}</Text>
    <Image
      source={logo}
      style={{ width: 200, height: 200, resizeMode: 'contain', marginTop: 20 }}
    />
  </View>
);

export const LoadingSpinner = () => (
  <View style={styles.container}>
    <Text style={styles.loadingText}>Loading...</Text>
    <Image
      source={logo}
      style={{ width: 200, height: 200, resizeMode: 'contain', marginTop: 20 }}
    />
  </View>
);

export const Loading = ({
  children,
  loadingStatus,
  errorText = 'Sorry, something went wrong',
}: Props) => {
  switch (loadingStatus) {
    case 'INITIAL':
    case 'PENDING':
      return <LoadingSpinner />;
    case 'ERROR':
      return <ErrorMessage>{errorText}</ErrorMessage>;
    default:
      return children;
  }
};
