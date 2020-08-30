import { UsersState, UsersAction } from "./types";
import { createReducer } from "typesafe-actions";
import { fetchUsersAsync } from "./usersActions";
import { LoadingState } from "../shared/types";

export const USERS_INITIAL_STATE: UsersState = {
  loadingState: LoadingState.Idle,
  users: undefined,
  error: undefined,
};

export const usersReducer = createReducer<UsersState, UsersAction>(
  USERS_INITIAL_STATE
)
  .handleAction(fetchUsersAsync.request, (state) => ({
    ...state,
    loadingState: LoadingState.Loading,
    error: undefined,
  }))
  .handleAction(fetchUsersAsync.success, (state, { payload: users }) => ({
    ...state,
    loadingState: LoadingState.Success,
    users,
    error: undefined,
  }))
  .handleAction(fetchUsersAsync.failure, (state, { payload: error }) => ({
    ...state,
    loadingState: LoadingState.Failure,
    error,
  }));
