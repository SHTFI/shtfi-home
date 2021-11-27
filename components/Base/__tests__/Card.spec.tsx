import { render, screen } from "utils/testing/testHelpers";
import { Card } from "components";
describe("<Card />", () => {
  it("renders", () => {
    const { getByTestId } = render(<Card data-testid="card" />);
    const card = getByTestId("card");
    expect(card).toBeInTheDocument();
  });

  it("renders children", () => {
    const { getByTestId } = render(
      <Card data-testid="card">
        <div data-testid="child"></div>
      </Card>
    );
    const card = getByTestId("card");
    const child = getByTestId("child");
    expect(card).toBeInTheDocument();
    expect(child).toBeInTheDocument();
  });

  it("has class which includes wrapper", () => {
    const { container } = render(
      <Card data-testid="card">
        <div data-testid="child"></div>
      </Card>
    );
    const card = container.querySelector('[class*="wrapper"');
    expect(card).toBeInTheDocument();
  });
});
