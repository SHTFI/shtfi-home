import { render, screen } from "utils/testing/testHelpers";
import { Tokenomics } from "components";
describe("<Tokenomics />", () => {
  it("renders", () => {
    render(
      <Tokenomics
        marketing={0}
        supply={0}
        devFund={0}
        farm={0}
        preMine={0}
        data-testid="tokenomics"
      />
    );
    const element = screen.getByTestId("tokenomics");
    expect(element).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <Tokenomics
        marketing={20}
        supply={0}
        devFund={0}
        farm={0}
        preMine={0}
        data-testid="tokenomics"
      >
        <div data-testid="child"></div>
      </Tokenomics>
    );
    const element = screen.getByTestId("tokenomics");
    expect(element).toBeInTheDocument();
    const child = screen.getByTestId("child");
    expect(child).toBeInTheDocument();
  });

  it("renders correct titles", () => {
    render(
      <Tokenomics
        marketing={0}
        supply={0}
        devFund={0}
        farm={0}
        preMine={0}
        data-testid="tokenomics"
      />
    );
    const mElement = screen.getByText(/^marketing$/i);
    expect(mElement).toBeInTheDocument();
    const sElement = screen.getByText(/^max supply$/i);
    expect(sElement).toBeInTheDocument();
    const dElement = screen.getByText(/^dev fund$/i);
    expect(dElement).toBeInTheDocument();
    const fElement = screen.getByText(/^shtfi farm$/i);
    expect(fElement).toBeInTheDocument();
    const pElement = screen.getByText(/^pre mine$/i);
    expect(pElement).toBeInTheDocument();
  });
  it("renders correct data", () => {
    render(
      <Tokenomics
        marketing={1}
        supply={2}
        devFund={3}
        farm={4}
        preMine={5}
        data-testid="tokenomics"
      />
    );
    const mElement = screen.getByText(/^1$/);
    expect(mElement).toBeInTheDocument();
    const sElement = screen.getByText(/^2$/i);
    expect(sElement).toBeInTheDocument();
    const dElement = screen.getByText(/^3$/i);
    expect(dElement).toBeInTheDocument();
    const fElement = screen.getByText(/^4$/i);
    expect(fElement).toBeInTheDocument();
    const pElement = screen.getByText(/^5$/i);
    expect(pElement).toBeInTheDocument();
  });

  it("uses showPercentage correctly", () => {
    render(
      <Tokenomics
        marketing={1}
        supply={2}
        devFund={3}
        farm={4}
        preMine={5}
        showPercent={["marketing"]}
        data-testid="tokenomics"
      />
    );
    const marketing = screen.getByText(/^1%$/);
    expect(marketing).toBeInTheDocument();
    const supply = screen.getByText(/^2$/);
    expect(supply).toBeInTheDocument();
    const devFund = screen.getByText(/^3$/);
    expect(devFund).toBeInTheDocument();
    const farm = screen.getByText(/^4$/);
    expect(farm).toBeInTheDocument();
    const preMine = screen.getByText(/^5$/);
    expect(preMine).toBeInTheDocument();
  });
});
