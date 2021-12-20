import { render, screen } from "utils/testing/testHelpers";
import { Header } from "components";
import { socialLinksData } from "utils";
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
    render(
      <Header
        data-testid="header"
        title="SHTFI"
        subTitle="Stop Helping The Finance Industry"
      />
    );
    const element = screen.getByText(/shtfi/i);
    expect(element).toBeInTheDocument();
  });
  it("renders sub title provided", () => {
    render(
      <Header
        data-testid="header"
        title="SHTFI"
        subTitle="Stop Helping The Finance Industry"
      />
    );
    const element = screen.getByText(/Stop Helping The Finance Industry/i);
    expect(element).toBeInTheDocument();
  });
  it("has logo provided", () => {
    const { baseElement } = render(
      <Header
        data-testid="header"
        title="SHTFI"
        subTitle="Stop Helping The Finance Industry"
        logo="/assets/images/logo.svg"
      />
    );
    const element = screen.getByTestId("header");
    expect(element).toBeInTheDocument();
    const img = baseElement.querySelector("img");
    expect(img).toBeInTheDocument();
  });
  it("has the logo alt text provided", () => {
    render(
      <Header
        data-testid="header"
        title="SHTFI"
        subTitle="Stop Helping The Finance Industry"
        logo="/assets/images/logo.svg"
        logoAlt="Hey"
      />
    );
    const element = screen.getByTestId("header");
    expect(element).toBeInTheDocument();
    const img = screen.getByAltText("Hey");
    expect(img).toBeInTheDocument();
  });
  it("has social icons when prop passed", () => {
    render(
      <Header
        data-testid="header"
        title="SHTFI"
        subTitle="Stop Helping The Finance Industry"
        logo="/assets/images/logo.svg"
        logoAlt="Hey"
        socialIcons={true}
      />
    );
    const element = screen.getByTestId("header");
    expect(element).toBeInTheDocument();
    for (let network in socialLinksData) {
      const key = network as keyof typeof socialLinksData;
      const obj = socialLinksData[key];
      const element = screen.getByTitle(
        `View ${obj?.profileName} on ${network}`
      ) as HTMLAnchorElement;
      expect(element).toBeInTheDocument();
      expect(element.href).toBe(obj?.profileUrl);
    }
  });
});
