import { useRef, useState } from "react";
import "./../../../assets/styles/pages/gallery.scss";
import { Gallery } from "./Gallery";
import { prevEditionImages } from "../../../constants";
import { prevEditionBg } from "../../../assets/images";

const prevEditions = [2021, 2020, 2019, 2018, 2017];
const ITEM_WIDTH = 100;

const PreviousEditions = () => {
  const [edition, setEdition] = useState(2021);

  const handleEditionChange = (edition) => {
    setEdition(edition);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    if (containerRef.current) {
      containerRef.current.scrollLeft = newScrollPosition;
    }
  };

  return (
    <section className="section gallery">
      <div className="container">
        <div className="row text-center">
          <h2>
            Our previous <span className="alternate">AERODAYS</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="controls d-flex justify-content-center align-items-center">
              <div
                className="btn-group btn-group-toggle d-block row justify-content-center scroll-container"
                ref={containerRef}
                style={{
                  maxWidth: "100%", // Adjust container width based on number of items
                  overflowX: "auto",
                  scrollBehavior: "smooth",
                  paddingLeft: "auto",
                }}
              >
                <div className="content-box">
                  {prevEditions.map((prevEdition, index) => {
                    return (
                      <label
                        key={index}
                        className="btn active figure col-2 edition-card"
                        style={{
                          background: `url(${
                            prevEditionBg[`edition${prevEdition}`]
                          }) center no-repeat`,
                        }}
                        onClick={() => handleEditionChange(prevEdition)}
                      >
                        {prevEdition}
                      </label>
                    );
                  })}
                </div>
              </div>
              {/* <div className="action-btns">
                <button onClick={() => handleScroll(-ITEM_WIDTH)}>
                  Scroll Left
                </button>
                <button onClick={() => handleScroll(ITEM_WIDTH)}>
                  Scroll Right
                </button>
              </div> */}
            </div>
          </div>
          {edition && <Gallery images={prevEditionImages[edition]} />}
        </div>
      </div>
    </section>
  );
};

export { PreviousEditions };
