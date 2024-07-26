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
          ].join(" ") + "NavItem"
        }
        onClick={() => {
          if (hamburgerOpen) setHamburgerOpen(false);
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/work"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "NavPending" : "",
            isActive ? "NavActive" : "",
            isTransitioning ? "NavTransitioning" : "",
          ].join(" ") + "NavItem"
        }
        onClick={() => {
          if (hamburgerOpen) setHamburgerOpen(false);
        }}
      >
        Work
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "NavPending" : "",
            isActive ? "NavActive" : "",
            isTransitioning ? "NavTransitioning" : "",
          ].join(" ") + "NavItem"
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
