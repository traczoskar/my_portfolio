import Header from "./Header";
import { MainContainer } from "../../common/Main/styled";
import Advantages from "./Advantages";
import Portfolio from "./Portfolio";

const HomePage = () => {
  return (
    <>
      <MainContainer>
        <Header title="Frontend" subtitle="Craft. Refine. Optimize." />

        <Portfolio />
        <Advantages />
      </MainContainer>
    </>
  );
};

export default HomePage;
