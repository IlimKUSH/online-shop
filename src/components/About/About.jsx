import React from "react";

import "./about.css";

import Front from "../../img/front-about.png";
import Shapes from "../../img/shapes.png";
import Check from "../../img/about-check.svg";
import Logo from "../../img/logo-about.svg";

const About = () => {
  return (
    <div>
      <div className="container about">
        <div className="about__info">
          <h2>О компании</h2>
          <p>
            Мы непрерывно развиваемся и работаем над совершенствованием сервиса,
            заботимся о наших клиентах, стремимся к лучшему будущему.
          </p>
        </div>
        <img className="about__shapes" src={Shapes} alt="" />
        <div className="about__imgs">
          <img className="about__front" src={Front} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="about__cards">
          <div className="about__card about__width-small">
            <div className="about__title">
              <img src={Check} alt="check" />
              <div>
                <p>Мы занимаемся розничной торговлей</p>
                <h3>Более 20 лет.</h3>
              </div>
            </div>
          </div>
          <div className="about__card about__width-medium">
            <div className="about__title">
              <img src={Check} alt="check" />
              <div>
                <p>Основная миссия компании</p>
                <h3>
                  Максимальное качество товаров и услуг по доступной цене.
                </h3>
              </div>
            </div>
          </div>
          <div className="about__card about__width-big">
            <div className="about__title">
              <img src={Check} alt="check" />
              <div>
                <p>Отличительная черта нашей сети</p>
                <h3>
                  Здоровая и полезная продукция местного производства внаших
                  магазинах.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="about__quote">
          <img src={Logo} alt="logo" />
          <h3>Спасибо за то, что вы с нами. Северяночка, везет всегда!</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
