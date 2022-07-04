import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main";

const Routing = () => {
  return <Routes>
    <Route path="/" element={<Main />}/>
  </Routes>;
};

export default Routing;
