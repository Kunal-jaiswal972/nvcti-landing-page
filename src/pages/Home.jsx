import React from "react";
import { About, Gallery, Stats, Slider, Contact } from "../components";

const Home = () => {
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

export default Home;
