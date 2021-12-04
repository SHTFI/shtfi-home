import { render, screen } from "utils/testing/testHelpers";
import { NavBar } from "components";
import { NavLinkType } from "../types";

const LINKS: NavLinkType[] = [
  {
    href: "/",
    title: "A link",
    label: "A Label",
    iconAlt: "An icon",
    icon: "/an-image.svg",
  },
];

describe("<NavBar />", () => {
  it("renders", () => {
    render(<NavBar data-testid="nav" linkList={LINKS} />);
    const nav = screen.getByTestId("nav");
    expect(nav).toBeInTheDocument();
  });

  it("has a burger menu button on screen less than 701px", () => {
    global.innerWidth = 700;
    const { baseElement } = render(
      <NavBar data-testid="nav" linkList={LINKS} />
    );
    const nav = screen.getByTestId("nav");
    expect(nav).toBeInTheDocument();
    const burgerButton = baseElement.querySelector("#shtfi-mobile-expand");

    expect(burgerButton).toBeInTheDocument();
    const icon = burgerButton?.querySelector("svg");
    expect(icon).toBeInTheDocument();
    expect(nav?.getAttribute("data-mob")).toBe("true");
  });

  it("has a custom burger menu icon when provided to screen less than 501px", () => {
    global.innerWidth = 500;
    const { baseElement } = render(
      <NavBar
        data-testid="nav"
        linkList={LINKS}
        mobileIcon="/images/test.jpeg"
        mobileIconAlt="test-image"
        mobileIconWidth={10}
        mobileIconHeight={10}
      />
    );
    const nav = screen.getByTestId("nav");
    expect(nav).toBeInTheDocument();
    const burgerButton = baseElement.querySelector("#shtfi-mobile-expand");
    expect(burgerButton).toBeInTheDocument();
    const icon = burgerButton?.querySelector("img");
    expect(icon).toBeInTheDocument();
    expect(icon?.height).toBe(10);
    expect(icon?.width).toBe(10);
    expect(icon?.alt).toBe("test-image");
  });

  it("has logo if provided", () => {
    const { container } = render(
      <NavBar
        data-testid="nav"
        linkList={LINKS}
        logo="/img/logo-test.jpg"
        logoAlt="image"
        logoWidth={10}
        logoHeight={10}
      />
    );
    const nav = screen.getByTestId("nav");
    expect(nav).toBeInTheDocument();
    const logo = nav?.querySelector(
      'img[src="/img/logo-test.jpg"]'
    ) as HTMLImageElement;
    expect(logo).toBeInTheDocument();
    expect(logo?.height).toBe(10);
    expect(logo?.width).toBe(10);
    expect(logo?.alt).toBe("image");
  });

  it("has logo text if provided", () => {
    const { getByText, getByTestId } = render(
      <NavBar data-testid="nav" brandWording="Words" linkList={LINKS} />
    );
    const nav = screen.getByTestId("nav");
    expect(nav).toBeInTheDocument();
    const wording = screen.getByText(/words/i);
    expect(wording).toBeInTheDocument();
  });

  it("wraps logo and/or text (if provided) in anchor link back to home", () => {
    const { getByText, getByTestId, getByAltText } = render([
      <NavBar
        key={0}
        data-testid="nav-words"
        brandWording="Words"
        linkList={LINKS}
      />,
      <NavBar
        key={1}
        data-testid="nav-logo"
        logo="/img/logo-test.jpg"
        logoAlt="image"
        logoWidth={10}
        logoHeight={10}
        linkList={LINKS}
      />,
      <NavBar
        key={2}
        data-testid="nav-both"
        brandWording="Words 2"
        logo="/img/logo-test-2.jpg"
        logoAlt="image-2"
        logoWidth={10}
        logoHeight={10}
        linkList={LINKS}
      />,
    ]);
    // Just words
    let nav = screen.getByTestId("nav-words");
    expect(nav).toBeInTheDocument();
    let wording = screen.getByText(/^words$/i);
    expect(wording).toBeInTheDocument();
    let wordParent = wording.closest("a") as HTMLAnchorElement;
    expect(wordParent).toBeInTheDocument();
    expect(wordParent.href).toBe("http://localhost/");

    // Just logo
    nav = screen.getByTestId("nav-logo");
    expect(nav).toBeInTheDocument();
    let logo = screen.getByAltText(/^image$/i);
    expect(logo).toBeInTheDocument();
    let logoParent = logo.closest("a") as HTMLAnchorElement;
    expect(logoParent).toBeInTheDocument();
    expect(logoParent.href).toBe("http://localhost/");

    // Logo and text
    nav = screen.getByTestId("nav-both");
    expect(nav).toBeInTheDocument();
    logo = screen.getByAltText(/^image-2$/i);
    wording = screen.getByText(/^words 2$/i);
    expect(logo).toBeInTheDocument();
    expect(wording).toBeInTheDocument();
    logoParent = logo.closest("a") as HTMLAnchorElement;
    wordParent = wording.closest("a") as HTMLAnchorElement;
    expect(wordParent).toBeInTheDocument();
    expect(wordParent.href).toBe("http://localhost/");
    expect(logoParent).toBeInTheDocument();
    expect(logoParent.href).toBe("http://localhost/");
  });

  it("shows desktop nav on screens more than 700px wide", () => {
    global.innerWidth = 701;
    const { baseElement } = render(
      <NavBar data-testid="nav" linkList={LINKS} />
    );
    const nav = screen.getByTestId("nav");
    expect(nav).toBeInTheDocument();
    const burgerButton = baseElement.querySelector('[data-nav="mobile"]');
    expect(burgerButton).not.toBeInTheDocument();
    const icon = burgerButton?.querySelector("svg");
    expect(icon).not.toBeDefined();
    expect(nav?.getAttribute("data-mob")).toBe("false");
    const desktopLinksWRapper = baseElement.querySelector(
      '[data-nav="desktop"'
    );
    expect(desktopLinksWRapper).toBeInTheDocument();
  });

  it("executes expand callback when burger menu is clicked", () => {
    global.innerWidth = 500;
    const callback = jest.fn();
    const { baseElement } = render(
      <NavBar
        data-testid="nav"
        linkList={LINKS}
        burgerMenuCallback={callback}
      />
    );
    const nav = baseElement.querySelector('[data-nav="mobile"]');
    expect(nav).toBeInTheDocument();
    const button = baseElement.querySelector(
      "#shtfi-mobile-expand"
    ) as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    // Click the button
    button?.click();
    // Check our callback was called
    expect(callback.mock.calls.length).toBe(1);
  });

  it("reveals nav drawer when burger menu clicked", () => {
    global.innerWidth = 500;
    const callback = jest.fn();
    const { baseElement } = render(
      <NavBar
        data-testid="nav"
        linkList={LINKS}
        burgerMenuCallback={callback}
      />
    );
    const nav = baseElement.querySelector('[data-nav="mobile"]');
    expect(nav).toBeInTheDocument();
    const linkSection = baseElement.querySelector('[data-nav="mobile"');
    const button = baseElement.querySelector(
      "#shtfi-mobile-expand"
    ) as HTMLButtonElement;
    expect(linkSection).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    // Should be closed first
    expect(linkSection?.getAttribute("aria-hidden")).toBe("true");
    // Click the button
    button.click();
    // Should be expanded
    expect(linkSection?.getAttribute("aria-hidden")).toBe("false");
  });
});
