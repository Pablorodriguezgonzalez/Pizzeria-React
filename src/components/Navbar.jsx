import { formatCurr } from "../pages/utils/formatCurr";
import { FiShoppingCart } from "react-icons/fi";
import { LuPizza } from "react-icons/lu";
import { GiPadlock, GiPadlockOpen } from "react-icons/gi";

function Navbar() {
  const total = 25000;
  const token = false;

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between text-white">
      <div className="flex items-center space-x-4">
        <div className="text-lg font-semibold">Pizzería Mamma Mia!</div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-500 rounded hover:bg-gray-700">
          <LuPizza className="h-5 w-5 text-yellow-500" />
          <span>Home</span>
        </button>
        {token ? (
          <>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-500 rounded hover:bg-gray-700">
              <GiPadlockOpen className="h-5 w-5 text-yellow-500" />
              <span>Profile</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-500 rounded hover:bg-gray-700">
              <GiPadlockOpen className="h-5 w-5 text-yellow-500" />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-500 rounded hover:bg-gray-700">
              <GiPadlock className="h-5 w-5 text-yellow-500" />
              <span>Login</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-500 rounded hover:bg-gray-700">
              <GiPadlock className="h-5 w-5 text-yellow-500" />
              <span>Register</span>
            </button>
          </>
        )}
      </div>
      <div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-sky-500 text-sky-500 rounded hover:bg-gray-700">
          <FiShoppingCart className="h-5 w-5 text-white" />
          <span>Total:&nbsp;</span>${formatCurr(total)}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
