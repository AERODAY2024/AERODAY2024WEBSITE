import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { lazyLoad } from "../utils";

const Home = lazyLoad("pages/Home/index", "Home");
const AboutUs = lazyLoad("pages/About/index", "AboutUs");
const Contact = lazyLoad("pages/Contact/index", "Contact");
const Axe = lazyLoad("pages/Axes/index", "Axe");
const Challenge = lazyLoad("pages/Challenges/index", "Challenge");
const Schedule = lazyLoad("pages/Schedule/index", "Schedule");

const Missing = lazyLoad(() => import("./Missing"));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}

          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/axes/:axeName" element={<Axe />} />
          <Route path="/challenges/:challengeName" element={<Challenge />} />
          <Route path="/schedule" element={<Schedule />} />

          {/* not found */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
