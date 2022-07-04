import React from "react";

import "./footer.css";
import Logo from "../../img/logo-footer.svg";
import Inst from "../../img/inst.svg";
import Vk from "../../img/vk.svg";
import Fb from "../../img/facebook.svg";
import Ok from "../../img/ok.svg";
import Tel from "../../img/phone.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__left">
              <img src={Logo} alt="logo" />
              <p>О компании</p>
              <p>Контакты</p>
              <p>Вакансии</p>
              <p>Статьи</p>
              <p>Политика обработки персональных данных</p>
            </div>
            <div className="footer__right">
              <a href="#">
                <img src={Inst} alt="instagram" />
              </a>
              <a href="#">
                <img src={Vk} alt="vk" />
              </a>
              <a href="#">
                <img src={Fb} alt="facebook" />
              </a>
              <a href="#">
                <img src={Ok} alt="ok" />
              </a>
              <a className="footer__right-phone" href="Tel:8 800 777 33 33">
                {" "}
                <img src={Tel} alt="phone" />8 800 777 33 33
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
