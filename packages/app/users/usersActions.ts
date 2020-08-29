import { createAsyncAction } from "typesafe-actions";
import { ACTION_TYPES } from "./usersConstants";
import { User } from "./types";

export const fetchUsersAsync = createAsyncAction(
  ACTION_TYPES.fetchStart,
  ACTION_TYPES.fetchSuccess,
  ACTION_TYPES.fetchError
)<void, User[], Error>();
