import Header from "./Header";
import { MainContainer } from "../../common/Main/styled";
import Advantages from "./Advantages";

const HomePage = () => {
  return (
    <>
      <MainContainer>
        <Header title="Frontend" subtitle="Craft. Refine. Optimize." />
        <Advantages />
      </MainContainer>
    </>
  );
};

export default HomePage;
