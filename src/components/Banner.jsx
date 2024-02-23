import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner bg-banner-one overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="block">
              <div className="timer"></div>
              <h1>Tunisian</h1>
              <h2>Aeroday 2024</h2>
              <h6>14 & 21 AVRIL 2024 INSAT</h6>
              <NavLink to={"/about-us"} className="btn btn-white-md">
                Lire la suite
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export  {Banner};
