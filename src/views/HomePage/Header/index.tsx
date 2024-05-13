import { GridSection } from "../../../common/GridSection/styled";
import { Button } from "./Button/styled";
import {
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
import { ReactComponent as ShapeDivider } from "./ShapeDivider/shape.svg";
import "./ShapeDivider/style.css";
import { TypingLine } from "./TypingLine";
import photo from "../../../assets/abstractAvatar.png";
interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }: HeaderProps) => {
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
              <Button to="/contact">Contact me</Button>
            </HeaderWrapper>
            <ImageWrapper>
              <Image src={photo} alt="Oskar Tracz" />
            </ImageWrapper>
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
