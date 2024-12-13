import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/components/Register";
import Login from "./pages/components/Login";
import Cart from "./pages/components/Cart";
import Pizza from "./pages/components/Pizza";
import Profile from "./pages/components/Profile";
import NotFound from "./pages/components/NotFound";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/*    {<main className="flex-grow">{<Home />}</main>}
        {/* <Register /> */}
        {/* <Login /> */}
        {/* {<Cart />} */}
        {/*   {<Pizza />} */} */
        <Footer />
      </div>
    </>
  );
}

export default App;
