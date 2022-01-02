import { round } from "utils";

describe("round", () => {
  it("correctly removes zeros", () => {
    const rounded = round(5.2123123123, 3);
    expect(rounded).toBe(5.212);
  });
});
