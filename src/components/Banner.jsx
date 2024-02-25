import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner">
      <Carousel fade pause={false} className="hero-carousel">
        <Carousel.Item className="bg-hero1" interval={3000}>
          <div className="hero-text">
            <h2>Rejoignez-nous</h2>
            <h1>Tunisian Aeroday 2024</h1>
            <NavLink to={"/about-us"} className="about-link">
              Lire la suite
            </NavLink>
          </div>
        </Carousel.Item>
        <Carousel.Item className="bg-hero2" interval={3000}>
          <div className="hero-text">
            <h2>Rejoignez-nous</h2>
            <h1>Tunisian Aeroday 2024</h1>
            <NavLink to={"/about-us"} className="about-link">
              Lire la suite
            </NavLink>
          </div>
        </Carousel.Item>
        <Carousel.Item className="bg-hero3" interval={3000}>
          <div className="hero-text">
            <h2>Rejoignez-nous</h2>
            <h1>Tunisian Aeroday 2024</h1>
            <NavLink to={"/about-us"} className="about-link">
              Lire la suite
            </NavLink>
          </div>
        </Carousel.Item>
      </Carousel>{" "}
    </section>
  );
};

export { Banner };
