import { BrowserRouter, Route, Routes } from "react-router-dom";
import Missing from "./Missing";
import { Layout } from "../layout";
import { Axe } from "./Axes";
import { Challenge } from "./Challenges";
import { AboutUs } from "./About";
import { Contact } from "./Contact";
import { Schedule } from "./Schedule";
import { Home } from "./Home";

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
