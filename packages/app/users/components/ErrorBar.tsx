import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SERVICE_URL } from "../../shared/config";

export function ErrorBar({ error }: ErrorBarProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error.message}</Text>
      <Text style={styles.text}>{SERVICE_URL}</Text>
    </View>
  );
}

interface ErrorBarProps {
  error: Error;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F00",
    paddingVertical: 12,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});
