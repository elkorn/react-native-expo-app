import { USERS_INITIAL_STATE } from "../users/usersReducer";
import { UsersState } from "../users/types";

export interface State {
  users: UsersState;
}

export const INITIAL_STATE = {
  users: USERS_INITIAL_STATE,
};
