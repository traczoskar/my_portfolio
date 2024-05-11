import Header from "./Header";
import { MainContainer } from "../../common/Main/styled";
import Advantages from "./Advantages";
import Portfolio from "./Portfolio";
import MoreAboutMe from "./MoreAboutMe";
import Footer from "../../common/Footer";

const HomePage = () => {
  return (
    <>
      <MainContainer>
        <Header title="Frontend" subtitle="Craft. Refine. Optimize." />
        <Portfolio />
        <Advantages />
        <MoreAboutMe />
        <Footer />
      </MainContainer>
    </>
  );
};

export default HomePage;
