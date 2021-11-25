import { render, screen } from "utils/testing/testHelpers";
import { Shapes } from "components";
describe("<Shapes />", () => {
  it("renders", () => {
    render(<Shapes data-testid="shape" />);
    const element = screen.getByTestId("shape");
    expect(element).toBeInTheDocument();
  });
  it("renders squares by default", () => {
    const { container, getByTestId } = render(<Shapes data-testid="shape" />);
    const element = getByTestId("shape");
    expect(element).toBeInTheDocument();
    const squares = document.querySelector('[data-shape="squares"]');
    expect(squares).toBeInTheDocument();
  });
});
