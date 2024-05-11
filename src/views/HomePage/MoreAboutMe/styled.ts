import styled from "styled-components";
import { Link } from "react-router-dom";

export const MoreAboutMeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5rem;
  padding: 0 0 10rem 0;
  background-color: ${({ theme }) => theme.colors.section.primary};
  color: ${({ theme }) => theme.colors.text};
`;

export const MoreAboutMeDivider = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 2rem;
`;

export const MoreAboutMeWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AboutMeHeader = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: 700;
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
    filter: brightness(120%);
  }
`;

export const TechStackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
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
`;

export const TechnologySubtitle = styled.p`
  font-size: 0.6rem;
  margin: 0;
  padding: 0;
  font-weight: 400;
  color: #888888;
`;
