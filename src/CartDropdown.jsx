import React from "react";

import Button from "./Button";

import "./CartDropdown.css";

const CartDropdown = () => (
  <div className="cart-dropdown-container">
    <div className="cart-items" />
    <Button>CHECKOUT</Button>
  </div>
);

export default CartDropdown;
