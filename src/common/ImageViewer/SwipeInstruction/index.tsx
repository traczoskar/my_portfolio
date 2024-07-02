import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as SwipeIcon } from "../../../assets/icons/swiping.svg";
import { ReactComponent as ZoomInIcon } from "../../../assets/icons/zoom-in.svg";

const swipeAnimation = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-20px); }
  100% { transform: translateX(0); }
`;

const zoomInAnimation = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
    `;

const SwipeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  gap: 0.5rem;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    width: 50%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    top: 3rem;
    width: 100%;
  }
`;

const BackgroundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-direction: column;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const IconsWrapper = styled.div`
  display: flex;
  padding: 0;
  gap: 3rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 1rem 0;
  }
`;

const StyledSwipeIcon = styled(SwipeIcon)`
  color: white;
  filter: drop-shadow(2px 2px 4px black);
  width: 25px;
  height: 25px;
  animation: ${swipeAnimation} 2s infinite;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 35px;
    height: 35px;
  }
`;

const StyledZoomInIcon = styled(ZoomInIcon)`
  color: white;
  filter: drop-shadow(2px 2px 4px black);
  width: 25px;
  height: 25px;
  animation: ${zoomInAnimation} 2s infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 35px;
    height: 35px;
  }
`;

const SwipeText = styled.p`
  filter: drop-shadow(2px 2px 4px black);
  width: 100%;
  margin: 0;
  padding: 0;
  color: #dddddd;
  font-size: 0.6rem;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 0.8rem;
  }
`;

interface SwipeInstructionProps {
  isCertificates?: boolean;
}

const SwipeInstruction: React.FC<SwipeInstructionProps> = ({
  isCertificates,
}) => {
  return (
    <SwipeContainer>
      <BackgroundWrapper>
        <IconsWrapper>
          {isCertificates ? null : <StyledSwipeIcon />}
          <StyledZoomInIcon />
        </IconsWrapper>
        {isCertificates ? null : (
          <SwipeText>Swipe left or right to change picture</SwipeText>
        )}
        <SwipeText>Use 2 fingers to resize the picture</SwipeText>
      </BackgroundWrapper>
    </SwipeContainer>
  );
};

export default SwipeInstruction;
