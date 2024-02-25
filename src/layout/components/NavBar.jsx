import "../../assets/styles/components/navigation.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { navlinks } from "../../constants";
import { NavLinkItem } from "./NavLinkItem";
import { logoWithoutBackground } from "../../assets/images";

const NavBar = () => {
  const dropdownRef = useRef(null);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(0);

  const navbarMenuToggler = useRef(null);
  const [navbarMenuIsOpen, setNavbarMenuIsOpen] = useState(false);

  useEffect(() => {
    const handleBodyClick = (event) => {
      if (
        dropdownIsOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownIsOpen(0);
      }
    };

    window.addEventListener("mouseup", handleBodyClick);

    return () => {
      window.removeEventListener("mouseup", handleBodyClick);
    };
  }, [dropdownIsOpen]);

  const handleDropdownClick = (index) => {
    console.log("dropdownIsOpen: ", dropdownIsOpen);
    console.log("index: ", index);
    setDropdownIsOpen((dropdownIsOpen) =>
      dropdownIsOpen === index ? 0 : index
    );
  };

  // Handle opening/closing links on small screens
  const handleNavbarMenuToggle = () => {
    setNavbarMenuIsOpen((navbarMenuIsOpen) => !navbarMenuIsOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggler"
            data-toggle="open-navbar1"
            ref={navbarMenuToggler}
            onClick={handleNavbarMenuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <NavLink to={"/"} className="navbar-brand">
            <img
              src={logoWithoutBackground}
              alt="logo"
              style={{ maxHeight: 50 }}
            />
          </NavLink>
        </div>

        <div
          className={`navbar-menu ${navbarMenuIsOpen ? "active" : ""}`}
          id="open-navbar1"
        >
          <ul className="navbar-nav">
            {navlinks.map((navlink, i) => {
              return (
                <NavLinkItem
                  key={i}
                  navLink={navlink}
                  index={i}
                  dropdownIsOpen={dropdownIsOpen}
                  onDropdownClick={handleDropdownClick}
                  dropdownRef={dropdownRef}
                />
              );
            })}
            <li className="nav-item">
              <NavLink
                to={"https://privacy.aeroday.tn"}
                className="nav-link"
                target="_blank"
              >
                Privacy
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
