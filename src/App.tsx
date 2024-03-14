import { MainContainer } from "./common/Main/styled";
import NavSection from "./common/NavSection";
import MainPage from "./views/MainPage";

export const App = () => {
  return (
    <>
      <MainContainer>
        <NavSection />
        <MainPage />
      </MainContainer>
    </>
  );
};
