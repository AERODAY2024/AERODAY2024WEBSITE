import "../../assets/styles/pages/home.scss";

import "../../assets/styles/pages/about.scss";
import { AboutSection, PageTitle } from "../../components";
import { Committee, VideoPlayer } from "./componenets";
import { getRandomElement } from "../../utils";
import { images } from "../../assets/images";

const AboutUs = () => {
  const bgImage = getRandomElement(images);

  return (
    <>
      <PageTitle title={"ABOUT"} bgImage={bgImage} />
      <AboutSection />
      <VideoPlayer />
      <Committee />
    </>
  );
};

export { AboutUs };
