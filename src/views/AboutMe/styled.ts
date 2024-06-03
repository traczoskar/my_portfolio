import styled from "styled-components";
import { motion } from "framer-motion";

interface DescriptionTitleProps {
  color?: string;
}

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    padding: 0 5vw;
  }
`;

export const Tile = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 8rem 0 0 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    margin: 6rem 0 0 0;
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 4rem 0 0 0;
    gap: 1rem;
  }
`;

export const TileDiv = styled(motion.div)`
  display: flex;
  gap: 4rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    gap: 2rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const TileDivider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 0 3rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    margin: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    align-items: center;
    gap: 0.25rem;
  }
`;

export const TileTitle = styled.h3`
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-weight: 600;
    font-size: 6vw;
  }
`;

export const Avatar = styled.img`
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  z-index: 100;
  object-fit: cover;
  border: 2px solid #ccc;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    width: 30vw;
    height: 30vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 50vw;
    height: 50vw;
  }
`;

export const Name = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 8vw;
    font-weight: 800;
  }
`;

export const Profession = styled.h4`
  font-size: 1.5rem;
  background-image: ${({ theme }) => theme.colors.header.text};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
  transition: 0.3s ease;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 7vw;
  }
`;

export const CurlyBraces = styled.span`
  font-weight: 500;
  color: #777777;
  font-size: 1.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    font-size: 3.6vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 8vw;
  }
`;

export const ParagraphContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DescriptionTitle = styled.h3<DescriptionTitleProps>`
  color: ${({ color }) => color};
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  transition: color 0.3s ease;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 7vw;
  }
`;

export const DescriptionFirst = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: justify;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 3.5vw;
  }
`;

export const DescriptionAdditional = styled.p`
  font-size: 1.1rem;
  line-height: 1.75;
  text-align: justify;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 3.5vw;
  }
`;

export const TechTitle = styled.h3`
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    align-self: center;
    font-size: 8vw;
  }
`;

export const TechStack = styled.ul`
  padding: 3rem 0 3rem 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3rem;
    column-gap: 1rem;
  }
`;

export const TechItem = styled(motion.li)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
      transform: scale(1.2);
    }
    img {
      transition: 0.3s;
      filter: grayscale(0%);
    }
  }
`;

export const TechIcon = styled.img`
  width: auto;
  height: 3rem;
  filter: grayscale(100%);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    height: 8vw;
  }
`;

export const TechSubtitle = styled.p`
  font-size: 0.8rem;
  font-family: "Space Mono", monospace;
  text-transform: lowercase;
  margin: 0;
  padding: 0;
  font-weight: 400;
  color: #888888;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 2.5vw;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const SocialLink = styled.a`
  color: #333;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #666;
  }
`;
