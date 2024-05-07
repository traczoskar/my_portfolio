import { ThemeSwitch } from "../ThemeSwitch";
import { selectIsDarkTheme } from "../../slices/themeSlice";
import Logo from "./SVGLogo";
import {
  LogoContainer,
  NavBar,
  NavHashLink,
  NavHeader,
  NavHeaderLink,
  NavLink,
  NavLinks,
  NavRouterLink,
  NavWrapper,
} from "./styled";
import { useSelector } from "react-redux";

const NavSection: React.FC = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <NavBar>
      <NavWrapper>
        <NavHeaderLink to="/">
          <NavHeader>
            <LogoContainer>
              <Logo
                stroke={isDarkTheme ? "#DDDDDD" : "#222222"}
                height={30}
                width={30}
              />
            </LogoContainer>
            traczoskar.dev
          </NavHeader>
        </NavHeaderLink>
        <NavLinks>
          <NavRouterLink
            title="About Me"
            aria-label="Link to About Me page"
            to="/about"
          >
            AboutMe
          </NavRouterLink>
          <NavHashLink
            smooth
            to="/#projects"
            aria-label="Link to Projects section"
            title="Projects"
          >
            Projects
          </NavHashLink>
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
