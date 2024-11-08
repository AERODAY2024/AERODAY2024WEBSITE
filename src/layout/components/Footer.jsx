import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/styles/components/footer.scss";
import { useNavigate } from "react-router-dom";
import {
  faEnvelope,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { logoWithoutBackground } from "../../assets/images";
import { scrollToTop } from "../../utils";
const Footer = () => {
  const navigate = useNavigate();

  const handleRedirectToHome = () => {
    navigate("/");
    scrollToTop();
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="footer-logo-item">
              <div className="f-logo">
                <a onClick={handleRedirectToHome}>
                  <img src={logoWithoutBackground} alt="" />
                </a>
              </div>
              <p>
                {`Tunisian Aeroday est la seule journée nationale entièrement consacrée à l'aéronautique en Tunisie. Fondée par le club Aerobotix de l'INSAT en collaboration avec l'Association des Techniques de Robotique (ATR), cette journée repose sur plusieurs axes et différents défis. Son objectif principal est de vulgariser le domaine de l'aéronautique auprès du grand public et de découvrir les nouveaux potentiels dont disposent les jeunes.`}
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="footer-widget">
              <h5>Nous sommes toujours à votre écoute.</h5>
              <ul className="footer-info">
                <li>
                  <i>
                    <FontAwesomeIcon icon={faPhone} />
                  </i>
                  <span>Phone:</span>
                  +216 94 384 001
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widget">
              <ul className="footer-info">
                <li>
                  <i>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <span>Email:</span>
                  contact@aeroday.tn
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon icon={faMapLocationDot} />
                  </i>
                  <span>Address</span>
                  INSAT Centre Urbain Nord <br />
                  BP 676 - 1080 Tunis Cedex
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="ct-inside">
                Copyright Aeroday &copy;{new Date().getFullYear()} All rights
                reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
