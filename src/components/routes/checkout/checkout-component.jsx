import { useContext } from "react";

import { CartContext } from "../../../contexts/context-cart";

import "./checkout-styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout Page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
              <br />
              <span>decrement</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
