import { NavLink } from "react-router-dom";

function NavLinks() {
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
      >
        Contact
      </NavLink>
    </>
  );
}

export default NavLinks;
