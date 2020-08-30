import * as UsersActions from "./usersActions";
import { ActionType } from "typesafe-actions";
import { LoadingState } from "../shared/types";

export type UsersAction = ActionType<typeof UsersActions>;

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface UsersState {
  loadingState: LoadingState;
  users?: User[];
  error?: Error;
}
