import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../shared/state";
import { fetchUsers } from "../../usersThunks";
import ErrorBar from "../ErrorBar";
import { UsersList } from "./UsersList";

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
  const loadingState = useSelector((state: State) => state.users.loadingState);
  const error = useSelector((state: State) => state.users.error);

  return (
    <>
      <ErrorBar error={error} />

      <UsersList
        users={users}
        loadingState={loadingState}
        onRefresh={dispatchFetchUsers}
      />
    </>
  );
}
