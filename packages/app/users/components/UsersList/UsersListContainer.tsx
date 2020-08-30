import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../usersThunks";
import { UsersList } from "./UsersList";
import { State } from "../../../shared/state";

export function UsersListContainer() {
  const dispatch = useDispatch();
  // no useCallback since we don't have fetch arguments
  // and want to allow refreshing without making assumptions
  // on how the backend works.
  const dispatchFetchUsers = dispatch.bind(null, fetchUsers());

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const users = useSelector((state: State) => state.users.users);
  const isFetching = useSelector((state: State) => state.users.isFetching);

  return (
    <UsersList
      users={users}
      isFetching={isFetching}
      onRefresh={dispatchFetchUsers}
    />
  );
}
