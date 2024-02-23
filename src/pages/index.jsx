import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { lazyLoad } from "../utils";
import { lazy } from "react";

// const Home = lazyLoad("./pages/Home", "Home");
const Home = lazy(() =>
  import("./Home/index").then((module) => ({ default: module.Home }))
);
const AboutUs = lazyLoad("./pages/About", "AboutUs");
const Contact = lazyLoad("./pages/Contact", "Contact");
const Axe = lazyLoad("./pages/Axes", "Axe");
const Challenge = lazyLoad("./pages/Challenges", "Challenge");
const Schedule = lazyLoad("./pages/Schedule", "Schedule");

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
