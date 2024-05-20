import { ThemeSwitch } from "../ThemeSwitch";
import { ReactComponent as GitHubIcon } from "../../assets/icons/git_icon.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedIn_icon.svg";
import {
  NavBar,
  NavHashLink,
  NavHeader,
  NavHeaderLink,
  NavIconLink,
  NavLinks,
  NavRouterLink,
  NavWrapper,
} from "./styled";
import PageLogo from "../PageLogo";

const NavSection: React.FC = () => {
  return (
    <NavBar id="header">
      <NavWrapper>
        <NavHeaderLink to="/">
          <NavHeader>
            <PageLogo height={35} width={35} />
            traczoskar.dev
          </NavHeader>
        </NavHeaderLink>
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
      </NavWrapper>
    </NavBar>
  );
};

export default NavSection;
