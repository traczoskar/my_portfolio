import styled from "styled-components";

export const PortfolioSection = styled.section`
  padding-top: 10rem;
  padding-bottom: 10rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.section.primary};
  color: ${({ theme }) => theme.colors.text};
`;

export const PortfolioWrapper = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 2rem;
`;
