import PageLogo from "../PageLogo";
import {
  FooterContent,
  FooterWrapper,
  HeaderLink,
  LetsChat,
  StyledWavesSVG,
} from "./styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <HeaderLink smooth to="/#header">
          <PageLogo width={25} height={25} />
          traczoskar.dev
        </HeaderLink>
        <LetsChat to="/contact" title="Contact page">
          Let's chat!
        </LetsChat>
      </FooterContent>
      <StyledWavesSVG />
    </FooterWrapper>
  );
};

export default Footer;
