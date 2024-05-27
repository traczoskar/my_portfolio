import styled from "styled-components";

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
`;

export const Tile = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 8rem 0 0 0;
`;

export const TileDiv = styled.div`
  display: flex;
  gap: 4rem;
`;

export const TileDivider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 0 3rem 0;
`;

export const TileTitle = styled.h3`
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
`;

export const Avatar = styled.img`
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  z-index: 100;
  object-fit: cover;
  border: 2px solid #ccc;
`;

export const Name = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0;
`;

export const Profession = styled.h4`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.basic};
  margin: 0;
  transition: color 0.3s ease;
`;

export const ParagraphContainer = styled.div`
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
`;

export const DescriptionFirst = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: justify;
  margin: 0;
`;

export const DescriptionAdditional = styled.p`
  font-size: 1.1rem;
  line-height: 1.75;
  text-align: justify;
  margin: 0;
`;

export const TechStack = styled.ul`
  padding: 3rem 0 3rem 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
`;

export const TechItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
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
`;

export const TechSubtitle = styled.p`
  font-size: 0.8rem;
  font-family: "Space Mono", monospace;
  text-transform: lowercase;
  margin: 0;
  padding: 0;
  font-weight: 400;
  color: #888888;
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
