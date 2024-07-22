import Logo from "./Logo";
import NavLinks from "./NavLinks";

function FullscreenNav() {
  return (
    <div className="FullscreenNav">
      <Logo />
      <div className="NavWrapperFullscreen">
        <NavLinks />
      </div>
    </div>
  );
}

export default FullscreenNav;
