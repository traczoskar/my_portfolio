import PageLogo from "../PageLogo";
import {
  FooterContent,
  FooterWrapper,
  HeaderLink,
  LetsChat,
  MobileLinksWrapper,
  SocialLink,
  Socials,
} from "./styled";
import { ReactComponent as ChatIcon } from "../../assets/icons/chat.svg";
import { ReactComponent as GitHubIcon } from "../../assets/icons/git_icon.svg";
import { ReactComponent as LinkedIcon } from "../../assets/icons/linkedIn_icon.svg";
import { ABOUT } from "../../views/AboutMe/aboutMeData";
import WavesSVG from "./WavesSVG";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { selectIsLanguageEN } from "../../slices/languageSlice";
import { useMediaQuery } from "react-responsive";

interface FooterProps {
  $backgroundColor: string;
}

const Footer: React.FC<FooterProps> = ({ $backgroundColor }) => {
  const isLanguageEN = useSelector(selectIsLanguageEN);
  const isMobile: boolean = useMediaQuery({
    query: `(max-width: 767px)`,
  });
  const theme = useTheme();

  return (
    <FooterWrapper $backgroundColor={$backgroundColor}>
      <FooterContent>
        {isMobile ? (
          <MobileLinksWrapper>
            <Socials>
              {ABOUT.socials.map((social, index) => (
                <SocialLink
                  key={index}
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
            <LetsChat
              to="/contact"
              title={isLanguageEN ? "Contact Page" : "Kontakt"}
            >
              {isLanguageEN ? "Let's chat" : "Porozmawiajmy!"}
              <ChatIcon width={19} height={19} />
            </LetsChat>
          </MobileLinksWrapper>
        ) : (
          <>
            <HeaderLink
              title={isLanguageEN ? "Home Page" : "Strona główna"}
              smooth
              to="/#header"
            >
              <PageLogo width={25} height={25} />
              traczoskar.dev
            </HeaderLink>
            <Socials>
              {ABOUT.socials.map((social, index) => (
                <SocialLink
                  key={index}
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
            <LetsChat
              to="/contact"
              title={isLanguageEN ? "Contact Page" : "Kontakt"}
            >
              {isLanguageEN ? "Let's chat" : "Porozmawiajmy!"}
              <ChatIcon width={23} height={23} />
            </LetsChat>
          </>
        )}
      </FooterContent>
      <WavesSVG
        fill={theme.colors.footer.wavesSVG}
        height={isMobile ? 175 : undefined}
      />
    </FooterWrapper>
  );
};

export default Footer;
