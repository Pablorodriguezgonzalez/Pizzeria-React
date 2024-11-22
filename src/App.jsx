import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/components/Register";
import Login from "./pages/components/Login";

function App() {
  return (
    <>
      <Navbar />
      {/*<Home />*/}
      <Register />
      {/* <Login /> */}
      <Footer />
    </>
  );
}

export default App;
