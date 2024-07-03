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
  TechTitle,
  CurlyBraces,
} from "./styled";
import Education from "./Education";
import { technologies } from "../HomePage/Portfolio/technologies";
import { useTheme } from "styled-components";
import AnimatedIcons from "./AnimatedIcons";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../slices/themeSlice";
import { selectIsLanguageEN } from "../../slices/languageSlice";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import useScrollToTop from "../../hooks/useScrollToTop";
import useOpenAILogo from "../../hooks/useOpenAILogo";

const AboutMe: React.FC = () => {
  useScrollToTop();
  const isDarkTheme: boolean = useSelector(selectIsDarkTheme);
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
  const isMobile: boolean = useMediaQuery({
    query: `(max-width: 767px)`,
  });
  const theme = useTheme();

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };
  const openAILogo = useOpenAILogo();

  return (
    <>
      <MainContainer $backgroundColor={theme.colors.aboutMePage.background}>
        <NavSection />
        <AnimatedIcons isDarkTheme={isDarkTheme} />
        <AboutMeContainer>
          <Wrapper>
            <Tile>
              <TileDiv
                initial="hidden"
                whileInView="visible"
                variants={fadeInVariants}
              >
                <Avatar src={ABOUT.avatar} alt="Avatar" />
                <TileDivider>
                  <TileTitle>
                    {isLanguageEN ? "Who Am I?" : "Kim jestem?"} 👨🏻‍💻
                  </TileTitle>
                  <Name>
                    {ABOUT.name} {ABOUT.surname}
                  </Name>
                  <Profession>
                    <CurlyBraces>{"{"}</CurlyBraces>
                    {ABOUT.title}
                    <CurlyBraces>{"}"}</CurlyBraces>
                  </Profession>
                  {isMobile ? null : (
                    <DescriptionFirst>
                      {isLanguageEN
                        ? ABOUT.description.EN.paragraph1
                        : ABOUT.description.PL.paragraph1}
                    </DescriptionFirst>
                  )}
                </TileDivider>
              </TileDiv>
              {!isMobile ? null : (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInVariants}
                >
                  <DescriptionFirst>
                    {isLanguageEN
                      ? ABOUT.description.EN.paragraph1
                      : ABOUT.description.PL.paragraph1}
                  </DescriptionFirst>
                </motion.div>
              )}
              <ParagraphContainer
                initial="hidden"
                whileInView="visible"
                variants={fadeInVariants}
              >
                <DescriptionTitle color={theme.colors.aboutMePage.title1}>
                  {isLanguageEN ? "#passion" : "#pasja"} ❤️‍🔥
                </DescriptionTitle>
                <DescriptionAdditional>
                  {isLanguageEN
                    ? ABOUT.description.EN.paragraph2
                    : ABOUT.description.PL.paragraph2}
                </DescriptionAdditional>
              </ParagraphContainer>
              <ParagraphContainer
                initial="hidden"
                whileInView="visible"
                variants={fadeInVariants}
              >
                <DescriptionTitle color={theme.colors.aboutMePage.title2}>
                  {isLanguageEN ? "#collaboration" : "#współpraca"} 🤝
                </DescriptionTitle>
                <DescriptionAdditional>
                  {isLanguageEN
                    ? ABOUT.description.EN.paragraph3
                    : ABOUT.description.PL.paragraph3}
                </DescriptionAdditional>
              </ParagraphContainer>
              <ParagraphContainer
                initial="hidden"
                whileInView="visible"
                variants={fadeInVariants}
              >
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
              <TechTitle>
                {isLanguageEN ? "My Tech Stack" : "Technologie"} 🛠
              </TechTitle>
              <TechStack>
                {ABOUT.techStack.map((tech, index) => (
                  <TechItem
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInVariants}
                    key={index}
                  >
                    <TechIcon
                      src={
                        technologies.find((t) => t.name === tech)?.icon ||
                        openAILogo
                      }
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
      <Footer $backgroundColor={theme.colors.aboutMePage.footer} />
    </>
  );
};

export default AboutMe;
