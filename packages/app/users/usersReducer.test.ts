import { fetchUsersAsync } from "./usersActions";
import { usersReducer, USERS_INITIAL_STATE } from "./usersReducer";
import { mockUsers } from "../shared/mocks/mockUsers";

describe("Users", () => {
  describe("reducer", () => {
    it(`${fetchUsersAsync.request} notifies fetching is in progress`, () => {
      expect(
        usersReducer(USERS_INITIAL_STATE, fetchUsersAsync.request())
      ).toEqual({
        ...USERS_INITIAL_STATE,
        isFetching: true,
      });
    });

    it(`${fetchUsersAsync.request} does not replace users existing`, () => {
      const state = {
        ...USERS_INITIAL_STATE,
        users: mockUsers,
      };
      expect(usersReducer(state, fetchUsersAsync.request())).toEqual({
        ...state,
        isFetching: true,
      });
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
      ).toEqual({
        ...USERS_INITIAL_STATE,
        users: mockUsers,
      });
    });

    it(`${fetchUsersAsync.success} puts fetched users in the state`, () => {
      expect(
        usersReducer(
          {
            ...USERS_INITIAL_STATE,
            isFetching: true,
          },
          fetchUsersAsync.success(mockUsers)
        )
      ).toEqual({
        ...USERS_INITIAL_STATE,
        users: mockUsers,
      });
    });

    it(`${fetchUsersAsync.failure} notifies of an error`, () => {
      const error = new Error("BLEP");
      expect(
        usersReducer(
          {
            ...USERS_INITIAL_STATE,
            isFetching: true,
          },
          fetchUsersAsync.failure(error)
        )
      ).toEqual({
        ...USERS_INITIAL_STATE,
        error,
      });
    });

    it(`${fetchUsersAsync.failure} does not replace existing users`, () => {
      const state = {
        ...USERS_INITIAL_STATE,
        users: mockUsers,
      };

      const error = new Error("BLEP");
      expect(usersReducer(state, fetchUsersAsync.failure(error))).toEqual({
        ...state,
        error,
      });
    });
  });
});
