import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import "./cart.css";

const Cart = ({ item }) => {
  const navigate = useNavigate();

  const { getCart, cart, deleteFromCart, changeCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return cart ? (
    <div>
      <div className="container">
        <div className="path">
          <p onClick={() => navigate("/")}>Главная</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
              fill="#414141"
            />
          </svg>
          <p>Корзина</p>
        </div>
        <div className="cart">
          <h2>Корзина</h2>
          <div className="cart__content">
            <div>
              {cart.products.map(elem => (
                <div className="cart__card" key={elem.item.id}>
                  <div className="cart__cart-text">
                    <img src={elem.item.image} alt="" width="100px" />
                    <div className="cart__card-info">
                      <p className="super__price">{elem.item.title}</p>
                      <p className="sub__price">{elem.item.price} ₽ за шт.</p>
                    </div>
                  </div>
                  <div className="cart__btn">
                    <svg
                      onClick={() => changeCount(elem.count - 1, elem.item.id)}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
                        fill="white"
                      />
                    </svg>
                    <p>{elem.count}</p>
                    <svg
                      onClick={() => changeCount(elem.count + 1, elem.item.id)}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 4.5C12.2761 4.5 12.5 4.72386 12.5 5V19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19V5C11.5 4.72386 11.7239 4.5 12 4.5Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                  <button onClick={() => deleteFromCart(elem.item.id)}>
                    delete
                  </button>
                  <button onClick={() => navigate(`/details/${elem.item.id}`)}>
                    info
                  </button>
                </div>
                </div>
              ))}
            </div>
            <div className="cart__pay">
              <p>
                Сумма <span className="sum">{cart.totalPrice} ₽</span>
              </p>
              <p>
                Скидка <span className="dis">{-cart.discount} ₽</span>
              </p>
              <hr className="cart__line" />
              <p>
                Итог{" "}
                <h3 className="total">{cart.totalPrice - cart.discount} ₽</h3>
              </p>
              <div className="bonus__payment">
                <span className="bonus-parent">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.6883 6.66661H1.31196C0.843143 6.66661 0.460308 7.05823 0.503301 7.52051C0.994639 13.0113 6.17826 17.3333 12.5001 17.3333C18.822 17.3333 24.0056 13.0133 24.497 7.52051C24.5379 7.05823 24.1571 6.66661 23.6883 6.66661Z"
                      fill="#70C05B"
                    />
                  </svg>
                  Вы получаете{" "}
                  <span className="bonus">
                    {Math.ceil((cart.totalPrice - cart.discount) * 0.04)}{" "}
                    бонусов
                  </span>
                </span>
                <button className="pay__btn">
                  <p>Оформить заказ</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Cart;
