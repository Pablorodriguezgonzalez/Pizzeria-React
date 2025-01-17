import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState({});

  // Register
  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        alert("Usuario registrado con éxito");
      } else {
        const error = await response.json();
        alert(`Error al registrar: ${error.error || "Error desconocido"}`);
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error al registrar: Ocurrió un problema inesperado.");
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem("token", data.token);
        alert("Usuario conectado");
      } else {
        alert(`Error al conectarse: ${data.error || "Error desconocido"}`);
      }
    } catch (error) {
      console.error("Error al conectarse:", error);
      alert("Error al conectarse: Ocurrió un problema inesperado.");
    }
  };

  // Get Profile
  const getprofile = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        console.log(data);
      } else {
        const error = await response.json();
        alert(
          `Error al obtener información del perfil: ${
            error.error || "Error desconocido"
          }`
        );
      }
    } catch (error) {
      console.error("Error al obtener información del perfil:", error);
      alert(
        "Error al obtener información del perfil: Ocurrió un problema inesperado."
      );
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    setEmail("");
  };

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        logout,
        register,
        email,
        login,
        getprofile,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
