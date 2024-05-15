import { ABOUT } from "./aboutMeData";
import { MainContainer } from "../../common/Main/styled";
import NavSection from "../../common/NavSection";
import Footer from "../../common/Footer";
import {
  AboutMeContainer,
  Avatar,
  Description,
  Name,
  SocialLink,
  SocialLinks,
  TechItem,
  TechStack,
  Title,
} from "./styled";
import Education from "./Education";

const AboutMe: React.FC = () => {
  return (
    <>
      <MainContainer backgroundColor="white">
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
          <Education educationData={ABOUT.education} />
        </AboutMeContainer>
      </MainContainer>
      <Footer backgroundColor="white" />
    </>
  );
};

export default AboutMe;
