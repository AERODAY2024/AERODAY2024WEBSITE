import "../../assets/styles/pages/home.scss";
import { AboutSection, Banner } from "../../components";
import ChallengeHome from "../Challenges/components/ChallengeHome";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutSection />
      <ChallengeHome />
    </>
  );
};

export { Home };
