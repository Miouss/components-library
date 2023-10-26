import { useState, AnimationEvent } from "react";
import styled from "styled-components";
import { CloserButton } from ".";

interface MenuProps {
  closeMenu: () => void;
}

enum Slide {
  In = "slideIn",
  Out = "slideOut",
}

export function Content({ closeMenu }: MenuProps) {
  const [slideAnim, setSlideAnim] = useState(Slide.In);

  const handleClick = () => {
    setSlideAnim(Slide.Out);
  };

  const handleAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === Slide.Out) {
      closeMenu();
    }
  };

  return (
    <AnimatedDiv
      slideAnim={slideAnim}
      className={`absolute min-w-full min-h-screen bg-white sm:p-4`}
      onAnimationEnd={handleAnimationEnd}
    >
      <CloserButton handleClick={handleClick} />
      <p className="pl-4 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </AnimatedDiv>
  );
}

const slideAnim = (name: Slide, from: number, to: number) => `
  @keyframes ${name} {
    from {
      transform: translateX(${from}%);
    }
    to {
      transform: translateX(${to}%);
    }
  }
  `;

const slideInAnim = slideAnim(Slide.In, -100, 0);
const slideOutAnim = slideAnim(Slide.Out, 0, -100);

const AnimatedDiv = styled.div<{ slideAnim: string }>`
  animation: ${({ slideAnim }) => slideAnim} 0.2s forwards;

  ${slideInAnim}

  ${slideOutAnim}
`;
