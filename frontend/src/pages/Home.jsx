import Header from "./components/Header";
import CardPizza from "./components/CardPizza";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/pizzas")
      .then((response) => {
        setPizzas(response.data);
      })
      .catch((error) => {
        console.error("Error al recuperar pizzas desde la API:", error);
      });
  }, []);

  return (
    <>
      <main class="container">
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              img={pizza.img}
              name={pizza.name}
              desc={pizza.desc}
              ingredients={pizza.ingredients}
              price={pizza.price}
              showDesc={false}
              showViewMoreButton={true}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
