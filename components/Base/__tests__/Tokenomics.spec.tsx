import { render } from "utils/testing/testHelpers";
import { Tokenomics } from "components";
describe("<Tokenomics />", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <Tokenomics
        marketing={0}
        supply={0}
        devFund={0}
        farm={0}
        preMine={0}
        data-testid="tokenomics"
      />
    );
    const element = getByTestId("tokenomics");
    expect(element).toBeInTheDocument();
  });

  it("renders children", () => {
    const { getByTestId } = render(
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
    const element = getByTestId("tokenomics");
    expect(element).toBeInTheDocument();
    const child = getByTestId("child");
    expect(child).toBeInTheDocument();
  });

  it("renders correct titles", () => {
    const { getByText } = render(
      <Tokenomics
        marketing={0}
        supply={0}
        devFund={0}
        farm={0}
        preMine={0}
        data-testid="tokenomics"
      />
    );
    const mElement = getByText(/^marketing$/i);
    expect(mElement).toBeInTheDocument();
    const sElement = getByText(/^max supply$/i);
    expect(sElement).toBeInTheDocument();
    const dElement = getByText(/^dev fund$/i);
    expect(dElement).toBeInTheDocument();
    const fElement = getByText(/^shtfi farm$/i);
    expect(fElement).toBeInTheDocument();
    const pElement = getByText(/^pre mine$/i);
    expect(pElement).toBeInTheDocument();
  });
  it("renders correct data", () => {
    const { getByText } = render(
      <Tokenomics
        marketing={1}
        supply={2}
        devFund={3}
        farm={4}
        preMine={5}
        data-testid="tokenomics"
      />
    );
    const mElement = getByText(/^1$/);
    expect(mElement).toBeInTheDocument();
    const sElement = getByText(/^2$/i);
    expect(sElement).toBeInTheDocument();
    const dElement = getByText(/^3$/i);
    expect(dElement).toBeInTheDocument();
    const fElement = getByText(/^4$/i);
    expect(fElement).toBeInTheDocument();
    const pElement = getByText(/^5$/i);
    expect(pElement).toBeInTheDocument();
  });

  it("uses showPercentage correctly", () => {
    const { getByText } = render(
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
    const marketing = getByText(/^1%$/);
    expect(marketing).toBeInTheDocument();
    const supply = getByText(/^2$/);
    expect(supply).toBeInTheDocument();
    const devFund = getByText(/^3$/);
    expect(devFund).toBeInTheDocument();
    const farm = getByText(/^4$/);
    expect(farm).toBeInTheDocument();
    const preMine = getByText(/^5$/);
    expect(preMine).toBeInTheDocument();
  });
});
