import Slideshow from "../../views/MainPage/Slideshow";
import { GridSection } from "../GridSection/styled";
import {
  HeaderContent,
  HeaderWrapper,
  SpecialText,
  SubHeaderContent,
} from "./styled";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <GridSection>
      <HeaderWrapper>
        <HeaderContent>
          {title} <SpecialText>Developer</SpecialText>
        </HeaderContent>
        <SubHeaderContent>{subtitle}</SubHeaderContent>
      </HeaderWrapper>
    </GridSection>
  );
};

export default Header;
