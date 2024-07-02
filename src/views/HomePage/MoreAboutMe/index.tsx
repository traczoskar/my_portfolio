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
import { useSelector } from "react-redux";
import { selectIsLanguageEN } from "../../../slices/languageSlice";

const MoreAboutMe = () => {
  const isLanguageEN = useSelector(selectIsLanguageEN);
  return (
    <MoreAboutMeSection>
      <MoreAboutMeDivider>
        <TechStackContainer>
          {ABOUT?.techStack
            ? ABOUT.techStack.map((tech, index) => (
                <Technology title={tech}>
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
            <AboutMeHeader>
              {isLanguageEN ? "More about me" : "Więcej o mnie"}
            </AboutMeHeader>
            <AboutMeText>
              {isLanguageEN
                ? "Click the button below and check out."
                : "Kliknij przycisk poniżej i sprawdź."}
            </AboutMeText>
            <AboutMeLink to="/about" title="About Me page">
              <span>{isLanguageEN ? "About me" : "O mnie"}</span>
            </AboutMeLink>
          </AboutMeContainer>
        </MoreAboutMeWrapper>
      </MoreAboutMeDivider>
    </MoreAboutMeSection>
  );
};

export default MoreAboutMe;
