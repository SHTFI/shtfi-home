import { render, screen } from "utils/testing/testHelpers";
import { Card } from "components";
describe("<Card />", () => {
  it("renders", () => {
    render(<Card data-testid="card" />);
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <Card data-testid="card">
        <div data-testid="child"></div>
      </Card>
    );
    const card = screen.getByTestId("card");
    const child = screen.getByTestId("child");
    expect(card).toBeInTheDocument();
    expect(child).toBeInTheDocument();
  });
});
