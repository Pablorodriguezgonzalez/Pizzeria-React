import React, { useState } from "react";
import { formatCurr } from "../utils/formatCurr";
import { pizzaCart } from "../../data/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const aumentarCantidad = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-3/4 max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Carrito de Compras
        </h2>
        {cart.length === 0 ? (
          <p className="text-gray-700 text-center">Tu carrito está vacío.</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-md"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      ${formatCurr(item.price)} x {item.count}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded-l"
                      onClick={() => disminuirCantidad(item.id)}
                    >
                      -
                    </button>
                    <span className="px-4">{item.count}</span>
                    <button
                      className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded-r"
                      onClick={() => aumentarCantidad(item.id)}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold">
                Total:$
                {formatCurr(calcularTotal())}
              </h3>
            </div>
            <div className="text-center mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Pagar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
