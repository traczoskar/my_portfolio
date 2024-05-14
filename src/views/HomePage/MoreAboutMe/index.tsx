import {
  AboutMeContainer,
  AboutMeHeader,
  AboutMeLink,
  AboutMeText,
  MoreAboutMeDivider,
  MoreAboutMeSection,
  MoreAboutMeWrapper,
  Picture,
  TechStackContainer,
  Technology,
  TechnologyIcon,
  TechnologySubtitle,
} from "./styled";
import picture from "../../../assets/avatar.jpg";
import { ABOUT } from "../../AboutMe/aboutMeData";
import { technologies } from "../Portfolio/technologies";

const MoreAboutMe = () => {
  return (
    <MoreAboutMeSection>
      <MoreAboutMeDivider>
        <TechStackContainer>
          {ABOUT?.techStack
            ? ABOUT.techStack.map((tech, index) => (
                <Technology>
                  <TechnologyIcon
                    key={index}
                    src={technologies.find((t) => t.name === tech)?.icon}
                    alt={tech}
                  />
                  <TechnologySubtitle>{tech}</TechnologySubtitle>
                </Technology>
              ))
            : null}
        </TechStackContainer>

        <MoreAboutMeWrapper>
          <Picture src={picture} alt="Oskar Tracz" />
          <AboutMeContainer>
            <AboutMeHeader>More about me</AboutMeHeader>
            <AboutMeText>Click the button below and check out.</AboutMeText>
            <AboutMeLink to="/about" title="About Me page">
              <span>About me</span>
            </AboutMeLink>
          </AboutMeContainer>
        </MoreAboutMeWrapper>
      </MoreAboutMeDivider>
    </MoreAboutMeSection>
  );
};

export default MoreAboutMe;
