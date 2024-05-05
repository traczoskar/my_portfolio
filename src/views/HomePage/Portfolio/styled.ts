import styled from "styled-components";

export const PortfolioSection = styled.section`
  padding-top: 10rem;
  padding-bottom: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.section.primary};
  color: ${({ theme }) => theme.colors.text};
`;

export const PortfolioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
