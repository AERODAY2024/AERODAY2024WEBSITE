import { useState } from "react";
import "../assets/styles/components/teaser.scss";

export const Teaser = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      className="news section teaser-section"
      style={{
        marginTop: "0px",
        paddingTop: "0px",
        paddingBottom: "0px",
        marginBottom: "0px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title content-block">
              <h3>
                Notre <span className="alternate">Teaser</span>
              </h3>
              <div>
                <iframe
                  src="https://player.vimeo.com/video/1027667756?byline=0&title=0&portrait=0"
                  width="100%"
                  height="400"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Vimeo Video"
                ></iframe>
              </div>
              <div className="description-one mt-3">
                <p style={{ color: "black", textAlign: "left" }}>
                  Cette{" "}
                  <b>
                    12<sup>ème</sup> édition du Tunisian Aeroday
                  </b>
                  , placée sous le thème inspirant de{" "}
                  <b>Cieux éternels de l’Afrique</b>, incarne une ambition forte
                  : celle de positionner la Tunisie comme un centre névralgique
                  de l'aviation en Afrique.
                  <br />
                  Le choix de ce thème reflète une vision d’avenir qui relie
                  l'héritage riche et intemporel du continent africain à son
                  potentiel important de développement dans le domaine de
                  l'aéronautique. Il s'agit d'un appel à exploiter les vastes
                  horizons de l'innovation, à favoriser les échanges et à
                  explorer les opportunités stratégiques qu'offre l'aviation, un
                  secteur en pleine expansion en Afrique.
                  <br />
                  Ce grand rassemblement vise à sensibiliser le public à
                  l'importance croissante de l'industrie aéronautique en Afrique
                  et à son rôle clé dans le développement économique et
                  technologique de la région.
                  <br />
                  {!showMore && (
                    <p style={{ textAlign: "center" }} className="mt-3">
                      <button
                        className="btn btn-transparent-md"
                        onClick={() => setShowMore(!showMore)}
                      >
                        Voir plus
                      </button>
                    </p>
                  )}
                  {showMore && (
                    <>
                      <br /> Au-delà des conférences et des ateliers, le
                      Tunisian Aeroday propose des compétitions et des
                      challenges scientifiques interactifs qui permettent au
                      public de tous âges de découvrir et d’expérimenter les
                      technologies de ce secteur. Ces initiatives visent à
                      stimuler l’esprit d’entreprise et d’innovation, en
                      renforçant la conscience collective de l'importance de
                      l'aviation dans la construction de l’avenir de l’Afrique.
                      En participant à cet événement, vous contribuez non
                      seulement à la promotion de l'aviation, mais aussi à
                      l’émergence d’une nouvelle génération d’innovateurs
                      africains capables de relever les défis technologiques de
                      demain.
                    </>
                  )}
                  <br />
                  {showMore && (
                    <button
                      className="btn btn-transparent-md"
                      onClick={() => setShowMore(!showMore)}
                    >
                      Voir moins
                    </button>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
