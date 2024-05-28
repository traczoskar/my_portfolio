import styled from "styled-components";
import { Link } from "react-router-dom";

export const MoreAboutMeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 10rem 0;
  background: ${({ theme }) => theme.colors.moreAboutMe.background};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    padding: 2rem 0 5rem 0;
  }
`;

export const MoreAboutMeDivider = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    flex-direction: column;
    gap: 5rem;
  }
`;

export const MoreAboutMeWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    align-items: center;
  }
`;

export const AboutMeHeader = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: 700;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    font-size: 1.3rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    font-size: 2rem;
  }
`;

export const AboutMeText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
`;

export const Picture = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    width: 8rem;
    height: 8rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 45vw;
    height: 45vw;
  }
`;

export const AboutMeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 10rem;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.button.background};
  border-radius: 30px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.button.text};
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);
  transition: 0.3s ease;

  &:hover {
    filter: brightness(115%);
    span {
      transition: 0.3s ease-in-out;
      transform: scale(1.05);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 1.1rem;
  }
`;

export const TechStackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    gap: 1.2rem;
    margin: 0 1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TechnologyIcon = styled.img`
  width: auto;
  height: 40px;
  filter: grayscale(100%);
`;

export const Technology = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    img {
      transition: 0.3s;
      filter: grayscale(0%);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    gap: 0.8rem;
  }
`;

export const TechnologySubtitle = styled.p`
  font-size: 0.6rem;
  font-family: "Space Mono", monospace;
  text-transform: lowercase;
  margin: 0;
  padding: 0;
  font-weight: 400;
  color: #888888;
`;
