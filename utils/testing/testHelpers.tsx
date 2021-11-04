import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import request from "supertest";
import { NextApiHandler } from "next";
import { apiResolver } from "next/dist/server/api-utils";
import { createServer } from "http";
import Providers from "Providers";

// Wrap our tests in a component which adds our providers
const TestWrapper: React.FC = ({ children }) => {
  return <Providers>{children}</Providers>;
};

// Use the custom render function to add our wrapper to the tested component
const customRender = (ui: any, options?: any) => {
  return render(ui, { wrapper: TestWrapper, ...options });
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

export * from "@testing-library/react";
export { customRender as render };
