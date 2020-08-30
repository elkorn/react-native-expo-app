import React from "react";
import { FlatList, RefreshControl } from "react-native";
import { User } from "../../types";
import UsersListItem from "./UsersListItem";
import { LoadingState } from "../../../shared/types";

export function UsersList({
  users = [],
  loadingState,
  onRefresh,
}: UsersListProps) {
  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={loadingState === LoadingState.Loading}
          onRefresh={onRefresh}
        />
      }
      data={users}
      keyExtractor={(user) => user.id}
      renderItem={(props) => <UsersListItem {...props} />}
    />
  );
}

export interface UsersListProps {
  users?: User[];
  loadingState: LoadingState;
  onRefresh: () => void;
}
