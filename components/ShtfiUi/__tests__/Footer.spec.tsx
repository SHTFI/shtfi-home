import { render, screen } from "utils/testing/testHelpers";
import { Footer } from "components";

describe("<Footer />", () => {
  it("renders", () => {
    render(<Footer data-testid="footer" />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
  it("renders children", () => {
    const { baseElement } = render(
      <Footer data-testid="footer">
        <div id="child">
          <p>Hey</p>
        </div>
      </Footer>
    );
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
    const div = baseElement.querySelector("#child");
    expect(div).toBeInTheDocument();
    const p = screen.getByText(/^hey$/i);
    expect(p).toBeInTheDocument();
  });
});
