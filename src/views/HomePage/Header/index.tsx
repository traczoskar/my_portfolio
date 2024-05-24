import { GridSection } from "../../../common/GridSection/styled";
import { Button } from "./Button/styled";
import {
  ButtonWrapper,
  CurlyBraces,
  HeaderContent,
  HeaderGreeter,
  HeaderSectionWrapper,
  HeaderWrapper,
  Image,
  ImageWrapper,
  Paragraph,
  Section,
  SectionDividerPurposeOnly,
  SpecialText,
  SpecialTextGreeter,
  SubHeaderContent,
} from "./styled";
import { TypingLine } from "./TypingLine";
import avatarLight from "../../../assets/abstractAvatar_light.png";
import avatarDark from "../../../assets/abstractAvatar_dark.png";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../../slices/themeSlice";
import ShapeDivider from "./ShapeDivider";
import { useTheme } from "styled-components";
interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }: HeaderProps) => {
  const isDarkTheme: boolean = useSelector(selectIsDarkTheme);
  const theme = useTheme();

  return (
    <SectionDividerPurposeOnly>
      <Section>
        <HeaderSectionWrapper>
          <GridSection>
            <HeaderWrapper>
              <HeaderGreeter>
                Hello, I'm <SpecialTextGreeter>Oskar Tracz</SpecialTextGreeter>
              </HeaderGreeter>
              <HeaderContent>
                {title}{" "}
                <SpecialText>
                  <CurlyBraces>{"{ "}</CurlyBraces>
                  <TypingLine content={["Developer"]} />
                  <CurlyBraces>{" }"}</CurlyBraces>
                </SpecialText>
              </HeaderContent>
              <SubHeaderContent>{subtitle}</SubHeaderContent>
              <Paragraph>
                Welcome to my portfolio! My pursuit is to connect aesthetics
                with functionality while creating web applications.
              </Paragraph>
              <ButtonWrapper>
                <Button to="/contact">
                  <span>Contact me</span>
                </Button>
              </ButtonWrapper>
            </HeaderWrapper>
            <ImageWrapper>
              <Image
                src={isDarkTheme ? avatarDark : avatarLight}
                alt="Oskar Tracz"
              />
            </ImageWrapper>
          </GridSection>
        </HeaderSectionWrapper>
      </Section>
      <ShapeDivider fill={theme.colors.section.background} />
    </SectionDividerPurposeOnly>
  );
};

export default Header;
