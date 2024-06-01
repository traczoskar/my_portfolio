import LanguageSwitch from "../../LanguageSwitch";
import { ThemeSwitch } from "../../ThemeSwitch";
import {
  CloseButton,
  GitHubIcon,
  LinkedInIcon,
  MobileHashLink,
  MobileIconLink,
  MobileNavLinks,
  MobileRouterLink,
} from "./styled";

interface MobileNavigationProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <>
      <MobileNavLinks isOpen={isOpen}>
        <CloseButton onClick={onClick}>X</CloseButton>
        <MobileRouterLink
          title="About Me"
          aria-label="Link to About Me page"
          to="/about"
          onClick={onClick}
        >
          About Me
        </MobileRouterLink>
        <MobileHashLink
          smooth
          to="/#projects"
          aria-label="Link to Projects section"
          title="Projects"
          onClick={onClick}
        >
          Projects
        </MobileHashLink>
        <MobileRouterLink
          title="Contact"
          aria-label="Link to Contact page"
          to="/contact"
          onClick={onClick}
        >
          Contact
        </MobileRouterLink>
        <LanguageSwitch onClick={onClick} />
        <MobileIconLink
          href="https://github.com/traczoskar"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Link to GitHub profile"
          title="Link to GitHub profile"
          onClick={onClick}
        >
          <GitHubIcon />
        </MobileIconLink>
        <MobileIconLink
          href="https://www.linkedin.com/in/traczoskar/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Link to LinkedIn profile"
          title="Link to LinkedIn profile"
          onClick={onClick}
        >
          <LinkedInIcon />
        </MobileIconLink>
        <ThemeSwitch width={40} height={40} />
      </MobileNavLinks>
    </>
  );
};

export default MobileNavigation;
