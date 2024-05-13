import React from "react";
import styled from "styled-components";
import { ABOUT } from "./aboutMeData";
import { MainContainer } from "../../common/Main/styled";
import NavSection from "../../common/NavSection";
import Footer from "../../common/Footer";

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

const TechItem = styled.span`
  background-color: #333;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: #333;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #666;
  }
`;

const AboutMe: React.FC = () => {
  return (
    <>
      <MainContainer>
        <NavSection />
        <AboutMeContainer>
          <Avatar src={ABOUT.avatar} alt="Avatar" />
          <Name>
            {ABOUT.name} {ABOUT.surname}
          </Name>
          <Title>{ABOUT.title}</Title>
          <Description>{ABOUT.description}</Description>
          <TechStack>
            {ABOUT.techStack.map((tech, index) => (
              <TechItem key={index}>{tech}</TechItem>
            ))}
          </TechStack>
          <SocialLinks>
            {ABOUT.socials.map((social, index) => (
              <SocialLink
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </SocialLink>
            ))}
          </SocialLinks>
        </AboutMeContainer>
      </MainContainer>
      <Footer backgroundColor="inherit" />
    </>
  );
};

export default AboutMe;
