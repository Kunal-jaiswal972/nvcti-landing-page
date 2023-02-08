import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Hero } from "../../components";

const LabLayout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/labs/gaming-and-animation" && <Hero page="ga" />}
      {location.pathname === "/labs/electronics-and-iot" && <Hero page="iot" />}
      {location.pathname === "/labs/mechanical-tools-and-rapid-prototyping" && (
        <Hero page="mech" />
      )}
      {location.pathname === "/labs/pouch-battery-cell-assembly" && (
        <Hero page="pb" />
      )}
      {/* {location.pathname == "/labs/gaming-and-animation" && <Hero page="ga" />} */}
      <Outlet />
    </>
  );
};

export default LabLayout;
