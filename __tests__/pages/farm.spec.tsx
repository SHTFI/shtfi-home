import { web3Render, screen, waitFor } from "utils/testing/testHelpers";
import preloadAll from "jest-next-dynamic";
import Farm from "pages";
describe("<Farm />", () => {
  beforeAll(async () => {
    await preloadAll();
  });
  it("renders header", async () => {
    web3Render(<Farm />);
    await waitFor(() => {
      const header = screen.getByText(/^SHTFI$/i);
      expect(header).toBeInTheDocument();
    });
  });
});
