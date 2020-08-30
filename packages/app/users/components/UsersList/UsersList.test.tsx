import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { UsersList, UsersListProps } from "./UsersList";
import { mockUsers } from "../../../shared/mocks/mockUsers";
import { LoadingState } from "../../../shared/types";

describe("components", () => {
  describe("UsersList", () => {
    describe("UsersList", () => {
      const baseProps: UsersListProps = {
        users: mockUsers,
        loadingState: LoadingState.Idle,
        onRefresh: () => {},
      };

      describe("matches snapshot", () => {
        it("loaded state", () => {
          const tree = renderer.create(<UsersList {...baseProps} />);
          expect(tree).toMatchSnapshot();
        });

        it("loading state", () => {
          const props = {
            ...baseProps,
            loadingState: LoadingState.Loading,
          };

          const tree = renderer.create(<UsersList {...props} />);
          expect(tree).toMatchSnapshot();
        });
      });
    });
  });
});
