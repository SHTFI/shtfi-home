import { render, screen } from "utils/testing/testHelpers";
import { Modal } from "components";

describe("<Modal />", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <Modal open={false} data-testid="modal">
        <h1>Hey</h1>
      </Modal>
    );
    const element = getByTestId("modal");
    expect(element).toBeInTheDocument();
  });

  it("renders child components within modal", () => {
    const { getByTestId, getByText } = render(
      <Modal open={false} data-testid="modal">
        <h1>Hey</h1>
      </Modal>
    );
    const element = getByTestId("modal");
    expect(element).toBeInTheDocument();
    const child = getByText(/^hey$/i);
    expect(child).toBeInTheDocument();
  });

  it("does not render if no children provided", () => {
    const { container } = render(<Modal open={false} data-testid="modal" />);
    expect(container.querySelector('[data-testid="modal"]')).toBeFalsy();
  });

  it("renders underlay component", () => {
    const { container, getByTestId } = render(
      <Modal open={false} data-testid="modal">
        <h1>Hey</h1>
      </Modal>
    );
    const element = getByTestId("modal");
    expect(element).toBeInTheDocument();
    const underlay = container.querySelector('[data-type="underlay"]');
    expect(underlay).toBeInTheDocument();
  });
  it("closes when underlay clicked", () => {
    const { getByTestId } = render(
      <Modal open={true} data-testid="modal">
        <h1>Hey</h1>
      </Modal>
    );
    const element = getByTestId("modal");
    expect(element).toBeInTheDocument();
    const wrapper = element.closest('[data-type="wrapper"]');
    expect(wrapper).toBeInTheDocument();
    const underlay = wrapper?.querySelector(
      '[data-type="underlay"]'
    ) as HTMLSpanElement;
    expect(underlay).toBeInTheDocument();
    underlay?.click();
    expect(wrapper?.getAttribute("aria-hidden")).toBe("true");
  });
  it("closes when close button clicked", () => {
    const { getByTestId } = render(
      <Modal open={true} data-testid="modal">
        <h1>Hey</h1>
      </Modal>
    );
    const element = getByTestId("modal");
    expect(element).toBeInTheDocument();
    const wrapper = element.closest('[data-type="wrapper"]');
    expect(wrapper).toBeInTheDocument();
    const closeButton = wrapper?.querySelector(
      '[data-type="modal-close"]'
    ) as HTMLSpanElement;
    expect(closeButton).toBeInTheDocument();
    closeButton?.click();
    expect(wrapper?.getAttribute("aria-hidden")).toBe("true");
  });
  it("opens when open prop is true", () => {
    const { getByTestId } = render(
      <Modal open={true} data-testid="modal">
        <h1>Hey</h1>
      </Modal>
    );
    const element = getByTestId("modal");
    expect(element).toBeInTheDocument();
    const wrapper = element.closest('[data-type="wrapper"]');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.getAttribute("aria-hidden")).toBe("false");
  });

  it("closes when close prop is true", () => {
    const { getByTestId } = render(
      <Modal open={false} data-testid="modal">
        <h1>Hey</h1>
      </Modal>
    );
    const element = getByTestId("modal");
    expect(element).toBeInTheDocument();
    const wrapper = element.closest('[data-type="wrapper"]');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.getAttribute("aria-hidden")).toBe("true");
  });
});
