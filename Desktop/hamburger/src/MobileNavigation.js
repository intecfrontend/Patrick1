import NavLinks from "./NavLinks";
import "./Nav.css";
import { HamburgerIcon } from "react-hamburger-icon";
import Hamburger from "hamburger-react";

import { useState } from "react";
const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className="MobileNavigation">
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}

      <div className="Hamburger"className={open ? "white" : "red"} onClick={() => setOpen(!open)}>
        <Hamburger />
      </div>
    </nav>
  );
};
export default MobileNavigation;
