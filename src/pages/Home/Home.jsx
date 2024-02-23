import "../../assets/styles/pages/home.scss";
import AboutSection from "../../components/AboutSection";
import Banner from "../../components/Banner";
import { AxesSection } from "../Axes";  

const Home = () => {
  return (
    <>
      <Banner />
      <AboutSection />
      <AxesSection/>
    </>
  );
};

export { Home };
