import PageLogo from "../PageLogo";
import {
  FooterContent,
  FooterWrapper,
  HeaderLink,
  LetsChat,
  SocialLink,
  Socials,
} from "./styled";
import { ReactComponent as ChatIcon } from "../../assets/icons/chat.svg";
import { ReactComponent as GitHubIcon } from "../../assets/icons/git_icon.svg";
import { ReactComponent as LinkedIcon } from "../../assets/icons/linkedIn_icon.svg";
import { ABOUT } from "../../views/AboutMe/aboutMeData";
import WavesSVG from "./WavesSVG";
import { useTheme } from "styled-components";

interface FooterProps {
  backgroundColor: string;
}

const Footer: React.FC<FooterProps> = ({ backgroundColor }) => {
  const theme = useTheme();

  return (
    <FooterWrapper backgroundColor={backgroundColor}>
      <FooterContent>
        <HeaderLink title="Home Page" smooth to="/#header">
          <PageLogo width={25} height={25} />
          traczoskar.dev
        </HeaderLink>
        <Socials>
          {ABOUT.socials.map((social) => (
            <SocialLink
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
              title={social.name}
            >
              {social.name === "GitHub" ? (
                <GitHubIcon width={30} height={30} />
              ) : social.name === "LinkedIn" ? (
                <LinkedIcon width={30} height={30} />
              ) : null}
            </SocialLink>
          ))}
        </Socials>
        <LetsChat to="/contact" title="Contact Page">
          Let's chat!
          <ChatIcon width={23} height={23} />
        </LetsChat>
      </FooterContent>
      {/* <StyledWavesSVG /> */}
      <WavesSVG fill={theme.colors.footer.wavesSVG} />
    </FooterWrapper>
  );
};

export default Footer;
