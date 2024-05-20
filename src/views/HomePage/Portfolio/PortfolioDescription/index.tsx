import ClickHere from "./ClickHere";
import {
  DescriptionWrapper,
  PortfolioTitle,
  PortfolioDescriptionContent,
} from "./styled";

const PortfolioDescription: React.FC = () => {
  return (
    <DescriptionWrapper>
      <PortfolioTitle>My recent projects</PortfolioTitle>
      <PortfolioDescriptionContent>
        Here's a curated collection of my recent projects. Click on any project
        to delve into more details about the technologies utilized and the
        skills acquired through their development journey. Take your time to
        browse and learn more about my work!
      </PortfolioDescriptionContent>
      <ClickHere />
    </DescriptionWrapper>
  );
};

export default PortfolioDescription;
