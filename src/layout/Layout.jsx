import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "./components";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
