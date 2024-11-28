import Header from "./components/Header";
import CardPizza from "./components/CardPizza";
import { pizzas } from "../data//pizzas";

function Home() {
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
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
