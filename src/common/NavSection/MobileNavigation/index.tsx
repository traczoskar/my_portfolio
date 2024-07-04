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
import { motion } from "framer-motion";

interface MobileNavigationProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClick,
}) => {
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);

  const navVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.25,
      },
    }),
  };

  const iconVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.5 } },
  };

  return (
    <>
      <MobileNavLinks isOpen={isOpen}>
        <motion.div
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={iconVariants}
        >
          <CloseButton onClick={onClick}>
            <CloseIcon width={25} height={25} />
          </CloseButton>
        </motion.div>
        <MobileNavLogo onClick={onClick} to="/">
          <motion.div
            custom={0}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={navVariants}
          >
            <PageLogo height={45} width={45} />
          </motion.div>
        </MobileNavLogo>
        <motion.div
          custom={1}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={navVariants}
        >
          <MobileRouterLink
            title="About Me"
            aria-label="Link to About Me page"
            to="/about"
            onClick={onClick}
          >
            {isLanguageEN ? "About Me" : "O mnie"}
          </MobileRouterLink>
        </motion.div>
        <motion.div
          custom={2}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={navVariants}
        >
          <MobileHashLink
            smooth
            to="/#projects"
            aria-label="Link to Projects section"
            title="Projects"
            onClick={onClick}
          >
            {isLanguageEN ? "Projects" : "Projekty"}
          </MobileHashLink>
        </motion.div>
        <motion.div
          custom={3}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={navVariants}
        >
          <MobileRouterLink
            title="Contact"
            aria-label="Link to Contact page"
            to="/contact"
            onClick={onClick}
          >
            {isLanguageEN ? "Contact" : "Kontakt"}
          </MobileRouterLink>
        </motion.div>
        <motion.div
          custom={4}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={navVariants}
        >
          <LanguageSwitch />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={iconVariants}
        >
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
        </motion.div>
      </MobileNavLinks>
    </>
  );
};

export default MobileNavigation;
