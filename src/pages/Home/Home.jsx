import "../../assets/styles/pages/home.scss";
import { AboutSection, Banner } from "../../components";

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
