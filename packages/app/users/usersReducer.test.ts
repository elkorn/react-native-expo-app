import { fetchUsersAsync } from "./usersActions";
import { usersReducer, USERS_INITIAL_STATE } from "./usersReducer";
import { mockUsers } from "../shared/mocks/mockUsers";
import { LoadingState } from "../shared/types";

describe("Users", () => {
  describe("reducer", () => {
    it(`${fetchUsersAsync.request} notifies fetching is in progress`, () => {
      expect(
        usersReducer(USERS_INITIAL_STATE, fetchUsersAsync.request())
      ).toHaveProperty("loadingState", LoadingState.Loading);
    });

    it(`${fetchUsersAsync.request} does not replace existing users `, () => {
      const state = {
        ...USERS_INITIAL_STATE,
        users: mockUsers,
      };
      expect(usersReducer(state, fetchUsersAsync.request())).toHaveProperty(
        "users",
        mockUsers
      );
    });

    it(`${fetchUsersAsync.success} replaces existing users`, () => {
      expect(
        usersReducer(
          {
            ...USERS_INITIAL_STATE,
            users: mockUsers.slice(0, 2),
          },
          fetchUsersAsync.success(mockUsers)
        )
      ).toHaveProperty("users", mockUsers);
    });

    it(`${fetchUsersAsync.success} puts fetched users in the state`, () => {
      expect(
        usersReducer(
          {
            ...USERS_INITIAL_STATE,
            loadingState: LoadingState.Success,
          },
          fetchUsersAsync.success(mockUsers)
        )
      ).toHaveProperty("users", mockUsers);
    });

    it(`${fetchUsersAsync.failure} notifies of an error`, () => {
      const error = new Error("BLEP");
      expect(
        usersReducer(
          {
            ...USERS_INITIAL_STATE,
          },
          fetchUsersAsync.failure(error)
        )
      ).toEqual({
        ...USERS_INITIAL_STATE,
        loadingState: LoadingState.Failure,
        error,
      });
    });

    it(`${fetchUsersAsync.failure} does not replace existing users`, () => {
      const state = {
        ...USERS_INITIAL_STATE,
        users: mockUsers,
      };

      const error = new Error("BLEP");
      expect(
        usersReducer(state, fetchUsersAsync.failure(error))
      ).toHaveProperty("users", mockUsers);
    });
  });
});
