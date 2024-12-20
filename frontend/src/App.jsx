import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import routes from "./routes/routes";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </CartProvider>
  );
}

export default App;
