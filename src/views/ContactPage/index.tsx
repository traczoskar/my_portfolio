import { MainContainer } from "../../common/Main/styled";
import { ABOUT } from "../AboutMe/aboutMeData";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  ContactLink,
  ContactLinks,
  ContactPageWrapper,
  ContactTitle,
  SpecialText,
} from "./styled";
import { ReactComponent as GitHubIcon } from "../../assets/icons/contact/github.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/contact/linkedin.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/contact/mail.svg";
import { ReactComponent as CopyIcon } from "../../assets/icons/contact/copy.svg";
import NavSection from "../../common/NavSection";
import Footer from "../../common/Footer";
import { useEffect, useState } from "react";
import ModalMessage from "./ModalMessage";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { selectIsLanguageEN } from "../../slices/languageSlice";

const ContactPage = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const theme = useTheme();
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2500);
    }
  }, [isCopied]);

  return (
    <>
      <MainContainer backgroundColor={theme.colors.contactPage.background}>
        <NavSection />
        <ContactPageWrapper>
          <ContactTitle>
            {isLanguageEN ? (
              <>
                Drop me <SpecialText>a line</SpecialText>, I'm just{" "}
                <SpecialText>a click</SpecialText> away!
              </>
            ) : (
              <>
                Zostaw mi <SpecialText>wiadomość</SpecialText>, to tylko kilka{" "}
                <SpecialText>kliknięć!</SpecialText>
              </>
            )}
          </ContactTitle>
          <ContactLinks>
            <ContactLink
              href={`mailto:${ABOUT.email}`}
              title={
                isLanguageEN
                  ? "E-mail to contact@traczoskar.dev"
                  : "E-mail do contact@traczoskar.dev"
              }
            >
              <MailIcon width={30} height={30} />
              E-mail
            </ContactLink>
            <ContactLink
              href={ABOUT.socials[0].url}
              target="_blank"
              title={isLanguageEN ? "GitHub profile" : "Profil na GitHubie"}
            >
              <GitHubIcon width={30} height={30} />
              GitHub
            </ContactLink>
            <ContactLink
              href={ABOUT.socials[1].url}
              target="_blank"
              title={isLanguageEN ? "LinkedIn profile" : "Profil na LinkedIn"}
            >
              <LinkedInIcon width={30} height={30} />
              LinkedIn
            </ContactLink>
            <CopyToClipboard
              text={ABOUT.email}
              onCopy={() => setIsCopied(true)}
            >
              <ContactLink
                title={
                  isLanguageEN ? "Copy e-mail address" : "Skopiuj adres e-mail"
                }
              >
                <CopyIcon width={30} height={30} />
                contact@traczoskar.dev
              </ContactLink>
            </CopyToClipboard>
          </ContactLinks>
          <ModalMessage isCopied={isCopied} />
        </ContactPageWrapper>
      </MainContainer>
      <Footer backgroundColor={theme.colors.contactPage.footer} />
    </>
  );
};

export default ContactPage;
