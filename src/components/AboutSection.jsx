import { logo } from "../assets/images";

const AboutSection = ({ showLinks }) => {
  return (
    <section className="section about">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 align-self-center">
            <div className="image-block bg-about">
              <img className="img-fluid" src={logo} alt="" />
            </div>
          </div>
          <div className="col-lg-8 col-md-6 align-self-center">
            <div className="content-block">
              <h2>
                A propos de <span className="alternate">TUNISIAN AERODAY</span>
              </h2>
              <div className="description-one">
                <p>
                  Tunisian Aeroday est l’unique journée nationale entièrement
                  consacrée à l’aéronautique en Tunisie. L’événement, fondé par
                  le club Aerobotix de l'INSAT, est organisé en collaboration
                  avec l’Association des Techniques de Robotique (ATR).
                </p>
              </div>
              <div className="description-two">
                <p>
                  Cette journée repose sur plusieurs axes et différents défis.
                  Elle vise à la vulgarisation du domaine aéronautique auprès du
                  grand public ainsi qu'à la découverte des nouveaux potentiels
                  dont disposent les jeunes.
                </p>
              </div>
              {showLinks && (
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="btn btn-transparent-md"
                      href="#challenges-pannel"
                    >
                      Nos Challenges
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-main-md" href="#axes-pannel">
                      Nos Axes
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
