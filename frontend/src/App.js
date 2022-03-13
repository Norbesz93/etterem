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
import React,{useState} from "react";

function App() {
  const [ordered, setOrdered] = useState([])
  const [cartSum, setCartSum] = useState(0)
  const foodToCart = (name,spicy,meat,price)=>{
    let foodObj = {name: name, price: price, spicy: spicy, meat: meat}
    ordered.push(foodObj)
    setOrdered([...ordered])
    setCartSum(cartSum+1)
}
  return (
    <div className="App">
      <Navbar cartSum={cartSum} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="menu" element={<Menu foodToCart={foodToCart} cartSum={cartSum} setCartSum={setCartSum} />} />
        <Route path="order" element={<Order />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="cart" element={<Cart ordered={ordered}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
