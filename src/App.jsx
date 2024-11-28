import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/components/Register";
import Login from "./pages/components/Login";
import Cart from "./pages/components/Cart";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{/*<Home />*/}</main>
        {/* <Register /> */}
        {/* <Login /> */}
        {<Cart />}
        <Footer />
      </div>
    </>
  );
}

export default App;
