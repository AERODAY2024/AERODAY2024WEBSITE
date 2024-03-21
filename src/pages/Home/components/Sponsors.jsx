import Carousel from "react-bootstrap/Carousel";
import "../../../assets/styles/components/sponsors.scss";
import { sponsors } from "../../../constants/sponsons";

const Sponsors = () => {
  return (
    <>
      <section className="section">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3>
                Nos <span className="alternate">Sponsors</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusm tempor incididunt ut labore dolore
              </p>
            </div>
          </div>
        </div>
        <Carousel
          pause={false}
          className="testimonial-section bg-sponsors spad overlay-white"
        >
          {sponsors.map((sponsor, i) => {
            return (
              <Carousel.Item interval={1000} className="ts-item" key={i}>
                <div className="sponsor-pic">
                  <img src={sponsor.image} />
                </div>
                <Carousel.Caption className="sponsor-name">
                  <h5>{sponsor.name}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
    </>
  );
};

export { Sponsors };
