import React, { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar una pizza al carrito
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((item) => item.id === pizza.id);
      if (existingPizza) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...pizza, quantity: 1 }];
    });
  };

  // Eliminar una pizza del carrito
  const removeFromCart = (pizzaId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== pizzaId));
  };

  // Actualizar la cantidad de pizza
  const updateQuantity = (pizzaId, quantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === pizzaId
            ? { ...item, quantity: Math.max(quantity, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calcular el total
  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        calcularTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
