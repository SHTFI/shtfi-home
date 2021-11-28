import { render, screen } from "utils/testing/testHelpers";
import { TextIcon } from "components";

describe("<TextIcon />", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <TextIcon
        data-testid="textIcon"
        heading="Test"
        copy="Hello"
        icon="people-carry"
      />
    );
    const element = getByTestId("textIcon");
    expect(element).toBeInTheDocument();
  });
  it("has the correct heading", () => {
    const { getByText } = render(
      <TextIcon
        data-testid="textIcon"
        heading="Test"
        copy="Hello"
        icon="people-carry"
      />
    );
    const element = getByText(/^Test$/);
    expect(element).toBeInTheDocument();
  });
  it("has the correct copy", () => {
    const { getByText } = render(
      <TextIcon
        data-testid="textIcon"
        heading="Test"
        copy="Hello"
        icon="people-carry"
      />
    );
    const element = getByText(/^Hello$/);
    expect(element).toBeInTheDocument();
  });

  it("has the correct icon", () => {
    const { getByText } = render(
      <TextIcon
        data-testid="textIcon"
        heading="Test"
        copy="Hello"
        icon="people-carry"
      />
    );
    const element = getByText(/^Hello$/);
    expect(element).toBeInTheDocument();
  });
});
