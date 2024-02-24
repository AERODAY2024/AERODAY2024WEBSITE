import "../../assets/styles/pages/home.scss";
import { AboutSection, Banner } from "../../components";
import { ChallengesSection } from "../Challenges";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutSection />
      <ChallengesSection />
    </>
  );
};

export { Home };
