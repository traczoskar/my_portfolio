import PortfolioCards from "./PortfolioCards";
import PortfolioDescription from "./PortfolioDescription";
import { PortfolioSection, PortfolioWrapper } from "./styled";

const Portfolio = () => {
  return (
    <PortfolioSection id="projects">
      <PortfolioWrapper>
        <PortfolioDescription />
        <PortfolioCards />
      </PortfolioWrapper>
    </PortfolioSection>
  );
};

export default Portfolio;
