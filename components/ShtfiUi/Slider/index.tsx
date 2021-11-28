import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "components";
import { ButtonProps } from "../types";

const Slider: React.FC = ({ children, ...rest }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  // Ensure we have children
  if (
    !!!children &&
    typeof children !== "object" &&
    !children?.hasOwnProperty("length")
  ) {
    return null;
  }
  // Put our children in an array
  const slides = React.Children.toArray(children);
  // Define our change handler
  const handleChange = (forwards: boolean = true): void => {
    // Next slide
    if (!!forwards) {
      // Next index
      const nextSlide = activeSlide + 1;
      // Set it
      setActiveSlide(nextSlide);
      // If the new slide is last disable the button
    } else {
      // Next index
      const nextSlide = activeSlide - 1;
      // Set it
      setActiveSlide(nextSlide);
    }
  };
  return (
    <StyledSlider {...rest}>
      {slides[activeSlide]}
      <StyledNav>
        <Button
          onClick={() => handleChange(false)}
          disabled={activeSlide === 0}
        >
          &lt;
        </Button>
        <Button
          onClick={() => handleChange(true)}
          disabled={activeSlide === slides.length - 1}
        >
          &gt;
        </Button>
      </StyledNav>
    </StyledSlider>
  );
};

const StyledSlider = styled.div``;
const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: var(--large-space);
  > button {
    min-width: 7ch;
  }
  > button:first-of-type {
    border-radius: calc(var(--radius-large) * 2) 0 0
      calc(var(--radius-large) * 2);
  }
  > button:nth-of-type(2) {
    border-radius: 0 calc(var(--radius-large) * 2) calc(var(--radius-large) * 2)
      0;
  }
`;

export default Slider;
