import styled from "styled-components";
import { motion } from "framer-motion";
interface ViewerContainerProps {
  $isTablet?: boolean;
}

export const ViewerContainer = styled.div<ViewerContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ $isTablet }) =>
    $isTablet ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.5)"};
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;

  &:focus {
    outline: none;
  }
`;

export const InstructionContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  align-items: center;
  display: flex;
  justify-content: center;
  background: #777777;
  color: #eeeeee;
  border-radius: 0.5rem;
  border: 1px solid #888888;
  gap: 2rem;
  padding: 1.2rem 2.2rem;
  box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.3);
`;

export const UserInstruction = styled.p`
  font-weight: 400;
  margin: 0;
  color: inherit;
  font-size: 0.8rem;
  text-align: center;
  padding: 0;
`;

export const ScreenshotDescription = styled.p`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  word-break: break-word;
  max-width: 1000px;
  line-height: 1.5;
  bottom: 0;
  font-weight: 400;
  margin: 0 0 1rem 0;
  background: #222222;
  color: #ffffff;
  border-radius: 0.5rem;
  border: 1px solid #555555;
  font-size: 1rem;
  text-align: center;
  padding: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    margin: 0 3vw 1rem 3vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 0.8rem;
  }
`;

interface ImageContainerProps {
  $isTablet?: boolean;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  width: ${({ $isTablet }) => ($isTablet ? "100%" : " 90%")};
  height: ${({ $isTablet }) => ($isTablet ? "100%" : " 90%")};
  max-width: ${({ $isTablet }) => ($isTablet ? "unset" : " 90%")};
  max-height: ${({ $isTablet }) => ($isTablet ? "unset" : " 90%")};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

interface ImageProps {
  $isTablet?: boolean;
}

export const Image = styled(motion.img)<ImageProps>`
  width: ${({ $isTablet }) => ($isTablet ? "100%" : "unset")};
  height: ${({ $isTablet }) => ($isTablet ? "100%" : "unset")};
  max-width: ${({ $isTablet }) => ($isTablet ? "unset" : "100%")};
  max-height: ${({ $isTablet }) => ($isTablet ? "unset" : "100%")};
  border-radius: 1rem;
  object-fit: content;
  box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.3);
  cursor: zoom-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    max-height: 60%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    max-height: 80%;
  }
`;

export const ImageInfo = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  background-color: #333333;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 0.8rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  top: 1rem;
  right: 1rem;
  font-size: 1rem;
  background-color: #555555;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease;
  color: white;

  &:hover {
    background-color: #777777;
    transform: scale(1.1);
  }
`;

interface ArrowButtonProps {
  $direction: "left" | "right";
}

export const ArrowButton = styled.button<ArrowButtonProps>`
  position: absolute;
  top: 50%;
  ${({ $direction }) =>
    $direction === "left" ? "left: 1rem;" : "right: 1rem;"}
  transform: translateY(-50%);
  font-size: 2rem;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 10000;
  transition: all 0.2s;
  filter: drop-shadow(0 0.15rem 0.5rem rgba(0, 0, 0, 0.4));

  &:hover {
    color: #bbbbbb;
    filter: drop-shadow(0 0.15rem 0.5rem rgba(0, 0, 0, 0.8));
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const MouseWheelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  border: 1.5px solid #555555;
  border-radius: 0.2rem;
  background-color: #ffffff;
`;
