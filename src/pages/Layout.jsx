import React from "react";
import { Outlet } from "react-router-dom";
import {
  Navbar,
  Preloader,
  Footer,
  Scroll_to_top_btn,
} from "../components";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Preloader />
      <Outlet />
      <Footer />
      <Scroll_to_top_btn />
    </>
  );
};

export default Layout;
