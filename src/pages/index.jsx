import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { lazy } from "react";

const Home = lazy(() =>
  import("./Home").then((module) => ({ default: module.Home }))
);
const AboutUs = lazy(() =>
  import("./About").then((module) => ({ default: module.AboutUs }))
);
const Contact = lazy(() =>
  import("./Contact").then((module) => ({ default: module.Contact }))
);
const Axe = lazy(() =>
  import("./Axes").then((module) => ({ default: module.Axe }))
);
const Challenge = lazy(() =>
  import("./Challenges").then((module) => ({ default: module.Challenge }))
);
const Schedule = lazy(() =>
  import("./Schedule").then((module) => ({ default: module.Schedule }))
);

const Missing = lazy(() => import("./Missing"));
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
