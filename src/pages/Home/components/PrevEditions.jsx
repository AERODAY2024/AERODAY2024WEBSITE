// import "../../../assets/styles/components/Carousel3D.scss";
import { useState } from "react";
import { CardNews, Carroussel } from ".";
import { prevEditionImages, prevEditions } from "../../../constants";
import { Gallery } from "./";
import { prevEditionBg } from "../../../assets/images";

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
    <div className="App">
      <Carroussel
        cards={cards}
        height="500px"
        width="90%"
        margin="0 auto"
        offset={2}
        showArrows={false}
        table={table}
        goToSlide={goToSlide}
      />
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
  );
};

export { PrevEditions };
