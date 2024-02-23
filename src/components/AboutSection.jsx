import { logo } from "../assets/images";

const AboutSection = () => {
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
                About The <span className="alternate">AERODAY</span>
              </h2>
              <div className="description-one">
                <p>
                  Tunisian Aeoroday est l’unique journée nationale consacrée
                  entiérement à l’Aeronautique en Tunisie, elle est fondé par le
                  club Aerobotix INSAT en collaboration avec l’Assocation de
                  techniques de robotiques (ATR)
                </p>
              </div>
              <div className="description-two">
                <p>
                  Cette journée est basée sur plusieurs axes et sur des
                  différents challenges et elle opte pour la vulgarisation du
                  domaine aéronautique chez le grand public ainsi que sur la
                  découverte de nouveaux potentiels dont disposent les jeunes.
                </p>
              </div>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a className="btn btn-main-md">Nos Axes</a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-transparent-md">Nos Challenges</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export  {AboutSection};
