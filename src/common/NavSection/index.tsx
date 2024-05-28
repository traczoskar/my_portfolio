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

const NavSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile: boolean = useMediaQuery({
    query: `(max-width: 767px)`,
  });
  const isTabletVertical: boolean = useMediaQuery({
    query: `(max-width: 991px)`,
  });

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
            <PageLogo height={isMobile ? 28 : 35} width={isMobile ? 28 : 35} />
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
              <GitHubIcon
                width={isTabletVertical ? 25 : 30}
                height={isTabletVertical ? 25 : 30}
              />
            </NavIconLink>
            <NavIconLink
              href="https://www.linkedin.com/in/traczoskar/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Link to LinkedIn profile"
              title="Link to LinkedIn profile"
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
