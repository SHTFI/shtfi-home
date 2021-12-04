import { render } from "utils/testing/testHelpers";
import { SocialLinks } from "components";
import { socialLinksData } from "utils";

describe("<SocialLinks />", () => {
  it("renders", () => {
    const { getByTestId } = render(<SocialLinks data-testid="social" />);
    const links = getByTestId("social");
    expect(links).toBeInTheDocument();
  });

  it("renders all networks in socialLinksData", () => {
    const { getByTestId, getByTitle } = render(
      <SocialLinks data-testid="social" />
    );
    const wrapper = getByTestId("social");
    expect(wrapper).toBeInTheDocument();
    for (let network in socialLinksData) {
      const key = network as keyof typeof socialLinksData;
      const obj = socialLinksData[key];
      const element = getByTitle(
        `View ${obj?.profileName} on ${network}`
      ) as HTMLAnchorElement;
      expect(element).toBeInTheDocument();
      expect(element.href).toBe(obj?.profileUrl);
    }
  });
});
