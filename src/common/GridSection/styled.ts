import styled from "styled-components";

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.5rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    gap: 1.5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;
