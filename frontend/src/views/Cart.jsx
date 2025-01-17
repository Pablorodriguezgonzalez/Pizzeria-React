import React, { useContext, useState } from "react";
import { formatCurr } from "../utils/formatCurr";
import { CartContext } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, calcularTotal, clearCart } =
    useContext(CartContext);
  const { token } = useUser();
  const [successMessage, setSuccessMessage] = useState("");

  const handleCheckout = async () => {
    if (!token) {
      alert("Debes iniciar sesión para realizar la compra.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ items: cart }),
      });

      if (response.ok) {
        alert("¡Compra realizada con éxito!");
        setSuccessMessage("Gracias por tu compra");
        clearCart();
      } else {
        const error = await response.json();
        alert(`Error al realizar la compra: ${error.error}`);
      }
    } catch (error) {
      console.error("Error en la solicitud de checkout:", error);
      alert("Ocurrió un error inesperado. Intenta nuevamente.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-3/4 max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Carrito de Compras
        </h2>
        {successMessage && (
          <div className="bg-green-100 text-green-700 p-4 mb-4 rounded text-center">
            {successMessage}
          </div>
        )}
        {!successMessage && cart.length === 0 ? (
          <p className="text-gray-700 text-center">Tu carrito está vacío.</p>
        ) : (
          !successMessage && (
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
                        ${formatCurr(item.price)} x {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded-l"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded-r"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold">
                  Total: ${formatCurr(calcularTotal())}
                </h3>
              </div>
              <div className="text-center mt-4">
                <button
                  onClick={handleCheckout}
                  disabled={!token || cart.length === 0}
                  className={`text-white font-bold py-2 px-4 rounded ${
                    token && cart.length > 0
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gray-500 cursor-not-allowed"
                  }`}
                >
                  Pagar
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Cart;
