import "../../assets/styles/pages/home.scss";
import { AboutSection, Banner, ContactForm } from "../../components";
import { ChallengesSection } from "../Challenges";
import { Map, Sponsors } from "./components";
import { AxesSection } from "../Axes/AxesSection";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutSection />
      <ChallengesSection />
      <Sponsors />
      <AxesSection/>
      <ContactForm className={"my-5"} />
      <Map />
    </>
  );
};

export { Home };
