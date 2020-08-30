import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import { configureStore } from "../../../shared/store";
import { UsersListContainer } from "./UsersListContainer";
import UsersListItem from "./UsersListItem";
import { ErrorBar } from "../ErrorBar";
import { fetchUsersAsync } from "../../usersActions";
import { mockUsers } from "../../../shared/mocks/mockUsers";

describe("components", () => {
  describe("UsersList", () => {
    describe("UsersListContainer", () => {
      it("renders initial state correctly", () => {
        const store = configureStore();

        const tree = renderer.create(
          <Provider store={store}>
            <UsersListContainer />
          </Provider>
        );

        expect(tree.root.findAllByType(UsersListItem)).toHaveLength(0);
        expect(tree.root.findAllByType(ErrorBar)).toHaveLength(0);
      });

      it("renders data correctly", () => {
        const store = configureStore();
        store.dispatch(fetchUsersAsync.success(mockUsers));

        let tree = renderer.create(
          <Provider store={store}>
            <UsersListContainer />
          </Provider>
        );

        expect(tree.root.findAllByType(UsersListItem)).toHaveLength(
          mockUsers.length
        );
        expect(tree.root.findAllByType(ErrorBar)).toHaveLength(0);
      });

      it("renders errors correctly", () => {
        const store = configureStore();
        const error = new Error("BLEP");
        store.dispatch(fetchUsersAsync.failure(error));

        let tree = renderer.create(
          <Provider store={store}>
            <UsersListContainer />
          </Provider>
        );

        expect(tree.root.findAllByType(UsersListItem)).toHaveLength(0);
        const errorBar = tree.root.findByType(ErrorBar);
        expect(errorBar.props).toHaveProperty("error", error);
      });
    });
  });
});
