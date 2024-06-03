import React, { useEffect, useState } from "react";
import { ThemeSwitch } from "../ThemeSwitch";
import { ReactComponent as GitHubIcon } from "../../assets/icons/git_icon.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedIn_icon.svg";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import {
  NavBar,
  NavHashLink,
  NavHeader,
  NavHeaderLink,
  NavIconLink,
  NavLinks,
  NavWrapper,
  BurgerMenu,
  BurgerIcon,
  NavRouterLink,
} from "./styled";
import PageLogo from "../PageLogo";
import MobileNavigation from "./MobileNavigation";
import LanguageSwitch from "../LanguageSwitch";
import { selectIsLanguageEN } from "../../slices/languageSlice";
import { useSelector } from "react-redux";

const NavSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile: boolean = useMediaQuery({
    query: `(max-width: 767px)`,
  });
  const isTabletVertical: boolean = useMediaQuery({
    query: `(max-width: 991px)`,
  });
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.25,
        duration: 0.5,
      },
    }),
  };

  const logoVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.0,
      },
    },
  };

  return (
    <NavBar id="header">
      <NavWrapper>
        <NavHeaderLink to="/">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={logoVariants}
          >
            <NavHeader>
              <PageLogo
                height={isTabletVertical ? 32 : isMobile ? 28 : 35}
                width={isTabletVertical ? 32 : isMobile ? 28 : 35}
              />
              traczoskar.dev
            </NavHeader>
          </motion.div>
        </NavHeaderLink>
        {isMobile ? (
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={logoVariants}
            >
              <BurgerMenu onClick={toggleMenu}>
                <BurgerIcon />
              </BurgerMenu>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: isOpen ? "block" : "none" }}
            >
              <MobileNavigation isOpen={isOpen} onClick={toggleMenu} />
            </motion.div>
          </div>
        ) : (
          <NavLinks>
            <NavRouterLink
              title={isLanguageEN ? "About Me" : "O mnie"}
              aria-label={
                isLanguageEN ? "Link to About Me page" : "Link do strony O mnie"
              }
              to="/about"
            >
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
                {isLanguageEN ? "About Me" : "O mnie"}
              </motion.div>
            </NavRouterLink>
            <NavHashLink
              smooth
              to="/#projects"
              aria-label={
                isLanguageEN
                  ? "Link to Projects section"
                  : "Link do sekcji Projekty"
              }
              title={isLanguageEN ? "Projects" : "Projekty"}
            >
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
                {isLanguageEN ? "Projects" : "Projekty"}
              </motion.div>
            </NavHashLink>
            <NavRouterLink
              title={isLanguageEN ? "Contact" : "Kontakt"}
              aria-label={
                isLanguageEN ? "Link to Contact page" : "Link do strony Kontakt"
              }
              to="/contact"
            >
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
                {isLanguageEN ? "Contact" : "Kontakt"}
              </motion.div>
            </NavRouterLink>
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <LanguageSwitch />
            </motion.div>
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <NavIconLink
                href="https://github.com/traczoskar"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={
                  isLanguageEN
                    ? "Link to GitHub profile"
                    : "Link do profilu GitHub"
                }
                title={
                  isLanguageEN
                    ? "Link to GitHub profile"
                    : "Link do profilu GitHub"
                }
              >
                <GitHubIcon
                  width={isTabletVertical ? 25 : 30}
                  height={isTabletVertical ? 25 : 30}
                />
              </NavIconLink>
            </motion.div>
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <NavIconLink
                href="https://www.linkedin.com/in/traczoskar/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={
                  isLanguageEN
                    ? "Link to LinkedIn profile"
                    : "Link do profilu LinkedIn"
                }
                title={
                  isLanguageEN
                    ? "Link to LinkedIn profile"
                    : "Link do profilu LinkedIn"
                }
              >
                <LinkedInIcon
                  width={isTabletVertical ? 25 : 30}
                  height={isTabletVertical ? 25 : 30}
                />
              </NavIconLink>
            </motion.div>
            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <ThemeSwitch />
            </motion.div>
          </NavLinks>
        )}
      </NavWrapper>
    </NavBar>
  );
};

export default NavSection;
