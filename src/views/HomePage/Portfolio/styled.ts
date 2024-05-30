import styled from "styled-components";

export const PortfolioSection = styled.section`
  padding: 2rem 0 10rem 0;
  display: flex;
  justify-content: center;
  transition: all ease 0.5s;
  background: ${({ theme }) => theme.colors.projects.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    padding: 2rem;
  }
`;

export const PortfolioWrapper = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 4rem;
`;
