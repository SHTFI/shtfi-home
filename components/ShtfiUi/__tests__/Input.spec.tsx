import { render, screen } from "utils/testing/testHelpers";
import { Input } from "components";
describe("<Input />", () => {
  it("renders", () => {
    render(<Input data-testid="input" />);
    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
  });
});
