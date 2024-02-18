import "../styles/components/navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import drone from "../assets/drone.png";

const NavBar = () => {
  return (
    <nav className="navbar main-nav border-less fixed-top navbar-expand-lg p-0">
      <div className="container-fluid p-0">
        <NavLink to={"/"} className="navbar-brand">
          <img
            src={logo}
            alt="logo"
            // width={100}
            // height={70}
          />
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
            <li className="nav-item dropdown active">
              <NavLink to={"/"} className="nav-link" data-toggle="dropdown">
                Home
                <span>/</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/about-us"}
                className="nav-link"
                href="speakers.html"
              >
                About us
                <span>/</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/contact"}
                className="nav-link"
                href="speakers.html"
              >
                Contact us
                <span>/</span>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown">
                Axes <FontAwesomeIcon icon={faAngleDown} /> <span>/</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    to={"/axes/axe1"}
                    className="dropdown-item"
                    href="about-us.html"
                  >
                    axe1
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/axes/axe2"}
                    className="dropdown-item"
                    href="about-us.html"
                  >
                    axe2
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/axes/axe3"}
                    className="dropdown-item"
                    href="about-us.html"
                  >
                    axe3
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown">
                Challenges <FontAwesomeIcon icon={faAngleDown} /> <span>/</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    to={"/challenges/challenge1"}
                    className="dropdown-item"
                    href="about-us.html"
                  >
                    challenge1
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={"/challenges/challenge2"}
                    className="dropdown-item"
                    href="about-us.html"
                  >
                    challenge2
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={"/challenges/challenge3"}
                    className="dropdown-item"
                    href="about-us.html"
                  >
                    challenge3
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <a href="contact.html" className="ticket">
            <img src={drone} alt="drone" width={50} height={50} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
