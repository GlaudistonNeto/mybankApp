import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default CardsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cards Screen</Text>
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
