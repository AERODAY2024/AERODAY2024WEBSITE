import "../../assets/styles/pages/home.scss";
import { AboutSection, Banner } from "../../components";
import { ChallengesSection } from "../Challenges";
import { Sponsors } from "./components";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutSection />
      <ChallengesSection />
      <Sponsors />
    </>
  );
};

export { Home };
