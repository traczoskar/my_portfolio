import Header from "./Header";
import { MainContainer } from "../../common/Main/styled";
import Advantages from "./Advantages";
import Portfolio from "./Portfolio";
import MoreAboutMe from "./MoreAboutMe";
import NavSection from "../../common/NavSection";
import Footer from "../../common/Footer";
import { useTheme } from "styled-components";

const HomePage = () => {
  const theme = useTheme();
  return (
    <>
      <MainContainer backgroundColor={theme.colors.app.background}>
        <NavSection />
        <Header title="Frontend" subtitle="Craft. Refine. Optimize." />
        <Advantages />
        <Portfolio />
        <MoreAboutMe />
      </MainContainer>
      <Footer backgroundColor={theme.colors.footer.background} />
    </>
  );
};

export default HomePage;
