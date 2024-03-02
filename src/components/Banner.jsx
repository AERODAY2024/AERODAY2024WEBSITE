import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import { Countdown } from "./Countdown";
import { heroImages } from "../assets/images";

const BannerText = () => {
  return (
    <div className="hero-text">
      <h2>Rejoignez-nous</h2>
      <h1>Tunisian Aeroday 2024</h1>
      <NavLink
        to={"/about-us"}
        className="about-link"
        style={{ color: "white" }}
      >
        Lire la suite
      </NavLink>
      <Countdown />
    </div>
  );
};

const Banner = () => {
  return (
    <section className="banner">
      <Carousel fade pause={false} className="hero-carousel">
        <Carousel.Item
          className="bg-hero1"
          style={{ background: `url(${heroImages[0]}) fixed no-repeat` }}
          interval={3000}
        >
          <BannerText />
        </Carousel.Item>
        <Carousel.Item
          className="bg-hero2"
          style={{ background: `url(${heroImages[1]}) fixed no-repeat` }}
          interval={3000}
        >
          <BannerText />
        </Carousel.Item>
        <Carousel.Item
          className="bg-hero3"
          style={{ background: `url(${heroImages[2]}) fixed no-repeat` }}
          interval={3000}
        >
          <BannerText />
        </Carousel.Item>
      </Carousel>{" "}
    </section>
  );
};

export { Banner };
