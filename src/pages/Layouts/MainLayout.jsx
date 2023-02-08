import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Preloader, Footer, ScrollToTopBtn } from "../../components";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Preloader />
      <Outlet />
      <Footer />
      <ScrollToTopBtn />
    </>
  );
};

export default MainLayout;
