import {
  faEnvelope,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OurContacts = () => {
  return (
    <div className="row m-0">
      <div className="col-md-4">
        <div className="ts-service-box-bg text-center h-100">
          <span className="ts-service-icon icon-round">
            <i>
              <FontAwesomeIcon icon={faMapLocationDot} />
            </i>
          </span>
          <div className="ts-service-box-content">
            <h4>Visit Our Office</h4>
            <p>INSAT Centre Urbain Nord BP 676 - 1080 Tunis Cedex</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="ts-service-box-bg text-center h-100">
          <span className="ts-service-icon icon-round">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
          </span>
          <div className="ts-service-box-content">
            <h4>Email Us</h4>
            <p>contact@aeroday.tn</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="ts-service-box-bg text-center h-100">
          <span className="ts-service-icon icon-round">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
          </span>
          <div className="ts-service-box-content">
            <h4>Call Us</h4>
            <p>+216 28 106 396</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OurContacts };
