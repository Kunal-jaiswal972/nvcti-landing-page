import React from "react";
import { About, Gallery, Stats, Slider, Contact } from "../../components";

const HomeLayout = () => {
  return (
    <>
      <Slider />
      <About />
      <Stats />
      <Gallery />
      <Contact />
    </>
  );
};

export default HomeLayout;
