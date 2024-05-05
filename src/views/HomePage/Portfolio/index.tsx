import PortfolioCards from "./PortfolioCards";
import PortfolioDescription from "./PortfolioDescription";
import { PortfolioSection, PortfolioWrapper } from "./styled";

const Portfolio = () => {
  return (
    <PortfolioSection>
      <PortfolioWrapper>
        <PortfolioCards />
        <PortfolioDescription />
      </PortfolioWrapper>
    </PortfolioSection>
  );
};

export default Portfolio;
