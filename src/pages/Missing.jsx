import { NavLink } from "react-router-dom";
import { NotFound } from "../assets/images";
import "../assets/styles/pages/404.scss";
const Missing = () => {
  return (
    <section className="section error">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="block text-center">
              <img src={NotFound} className="img-fluid" alt="404" />
              <h3>
                Oops!... <span>Page Not Found.</span>
              </h3>
              <NavLink to={"/"} className="btn btn-main-md">
                Go to home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missing;
