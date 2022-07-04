import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
       <Header />
       <Routing />
       <Footer />
    </BrowserRouter>
  );
};

export default App;
