import * as UsersActions from "./usersActions";
import { ActionType } from "typesafe-actions";

export type UsersAction = ActionType<typeof UsersActions>;

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface UsersState {
  isFetching: boolean;
  users?: User[];
  error?: Error;
}
