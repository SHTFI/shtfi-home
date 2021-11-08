import { render, screen } from "utils/testing/testHelpers";
import { Button } from "components";

describe("<Button />", () => {
  it("renders", () => {
    const clickHandler = jest.fn();
    render(<Button data-testid="button" clickHandler={clickHandler} />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("has correct text", () => {
    const clickHandler = jest.fn();
    render(
      <Button data-testid="button" clickHandler={clickHandler}>
        Hey
      </Button>
    );
    const button = screen.getByText(/hey/i);
    expect(button).toBeInTheDocument();
  });

  it("click handler is fired when button is clicked", () => {
    const clickHandler = jest.fn();
    render(<Button data-testid="button" clickHandler={clickHandler} />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    button.click();
    expect(clickHandler.mock.calls.length).toBe(1);
  });
});
