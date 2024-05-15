import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const Name = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

export const TechItem = styled.span`
  background-color: #333;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
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
