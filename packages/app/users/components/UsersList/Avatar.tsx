import React, { useState } from "react";
import { Image, StyleSheet, View, ActivityIndicator } from "react-native";
import { LoadingState } from "../../../shared/types";

export default function Avatar({ src }: AvatarProps) {
  const [loading, setLoading] = useState(LoadingState.Idle);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        onLoadStart={() => setLoading(LoadingState.Loading)}
        onLoad={() => setLoading(LoadingState.Success)}
        source={{
          uri: src,
        }}
      />
      <ActivityIndicator
        hidesWhenStopped
        animating={loading === LoadingState.Loading}
      />
    </View>
  );
}

interface AvatarProps {
  src: string;
}

const shape = {
  borderRadius: 100,
  width: 100,
  height: 100,
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    ...shape,
  },
  image: {
    ...shape,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#eee",
  },
  error: {},
});
