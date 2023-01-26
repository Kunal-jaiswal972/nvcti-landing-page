import React from "react";
import { Team, Testimonial, Stats, Hero } from "..";

const Administration = () => {
  return (
    <>
      <Hero />
      <section className="stats-sec padding-bottom" id="stats-sec"></section>
      <Team />
      <Testimonial />
    </>
  );
};

export default Administration;
