import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const NavLinkItem = ({
  navLink,
  index,
  dropdownIsOpen,
  onDropdownClick,
  dropdownRef,
}) => {
  const handleDropdownClick = () => {
    onDropdownClick(index);
  };

  if (navLink.sublinks) {
    const navId = "navbarDropdown" + index;
    return (
      <li className="navbar-dropdown">
        <NavLink
          className="dropdown-toggler"
          data-dropdown={navId}
          onClick={handleDropdownClick}
        >
          {navLink.title} <FontAwesomeIcon icon={faAngleDown} />
        </NavLink>
        <ul
          className={`dropdown ${dropdownIsOpen === index ? "show" : ""}`}
          id={navId}
          ref={dropdownRef}
        >
          {navLink.sublinks.map((sublink, i) => {
            return (
              <li key={i}>
                <NavLink to={sublink.url}>{sublink.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </li>
    );
  } else
    return (
      <li className="nav-item">
        <NavLink to={navLink.url} className="nav-link">
          {navLink.title}
        </NavLink>
      </li>
    );
};

export { NavLinkItem };
