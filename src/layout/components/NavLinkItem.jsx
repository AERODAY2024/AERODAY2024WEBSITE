import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

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

export { NavLinkItem };
