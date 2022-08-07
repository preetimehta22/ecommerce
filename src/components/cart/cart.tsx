import { alpha, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import * as CS from "./cart.styled";

export const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<any>();
  useEffect((): void => {
    if (cartItems) {
      return;
    }
    if (typeof window !== undefined) {
      if (window.localStorage.getItem("cart")) {
        const localStorage = JSON.parse(
          window.localStorage.getItem("cart") || ""
        );
        setCartItems(localStorage);
      }
    }
  });
  const deleteFromCart = (id: any): void => {
    let copy = [...cartItems];
    copy = copy.filter((item) => item.id !== id);
    setCartItems(copy);
    window.localStorage.setItem("cart", JSON.stringify(copy));
  };
  return (
    <>
      <Header />
      <div className="container">
        <CS.CartWrapper>
          {cartItems?.map((item: any) => (
            <div>
              <img src={item.image} />
              <label>
                <p>{item.name}</p>
                <a onClick={(): void => deleteFromCart(item.id)}>Delete</a>
              </label>
            </div>
          ))}
        </CS.CartWrapper>
      </div>
      <Footer />
    </>
  );
};
