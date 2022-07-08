import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import Footer from "./components/Footer/Footer";
import ProductContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const App = () => {
  return (
    <>
      <CartContextProvider>
        <ProductContextProvider>
          <BrowserRouter>
            <Header />
            <Routing />
            <Footer />
          </BrowserRouter>
        </ProductContextProvider>
      </CartContextProvider>
    </>
  );
};

export default App;
