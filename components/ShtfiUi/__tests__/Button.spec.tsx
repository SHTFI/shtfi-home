import { render, screen } from "utils/testing/testHelpers";
import { Button } from "components";

describe("<Button />", () => {
  it("renders", () => {
    const onClick = jest.fn();
    render(<Button data-testid="button" onClick={onClick} />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("has correct text", () => {
    const onClick = jest.fn();
    render(
      <Button data-testid="button" onClick={onClick}>
        Hey
      </Button>
    );
    const button = screen.getByText(/hey/i);
    expect(button).toBeInTheDocument();
  });

  it("click handler is fired when button is clicked", () => {
    const onClick = jest.fn();
    render(<Button data-testid="button" onClick={onClick} />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    button.click();
    expect(onClick.mock.calls.length).toBe(1);
  });
});
