import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: inherit;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0;
  cursor: pointer;
  transition: font-weight 0.3s, color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.basic};
  }

  span {
    transition: font-size 0.2s;
    font-weight: 400;
    font-size: 1rem;
  }

  .active {
    transition: font-size 0.2s;
    font-weight: 800;
    font-size: 1.1rem;
  }
`;
