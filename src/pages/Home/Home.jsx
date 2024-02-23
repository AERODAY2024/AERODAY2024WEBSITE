import "../../assets/styles/pages/home.scss";
import { AboutSection, Banner } from "../../components";
import { AxesSection } from "../Axes";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutSection />
      <AxesSection />
    </>
  );
};

export { Home };
