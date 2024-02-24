import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/styles/components/footer.scss";
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
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
                {`Tunisian Aeroday est l'unique journée nationale consacrée
                entièrement à l'Aéronautique en Tunisie, elle est fondée par le
                club Aerobotix insat en collaboration avec l'association des
                techniques de robotique (ATR). Cette journée est basée sur
                plusieurs axes et sur des différents challenges et elle opte
                pour la vulgarisation du domaine aéronautique chez le grand
                public ainsi que sur la découverte de nouveaux potentiels dont
                disposent les jeunes.`}
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="footer-widget">
              <h5>restez en contact.</h5>
              <ul className="footer-info">
                <li>
                  <i>
                    <FontAwesomeIcon icon={faPhone} />
                  </i>
                  <span>Phone:</span>
                  +216 28 106 396
                </li>
                {/* <li className="list-inline-item">
                  <a href="https://www.facebook.com/TunAeroday/">
                    <span>
                      <i>
                        <FontAwesomeIcon icon={faFacebook} />
                      </i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/tunisian_aeroday/">
                    <span>
                      <i>
                        <FontAwesomeIcon icon={faSquareInstagram} />
                      </i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/company/tunisian-aeroday">
                    <span>
                      <i>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </i>
                    </span>
                  </a>
                </li> */}
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
