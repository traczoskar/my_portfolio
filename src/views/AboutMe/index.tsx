import { ABOUT } from "./aboutMeData";
import { MainContainer } from "../../common/Main/styled";
import NavSection from "../../common/NavSection";
import Footer from "../../common/Footer";
import {
  AboutMeContainer,
  Avatar,
  Name,
  TechIcon,
  TechItem,
  TechStack,
  TechSubtitle,
  Tile,
  TileDivider,
  Profession,
  TileTitle,
  TileDiv,
  Wrapper,
  DescriptionFirst,
  DescriptionAdditional,
  ParagraphContainer,
  DescriptionTitle,
} from "./styled";
import Education from "./Education";
import { technologies } from "../HomePage/Portfolio/technologies";
import { useTheme } from "styled-components";
import AnimatedIcons from "./AnimatedIcons";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../slices/themeSlice";
import { selectIsLanguageEN } from "../../slices/languageSlice";

const AboutMe: React.FC = () => {
  const isDarkTheme: boolean = useSelector(selectIsDarkTheme);
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
  const theme = useTheme();

  return (
    <>
      <MainContainer backgroundColor={theme.colors.aboutMePage.background}>
        <NavSection />
        <AnimatedIcons isDarkTheme={isDarkTheme} />
        <AboutMeContainer>
          <Wrapper>
            <Tile>
              <TileDiv>
                <Avatar src={ABOUT.avatar} alt="Avatar" />
                <TileDivider>
                  <TileTitle>
                    {isLanguageEN ? "Who Am I?" : "Kim jestem?"} 👨🏻‍💻
                  </TileTitle>
                  <Name>
                    {ABOUT.name} {ABOUT.surname}
                  </Name>
                  <Profession>{ABOUT.title}</Profession>
                  <DescriptionFirst>
                    {isLanguageEN
                      ? ABOUT.description.EN.paragraph1
                      : ABOUT.description.PL.paragraph1}
                  </DescriptionFirst>
                </TileDivider>
              </TileDiv>
              <ParagraphContainer>
                <DescriptionTitle color={theme.colors.aboutMePage.title1}>
                  {isLanguageEN ? "#passion" : "#pasja"} ❤️‍🔥
                </DescriptionTitle>
                <DescriptionAdditional>
                  {isLanguageEN
                    ? ABOUT.description.EN.paragraph2
                    : ABOUT.description.PL.paragraph2}
                </DescriptionAdditional>
              </ParagraphContainer>
              <ParagraphContainer>
                <DescriptionTitle color={theme.colors.aboutMePage.title2}>
                  {isLanguageEN ? "#collaboration" : "#współpraca"} 🤝
                </DescriptionTitle>
                <DescriptionAdditional>
                  {isLanguageEN
                    ? ABOUT.description.EN.paragraph3
                    : ABOUT.description.PL.paragraph3}
                </DescriptionAdditional>
              </ParagraphContainer>
              <ParagraphContainer>
                <DescriptionTitle color={theme.colors.aboutMePage.title3}>
                  {isLanguageEN ? "#commitment" : "#zaangażowanie"} 🚀
                </DescriptionTitle>
                <DescriptionAdditional>
                  {isLanguageEN
                    ? ABOUT.description.EN.paragraph4
                    : ABOUT.description.PL.paragraph4}
                </DescriptionAdditional>
              </ParagraphContainer>
            </Tile>
            <Tile>
              <TileTitle>
                {isLanguageEN ? "My Tech Stack" : "Technologie"} 🛠
              </TileTitle>
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
          </Wrapper>
          <Education />
        </AboutMeContainer>
      </MainContainer>
      <Footer backgroundColor={theme.colors.aboutMePage.footer} />
    </>
  );
};

export default AboutMe;
