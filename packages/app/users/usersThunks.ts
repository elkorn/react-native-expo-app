import { fetchUsersAsync } from "./usersActions";
import { User } from "./types";
import { Dispatch } from "redux";
import * as client from "../shared/client";

export const fetchUsers = () => async (dispatch: Dispatch): Promise<void> => {
  dispatch(fetchUsersAsync.request());

  try {
    const users = await client.get<User[]>(`users`);
    dispatch(fetchUsersAsync.success(users));
  } catch (error) {
    dispatch(fetchUsersAsync.failure(error));
  }
};
