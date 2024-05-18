import styled, { keyframes } from "styled-components";

const pressAnimation = keyframes`
  0%, 100% {

    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(0.9);
    filter: brightness(0.5);
  }
`;

export const KeyboardButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.2rem;
  color: #333333;
  align-items: center;
  justify-items: center;

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    animation: ${pressAnimation} 10s ease-in-out infinite;

    &.up {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      animation-delay: 0s;
    }

    &.left {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      animation-delay: 2s;
    }

    &.down {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      animation-delay: 4s;
    }

    &.right {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
      animation-delay: 6s;
    }

    &.escape {
      grid-column: 1/ 3;
      grid-row: 1 / 2;
      animation-delay: 8s;
    }
  }
`;
