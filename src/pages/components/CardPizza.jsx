import { formatCurr } from "../utils/formatCurr";
import { FiShoppingCart } from "react-icons/fi";
import { PiEyesFill } from "react-icons/pi";
import { LuPizza } from "react-icons/lu";

function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full" src={img} alt={name} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2 text-lg text-center">Ingredientes:</p>
        <ul className="text-gray-700 flex items-center justify-center space-x-2 mb-2">
          <LuPizza className="text-yellow-500" />
          <span>{ingredients.join(", ")}</span>
        </ul>
        <p className="text-lg font-semibold mb-4 text-center">
          Precio: ${formatCurr(price)}
        </p>
        <div className="flex justify-between items-center">
          <button className="flex items-center px-3 py-1 border border-gray-500 rounded hover:bg-gray-200">
            Ver Más &nbsp; <PiEyesFill className="h-5 w-5 text-black" />
          </button>
          <button className="flex items-center px-3 py-1 bg-black text-white border border-gray-500 rounded hover:bg-gray-700">
            Añadir &nbsp;
            <FiShoppingCart className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default CardPizza;
