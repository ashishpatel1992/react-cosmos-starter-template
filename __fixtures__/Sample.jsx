import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    padding: 20,
  },
});
export default (
  <View style={styles.droidSafeArea}>
    <Text>Hello World!! with cosmos</Text>
  </View>
);
