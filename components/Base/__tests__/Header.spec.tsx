import { render, screen } from "utils/testing/testHelpers";
import { Header } from "components";
describe("<Header />", () => {
  it("renders", () => {
    render(
      <Header
        data-testid="header"
        title="SHTFI"
        subTitle="Stop Helping The Finance Industry"
      />
    );
    const element = screen.getByTestId("header");
    expect(element).toBeInTheDocument();
  });
  it("renders title provided", () => {
    const { getByText } = render(
      <Header
        data-testid="header"
        title="SHTFI"
        subTitle="Stop Helping The Finance Industry"
      />
    );
    const element = getByText(/shtfi/i);
    expect(element).toBeInTheDocument();
  });
  it("renders sub title provided", () => {
    const { getByText } = render(
      <Header
        data-testid="header"
        title="SHTFI"
        subTitle="Stop Helping The Finance Industry"
      />
    );
    const element = getByText(/Stop Helping The Finance Industry/i);
    expect(element).toBeInTheDocument();
  });
  it("has logo provided", () => {
    const { container, getByTestId } = render(
      <Header
        data-testid="header"
        title="SHTFI"
        subTitle="Stop Helping The Finance Industry"
        logo="/assets/images/logo.svg"
      />
    );
    const element = getByTestId("header");
    expect(element).toBeInTheDocument();
    const img = container.querySelector('img[src="/assets/images/logo.svg"]');
    expect(img).toBeInTheDocument();
  });
  it("has the logo alt text provided", () => {
    const { getByAltText, getByTestId } = render(
      <Header
        data-testid="header"
        title="SHTFI"
        subTitle="Stop Helping The Finance Industry"
        logo="/assets/images/logo.svg"
        logoAlt="Hey"
      />
    );
    const element = getByTestId("header");
    expect(element).toBeInTheDocument();
    const img = getByAltText("Hey");
    expect(img).toBeInTheDocument();
  });
});
