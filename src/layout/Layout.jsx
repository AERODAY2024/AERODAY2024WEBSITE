import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "./components";
import { Suspense } from "react";
import { Loader, ScrollTop, SocialMedia } from "../components/UI";

export const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <NavBar />
        <Outlet />
        <Footer />
        <ScrollTop />
        <SocialMedia />
      </Suspense>
    </>
  );
};
