import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { User } from "../../types";
import Avatar from "./Avatar";

export default function UsersListItem({ item }: UsersListItemProps) {
  return (
    <View style={styles.listItem}>
      <Avatar src={item.avatar} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text>ID: {item.id}</Text>
      </View>
    </View>
  );
}

interface UsersListItemProps {
  item: User;
}

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 0.3,
    borderColor: "#ddd",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
