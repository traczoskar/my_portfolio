import { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as ScrollUpIcon } from "../../assets/icons/scrollUp.svg";

interface ScrollButtonProps {
  $isVisible: boolean;
}

const ScrollButton = styled.div<ScrollButtonProps>`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 1.5rem;
  right: 1.5rem;
  background-color: ${({ theme }) => theme.colors.toTopButton.background};
  color: ${({ theme }) => theme.colors.toTopButton.arrow};
  border: 2px solid ${({ theme }) => theme.colors.toTopButton.arrow};
  border-radius: 50%;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
  z-index: 9999;

  &:active {
    transform: scale(0.7);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    display: flex;
  }
`;

const ScrollToTopButton: React.FC = () => {
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
    <ScrollButton onClick={scrollToTop} $isVisible={isVisible}>
      <ScrollUpIcon width={30} height={30} />
    </ScrollButton>
  );
};

export default ScrollToTopButton;
