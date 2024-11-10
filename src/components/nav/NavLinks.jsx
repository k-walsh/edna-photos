import { NavLink } from "react-router-dom";

function NavLinks({ hamburgerOpen, setHamburgerOpen }) {
  return (
    <>
      <NavLink
        to="/about"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "NavPending" : "",
            isActive ? "NavActive" : "",
            isTransitioning ? "NavTransitioning" : "",
          ].join(" ") + "NavItem underlinelink"
        }
        onClick={() => {
          if (hamburgerOpen) setHamburgerOpen(false);
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "NavPending" : "",
            isActive ? "NavActive" : "",
            isTransitioning ? "NavTransitioning" : "",
          ].join(" ") + "NavItem underlinelink"
        }
        onClick={() => {
          if (hamburgerOpen) setHamburgerOpen(false);
        }}
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "NavPending" : "",
            isActive ? "NavActive" : "",
            isTransitioning ? "NavTransitioning" : "",
          ].join(" ") + "NavItem underlinelink"
        }
        onClick={() => {
          if (hamburgerOpen) setHamburgerOpen(false);
        }}
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "NavPending" : "",
            isActive ? "NavActive" : "",
            isTransitioning ? "NavTransitioning" : "",
          ].join(" ") + "NavItem underlinelink"
        }
        onClick={() => {
          if (hamburgerOpen) setHamburgerOpen(false);
        }}
      >
        Contact
      </NavLink>
    </>
  );
}

export default NavLinks;
