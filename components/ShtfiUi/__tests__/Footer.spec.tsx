import { render, screen } from "utils/testing/testHelpers";
import { Footer } from "components";

describe("<Footer />", () => {
  it("renders", () => {
    const { getByTestId } = render(<Footer data-testid="footer" />);
    const footer = getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
  it("renders children", () => {
    const { getByTestId, getByText, container } = render(
      <Footer data-testid="footer">
        <div id="child">
          <p>Hey</p>
        </div>
      </Footer>
    );
    const footer = getByTestId("footer");
    expect(footer).toBeInTheDocument();
    const div = container.querySelector("#child");
    expect(div).toBeInTheDocument();
    const p = getByText(/^hey$/i);
    expect(p).toBeInTheDocument();
  });
});
