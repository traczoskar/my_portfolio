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
import { motion } from "framer-motion";
import { selectIsLanguageEN } from "../../slices/languageSlice";
import { useMediaQuery } from "react-responsive";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const theme = useTheme();
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
  const isMobile: boolean = useMediaQuery({
    query: `(max-width: 767px)`,
  });
  const isSmallMobile: boolean = useMediaQuery({
    query: `(max-width: 430px)`,
  });

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2500);
    }
  }, [isCopied]);

  const headerFadeVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.0,
        duration: 1.5,
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.5 + i * 0.1,
        duration: 0.5,
        opacity: {
          delay: 1.5 + i * 0.4,
          duration: 1.5,
        },
      },
    }),
  };

  return (
    <>
      <MainContainer $backgroundColor={theme.colors.contactPage.background}>
        <Helmet>
          <title>
            {isLanguageEN
              ? "traczoskar.dev - Contact"
              : "traczoskar.dev - Kontakt"}
          </title>
        </Helmet>
        <NavSection />
        <ContactPageWrapper>
          <ContactTitle
            initial="hidden"
            animate="visible"
            variants={headerFadeVariants}
          >
            {isLanguageEN ? (
              <>
                Drop me <SpecialText>a line</SpecialText>, I'm just&nbsp;
                <SpecialText>a&nbsp;click</SpecialText>&nbsp;away!
              </>
            ) : (
              <>
                Napisz <SpecialText>do mnie</SpecialText>, jestem tylko o{" "}
                <SpecialText>kliknięcie</SpecialText> stąd!
              </>
            )}
          </ContactTitle>
          <ContactLinks>
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              <ContactLink
                href={`mailto:${ABOUT.email}`}
                title={
                  isLanguageEN
                    ? "E-mail to contact@traczoskar.dev"
                    : "E-mail do contact@traczoskar.dev"
                }
              >
                <MailIcon
                  width={isSmallMobile ? 25 : isMobile ? 28 : 30}
                  height={isSmallMobile ? 25 : isMobile ? 28 : 30}
                />
                E-mail
              </ContactLink>
            </motion.div>
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              <ContactLink
                href={ABOUT.socials[0].url}
                target="_blank"
                title={isLanguageEN ? "GitHub profile" : "Profil na GitHubie"}
              >
                <GitHubIcon
                  width={isSmallMobile ? 25 : isMobile ? 28 : 30}
                  height={isSmallMobile ? 25 : isMobile ? 28 : 30}
                />
                GitHub
              </ContactLink>
            </motion.div>
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              <ContactLink
                href={ABOUT.socials[1].url}
                target="_blank"
                title={isLanguageEN ? "LinkedIn profile" : "Profil na LinkedIn"}
              >
                <LinkedInIcon
                  width={isSmallMobile ? 25 : isMobile ? 28 : 30}
                  height={isSmallMobile ? 25 : isMobile ? 28 : 30}
                />
                LinkedIn
              </ContactLink>
            </motion.div>
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              <CopyToClipboard
                text={ABOUT.email}
                onCopy={() => setIsCopied(true)}
              >
                <ContactLink
                  title={
                    isLanguageEN
                      ? "Copy e-mail address"
                      : "Skopiuj adres e-mail"
                  }
                >
                  <CopyIcon
                    width={isSmallMobile ? 25 : isMobile ? 28 : 30}
                    height={isSmallMobile ? 25 : isMobile ? 28 : 30}
                  />
                  contact@traczoskar.dev
                </ContactLink>
              </CopyToClipboard>
            </motion.div>
          </ContactLinks>
          <ModalMessage isCopied={isCopied} />
        </ContactPageWrapper>
      </MainContainer>
      <Footer $backgroundColor={theme.colors.contactPage.footer} />
    </>
  );
};

export default ContactPage;
