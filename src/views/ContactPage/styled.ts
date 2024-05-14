import styled, { keyframes } from "styled-components";

export const ContactPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;
  max-width: 1200px;
`;

export const ContactTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0;
`;

export const SpecialText = styled.span`
  color: orange;
`;

export const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 5rem 0;
`;

const animatespin3d = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(360deg) translateY(-5px);
  }
  100% {
    transform: rotateY(0deg) translateY(0px);
  }
`;

export const ContactLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 2px solid #444444;
  border-radius: 3.5rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: inherit;
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: inherit;
    border: 2px solid orange;
    svg {
      color: orange;
      animation: ${animatespin3d} 0.6s ease-in-out;
    }
  }

  &:active {
    transform: scale(0.9);
    background-color: #eeeeee;
  }

  &:visited {
    color: inherit;
  }

  svg {
    transition: 0.3s;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
