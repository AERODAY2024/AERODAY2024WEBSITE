import Carousel from "react-bootstrap/Carousel";
import "../../../assets/styles/components/sponsors.scss";
import { sponsors } from "../../../constants/sponsons";

const Sponsors = () => {
  return (
    <Carousel className="testimonial-section bg-sponsors spad">
      {sponsors.map((sponsor, i) => {
        return (
          <Carousel.Item interval={500} className="ts-item" key={i}>
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
  );
};

export { Sponsors };
