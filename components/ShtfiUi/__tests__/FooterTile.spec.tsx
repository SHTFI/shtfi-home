import { render, screen } from "utils/testing/testHelpers";
import { FooterTile } from "components";

describe("<FooterTile />", () => {
  it("renders", () => {
    render(
      <FooterTile data-testid="tile">
        <p>Hey</p>
      </FooterTile>
    );
    const element = screen.getByTestId("tile");
    expect(element).toBeInTheDocument();
  });
  it("renders children", () => {
    render(
      <FooterTile data-testid="tile">
        <p>Hey</p>
      </FooterTile>
    );
    const element = screen.getByTestId("tile");
    expect(element).toBeInTheDocument();
    const child = screen.getByText(/^hey$/i);
    expect(child).toBeInTheDocument();
  });
});
