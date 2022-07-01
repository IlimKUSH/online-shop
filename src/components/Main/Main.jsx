import React from "react";
import Header from "../Header/Header";

import "./main.css";
import Products from "../../img/products.png";
import CardBlue from "../../img/card-blue.png";
import CardRed from "../../img/card-red.png";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="background">
        <div className="container bg__container">
          <img className="bg__products" src={Products} alt="products" />
          <h1>Доставка бесплатно от 1000 ₽</h1>
        </div>
      </div>
      <div className="container">
        <h2>Специальные предложения</h2>
        <div className="hero__cards">
          <div className="hero__card hero__card-blue">
            <div>
              <h3>Оформите карту «Северяночка»</h3>
              <p>И получайте бонусы при покупке в магазинах и на сайте</p>
            </div>
            <img className="hero__img" src={CardBlue} alt="card" />
          </div>
          <div className="hero__card hero__card-red">
            <div>
              <h3>Оформите карту «Северяночка»</h3>
              <p>И получайте бонусы при покупке в магазинах и на сайте</p>
            </div>
            <img className="hero__img" src={CardRed} alt="card" />
          </div>
        </div>
      </div>
      <div className="container">
        <h2>Наш магазин</h2>
        <div class="yandex-map">
          <script
            type="text/javascript"
            charset="utf-8"
            async
            src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac69cb4b3160d8b4efbbec50b1dcbfd5745c5add07c9cff84d462fbf06bfa67ea&amp;width=1200&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
