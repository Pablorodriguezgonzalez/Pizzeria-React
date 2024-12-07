import HeaderImage from "../assets/img/Header.jpg";

function Header() {
  return (
    <>
      <header
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: `url(${HeaderImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">¡Pizzería Mamma Mia!</h1>
          <p className="text-lg font-semibold">
            ¡Tenemos las mejores pizzas que podrás encontrar!
          </p>
          <div className="mt-4 w-16 border-b-2 border-white"></div>
        </div>
      </header>
    </>
  );
}

export default Header;
