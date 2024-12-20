import { Link } from "react-router-dom";
import { formatCurr } from "../utils/formatCurr";
import { FiShoppingCart } from "react-icons/fi";
import { LuPizza } from "react-icons/lu";
import { GiPadlock, GiPadlockOpen } from "react-icons/gi";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { calcularTotal } = useContext(CartContext); // Usamos el contexto para calcular el total
  const token = false;

  return (
    <nav className="bg-gray-800 p-4 flex flex-wrap items-center justify-between text-white">
      {/* Contenedor izquierdo */}
      <div className="flex items-center space-x-4">
        <div className="text-lg font-semibold">Pizzería Mamma Mia!</div>
        <Link
          to="/"
          className="flex items-center space-x-2 px-4 py-2 border border-gray-500 rounded hover:bg-gray-700"
        >
          <LuPizza className="h-5 w-5 text-yellow-500" />
          <span>Home</span>
        </Link>
        {token ? (
          <>
            <Link
              to="/profile"
              className="flex items-center space-x-2 px-4 py-2 border border-gray-500 rounded hover:bg-gray-700"
            >
              <GiPadlockOpen className="h-5 w-5 text-yellow-500" />
              <span>Profile</span>
            </Link>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-500 rounded hover:bg-gray-700">
              <GiPadlockOpen className="h-5 w-5 text-yellow-500" />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="flex items-center space-x-2 px-4 py-2 border border-gray-500 rounded hover:bg-gray-700"
            >
              <GiPadlock className="h-5 w-5 text-yellow-500" />
              <span>Login</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center space-x-2 px-4 py-2 border border-gray-500 rounded hover:bg-gray-700"
            >
              <GiPadlock className="h-5 w-5 text-yellow-500" />
              <span>Register</span>
            </Link>
          </>
        )}
      </div>
      {/* Contenedor derecho */}
      <div className="flex items-center mt-4 sm:mt-0">
        <Link
          to="/cart"
          className="flex items-center space-x-2 px-4 py-2 border border-sky-500 text-sky-500 rounded hover:bg-gray-700"
        >
          <FiShoppingCart className="h-5 w-5 text-white" />
          <span>Total:&nbsp;</span>${formatCurr(calcularTotal())}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
