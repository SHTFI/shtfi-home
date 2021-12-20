import { render, screen } from "utils/testing/testHelpers";
import Farm from "pages";
describe("<Farm />", () => {
  it("renders header", () => {
    render(<Farm />);
    const header = screen.getByText(/^SHTFI$/i);
    expect(header).toBeInTheDocument();
  });
});
