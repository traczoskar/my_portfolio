import { MainContainer } from "../../common/Main/styled";
import { ABOUT } from "../AboutMe/aboutMeData";
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
import NavSection from "../../common/NavSection";
import Footer from "../../common/Footer";

const ContactPage = () => {
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
            <ContactLink href={`mailto:${ABOUT.email}`}>
              <MailIcon width={30} height={30} />
              E-mail
            </ContactLink>
            <ContactLink href={ABOUT.socials[0].url} target="_blank">
              <GitHubIcon width={30} height={30} />
              GitHub
            </ContactLink>
            <ContactLink href={ABOUT.socials[1].url} target="_blank">
              <LinkedInIcon width={30} height={30} />
              LinkedIn
            </ContactLink>
            <ContactLink>contact@traczoskar.dev</ContactLink>
          </ContactLinks>
        </ContactPageWrapper>
      </MainContainer>
      <Footer backgroundColor="white" />
    </>
  );
};

export default ContactPage;
