import { useTheme } from "styled-components";
import { MainContainer } from "../../common/Main/styled";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { selectIsLanguageEN } from "../../slices/languageSlice";
import NavSection from "../../common/NavSection";
import Footer from "../../common/Footer";
import { Container, Picture } from "./styled";
import noResults_dark_EN from "../../assets/404/404_dark_EN.png";

const NoResultsPage = () => {
  const theme = useTheme();
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);

  return (
    <>
      <MainContainer $backgroundColor={theme.colors.contactPage.background}>
        <Helmet>
          <title>
            {isLanguageEN
              ? "traczoskar.dev - Homepage"
              : "traczoskar.dev - Strona Główna"}
          </title>
        </Helmet>
        <NavSection />
        <Container>
          <Picture
            src={noResults_dark_EN}
            aria-label="Error 404 - Page Not Found"
            alt="404"
          />
        </Container>
      </MainContainer>
      <Footer $backgroundColor={theme.colors.contactPage.footer} />
    </>
  );
};
export default NoResultsPage;
