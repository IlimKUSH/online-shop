import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Main from "./components/Main/Main";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default Routing;
