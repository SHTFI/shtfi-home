import { render, screen } from "utils/testing/testHelpers";
import Heading from "../Heading";

describe("<Heading />", () => {
  it("renders", () => {
    render(<Heading level={1} text="Hey" data-testid="h1" />);
    const h1 = screen.getByTestId("h1");
    expect(h1).toBeInTheDocument();
  });

  it("renders the correct tag according to level", () => {
    render(<Heading level={1} text="Hey" data-testid="h1" />);
    const h1 = screen.getByTestId("h1");
    expect(h1).toBeInTheDocument();
    expect(h1.tagName).toBe("H1");
    // H2
    render(<Heading level={2} text="Hey" data-testid="h2" />);
    const h2 = screen.getByTestId("h2");
    expect(h2).toBeInTheDocument();
    expect(h2.tagName).toBe("H2");
    // H3
    render(<Heading level={3} text="Hey" data-testid="h3" />);
    const h3 = screen.getByTestId("h3");
    expect(h3).toBeInTheDocument();
    expect(h3.tagName).toBe("H3");
    // H4
    render(<Heading level={4} text="Hey" data-testid="h4" />);
    const h4 = screen.getByTestId("h4");
    expect(h4).toBeInTheDocument();
    expect(h4.tagName).toBe("H4");
    // H5
    render(<Heading level={5} text="Hey" data-testid="h5" />);
    const h5 = screen.getByTestId("h5");
    expect(h5).toBeInTheDocument();
    expect(h5.tagName).toBe("H5");
    // H6
    render(<Heading level={6} text="Hey" data-testid="h6" />);
    const h6 = screen.getByTestId("h6");
    expect(h6).toBeInTheDocument();
    expect(h6.tagName).toBe("H6");
  });

  it("renders the correct text", () => {
    const { getByText } = render(<Heading level={1} text="YO" />);
    const element = getByText(/^yo$/i);
    expect(element).toBeInTheDocument();
  });
});
