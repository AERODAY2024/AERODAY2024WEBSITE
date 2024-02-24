import "../../assets/styles/components/social-media.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
const SocialMedia = () => {
  return (
    <div className="floating-container">
      <div className="floating-button">+</div>
      <div className="element-container">
        <a
          href="https://www.facebook.com/TunAeroday/"
          className="float-element"
          target="_blank"
        >
          <span className=" tooltip-left">
            <FontAwesomeIcon icon={faFacebook} />
          </span>
        </a>
        <a
          href="https://www.instagram.com/tunisian_aeroday/"
          className="float-element"
          target="_blank"
        >
          <span className="tooltip-left">
            <FontAwesomeIcon icon={faSquareInstagram} />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/company/tunisian-aeroday"
          className="float-element"
          target="_blank"
        >
          <span className=" tooltip-left">
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
        </a>
      </div>
    </div>
  );
};

export { SocialMedia };
