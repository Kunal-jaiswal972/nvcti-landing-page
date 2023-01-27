import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AboutPage, Layout, Contact, Administration } from "./pages";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="aboutISM" element={<AboutPage />} />
            <Route path="aboutNVCTI" element={<AboutPage />} />
            <Route path="administration" element={<Administration />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
