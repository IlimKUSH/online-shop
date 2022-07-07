import React, {useContext, useEffect, useState} from "react";

import "./header.css";

import Logo from "../../img/logo.svg";
import Search from "../../img/search.svg";
import Heart from "../../img/heart.svg";
import Orders from "../../img/orders.svg";
import Cart from "../../img/cart.svg";
import Avatar from "../../img/avatar.svg";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Badge} from "@mui/material";
import {cartContext} from "../../contexts/cartContext";

const Header = () => {

  const {count} = useContext(cartContext)

  const [searchParam, setSearchParam] = useSearchParams();

  const [search,setSearch] = useState(searchParam.get("q") ? searchParam.get("q") :  "");


  const navigate = useNavigate();

  useEffect(() => {
    setSearchParam({
      q:search,
    })
  },[search])
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <img onClick={() => navigate("/")} src={Logo} alt="logo" />
          <button className="header__btn">
            <svg
              width="29"
              height="25"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_1812_17810)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H23C23.2761 11.5 23.5 11.7239 23.5 12C23.5 12.2761 23.2761 12.5 23 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
                  fill="white"
                />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 6C4.5 5.72386 4.72386 5.5 5 5.5H23C23.2761 5.5 23.5 5.72386 23.5 6C23.5 6.27614 23.2761 6.5 23 6.5H5C4.72386 6.5 4.5 6.27614 4.5 6Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 18C4.5 17.7239 4.72386 17.5 5 17.5H23C23.2761 17.5 23.5 17.7239 23.5 18C23.5 18.2761 23.2761 18.5 23 18.5H5C4.72386 18.5 4.5 18.2761 4.5 18Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_d_1812_17810"
                  x="0.5"
                  y="11.5"
                  width="27"
                  height="9"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1812_17810"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1812_17810"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <p>Каталог</p>
          </button>
          <div className="header__search">
            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                type="text"
                placeholder="Найти товар"
            />
            <img src={Search} alt="search"/>
          </div>
          <div className="header__ftrs">
            <img src={Heart} alt="favorite" />
            <p>Избранное</p>
          </div>
          <div className="header__ftrs">
            <img src={Orders} alt="orders" />
            <p>Заказы</p>
          </div>
          <div onClick={() => navigate("/cart")} className="header__ftrs">
            <Badge
                style={{
                  padding:"0 0 5px 25px"
                }}
                badgeContent={count}
                color="error"
            >
            </Badge>
            <img src={Cart} alt="cart" />
            <p>Корзина</p>
          </div>
          <div className="header__avatar">
            <img src={Avatar} alt="avatar" />
            <p>Алексей</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
