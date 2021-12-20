import React from "react";
import renderer from "react-test-renderer";
import Index from "pages/index";
import Farm from "pages/farm";

it("renders homepage unchanged", () => {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders farm unchanged", () => {
  const tree = renderer.create(<Farm />).toJSON();
  expect(tree).toMatchSnapshot();
});
