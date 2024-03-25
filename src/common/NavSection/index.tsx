import { ThemeSwitch } from "../ThemeSwitch";
import {
  NavBar,
  NavHeader,
  NavHeaderLink,
  NavLink,
  NavLinks,
  NavRouterLink,
  NavWrapper,
} from "./styled";
import { Link } from "react-router-dom";

const NavSection: React.FC = () => {
  return (
    <NavBar>
      <NavWrapper>
        <NavHeaderLink to="/">
          <NavHeader>traczoskar.dev</NavHeader>
        </NavHeaderLink>
        <NavLinks>
          <NavLink title="About Me" aria-label="Link to About Me page">
            AboutMe
          </NavLink>
          <NavLink
            href="https://github.com/traczoskar"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Link to GitHub profile"
            title="Link to GitHub profile"
          >
            GitHub
          </NavLink>
          <NavLink
            href="https://www.linkedin.com/in/traczoskar/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Link to LinkedIn profile"
            title="Link to LinkedIn profile"
          >
            LinkedIn
          </NavLink>
          <NavRouterLink
            title="Contact"
            aria-label="Link to Contact page"
            to="/contact"
          >
            Contact
          </NavRouterLink>
          <ThemeSwitch />
        </NavLinks>
      </NavWrapper>
    </NavBar>
  );
};

export default NavSection;
