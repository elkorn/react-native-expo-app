import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import UsersListItem from "./UsersListItem";

describe("components", () => {
  describe("UsersList", () => {
    describe("UsersListItem", () => {
      it("should match snapshot", () => {
        const props = {
          item: {
            id: "1",
            avatar: " https://i.pravatar.cc/150?img=1",
            name: "Morgan James",
          },
        };

        const tree = renderer.create(<UsersListItem {...props} />);

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
