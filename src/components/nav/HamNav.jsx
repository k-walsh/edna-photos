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
      <div className={hamburgerOpen ? "HamNav" : "hamClosedWrapper"}>
        {!hamburgerOpen && <Logo />}
        <div className={`hamburger ${burgerClass}`} onClick={toggleHamburger}>
          <div className="burgerline burger1" />
          <div className="burgerline burger2" />
          <div className="burgerline burger3" />
        </div>
        {hamburgerOpen && (
          <div className="HamNavContent">
            <Logo />
            <div className="NavWrapperHam">
              <NavLinks
                hamburgerOpen={hamburgerOpen}
                setHamburgerOpen={setHamburgerOpen}
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        html,
        body {
          overflow: ${hamburgerOpen ? "hidden" : "visible"};
        }
      `}</style>
    </>
  );
}
