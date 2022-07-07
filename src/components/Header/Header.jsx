import React, { useContext, useEffect, useState } from "react";

import "./header.css";

import Logo from "../../img/logo.svg";
import Search from "../../img/search.svg";
import Heart from "../../img/heart.svg";
import Orders from "../../img/orders.svg";
import Cart from "../../img/cart.svg";
import Avatar from "../../img/avatar.svg";
<<<<<<< HEAD
import {useNavigate, useSearchParams} from "react-router-dom";
import {Badge} from "@mui/material";
import {cartContext} from "../../contexts/cartContext";

const Header = () => {

  const {count} = useContext(cartContext)

=======
import { useNavigate, useSearchParams } from "react-router-dom";

const Header = () => {
>>>>>>> c93961f92cc1af2f2259171c9f1598a82babfa96
  const [searchParam, setSearchParam] = useSearchParams();

  const [search, setSearch] = useState(
    searchParam.get("q") ? searchParam.get("q") : ""
  );

  const navigate = useNavigate();

  useEffect(() => {
    setSearchParam({
      q: search,
    });
  }, [search]);
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <img onClick={() => navigate("/")} src={Logo} alt="logo" />
          <div className="header__search">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              type="text"
              placeholder="Найти товар"
            />
            <img src={Search} alt="search" />
          </div>
          <div className="header__ftrs">
            <img src={Heart} alt="favorite" />
            <p>Избранное</p>
          </div>
          {/* <div className="header__ftrs">
            <img src={Orders} alt="orders" />
            <p>Заказы</p>
          </div> */}
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
