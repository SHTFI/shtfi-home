import React from "react";
import renderer from "react-test-renderer";
import Index from "pages/index";
import Farm from "pages/farm";
import preloadAll from "jest-next-dynamic";
import { Web3Providers } from "context";

describe("<Index />", () => {
  it("renders homepage unchanged", () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<Farm />", () => {
  beforeAll(async () => {
    await preloadAll();
  });
  it("renders farm unchanged", () => {
    const tree = renderer
      .create(
        <Web3Providers>
          <Farm />
        </Web3Providers>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
