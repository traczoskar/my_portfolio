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
  TechIcon,
  TechItem,
  TechStack,
  TechSubtitle,
  Tile,
  TileDivider,
  Profession,
  TileTitle,
  TileDiv,
  GridWrapper,
} from "./styled";
import Education from "./Education";
import { technologies } from "../HomePage/Portfolio/technologies";

const AboutMe: React.FC = () => {
  return (
    <>
      <MainContainer backgroundColor="white">
        <NavSection />

        <AboutMeContainer>
          <GridWrapper>
            <Tile>
              <TileTitle>Who Am I? 👨🏻‍💻</TileTitle>
              <TileDiv>
                <Avatar src={ABOUT.avatar} alt="Avatar" />
                <TileDivider>
                  <Name>
                    {ABOUT.name} {ABOUT.surname}
                  </Name>
                  <Profession>{ABOUT.title}</Profession>
                  <Description>{ABOUT.description}</Description>
                </TileDivider>
              </TileDiv>
            </Tile>
            <Tile>
              <TileTitle>My Tech Stack 🛠</TileTitle>
              <TechStack>
                {ABOUT.techStack.map((tech, index) => (
                  <TechItem key={index}>
                    <TechIcon
                      src={technologies.find((t) => t.name === tech)?.icon}
                      alt={tech}
                    />
                    <TechSubtitle>{tech}</TechSubtitle>
                  </TechItem>
                ))}
              </TechStack>
            </Tile>
          </GridWrapper>

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
