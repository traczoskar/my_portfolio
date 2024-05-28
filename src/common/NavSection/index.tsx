import React, { useState } from "react";
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
  MobileNavLinks,
  NavRouterLink,
} from "./styled";
import PageLogo from "../PageLogo";
import { useTheme } from "styled-components";

const NavSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const theme = useTheme();
  const isTabletOrMobile: boolean = useMediaQuery({
    query: `(max-width: 767px)`,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBar id="header">
      <NavWrapper>
        <NavHeaderLink to="/">
          <NavHeader>
            <PageLogo
              height={isTabletOrMobile ? 28 : 35}
              width={isTabletOrMobile ? 28 : 35}
            />
            traczoskar.dev
          </NavHeader>
        </NavHeaderLink>
        {isTabletOrMobile ? (
          <div>
            <BurgerMenu onClick={toggleMenu}>
              <BurgerIcon />
            </BurgerMenu>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isOpen ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
            >
              <MobileNavLinks isOpen={isOpen}>
                <NavRouterLink
                  title="About Me"
                  aria-label="Link to About Me page"
                  to="/about"
                  onClick={toggleMenu}
                >
                  About Me
                </NavRouterLink>
                <NavHashLink
                  smooth
                  to="/#projects"
                  aria-label="Link to Projects section"
                  title="Projects"
                  onClick={toggleMenu}
                >
                  Projects
                </NavHashLink>
                <NavRouterLink
                  title="Contact"
                  aria-label="Link to Contact page"
                  to="/contact"
                  onClick={toggleMenu}
                >
                  Contact
                </NavRouterLink>
                <NavIconLink
                  href="https://github.com/traczoskar"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Link to GitHub profile"
                  title="Link to GitHub profile"
                  onClick={toggleMenu}
                >
                  <GitHubIcon width={30} height={30} />
                </NavIconLink>
                <NavIconLink
                  href="https://www.linkedin.com/in/traczoskar/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Link to LinkedIn profile"
                  title="Link to LinkedIn profile"
                  onClick={toggleMenu}
                >
                  <LinkedInIcon width={30} height={30} />
                </NavIconLink>
                <ThemeSwitch />
              </MobileNavLinks>
            </motion.div>
          </div>
        ) : (
          <NavLinks>
            <NavRouterLink
              title="About Me"
              aria-label="Link to About Me page"
              to="/about"
            >
              About Me
            </NavRouterLink>
            <NavHashLink
              smooth
              to="/#projects"
              aria-label="Link to Projects section"
              title="Projects"
            >
              Projects
            </NavHashLink>
            <NavRouterLink
              title="Contact"
              aria-label="Link to Contact page"
              to="/contact"
            >
              Contact
            </NavRouterLink>
            <NavIconLink
              href="https://github.com/traczoskar"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Link to GitHub profile"
              title="Link to GitHub profile"
            >
              <GitHubIcon width={30} height={30} />
            </NavIconLink>
            <NavIconLink
              href="https://www.linkedin.com/in/traczoskar/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Link to LinkedIn profile"
              title="Link to LinkedIn profile"
            >
              <LinkedInIcon width={30} height={30} />
            </NavIconLink>
            <ThemeSwitch />
          </NavLinks>
        )}
      </NavWrapper>
    </NavBar>
  );
};

export default NavSection;
