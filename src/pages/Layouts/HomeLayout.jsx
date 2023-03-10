import React from "react";
import { About, Gallery, Stats, Slider, Contact } from "../../components";
import ImageSlider from "../../components/ImageSlider";

const HomeLayout = () => {
  return (
    <>
      <ImageSlider />
      <Slider />
      <About />
      <Stats />
      <Gallery />
      <Contact />
    </>
  );
};

export default HomeLayout;
