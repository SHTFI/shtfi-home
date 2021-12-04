import { render, screen } from "utils/testing/testHelpers";
import { Modal } from "components";

describe("<Modal />", () => {
  it("renders", () => {
    render(
      <Modal open={false} data-testid="modal">
        <h1>Hey</h1>
      </Modal>
    );
    const element = screen.getByTestId("modal");
    expect(element).toBeInTheDocument();
  });
  it("renders an open button with open text", () => {
    render(
      <Modal
        open={false}
        data-testid="modal"
        buttonProps={{
          ["data-testid" as string]: "button",
        }}
      >
        <h1>Hey</h1>
      </Modal>
    );
    const element = screen.getByTestId("modal");
    expect(element).toBeInTheDocument();
    const button = screen.getByTestId("button") as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    expect(button.disabled);
  });
  it("Open button is disabled when modal is open", () => {
    render(
      <Modal
        open={true}
        data-testid="modal"
        buttonProps={{
          ["data-testid" as string]: "button",
        }}
      >
        <h1>Hey</h1>
      </Modal>
    );
    const element = screen.getByTestId("modal");
    expect(element).toBeInTheDocument();
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    const buttonByText = screen.getByText(/^open$/i);
    expect(buttonByText).toBeInTheDocument();
  });
  it("renders child components within modal", () => {
    render(
      <Modal open={false} data-testid="modal">
        <h1>Hey</h1>
      </Modal>
    );
    const element = screen.getByTestId("modal");
    expect(element).toBeInTheDocument();
    const child = screen.getByText(/^hey$/i);
    expect(child).toBeInTheDocument();
  });
  it("does not render if no children provided", () => {
    const { baseElement } = render(<Modal open={false} data-testid="modal" />);
    expect(baseElement.querySelector('[data-testid="modal"]')).toBeFalsy();
  });
  it("renders underlay component", () => {
    const { baseElement } = render(
      <Modal open={false} data-testid="modal">
        <h1>Hey</h1>
      </Modal>
    );
    const element = screen.getByTestId("modal");
    expect(element).toBeInTheDocument();
    const underlay = baseElement.querySelector('[data-type="underlay"]');
    expect(underlay).toBeInTheDocument();
  });
  it("closes when underlay clicked", () => {
    render(
      <Modal open={true} data-testid="modal">
        <h1>Hey</h1>
      </Modal>
    );
    const element = screen.getByTestId("modal");
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
    render(
      <Modal open={true} data-testid="modal">
        <h1>Hey</h1>
      </Modal>
    );
    const element = screen.getByTestId("modal");
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
    render(
      <Modal open={true} data-testid="modal">
        <h1>Hey</h1>
      </Modal>
    );
    const element = screen.getByTestId("modal");
    expect(element).toBeInTheDocument();
    const wrapper = element.closest('[data-type="wrapper"]');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.getAttribute("aria-hidden")).toBe("false");
  });
  it("closes when close prop is true", () => {
    render(
      <Modal open={false} data-testid="modal">
        <h1>Hey</h1>
      </Modal>
    );
    const element = screen.getByTestId("modal");
    expect(element).toBeInTheDocument();
    const wrapper = element.closest('[data-type="wrapper"]');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.getAttribute("aria-hidden")).toBe("true");
  });
  it("calls the toggle callback when modal is opened or closed", () => {
    const cb = jest.fn();
    render(
      <Modal
        open={false}
        data-testid="modal"
        toggleCallback={cb}
        buttonProps={{ ["data-testid" as string]: "button" }}
      >
        <h1>Hey</h1>
      </Modal>
    );
    const element = screen.getByTestId("modal");
    expect(element).toBeInTheDocument();
    const wrapper = element.closest('[data-type="wrapper"]');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.getAttribute("aria-hidden")).toBe("true");
    const open = screen.getByTestId("button");
    open.click();
    expect(cb.mock.calls.length).toBe(1);
  });
});
