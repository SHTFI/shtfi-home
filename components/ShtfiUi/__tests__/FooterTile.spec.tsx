import { render, screen } from "utils/testing/testHelpers";
import { FooterTile } from "components";

describe("<FooterTile />", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <FooterTile data-testid="tile">
        <p>Hey</p>
      </FooterTile>
    );
    const element = getByTestId("tile");
    expect(element).toBeInTheDocument();
  });
  it("renders children", () => {
    const { getByTestId, getByText } = render(
      <FooterTile data-testid="tile">
        <p>Hey</p>
      </FooterTile>
    );
    const element = getByTestId("tile");
    expect(element).toBeInTheDocument();
    const child = getByText(/^hey$/i);
    expect(child).toBeInTheDocument();
  });
});
