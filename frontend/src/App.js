import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import AboutUs from "./Components/AboutUs";
import Order from "./Components/Order";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import React, { useState } from "react";

function App() {
  const [ordered, setOrdered] = useState([]);
  const [cartSum, setCartSum] = useState(0);
  const foodToCart = (name, spicy, meat, price) => {
    let piece = 1;
    let foodObj = {
      piece: piece,
      name: name,
      price: price,
      spicy: spicy,
      meat: meat,
    };
    if (ordered.length === 0) {
      ordered.push(foodObj);
      setOrdered([...ordered]);
    } else {
      let find = false;
      for (const food of ordered) {
        if (name === food.name && spicy === food.spicy && meat === food.meat) {
          find = true;
          console.log(name);
          console.log(food.name);
          console.log(food.piece);
          food.piece = food.piece + 1;
          food.price = food.price + price;
          if (find) {
            break;
          }
        }
      }
      if (!find) {
        console.log(find);
        ordered.push(foodObj);
        setOrdered([...ordered]);
      }
    }
    setCartSum(cartSum + 1);
  };
  const removeFromCart = (name, spicy, meat) => {
    let find = false;
    let counter = 0
    for (const food of ordered) {
      if (name === food.name && spicy === food.spicy && meat === food.meat) {
        find = true;
        console.log(name);
        console.log(food.name);
        console.log(food.piece);
        if(food.piece === 1){
          ordered.splice(counter, 1)
          setOrdered([...ordered]);
        }else{
        food.price = food.price - food.price/food.piece;
        food.piece = food.piece - 1;
        }
        if (find) {
          break;
        }
      }
      counter = counter + 1
    }
    setCartSum(cartSum - 1);
  };
  return (
    <div className="App">
      <Navbar cartSum={cartSum} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route
          path="menu"
          element={
            <Menu
              foodToCart={foodToCart}
              cartSum={cartSum}
              setCartSum={setCartSum}
            />
          }
        />
        <Route path="order" element={<Order />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route
          path="cart"
          element={<Cart ordered={ordered} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;