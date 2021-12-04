import { render, screen } from "utils/testing/testHelpers";
import { Shapes } from "components";
describe("<Shapes />", () => {
  it("renders", () => {
    render(<Shapes data-testid="shape" />);
    const element = screen.getByTestId("shape");
    expect(element).toBeInTheDocument();
  });
  it("renders squares by default", () => {
    const { baseElement } = render(<Shapes data-testid="shape" />);
    const element = screen.getByTestId("shape");
    expect(element).toBeInTheDocument();
    const squares = baseElement.querySelector('[data-shape="squares"]');
    expect(squares).toBeInTheDocument();
  });
});
