import { render, screen } from "utils/testing/testHelpers";
import { SocialLinks } from "components";
import { socialLinksData } from "utils";

describe("<SocialLinks />", () => {
  it("renders", () => {
    render(<SocialLinks data-testid="social" />);
    const links = screen.getByTestId("social");
    expect(links).toBeInTheDocument();
  });

  it("renders all networks in socialLinksData", () => {
    render(<SocialLinks data-testid="social" />);
    const wrapper = screen.getByTestId("social");
    expect(wrapper).toBeInTheDocument();
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
