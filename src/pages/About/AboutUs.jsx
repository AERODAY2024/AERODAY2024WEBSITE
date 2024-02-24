import "../../assets/styles/pages/home.scss";

import "../../assets/styles/pages/about.scss";
import AboutComponent from "../../components/AboutComponent";
import { PageTitle } from "../../components";

const AboutUs = () => {
  return (
    <>
      <PageTitle page={"ABOUT"} title={"ABOUT"} />
      <AboutComponent />
    </>
  );
};

export { AboutUs };
