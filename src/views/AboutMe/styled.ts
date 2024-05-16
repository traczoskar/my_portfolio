import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: white;
`;

export const GridWrapper = styled.div`
  display: grid;
  max-width: 1200px;
  width: 100%;
  grid-template-columns: auto auto;
  gap: 1rem;
  justify-content: center;
`;

export const Tile = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: auto;
  padding: 2rem;
  border-radius: 3rem;
  background-color: #fefefe;
  border: 1px solid #ddd;
`;

export const TileDiv = styled.div`
  display: flex;
  gap: 3rem;
`;

export const TileDivider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TileTitle = styled.h3`
  font-size: 1.5rem;
  padding-left: 1rem;
  margin: 0;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ccc;
`;

export const Name = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

export const Profession = styled.h4`
  font-size: 1.3rem;
  color: orange;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  text-align: justify;
  margin: 0;
`;

export const TechStack = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const TechItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  height: 2.2rem;
  filter: grayscale(100%);
`;

export const TechSubtitle = styled.p`
  font-size: 0.6rem;
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
