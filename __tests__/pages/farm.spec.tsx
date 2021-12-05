import { render, screen } from "utils/testing/testHelpers";
import Farm from "pages";
describe("<Farm />", () => {
  it("renders heading", () => {
    render(<Farm />);
    const heading = screen.getByText(/SHTFI FARMS/i);
    expect(heading).toBeInTheDocument();
  });
});
