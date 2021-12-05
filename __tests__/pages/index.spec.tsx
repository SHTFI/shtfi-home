import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByText(/^SHTFI$/);
    expect(heading).toBeInTheDocument();
  });

  it("renders the intro", () => {
    render(<Home />);
    const heading = screen.getByText(/^Yield Farming Like Never Before$/);
    expect(heading).toBeInTheDocument();
  });
  it("renders the tokenomics", () => {
    render(<Home />);
    const heading = screen.getByText(/^Tokenomics$/);
    expect(heading).toBeInTheDocument();
  });
  it("renders NFT section", () => {
    render(<Home />);
    const heading = screen.getByText(/^NFTs\? Why not!\?$/);
    expect(heading).toBeInTheDocument();
  });
  it("renders slider section", () => {
    render(<Home />);
    const heading = screen.getByText(/^What is SHTFI\?$/);
    expect(heading).toBeInTheDocument();
  });

  it("renders footer links", () => {
    render(<Home />);
    const about = screen.getByText(/^About us$/);
    const privacy = screen.getByText(/^Privacy policy$/);
    const terms = screen.getByText(/^Terms of use$/);
    expect(about).toBeInTheDocument();
    expect(privacy).toBeInTheDocument();
    expect(terms).toBeInTheDocument();
  });
});
