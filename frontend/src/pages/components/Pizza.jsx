import { useEffect, useState } from "react";
import axios from "axios";
import { formatCurr } from "../utils/formatCurr";
import { FiShoppingCart } from "react-icons/fi";
import { LuPizza } from "react-icons/lu";

function Pizza() {
  const [pizza, setPizza] = useState(null);
  const pizzaId = "p001";
  const apiUrl = `http://localhost:5000/api/pizzas/${pizzaId}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setPizza(response.data);
      })
      .catch((error) => {
        console.error("Error al recuperar pizzas desde la API:", error);
      });
  }, [apiUrl]);

  if (!pizza) {
    return <div className="text-center text-gray-700">Cargando pizza...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-3/4 max-w-lg">
        <img className="w-full" src={pizza.img} alt={pizza.name} />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Pizza {pizza.name}</h3>
          <p className="text-gray-700 flex items-center justify-center space-x-2 mb-2">
            {pizza.desc}
          </p>
          <p className="text-gray-600 mb-2 text-lg text-center">
            Ingredientes:
          </p>
          <ul className="text-gray-700 flex items-center justify-center space-x-2 mb-2">
            <LuPizza className="text-yellow-500" />
            <span>{pizza.ingredients.join(", ")}</span>
          </ul>
          <p className="text-lg font-semibold mb-4 text-center">
            Precio: ${formatCurr(pizza.price)}
          </p>
          <div className="flex justify-center items-center">
            <button className="flex items-center px-3 py-1 bg-black text-white border border-gray-500 rounded hover:bg-gray-700">
              Añadir &nbsp;
              <FiShoppingCart className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
