import { NavLink } from "react-router-dom";
import "../assets/styles/components/page-title.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { getRandomElement } from "../utils";
import { images } from "../assets/images";

// eslint-disable-next-line react/prop-types
const PageTitle = ({ title, page }) => {
  const bgImage = getRandomElement(images);
  return (
    <section
      className="page-title bg-title overlay-dark"
      style={{ background: `url(${bgImage}) no-repeat` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="title">
              <h3>{title}</h3>
            </div>
            <ol className="breadcrumb justify-content-center p-0 m-0">
              <li className="breadcrumb-item">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="angle">
                <FontAwesomeIcon icon={faAngleRight} />
              </li>
              <li className="breadcrumb-item active">{page}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PageTitle };
