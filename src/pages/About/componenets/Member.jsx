import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Member = ({ member }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="trainer-item">
        <div className="ti-pic">
          <img src={member.image} alt="" />
          <div className="ti-links">
            <NavLink to={member.facebook}>
              <i>
                <FontAwesomeIcon icon={faFacebook} />
              </i>
            </NavLink>
            <NavLink to={member.instagram}>
              <i>
                <FontAwesomeIcon icon={faSquareInstagram} />
              </i>
            </NavLink>
            <NavLink to={member.linkedin}>
              <i>
                <FontAwesomeIcon icon={faLinkedin} />
              </i>
            </NavLink>
          </div>
          <div className="trainer-text">
            <h5>
              {member.name} <span>- {member.role}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Member };
