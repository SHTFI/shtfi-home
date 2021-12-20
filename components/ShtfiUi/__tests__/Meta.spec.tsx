import { getAllMeta, render, screen } from "utils/testing/testHelpers";
import { Meta } from "components";

// Mock the next/head component -- Make it a react component that takes and return child elements
jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

// Define our constants
const TITLE = "the title";
const DESCRIPTION = "the description";
const URL = "https://shtfi.io";
const ROBOTS = "index, follow";
const IMAGE = "/image.png";
const FAVICON = "/favicon.ico";
const OG_SITE_NAME = "site name";
const OG_TYPE = "website";
const TWITTER_SITE = "@shtfio";
const TWITTER_CREATOR = "@shtfio";
const TWITTER_CARD = "card";
describe("<Meta />", () => {
  it("renders correct tags", () => {
    const { baseElement } = render(
      <Meta
        title={TITLE}
        url={URL}
        description={DESCRIPTION}
        image={IMAGE}
        name={OG_SITE_NAME}
        type={OG_TYPE}
        twitterSite={TWITTER_SITE}
        twitterCreator={TWITTER_CREATOR}
        robots={ROBOTS}
        card={TWITTER_CARD}
        favicon={FAVICON}
      />,
      { container: document.head }
    );
    const metaTags = getAllMeta(baseElement);
    // Iterate the keys in our object and check they have an element in the dom
    for (let key in metaTags) {
      expect(metaTags[key]).toBeInTheDocument();
    }
  });

  it("has correct value for tags", () => {
    const { baseElement } = render(
      <Meta
        title={TITLE}
        url={URL}
        description={DESCRIPTION}
        image={IMAGE}
        name={OG_SITE_NAME}
        type={OG_TYPE}
        twitterSite={TWITTER_SITE}
        twitterCreator={TWITTER_CREATOR}
        robots={ROBOTS}
        card={TWITTER_CARD}
        favicon={FAVICON}
      />,
      { container: document.head }
    );
    const metaTags = getAllMeta(baseElement);
    // Iterate the keys in our object and check they have an element in the dom
    for (let key in metaTags) {
      expect(metaTags[key]).toBeInTheDocument();
      // Switch between tags so we know what to query and expect for its content
      switch (key) {
        case "title":
          expect(metaTags[key]?.textContent).toBe(TITLE);
          break;
        case "description" || "og:description" || "twitter:description":
          expect(metaTags[key]?.getAttribute("content")).toBe(DESCRIPTION);
          break;
        case "og:title" || "twitter:title":
          expect(metaTags[key]?.getAttribute("content")).toBe(TITLE);
          break;
        case "og:image" || "twitter:image":
          expect(metaTags[key]?.getAttribute("content")).toBe(IMAGE);
          break;
        case "og:url":
          expect(metaTags[key]?.getAttribute("content")).toBe(URL);
          break;
        case "og:site_name":
          expect(metaTags[key]?.getAttribute("content")).toBe(OG_SITE_NAME);
          break;
        case "og:type":
          expect(metaTags[key]?.getAttribute("content")).toBe(OG_TYPE);
          break;
        case "twitter:card":
          expect(metaTags[key]?.getAttribute("content")).toBe(TWITTER_CARD);
          break;
        case "twitter:site":
          expect(metaTags[key]?.getAttribute("content")).toBe(TWITTER_SITE);
          break;
        case "twitter:creator":
          expect(metaTags[key]?.getAttribute("content")).toBe(TWITTER_CREATOR);
          break;
        case "robots":
          expect(metaTags[key]?.getAttribute("content")).toBe(ROBOTS);
          break;
        case "icon":
          expect(metaTags[key]?.getAttribute("href")).toBe(FAVICON);
          break;
        default:
          break;
      }
    }
  });
});
