import Header from "./Header";
import { MainContainer } from "../../common/Main/styled";
import Advantages from "./Advantages";
import Portfolio from "./Portfolio";
import MoreAboutMe from "./MoreAboutMe";
import NavSection from "../../common/NavSection";
import Footer from "../../common/Footer";

const HomePage = () => {
  return (
    <>
      <MainContainer
        backgroundColor={({ theme }) => theme.colors.app.background}
      >
        <NavSection />
        <Header title="Frontend" subtitle="Craft. Refine. Optimize." />
        <Portfolio />
        <Advantages />
        <MoreAboutMe />
      </MainContainer>
      <Footer backgroundColor="white" />
    </>
  );
};

export default HomePage;
