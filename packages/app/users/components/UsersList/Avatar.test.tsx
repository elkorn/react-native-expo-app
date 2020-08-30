import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Avatar from "./Avatar";

describe("components", () => {
  describe("UsersList", () => {
    describe("Avatar", () => {
      it("should match snapshot", () => {
        const props = {
          src: " https://i.pravatar.cc/150?img=1",
        };

        const tree = renderer.create(<Avatar {...props} />);

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
