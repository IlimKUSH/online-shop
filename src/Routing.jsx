import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Main from "./components/Main/Main";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routing;
