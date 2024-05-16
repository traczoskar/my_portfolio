import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../../../../assets/icons/arrow.svg";

const StyledArrowButton = styled.button<{ direction: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === "left" ? "left: 1rem;" : "right: 1rem;")}
  transform: translateY(-50%) ${({ direction }) =>
    direction === "right" ? "" : "rotateY(180deg)"};
  font-size: 2rem;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 10000;

  &:hover {
    color: rgba(255, 255, 255);
  }
`;

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  return (
    <StyledArrowButton direction={direction} onClick={onClick}>
      <Arrow width={40} />
    </StyledArrowButton>
  );
};

export default ArrowButton;
