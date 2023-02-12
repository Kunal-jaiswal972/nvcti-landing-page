import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomeLayout,
  AboutISM,
  AboutNVCTI,
  MainLayout,
  Administration,
  Error,
  LabLayout,
  Labs,
  Projects,
} from "./pages";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomeLayout />} />
            <Route exact path="about">
              <Route exact path="IIT(ISM)-DHANBAD" element={<AboutISM />} />
              <Route exact path="NVCTI" element={<AboutNVCTI />} />
            </Route>
            <Route exact path="administration" element={<Administration />} />
            <Route exact path="/labs" element={<LabLayout />}>
              <Route index element={<Labs lab="gamingAndAnimation" />} />
              <Route
                exact
                path="gaming-and-animation"
                element={<Labs lab="gamingAndAnimation" />}
              />
              <Route
                exact
                path="electronics-and-iot"
                element={<Labs lab="electronicsAndIot" />}
              />
              <Route
                exact
                path="mechanical-tools-and-rapid-prototyping"
                element={<Labs lab="mechanicalToolsAndRapidPrototyping" />}
              />
              <Route
                exact
                path="pouch-battery-cell-assembly"
                element={<Labs lab="pouchBatteryCellAssembly" />}
              />
              <Route
                exact
                path="gaming-and-animation"
                element={<Labs lab="gamingAndAnimation" />}
              />
              <Route exact path="projects" element={<Projects />} />
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
