import { useState } from "react";
import { CardNews, Carroussel } from ".";
import { prevEditionImages, prevEditions } from "../../../constants";
import { Gallery } from "./";
import { prevEditionBg } from "../../../assets/images";
import "../../../assets/styles/components/prev-editions.scss";

const PrevEditions = () => {
  const cards = prevEditions.map((edition) => {
    return {
      key: Math.random(),
      content: (
        <CardNews
          editionData={{
            ...edition,
            background: prevEditionBg[`edition${edition.year}`],
          }}
        />
      ),
    };
  });

  const [goToSlide, setGoToSlide] = useState(null);

  const table = cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  return (
    <section className="news section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3>
                Nos <span className="alternate">Editions Précédentes</span>
              </h3>
              <div className="description-one">
                <p style={{ color: "black" }}>
                  Nos Éditions Précédentes ont été des moments mémorables qui
                  ont marqué l'histoire de l'aéronautique en Tunisie. Chaque
                  édition a été un succès grâce à la participation passionnée de
                  nos partenaires, des participants et du public. Nous sommes
                  fiers de notre héritage et nous nous efforçons continuellement
                  d'innover et de surpasser les attentes à chaque nouvelle
                  édition.
                  <br /> Replongez dans nos précédents événements et découvrez
                  les moments forts qui ont façonné notre histoire aéronautique
                  nationale.
                </p>
              </div>

              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusm tempor incididunt ut labore dolore
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="prev-editions">
          <Carroussel
            cards={cards}
            height="500px"
            width="100%"
            margin="0 "
            offset={2}
            showArrows={false}
            table={table}
            goToSlide={goToSlide}
          />
        </div>
        {goToSlide != null && (
          <div className="mb-5">
            {/* <h1>
            Aeroday{" "}
            <span className="alternate">{prevEditions[goToSlide].year}</span>
          </h1> */}
            <Gallery images={prevEditionImages[prevEditions[goToSlide].year]} />
          </div>
        )}
      </div>
    </section>
  );
};

export { PrevEditions };
