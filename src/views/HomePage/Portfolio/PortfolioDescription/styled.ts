import styled from "styled-components";

export const PortfolioTitle = styled.h2`
  margin: 0;
  padding: 0 5rem 2rem 5rem;
  font-size: 2.5rem;
  text-align: center;
  font-weight: 700;
  border-bottom: 1px solid #ddd;
  text-shadow: -4px 6px 8px rgba(66, 68, 90, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    font-size: 2rem;
    padding: 0 3rem 1rem 3rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 6.5vw;
    padding: 0 2.5rem 1rem 2.5rem;
  }
`;

export const PortfolioDescriptionContent = styled.p`
  text-align: center;
  margin: 0;
  padding: 3rem 0;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.projects.textSecondary};
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    line-height: 1.8;
    padding: 2rem 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 1.1rem;
    padding: 1.5rem 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobileMax}) {
    font-size: 1rem;
    padding: 1rem 0;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
