import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import Footer from "./components/Footer/Footer";
import ProductContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";
import TestiContextProvider from "./contexts/testiContext";

const App = () => {
  return (
      <TestiContextProvider>
    <CartContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
          <Footer />
        </BrowserRouter>
      </ProductContextProvider>
    </CartContextProvider>
      </TestiContextProvider>
  );
};

export default App;
