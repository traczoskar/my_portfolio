import { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as ScrollUpIcon } from "../../assets/icons/scrollUp.svg";

interface ScrollButtonProps {
  isVisible: boolean;
}

const ScrollButton = styled.div<ScrollButtonProps>`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 40px;
  right: 40px;
  background-color: transparent;
  color: #fff;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  z-index: 1000;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <ScrollButton onClick={scrollToTop} isVisible={isVisible}>
      <ScrollUpIcon width={30} height={30} />
    </ScrollButton>
  );
};

export default ScrollToTopButton;
