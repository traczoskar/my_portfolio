import styled from "styled-components";

export const PortfolioSection = styled.section`
  padding-top: 2rem;
  padding-bottom: 10rem;
  display: flex;
  justify-content: center;
  transition: all ease 0.5s;
  background: ${({ theme }) => theme.colors.projects.background};
`;

export const PortfolioWrapper = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 4rem;
`;
