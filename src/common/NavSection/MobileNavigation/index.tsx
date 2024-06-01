import LanguageSwitch from "../../LanguageSwitch";
import { ThemeSwitch } from "../../ThemeSwitch";
import {
  CloseButton,
  IconsWrapper,
  MobileHashLink,
  MobileIconLink,
  MobileNavLinks,
  MobileNavLogo,
  MobileRouterLink,
} from "./styled";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";
import { ReactComponent as GitHubIcon } from "../../../assets/icons/git_icon.svg";
import { ReactComponent as LinkedInIcon } from "../../../assets/icons/linkedIn_icon.svg";
import { useSelector } from "react-redux";
import { selectIsLanguageEN } from "../../../slices/languageSlice";
import PageLogo from "../../PageLogo";

interface MobileNavigationProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClick,
}) => {
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
  return (
    <>
      <MobileNavLinks isOpen={isOpen}>
        <CloseButton onClick={onClick}>
          <CloseIcon width={25} height={25} />
        </CloseButton>
        <MobileNavLogo onClick={onClick} to="/">
          <PageLogo height={26} width={26} />
        </MobileNavLogo>
        <MobileRouterLink
          title="About Me"
          aria-label="Link to About Me page"
          to="/about"
          onClick={onClick}
        >
          {isLanguageEN ? "About Me" : "O mnie"}
        </MobileRouterLink>
        <MobileHashLink
          smooth
          to="/#projects"
          aria-label="Link to Projects section"
          title="Projects"
          onClick={onClick}
        >
          {isLanguageEN ? "Projects" : "Projekty"}
        </MobileHashLink>
        <MobileRouterLink
          title="Contact"
          aria-label="Link to Contact page"
          to="/contact"
          onClick={onClick}
        >
          {isLanguageEN ? "Contact" : "Kontakt"}
        </MobileRouterLink>
        <LanguageSwitch />
        <IconsWrapper>
          <MobileIconLink
            href="https://github.com/traczoskar"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Link to GitHub profile"
            title="Link to GitHub profile"
            onClick={onClick}
          >
            <GitHubIcon width={30} height={30} />
          </MobileIconLink>
          <MobileIconLink
            href="https://www.linkedin.com/in/traczoskar/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Link to LinkedIn profile"
            title="Link to LinkedIn profile"
            onClick={onClick}
          >
            <LinkedInIcon width={30} height={30} />
          </MobileIconLink>
          <ThemeSwitch width={30} height={30} padding={"0"} />
        </IconsWrapper>
      </MobileNavLinks>
    </>
  );
};

export default MobileNavigation;
