import "../../assets/styles/pages/home.scss";
import { AboutSection, Banner, ContactForm } from "../../components";
import { ChallengesSection } from "../Challenges";
import { Sponsors } from "./components";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutSection />
      <ChallengesSection />
      <Sponsors />
      <ContactForm className={"my-5"} />
    </>
  );
};

export { Home };
