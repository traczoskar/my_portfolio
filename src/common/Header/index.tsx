import { GridSection } from "../GridSection/styled";
import PortfolioCards from "./PortfolioCards";
import {
  HeaderContent,
  HeaderSectionWrapper,
  HeaderWrapper,
  Paragraph,
  SpecialText,
  SubHeaderContent,
} from "./styled";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <HeaderSectionWrapper>
      <GridSection>
        <HeaderWrapper>
          <HeaderContent>
            {title} <SpecialText>Developer</SpecialText>
          </HeaderContent>
          <SubHeaderContent>{subtitle}</SubHeaderContent>
          <Paragraph>
            Welcome to my portfolio! My pursuit is to connect aesthetics with
            functionality while creating web applications.
          </Paragraph>
        </HeaderWrapper>
        <PortfolioCards />
      </GridSection>
    </HeaderSectionWrapper>
  );
};

export default Header;
