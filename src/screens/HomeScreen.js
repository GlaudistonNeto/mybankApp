import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bcbcbc",
  },
  text: {
    fontSize: 18,
    color: "white",
  }
});
