import LanguageSwitch from "../../LanguageSwitch";
import { ThemeSwitch } from "../../ThemeSwitch";
import {
  CloseButton,
  IconsWrapper,
  MobileHashLink,
  MobileIconLink,
  MobileNavLinks,
  MobileRouterLink,
} from "./styled";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";
import { ReactComponent as GitHubIcon } from "../../../assets/icons/git_icon.svg";
import { ReactComponent as LinkedInIcon } from "../../../assets/icons/linkedIn_icon.svg";

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
        <CloseButton onClick={onClick}>
          <CloseIcon width={35} height={35} />
        </CloseButton>
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
        <IconsWrapper>
          <MobileIconLink
            href="https://github.com/traczoskar"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Link to GitHub profile"
            title="Link to GitHub profile"
            onClick={onClick}
          >
            <GitHubIcon width={35} height={35} />
          </MobileIconLink>
          <MobileIconLink
            href="https://www.linkedin.com/in/traczoskar/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Link to LinkedIn profile"
            title="Link to LinkedIn profile"
            onClick={onClick}
          >
            <LinkedInIcon width={35} height={35} />
          </MobileIconLink>
          <ThemeSwitch width={35} height={35} padding={"0"} />
        </IconsWrapper>
      </MobileNavLinks>
    </>
  );
};

export default MobileNavigation;
