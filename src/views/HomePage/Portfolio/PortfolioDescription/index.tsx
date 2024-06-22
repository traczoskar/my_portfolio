import { useSelector } from "react-redux";
import ClickHere from "./ClickHere";
import {
  DescriptionWrapper,
  PortfolioTitle,
  PortfolioDescriptionContent,
} from "./styled";
import { selectIsLanguageEN } from "../../../../slices/languageSlice";

const PortfolioDescription: React.FC = () => {
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
  return (
    <DescriptionWrapper>
      <PortfolioTitle>
        {isLanguageEN ? "My recent projects" : "Moje ostatnie projekty"}
      </PortfolioTitle>
      <PortfolioDescriptionContent>
        {isLanguageEN
          ? "Here's a curated collection of my recent projects. Click on any project to delve into more details about the technologies utilized and the skills acquired through their development journey. Take your time to browse and learn more about my work!"
          : "Oto wyselekcjonowana kolekcja moich ostatnich projektów. Kliknij na dowolny projekt, aby dowiedzieć się więcej o wykorzystanych technologiach i umiejętnościach zdobytych podczas ich tworzenia. Przejrzyj szczegóły i dowiedz się więcej o mojej pracy!"}
      </PortfolioDescriptionContent>
      <ClickHere />
    </DescriptionWrapper>
  );
};

export default PortfolioDescription;
