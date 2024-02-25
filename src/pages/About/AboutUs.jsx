import "../../assets/styles/pages/home.scss";

import "../../assets/styles/pages/about.scss";
import { AboutSection, PageTitle } from "../../components";
import { Committee } from "./componenets";

const AboutUs = () => {
  return (
    <>
      <PageTitle page={"ABOUT"} title={"ABOUT"} />
      <AboutSection />
      <Committee />
    </>
  );
};

export { AboutUs };
