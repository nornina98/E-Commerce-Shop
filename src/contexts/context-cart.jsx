import { createContext, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find(
    (cartItems) => cartItems.id === productToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItems) =>
      cartItems.id === productToAdd.id
        ? { ...cartItems, quantity: cartItems.quantity + 1 }
        : cartItems
    );
  }

  return [...cartItems, { ...productToAdd, quantitiy: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems(addItemToCart(cartItems, product));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
