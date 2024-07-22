import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { useState } from "react";

export default function HamNav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const burgerClass = hamburgerOpen ? "active" : "inactive";

  return (
    <>
      {hamburgerOpen ? (
        <div className="HamNav">
          <div className={`hamburger ${burgerClass}`} onClick={toggleHamburger}>
            <div className="burgerline burger1" />
            <div className="burgerline burger2" />
            <div className="burgerline burger3" />
          </div>
          <div className="HamNavContent">
            <Logo />
            <div className="NavWrapperHam">
              <NavLinks />
            </div>
          </div>
        </div>
      ) : (
        <div className="hamClosedWrapper">
          <Logo />
          <div className={`hamburger ${burgerClass}`} onClick={toggleHamburger}>
            <div className="burgerline burger1" />
            <div className="burgerline burger2" />
            <div className="burgerline burger3" />
          </div>
        </div>
      )}
    </>
  );
}
