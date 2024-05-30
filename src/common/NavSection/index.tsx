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

  return (
    <NavBar id="header">
      <NavWrapper>
        <NavHeaderLink to="/">
          <NavHeader>
            <PageLogo
              height={isTabletVertical ? 32 : isMobile ? 28 : 35}
              width={isTabletVertical ? 32 : isMobile ? 28 : 35}
            />
            traczoskar.dev
          </NavHeader>
        </NavHeaderLink>
        {isMobile ? (
          <div>
            <BurgerMenu onClick={toggleMenu}>
              <BurgerIcon />
            </BurgerMenu>
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
              {isLanguageEN ? "About Me" : "O mnie"}
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
              {isLanguageEN ? "Projects" : "Projekty"}
            </NavHashLink>
            <NavRouterLink
              title={isLanguageEN ? "Contact" : "Kontakt"}
              aria-label={
                isLanguageEN ? "Link to Contact page" : "Link do strony Kontakt"
              }
              to="/contact"
            >
              {isLanguageEN ? "Contact" : "Kontakt"}
            </NavRouterLink>
            <LanguageSwitch />
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
            <ThemeSwitch />
          </NavLinks>
        )}
      </NavWrapper>
    </NavBar>
  );
};

export default NavSection;
