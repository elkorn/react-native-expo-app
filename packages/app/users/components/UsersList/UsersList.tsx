import React from "react";
import { FlatList, RefreshControl } from "react-native";
import { User } from "../../types";
import UsersListItem from "./UsersListItem";

export function UsersList({
  users = [],
  isFetching,
  onRefresh,
}: UsersListProps) {
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
      }
      data={users}
      keyExtractor={(user) => user.id}
      renderItem={(props) => <UsersListItem {...props} />}
    />
  );
}

export interface UsersListProps {
  users?: User[];
  isFetching: boolean;
  onRefresh: () => void;
}
