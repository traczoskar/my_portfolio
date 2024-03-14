import { NavBar, NavHeader, NavLink, NavLinks } from "./styled";

const NavSection = () => {
  return (
    <NavBar>
      <NavHeader>traczoskar.dev</NavHeader>
      <NavLinks>
        <NavLink>AboutMe</NavLink>
        <NavLink>GitHub</NavLink>
        <NavLink>LinkedIn</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
    </NavBar>
  );
};

export default NavSection;
