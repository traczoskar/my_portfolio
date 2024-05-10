import Header from "./Header";
import { MainContainer } from "../../common/Main/styled";
import Advantages from "./Advantages";
import Portfolio from "./Portfolio";
import MoreAboutMe from "./MoreAboutMe";

const HomePage = () => {
  return (
    <>
      <MainContainer>
        <Header title="Frontend" subtitle="Craft. Refine. Optimize." />
        <Portfolio />
        <Advantages />
        <MoreAboutMe />
      </MainContainer>
    </>
  );
};

export default HomePage;
