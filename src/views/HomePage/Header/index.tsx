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
import { selectIsLanguageEN } from "../../../slices/languageSlice";
interface HeaderProps {
  title: string;
  subtitle: string;
  name: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  name,
}: HeaderProps) => {
  const isDarkTheme: boolean = useSelector(selectIsDarkTheme);
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
  const theme = useTheme();

  return (
    <SectionDividerPurposeOnly>
      <Section>
        <HeaderSectionWrapper>
          <GridSection>
            <HeaderWrapper>
              <HeaderGreeter>
                {isLanguageEN ? "Hello, I'm " : "Cześć! Nazywam się "}
                <SpecialTextGreeter>{name}</SpecialTextGreeter>
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
                {isLanguageEN
                  ? "Welcome to my portfolio! My pursuit is to connect aesthetics with functionality while creating web applications."
                  : "Witaj, oto moje portfolio! Moim celem jest połączenie estetyki z funkcjonalnością podczas tworzenia aplikacji internetowych."}
              </Paragraph>
              <ButtonWrapper>
                <Button to="/contact">
                  <span>{isLanguageEN ? "Contact me" : "Kontakt"}</span>
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
