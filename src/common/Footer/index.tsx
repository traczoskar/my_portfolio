import PageLogo from "../PageLogo";
import {
  FooterContent,
  FooterWrapper,
  HeaderLink,
  LetsChat,
  SocialLink,
  Socials,
  StyledWavesSVG,
} from "./styled";
import { ReactComponent as ChatIcon } from "../../assets/icons/chat.svg";
import { ReactComponent as GitHubIcon } from "../../assets/icons/git_icon.svg";
import { ReactComponent as LinkedIcon } from "../../assets/icons/linkedIn_icon.svg";
import { ABOUT } from "../../views/AboutMe/aboutMeData";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <HeaderLink smooth to="/#header">
          <PageLogo width={25} height={25} />
          traczoskar.dev
        </HeaderLink>
        <Socials>
          {ABOUT.socials.map((social) => (
            <SocialLink
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {social.name === "GitHub" ? (
                <GitHubIcon width={30} height={30} />
              ) : social.name === "LinkedIn" ? (
                <LinkedIcon width={30} height={30} />
              ) : null}
            </SocialLink>
          ))}
        </Socials>
        <LetsChat to="/contact" title="Contact page">
          Let's chat!
          <ChatIcon width={23} height={23} />
        </LetsChat>
      </FooterContent>
      <StyledWavesSVG />
    </FooterWrapper>
  );
};

export default Footer;
