import "../assets/styles/components/navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { aeroday, chronoWings } from "../assets/images";
import { navlinks } from "../constants";

// eslint-disable-next-line react/prop-types
const NavLinkItem = ({ navLink, index }) => {
  // eslint-disable-next-line react/prop-types
  if (navLink.sublinks) {
    // eslint-disable-next-line react/prop-types
    const navId = "navbarDropdown" + index;
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link "
          data-toggle="dropdown"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${navId}`}
          aria-controls={navId}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* eslint-disable-next-line react/prop-types */}
          {navLink.title} <FontAwesomeIcon icon={faAngleDown} />
          <span>/</span>
        </a>
        <ul className="dropdown-menu" id={navId}>
          {/* eslint-disable-next-line react/prop-types */}
          {navLink.sublinks.map((subLink, index) => (
            <li key={index}>
              <NavLink
                to={subLink.url}
                className="dropdown-item"
                href="about-us.html"
              >
                {subLink.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
    );
  } else
    return (
      <li className="nav-item">
        {/* eslint-disable-next-line react/prop-types */}
        <NavLink to={navLink.url} className="nav-link">
          {/* eslint-disable-next-line react/prop-types */}
          {navLink.title}
          <span>/</span>
        </NavLink>
      </li>
    );
};
const NavBar = () => {
  return (
    <nav className="navbar main-nav border-less fixed-top navbar-expand-lg p-0">
      <div className="container-fluid p-0">
        <NavLink to={"/"} className="navbar-brand">
          <img src={aeroday} alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            {navlinks.map((navlink, index) => (
              <NavLinkItem navLink={navlink} key={navlink.url} index={index} />
            ))}
            <li className="nav-item">
              {/* eslint-disable-next-line react/prop-types */}
              <a href="https://privacy.aeroday.tn" className="nav-link">
                Politique
              </a>
            </li>
          </ul>
          <a href="contact.html" className="ticket">
            <img src={chronoWings} alt="ticket" className="chronoWings" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
