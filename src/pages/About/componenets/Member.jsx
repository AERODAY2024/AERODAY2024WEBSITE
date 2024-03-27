import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { AdvancedImage } from "@cloudinary/react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { cld } from "../../../config";
import "../../../assets/styles/pages/speaker.scss";

const Member = ({ member, icnludeContacts }) => {
  const memberImage = cld
    .image(member.image)
    .resize(thumbnail().gravity(autoGravity()))
    .delivery(format("auto"))
    .delivery(quality("auto:low"));

  return (
    <>
      <div className="trainer-item">
        <div className="ti-pic">
          <AdvancedImage cldImg={memberImage} style={{ maxWidth: "100%" }} />
          <div className="ti-links">
            <NavLink to={member.facebook}>
              <i>
                <FontAwesomeIcon icon={faFacebook} />
              </i>
            </NavLink>
            {/* <NavLink to={member.instagram}>
              <i>
                <FontAwesomeIcon icon={faSquareInstagram} />
              </i>
            </NavLink>
            <NavLink to={member.linkedin}>
              <i>
                <FontAwesomeIcon icon={faLinkedin} />
              </i>
            </NavLink> */}
          </div>
          <div className="trainer-text">
            <h5>
              {member.name} <span>- {member.role}</span>
            </h5>
          </div>
        </div>
      </div>
      {icnludeContacts && (
        <section className="cta-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cta-text">
                  <h3>
                    Si vous avez des questions,
                    <br />
                    n'hésitez pas à nous contacter
                  </h3>
                  <p>
                    Téléphone: {member.phoneNumber} <br />
                    Email: {member.aerodayAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export { Member };
