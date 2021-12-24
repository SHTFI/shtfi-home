import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import request from "supertest";
import { NextApiHandler } from "next";
import { apiResolver } from "next/dist/server/api-utils";
import { createServer } from "http";
import { Web3Providers } from "context";

// Wrap our tests in a component which adds our providers
const TestWrapper: React.FC = ({ children }) => {
  return <>{children}</>;
};

// Use the custom render function to add our wrapper to the tested component
const customRender = (ui: any, options?: any) => {
  return render(ui, { wrapper: TestWrapper, ...options });
};

const TestWeb3Wrapper: React.FC = ({ children }) => {
  return <Web3Providers>{children}</Web3Providers>;
};
// Export a render method with the web3 wrapper
const customWeb3Render = (ui: any, options?: any) => {
  return render(ui, { wrapper: TestWeb3Wrapper, ...options });
};

/**
 *
 * Test a client side implementation of a NextJS api route.
 * Takes a handler function and an object with an optional host variable
 *
 * @param handler NextJS api route handler function
 * @param host is the host to be used for the test. Default localhost
 * @returns NextJS Api resolver
 */
export const testClient = async (
  handler: NextApiHandler,
  { host }: { host?: string } = { host: "localhost" }
) =>
  // Return supertest request
  request(
    // Create a NextJS server instance
    createServer(async (req, res) => {
      // Set the host of the request
      req.headers.host = host;
      // Return an API resolver
      return apiResolver(req, res, undefined, handler, {} as any, false);
    })
  );

/**
 * Helper function to return an object with all the meta elements in the baseElement
 *
 * @param baseElement HTML element which is queried for our meta elements
 * @returns { object } Key:value object which has either the element or null
 */
export const getAllMeta = (
  baseElement: Element
): { [key: string]: Element | null } => {
  const title = baseElement.querySelector("title");
  const description = baseElement.querySelector('[name="description"]');
  const icon = baseElement.querySelector('link[rel="icon"]');
  const robots = baseElement.querySelector('[name="robots"]');
  const ogTitle = baseElement.querySelector('[property="og:title"]');
  const ogDescription = baseElement.querySelector(
    '[property="og:description"]'
  );
  const ogImage = baseElement.querySelector('[property="og:image"]');
  const ogType = baseElement.querySelector('[property="og:type"]');
  const ogUrl = baseElement.querySelector('[property="og:url"]');
  const ogSiteName = baseElement.querySelector('[property="og:site_name"]');
  const twitterTitle = baseElement.querySelector('[name="twitter:title"]');
  const twitterDescription = baseElement.querySelector(
    '[name="twitter:description"]'
  );
  const twitterImage = baseElement.querySelector('[name="twitter:image"]');
  const twitterSite = baseElement.querySelector('[name="twitter:site"]');
  const twitterCreator = baseElement.querySelector('[name="twitter:creator"]');
  const twitterCard = baseElement.querySelector('[name="twitter:card"]');
  return {
    title,
    description,
    icon,
    robots,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    ogUrl,
    ogSiteName,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterSite,
    twitterCreator,
    twitterCard,
  };
};

export * from "@testing-library/react";
export { customRender as render, customWeb3Render as web3Render };
