import { useEffect } from "react";
import { useUser } from "../context/UserContext";

function Profile() {
  const { getprofile, userData, logout } = useUser();

  useEffect(() => {
    getprofile();
  }, []);

  const handleLogout = () => {
    logout();
    alert("Sesión cerrada.");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Perfil de Usuario
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Email: {userData?.email || "Cargando..."}
      </p>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Profile;
