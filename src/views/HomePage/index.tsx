import Header from "./Header";
import { MainContainer } from "../../common/Main/styled";
import Advantages from "./Advantages";
import Portfolio from "./Portfolio";
import MoreAboutMe from "./MoreAboutMe";
import NavSection from "../../common/NavSection";
import Footer from "../../common/Footer";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { selectIsLanguageEN } from "../../slices/languageSlice";
import useScrollToElement from "../../hooks/useScrollToElement";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  useScrollToElement("projects");
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
  const theme = useTheme();

  return (
    <>
      <MainContainer $backgroundColor={theme.colors.app.background}>
        <Helmet>
          <title>
            {isLanguageEN
              ? "traczoskar.dev - Homepage"
              : "traczoskar.dev - Strona Główna"}
          </title>
        </Helmet>
        <NavSection />
        <Header
          title="Frontend"
          subtitle={
            isLanguageEN
              ? "Craft. Refine. Optimize."
              : "Tworzenie. Doskonalenie. Optymalizacja."
          }
          name="Oskar Tracz"
        />
        <Advantages />
        <Portfolio />
        <MoreAboutMe />
      </MainContainer>
      <Footer $backgroundColor={theme.colors.footer.background} />
    </>
  );
};

export default HomePage;
