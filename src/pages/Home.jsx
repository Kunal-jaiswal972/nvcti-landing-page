import React from "react";
import { About, Gallery, Stats, Slider } from "../components";

const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <Stats />
      <Gallery />
    </>
  );
};

export default Home;
