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

const ContactPage = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2500);
    }
  }, [isCopied]);

  return (
    <>
      <MainContainer backgroundColor="white">
        <NavSection />
        <ContactPageWrapper>
          <ContactTitle>
            Drop me <SpecialText>a line</SpecialText>, I'm just{" "}
            <SpecialText>a click</SpecialText> away!
          </ContactTitle>
          <ContactLinks>
            <ContactLink
              href={`mailto:${ABOUT.email}`}
              title="E-mail to contact@traczoskar.dev"
            >
              <MailIcon width={30} height={30} />
              E-mail
            </ContactLink>
            <ContactLink
              href={ABOUT.socials[0].url}
              target="_blank"
              title="GitHub profile"
            >
              <GitHubIcon width={30} height={30} />
              GitHub
            </ContactLink>
            <ContactLink
              href={ABOUT.socials[1].url}
              target="_blank"
              title="LinkedIn profile"
            >
              <LinkedInIcon width={30} height={30} />
              LinkedIn
            </ContactLink>
            <CopyToClipboard
              text={ABOUT.email}
              onCopy={() => setIsCopied(true)}
            >
              <ContactLink title="Copy e-mail address">
                <CopyIcon width={30} height={30} />
                contact@traczoskar.dev
              </ContactLink>
            </CopyToClipboard>
          </ContactLinks>
          <ModalMessage isCopied={isCopied} />
        </ContactPageWrapper>
      </MainContainer>
      <Footer backgroundColor="white" />
    </>
  );
};

export default ContactPage;
