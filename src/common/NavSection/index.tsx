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
          <NavLink>AboutMe</NavLink>
          <NavLink>GitHub</NavLink>
          <NavLink>LinkedIn</NavLink>
          <NavRouterLink title="Contact" to="/contact">
            Contact
          </NavRouterLink>
          <ThemeSwitch />
        </NavLinks>
      </NavWrapper>
    </NavBar>
  );
};

export default NavSection;
