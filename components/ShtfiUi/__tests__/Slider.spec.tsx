import { render, screen } from "utils/testing/testHelpers";
import { Slider } from "components";
describe("<Slider />", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <Slider data-testid="slider">
        <div>Hey</div>
      </Slider>
    );
    const element = getByTestId("slider");
    expect(element).toBeInTheDocument();
  });

  it("renders first slide as default", () => {
    const { getByTestId } = render(
      <Slider data-testid="slider">
        <div data-testid="slide-1">Hey</div>
        <div data-testid="slide-2">yo</div>
      </Slider>
    );
    const element = getByTestId("slider");
    expect(element).toBeInTheDocument();
    const slide = getByTestId("slide-1");
    expect(slide).toBeInTheDocument();
  });

  it("switches to next slide when next is clicked", () => {
    const { getByTestId, getByText } = render(
      <Slider data-testid="slider">
        <div data-testid="slide-1">Hey</div>
        <div data-testid="slide-2">yo</div>
      </Slider>
    );
    const element = getByTestId("slider");
    expect(element).toBeInTheDocument();
    const slide = getByTestId("slide-1");
    expect(slide).toBeInTheDocument();
    const nextBtn = getByText(">");
    expect(nextBtn).toBeInTheDocument();
    nextBtn.click();
    const slide2 = getByTestId("slide-2");
    expect(slide2).toBeInTheDocument();
  });

  it("prev button disabled on first slide", () => {
    const { getByTestId, getByText } = render(
      <Slider data-testid="slider">
        <div data-testid="slide-1">Hey</div>
        <div data-testid="slide-2">yo</div>
      </Slider>
    );
    const element = getByTestId("slider");
    expect(element).toBeInTheDocument();
    const slide = getByTestId("slide-1");
    expect(slide).toBeInTheDocument();
    const prev = getByText("<");
    expect(prev).toBeInTheDocument();
    expect(prev).toHaveAttribute("disabled");
  });
  it("next button disabled on last slide", () => {
    const { getByTestId, getByText } = render(
      <Slider data-testid="slider">
        <div data-testid="slide-1">Hey</div>
        <div data-testid="slide-2">yo</div>
      </Slider>
    );
    const element = getByTestId("slider");
    expect(element).toBeInTheDocument();
    const slide = getByTestId("slide-1");
    expect(slide).toBeInTheDocument();
    const nextBtn = getByText(">");
    expect(nextBtn).toBeInTheDocument();
    nextBtn.click();
    const slide2 = getByTestId("slide-2");
    expect(slide2).toBeInTheDocument();
    expect(nextBtn).toHaveAttribute("disabled");
  });
});
