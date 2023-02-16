import { useContext } from "react";

import { CartContext } from "./contexts/CartContext";

import Button from "./Button";
import CartItem from "./CartItem";

import "./CartDropdown.css";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
