import "../../assets/styles/pages/home.scss";
import { AboutSection, Banner, ContactForm } from "../../components";
import { ChallengesSection } from "../Challenges";
import { Map, Sponsors } from "./components";
import { AxesSection } from "../Axes";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutSection />
      <ChallengesSection />
      <AxesSection />
      <Sponsors />
      <ContactForm className={"my-5"} />
      <Map />
    </>
  );
};

export { Home };
