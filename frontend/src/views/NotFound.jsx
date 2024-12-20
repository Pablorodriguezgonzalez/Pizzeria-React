import CajaImage from "../assets/img/Caja.jpg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <img
        src={CajaImage}
        alt="Caja"
        className="w-80 h-80 object-contain mb-6"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Página no encontrada
      </h2>
      <p className="text-gray-600 text-lg mb-6 text-center">
        Lo sentimos, la página que estás buscando no existe. Es posible que la
        URL sea incorrecta o la página haya sido movida.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}

export default NotFound;
