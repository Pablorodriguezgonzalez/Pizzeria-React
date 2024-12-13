import { useEffect, useState } from "react";
import axios from "axios";
import CardPizza from "./CardPizza";

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
        console.error("Error al recuperar la pizza desde la API:", error);
      });
  }, [apiUrl]);

  if (!pizza) {
    return <div className="text-center text-gray-700">Cargando pizza...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-3/4 max-w-lg">
        <CardPizza
          key={pizza.id}
          img={pizza.img}
          name={pizza.name}
          desc={pizza.desc}
          ingredients={pizza.ingredients}
          price={pizza.price}
          showDesc={true}
          showViewMoreButton={false}
        />
      </div>
    </div>
  );
}

export default Pizza;
