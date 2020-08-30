import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Animated, StyleSheet, View } from "react-native";
import { LoadingState } from "../../../shared/types";

export default function Avatar({ src }: AvatarProps) {
  const [loading, setLoading] = useState(LoadingState.Idle);
  const fadeValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (loading === LoadingState.Success) {
      Animated.spring(fadeValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  }, [loading]);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ ...styles.image, opacity: fadeValue }}
        onLoadStart={() => setLoading(LoadingState.Loading)}
        onLoad={() => setLoading(LoadingState.Success)}
        source={{
          uri: src.trim(),
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
