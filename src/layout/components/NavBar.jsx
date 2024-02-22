import "../../assets/styles/components/navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { aeroday, chronoWings } from "../../assets/images";
import { navlinks } from "../../constants";
import { NavLinkItem } from "./";

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
              <NavLink
                to="https://privacy.aeroday.tn"
                target="_blank"
                className="nav-link"
              >
                Politique
              </NavLink>
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

export { NavBar };
