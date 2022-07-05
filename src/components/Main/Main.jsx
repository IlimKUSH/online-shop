import React, { useEffect } from "react";

import "./main.css";
import Products from "../../img/products.png";
import CardBlue from "../../img/card-blue.png";
import CardRed from "../../img/card-red.png";
import Doctor from "../../img/doctor.png";
import Food from "../../img/food.png";
import Flowers from "../../img/flowers.png";
import { useNavigate } from "react-router-dom";
import List from "../List/List";

const Main = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const Map = document.getElementById("map");
    const script = document.createElement("script");

    script.src =
      "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac69cb4b3160d8b4efbbec50b1dcbfd5745c5add07c9cff84d462fbf06bfa67ea&amp;width=1200&amp;height=400&amp;lang=ru_RU&amp;scroll=true";
    script.async = true;
    Map.appendChild(script);
  }, []);

  return (
    <div className="main">
      <div className="background">
        <div className="container bg__container">
          <img className="bg__products" src={Products} alt="products" />
          <h1>Доставка бесплатно от 1000 ₽</h1>
        </div>
      </div>
      <div className="container">
        <h2>Продукты</h2>
        <p
          style={{
            cursor: "pointer",
            fontSize: "30px",
          }}
          onClick={() => navigate("/add")}>
          add product
        </p>
      </div>
      <div>
        <List />
      </div>
      <div className="container hero">
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
      <div className="container shop">
        <h2>Наш магазин</h2>
        <div id="map" className="yandex-map"></div>
      </div>
      <div className="container articles">
        <h2>Статьи</h2>
        <div className="articles__content">
          <div className="article__card">
            <img src={Doctor} alt="doctor" />
            <div className="article__text">
              <p>03.07.2022</p>
              <h4>
                Режим использования масок и перчаток на территории магазинов
              </h4>
              <p className="article__info">
                Подробная информация о режимах использования масок и перчаток на
                территории магазинов "ЛЕНТА". Информация обновляется каждый
                будний день.
              </p>
            </div>
          </div>
          <div className="article__card">
            <img src={Flowers} alt="doctor" />
            <div className="article__text">
              <p>08.03.2022</p>
              <h4>Весеннее настроение для каждой </h4>
              <p className="article__info">
                8 Марта – это не просто Международный женский день, это ещё день
                тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.
              </p>
            </div>
          </div>
          <div className="article__card">
            <img src={Food} alt="doctor" />
            <div className="article__text">
              <p>03.07.2022</p>
              <h4>ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем! </h4>
              <p className="article__info">
                Голосуйте за любимые категории, выбирайте категорию-победителя в
                мобильном приложении и получайте кешбэк 10% баллами в апреле!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
