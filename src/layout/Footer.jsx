import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/components/footer.scss";
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Aeroday from "../assets/aeroday.jpg";
import { NavLink } from "react-router-dom";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <footer className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <div className="footer-logo">
                  <img
                    src={Aeroday}
                    alt="logo"
                    className="img-fluid"
                    width={300}
                  />
                </div>
                <ul className="social-links-footer list-inline">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/TunAeroday/">
                      <span>
                        <FontAwesomeIcon icon={faFacebook} />
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/tunisian_aeroday/">
                      <span>
                        <FontAwesomeIcon icon={faSquareInstagram} />
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/company/tunisian-aeroday">
                      <span>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="copyright-text">
                <p>
                  <NavLink to={"/"}>Aeroday</NavLink> &copy; 2024
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <a className="to-top" onClick={scrollToTop}>
                <FontAwesomeIcon icon={faAngleUp} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
