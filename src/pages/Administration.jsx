import React from "react";
import { Team, Testimonial, Hero } from "../components";

const Administration = () => {
  return (
    <>
      <Hero page="administration"/>
      <section className="stats-sec padding-bottom" id="stats-sec"></section>
      <Team />
      <Testimonial />
    </>
  );
};

export default Administration;
