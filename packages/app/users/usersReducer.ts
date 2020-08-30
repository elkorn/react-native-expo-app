import { UsersState, UsersAction } from "./types";
import { createReducer } from "typesafe-actions";
import { fetchUsersAsync } from "./usersActions";

export const USERS_INITIAL_STATE: UsersState = {
  isFetching: false,
  users: undefined,
};

export const usersReducer = createReducer<UsersState, UsersAction>(
  USERS_INITIAL_STATE
)
  .handleAction(fetchUsersAsync.request, (state) => ({
    ...state,
    isFetching: true,
    error: undefined,
  }))
  .handleAction(fetchUsersAsync.success, (state, { payload: users }) => ({
    ...state,
    isFetching: false,
    users,
    error: undefined,
  }))
  .handleAction(fetchUsersAsync.failure, (state, { payload: error }) => ({
    ...state,
    isFetching: false,
    error,
  }));
