import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import AboutUs from "./Components/AboutUs";
import Order from "./Components/Order";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order" element={<Order />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
