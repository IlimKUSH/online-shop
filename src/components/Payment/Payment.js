import React from "react";
import useForm from "./useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Payment.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";

const CreditCardForm = () => {
  const navigate = useNavigate();

  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  return (
    <div>
      <div className="creditCard">
        <Cards
          cvc={values.cardSecurityCode}
          expiry={values.cardExpiration}
          focused={values.focus}
          name={values.cardName}
          number={values.cardNumber}
        />
      </div>
      <div className="container__pay">
        <div className="container__name">
          <Form>
            <Form.Group>
              <svg
                className="svg__pay"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.5 19C0.5 16.5147 2.51472 14.5 5 14.5H12C14.4853 14.5 16.5 16.5147 16.5 19V21C16.5 21.2761 16.2761 21.5 16 21.5C15.7239 21.5 15.5 21.2761 15.5 21V19C15.5 17.067 13.933 15.5 12 15.5H5C3.067 15.5 1.5 17.067 1.5 19V21C1.5 21.2761 1.27614 21.5 1 21.5C0.723858 21.5 0.5 21.2761 0.5 21V19Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 7C4 4.51472 6.01472 2.5 8.5 2.5C10.9853 2.5 13 4.51472 13 7C13 9.48528 10.9853 11.5 8.5 11.5C6.01472 11.5 4 9.48528 4 7ZM8.5 3.5C6.567 3.5 5 5.067 5 7C5 8.933 6.567 10.5 8.5 10.5C10.433 10.5 12 8.933 12 7C12 5.067 10.433 3.5 8.5 3.5Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 7.5C20.2761 7.5 20.5 7.72386 20.5 8V14C20.5 14.2761 20.2761 14.5 20 14.5C19.7239 14.5 19.5 14.2761 19.5 14V8C19.5 7.72386 19.7239 7.5 20 7.5Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.5 11C16.5 10.7239 16.7239 10.5 17 10.5H23C23.2761 10.5 23.5 10.7239 23.5 11C23.5 11.2761 23.2761 11.5 23 11.5H17C16.7239 11.5 16.5 11.2761 16.5 11Z"
                  fill="#414141"
                />
              </svg>
              <Form.Control type="text" placeholder="Ваше Имя"></Form.Control>
            </Form.Group>
            <Form.Group>
              <svg
                className="svg__pay"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.5 19C0.5 16.5147 2.51472 14.5 5 14.5H12C14.4853 14.5 16.5 16.5147 16.5 19V21C16.5 21.2761 16.2761 21.5 16 21.5C15.7239 21.5 15.5 21.2761 15.5 21V19C15.5 17.067 13.933 15.5 12 15.5H5C3.067 15.5 1.5 17.067 1.5 19V21C1.5 21.2761 1.27614 21.5 1 21.5C0.723858 21.5 0.5 21.2761 0.5 21V19Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 7C4 4.51472 6.01472 2.5 8.5 2.5C10.9853 2.5 13 4.51472 13 7C13 9.48528 10.9853 11.5 8.5 11.5C6.01472 11.5 4 9.48528 4 7ZM8.5 3.5C6.567 3.5 5 5.067 5 7C5 8.933 6.567 10.5 8.5 10.5C10.433 10.5 12 8.933 12 7C12 5.067 10.433 3.5 8.5 3.5Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.3536 8.64645C23.5488 8.84171 23.5488 9.15829 23.3536 9.35355L19.3536 13.3536C19.1583 13.5488 18.8417 13.5488 18.6464 13.3536L16.6464 11.3536C16.4512 11.1583 16.4512 10.8417 16.6464 10.6464C16.8417 10.4512 17.1583 10.4512 17.3536 10.6464L19 12.2929L22.6464 8.64645C22.8417 8.45118 23.1583 8.45118 23.3536 8.64645Z"
                  fill="#414141"
                />
              </svg>
              <Form.Control
                type="text"
                placeholder="Ваша Фамилия"></Form.Control>
            </Form.Group>
            <Form.Group>
              <svg
                className="svg__pay"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.75193 1.56588C7.89708 1.48294 8.07408 1.47802 8.22361 1.55279L15.9843 5.43312L22.7519 1.56588C22.9067 1.47745 23.0968 1.47808 23.251 1.56755C23.4051 1.65701 23.5 1.82177 23.5 2V18C23.5 18.1794 23.4039 18.3451 23.2481 18.4341L16.2481 22.4341C16.1029 22.5171 15.9259 22.522 15.7764 22.4472L8.01573 18.5669L1.24807 22.4341C1.09332 22.5226 0.903194 22.5219 0.749037 22.4325C0.594879 22.343 0.5 22.1782 0.5 22V6C0.5 5.82057 0.596143 5.6549 0.751931 5.56588L7.75193 1.56588ZM8.01573 2.56688L1.5 6.29016V21.1384L7.75193 17.5659C7.89708 17.4829 8.07408 17.478 8.22361 17.5528L15.9843 21.4331L22.5 17.7098V2.86159L16.2481 6.43412C16.1029 6.51706 15.9259 6.52198 15.7764 6.44721L8.01573 2.56688Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 1.5C8.27614 1.5 8.5 1.72386 8.5 2V18C8.5 18.2761 8.27614 18.5 8 18.5C7.72386 18.5 7.5 18.2761 7.5 18V2C7.5 1.72386 7.72386 1.5 8 1.5Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 5.5C16.2761 5.5 16.5 5.72386 16.5 6V22C16.5 22.2761 16.2761 22.5 16 22.5C15.7239 22.5 15.5 22.2761 15.5 22V6C15.5 5.72386 15.7239 5.5 16 5.5Z"
                  fill="#414141"
                />
              </svg>
              <Form.Control type="text" placeholder="Ваш Адрес"></Form.Control>
            </Form.Group>
          </Form>
        </div>
        <div className="box justify-content-center align-items-center">
          <div></div>
          <div className="formDiv">
            <Form>
              <Form.Group>
                <svg
                  className="svg__pay"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 3.5C4.17157 3.5 3.5 4.17157 3.5 5V19C3.5 19.8284 4.17157 20.5 5 20.5H19C19.8284 20.5 20.5 19.8284 20.5 19V13.66C20.5 13.3839 20.7239 13.16 21 13.16C21.2761 13.16 21.5 13.3839 21.5 13.66V19C21.5 20.3807 20.3807 21.5 19 21.5H5C3.61929 21.5 2.5 20.3807 2.5 19V5C2.5 3.61929 3.61929 2.5 5 2.5H10.34C10.6161 2.5 10.84 2.72386 10.84 3C10.84 3.27614 10.6161 3.5 10.34 3.5H5Z"
                    fill="#414141"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.6464 1.64645C17.8417 1.45118 18.1583 1.45118 18.3536 1.64645L22.3536 5.64645C22.5488 5.84171 22.5488 6.15829 22.3536 6.35355L12.3536 16.3536C12.2598 16.4473 12.1326 16.5 12 16.5H8C7.72386 16.5 7.5 16.2761 7.5 16V12C7.5 11.8674 7.55268 11.7402 7.64645 11.6464L17.6464 1.64645ZM8.5 12.2071V15.5H11.7929L21.2929 6L18 2.70711L8.5 12.2071Z"
                    fill="#414141"
                  />
                </svg>

                <Form.Control
                  type="text"
                  id="cardName"
                  data-testid="cardName"
                  name="cardName"
                  placeholder="Cardholder Name"
                  value={values.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cname}
                />
              </Form.Group>
              <Form.Group>
                <svg
                  className="svg__pay"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 3.5C4.17157 3.5 3.5 4.17157 3.5 5V19C3.5 19.8284 4.17157 20.5 5 20.5H19C19.8284 20.5 20.5 19.8284 20.5 19V13.66C20.5 13.3839 20.7239 13.16 21 13.16C21.2761 13.16 21.5 13.3839 21.5 13.66V19C21.5 20.3807 20.3807 21.5 19 21.5H5C3.61929 21.5 2.5 20.3807 2.5 19V5C2.5 3.61929 3.61929 2.5 5 2.5H10.34C10.6161 2.5 10.84 2.72386 10.84 3C10.84 3.27614 10.6161 3.5 10.34 3.5H5Z"
                    fill="#414141"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.6464 1.64645C17.8417 1.45118 18.1583 1.45118 18.3536 1.64645L22.3536 5.64645C22.5488 5.84171 22.5488 6.15829 22.3536 6.35355L12.3536 16.3536C12.2598 16.4473 12.1326 16.5 12 16.5H8C7.72386 16.5 7.5 16.2761 7.5 16V12C7.5 11.8674 7.55268 11.7402 7.64645 11.6464L17.6464 1.64645ZM8.5 12.2071V15.5H11.7929L21.2929 6L18 2.70711L8.5 12.2071Z"
                    fill="#414141"
                  />
                </svg>

                <Form.Control
                  type="number"
                  id="cardNumber"
                  data-testid="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={values.number}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cnumber}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group>
                    <svg
                      className="svg__pay"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 3.5C4.17157 3.5 3.5 4.17157 3.5 5V19C3.5 19.8284 4.17157 20.5 5 20.5H19C19.8284 20.5 20.5 19.8284 20.5 19V13.66C20.5 13.3839 20.7239 13.16 21 13.16C21.2761 13.16 21.5 13.3839 21.5 13.66V19C21.5 20.3807 20.3807 21.5 19 21.5H5C3.61929 21.5 2.5 20.3807 2.5 19V5C2.5 3.61929 3.61929 2.5 5 2.5H10.34C10.6161 2.5 10.84 2.72386 10.84 3C10.84 3.27614 10.6161 3.5 10.34 3.5H5Z"
                        fill="#414141"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.6464 1.64645C17.8417 1.45118 18.1583 1.45118 18.3536 1.64645L22.3536 5.64645C22.5488 5.84171 22.5488 6.15829 22.3536 6.35355L12.3536 16.3536C12.2598 16.4473 12.1326 16.5 12 16.5H8C7.72386 16.5 7.5 16.2761 7.5 16V12C7.5 11.8674 7.55268 11.7402 7.64645 11.6464L17.6464 1.64645ZM8.5 12.2071V15.5H11.7929L21.2929 6L18 2.70711L8.5 12.2071Z"
                        fill="#414141"
                      />
                    </svg>

                    <Form.Control
                      type="text"
                      id="cardExpiration"
                      data-testid="cardExpiration"
                      name="cardExpiration"
                      placeholder="Expiration Date"
                      value={values.expiration}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cexp}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <svg
                      className="svg__pay"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 3.5C4.17157 3.5 3.5 4.17157 3.5 5V19C3.5 19.8284 4.17157 20.5 5 20.5H19C19.8284 20.5 20.5 19.8284 20.5 19V13.66C20.5 13.3839 20.7239 13.16 21 13.16C21.2761 13.16 21.5 13.3839 21.5 13.66V19C21.5 20.3807 20.3807 21.5 19 21.5H5C3.61929 21.5 2.5 20.3807 2.5 19V5C2.5 3.61929 3.61929 2.5 5 2.5H10.34C10.6161 2.5 10.84 2.72386 10.84 3C10.84 3.27614 10.6161 3.5 10.34 3.5H5Z"
                        fill="#414141"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.6464 1.64645C17.8417 1.45118 18.1583 1.45118 18.3536 1.64645L22.3536 5.64645C22.5488 5.84171 22.5488 6.15829 22.3536 6.35355L12.3536 16.3536C12.2598 16.4473 12.1326 16.5 12 16.5H8C7.72386 16.5 7.5 16.2761 7.5 16V12C7.5 11.8674 7.55268 11.7402 7.64645 11.6464L17.6464 1.64645ZM8.5 12.2071V15.5H11.7929L21.2929 6L18 2.70711L8.5 12.2071Z"
                        fill="#414141"
                      />
                    </svg>

                    <Form.Control
                      type="number"
                      id="cardSecurityCode"
                      data-testid="cardSecurityCode"
                      name="cardSecurityCode"
                      placeholder="cvv"
                      value={values.cvv}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.ccvv}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}>
        <Button
          onClick={() => navigate("/")}
          onSubmit={handleSubmit}
          size={"block"}
          data-testid="validateButton"
          id="validateButton"
          type="submit">
          Заказать
        </Button>
      </div>
    </div>
  );
};

export default CreditCardForm;
