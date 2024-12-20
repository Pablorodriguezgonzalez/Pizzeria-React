import { formatCurr } from "../utils/formatCurr";
import { FiShoppingCart } from "react-icons/fi";
import { PiEyesFill } from "react-icons/pi";
import { LuPizza } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CardPizza({
  pizzaId,
  name,
  price,
  ingredients,
  img,
  desc,
  showDesc,
  showViewMoreButton,
}) {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // Usamos el contexto

  const handleViewMore = () => {
    navigate(`/pizza/${pizzaId}`);
  };

  const handleAddToCart = () => {
    const pizza = { id: pizzaId, name, price, img }; // Estructura del producto
    addToCart(pizza); // Agrega al carrito
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full" src={img} alt={name} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Pizza {name}</h3>
        {showDesc && (
          <p className="text-gray-700 flex items-center justify-center space-x-2 mb-2">
            {desc}
          </p>
        )}
        <p className="text-gray-600 mb-2 text-lg text-center">Ingredientes:</p>
        <ul className="text-gray-700 flex items-center justify-center space-x-2 mb-2">
          <LuPizza className="text-yellow-500" />
          <span>{ingredients.join(", ")}</span>
        </ul>
        <p className="text-lg font-semibold mb-4 text-center">
          Precio: ${formatCurr(price)}
        </p>
        <div className="flex justify-between items-center">
          {showViewMoreButton && (
            <button
              onClick={handleViewMore}
              className="flex items-center px-3 py-1 border border-gray-500 rounded hover:bg-gray-200"
            >
              Ver Más &nbsp; <PiEyesFill className="h-5 w-5 text-black" />
            </button>
          )}
          <button
            onClick={handleAddToCart}
            className="flex items-center px-3 py-1 bg-black text-white border border-gray-500 rounded hover:bg-gray-700"
          >
            Añadir &nbsp;
            <FiShoppingCart className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
