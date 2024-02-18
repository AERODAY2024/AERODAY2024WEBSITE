import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <h1>Layout</h1>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
