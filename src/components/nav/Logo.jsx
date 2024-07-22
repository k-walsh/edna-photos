import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink
      to="/"
      className={({ isPending, isTransitioning }) =>
        [
          isPending ? "NavPending" : "",
          // isActive ? "NavActive" : "", // don't want underline for this one
          isTransitioning ? "NavTransitioning" : "",
        ].join(" ") + "NavLogo"
      }
    >
      Edna
    </NavLink>
  );
}

export default Logo;
