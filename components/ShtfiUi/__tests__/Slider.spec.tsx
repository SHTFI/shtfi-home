import { render, screen } from "utils/testing/testHelpers";
import { Slider } from "components";
describe("<Slider />", () => {
  it("renders", () => {
    render(
      <Slider data-testid="slider">
        <div>Hey</div>
      </Slider>
    );
    const element = screen.getByTestId("slider");
    expect(element).toBeInTheDocument();
  });

  it("renders first slide as default", () => {
    render(
      <Slider data-testid="slider">
        <div data-testid="slide-1">Hey</div>
        <div data-testid="slide-2">yo</div>
      </Slider>
    );
    const element = screen.getByTestId("slider");
    expect(element).toBeInTheDocument();
    const slide = screen.getByTestId("slide-1");
    expect(slide).toBeInTheDocument();
  });

  it("switches to next slide when next is clicked", () => {
    render(
      <Slider data-testid="slider">
        <div data-testid="slide-1">Hey</div>
        <div data-testid="slide-2">yo</div>
      </Slider>
    );
    const element = screen.getByTestId("slider");
    expect(element).toBeInTheDocument();
    const slide = screen.getByTestId("slide-1");
    expect(slide).toBeInTheDocument();
    const nextBtn = screen.getByText(">");
    expect(nextBtn).toBeInTheDocument();
    nextBtn.click();
    const slide2 = screen.getByTestId("slide-2");
    expect(slide2).toBeInTheDocument();
  });

  it("prev button disabled on first slide", () => {
    render(
      <Slider data-testid="slider">
        <div data-testid="slide-1">Hey</div>
        <div data-testid="slide-2">yo</div>
      </Slider>
    );
    const element = screen.getByTestId("slider");
    expect(element).toBeInTheDocument();
    const slide = screen.getByTestId("slide-1");
    expect(slide).toBeInTheDocument();
    const prev = screen.getByText("<");
    expect(prev).toBeInTheDocument();
    expect(prev).toHaveAttribute("disabled");
  });
  it("next button disabled on last slide", () => {
    render(
      <Slider data-testid="slider">
        <div data-testid="slide-1">Hey</div>
        <div data-testid="slide-2">yo</div>
      </Slider>
    );
    const element = screen.getByTestId("slider");
    expect(element).toBeInTheDocument();
    const slide = screen.getByTestId("slide-1");
    expect(slide).toBeInTheDocument();
    const nextBtn = screen.getByText(">");
    expect(nextBtn).toBeInTheDocument();
    nextBtn.click();
    const slide2 = screen.getByTestId("slide-2");
    expect(slide2).toBeInTheDocument();
    expect(nextBtn).toHaveAttribute("disabled");
  });
});
