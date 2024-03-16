import { GridSection } from "../../../common/GridSection/styled";
import { Button } from "./Button/styled";
import PortfolioCards from "./PortfolioCards";
import {
  HeaderContent,
  HeaderSectionWrapper,
  HeaderWrapper,
  Paragraph,
  Section,
  SectionDividerPurposeOnly,
  SpecialText,
  SubHeaderContent,
} from "./styled";
import { ReactComponent as ShapeDivider } from "./ShapeDivider/shape.svg";
import "./ShapeDivider/style.css";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <SectionDividerPurposeOnly>
      <Section>
        <HeaderSectionWrapper>
          <GridSection>
            <HeaderWrapper>
              <HeaderContent>
                {title} <SpecialText>Developer</SpecialText>
              </HeaderContent>
              <SubHeaderContent>{subtitle}</SubHeaderContent>
              <Paragraph>
                Welcome to my portfolio! My pursuit is to connect aesthetics
                with functionality while creating web applications.
              </Paragraph>
              <Button to="/contact">Contact me</Button>
            </HeaderWrapper>
            <PortfolioCards />
          </GridSection>
        </HeaderSectionWrapper>
      </Section>
      <div className="custom-shape-divider-bottom-1710602235">
        <ShapeDivider />
      </div>
    </SectionDividerPurposeOnly>
  );
};

export default Header;
